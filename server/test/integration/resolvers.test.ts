import { ApolloServer } from "apollo-server";
import fs from "fs";
import dotenv from "dotenv";

import schema from "../../src/schema";
import resolvers from "../../src/resolvers";
import connectDB from "../../src/connect";
import queries from "./queries";

dotenv.config();
// In-memory MongoDB using jest-mongodb
const db = connectDB(process.env.MONGO_URL);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  uploads: false,
});

async function removeAllCollections() {
  for (const [_, document] of Object.entries(db.collections)) {
    await document.deleteMany({});
  }
}

async function dropAllCollections() {
  for (const [_, document] of Object.entries(db.collections)) {
    try {
      await document.drop();
    } catch (error) {
      // Sometimes this error happens, but you can safely ignore it
      if (error.message === "ns not found") return;
      // This error occurs when you use it.todo. You can
      // safely ignore this error too
      if (error.message.includes("a background operation is currently running"))
        return;
      console.log(error.message);
    }
  }
}

afterAll(async () => {
  await dropAllCollections();
  db.close();
});

describe("Clubs", function () {
  beforeEach(async () => {
    await removeAllCollections();
  });

  it("can add and query one club", async () => {
    const addClub = await server.executeOperation({
      query: queries.ADD_CLUB,
      variables: {
        clubName: "Skiing",
        description: "A place to ski",
        about: "A very long description\n for skiing",
      },
    });

    expect(addClub.errors).toBeUndefined();
    const clubId = addClub.data?.addClub.id;

    const club = await server.executeOperation({
      query: queries.GET_CLUB,
      variables: { clubId: clubId },
    });

    expect(club.errors).toBeUndefined();
    expect(club.data?.club.clubName).toBe("Skiing");
    expect(club.data?.club.description).toBe("A place to ski");
    expect(club.data?.club.about).toBe("A very long description\n for skiing");
  });

  it("can query multiple clubs", async () => {
    await server.executeOperation({
      query: queries.ADD_CLUB,
      variables: { clubName: "Skiing", description: "A place to ski" },
    });

    await server.executeOperation({
      query: queries.ADD_CLUB,
      variables: { clubName: "Hiking", description: "A place to hike" },
    });

    const clubs = await server.executeOperation({
      query: queries.GET_CLUBS,
    });

    expect(clubs.errors).toBeUndefined();
    expect(clubs.data?.clubs.length).toBe(2);
    expect(clubs.data?.clubs[0].clubName).toBe("Skiing");
    expect(clubs.data?.clubs[0].description).toBe("A place to ski");
    expect(clubs.data?.clubs[1].clubName).toBe("Hiking");
    expect(clubs.data?.clubs[1].description).toBe("A place to hike");
  });

  it("cannot add the same slub repetitively", async () => {
    const first = await server.executeOperation({
      query: queries.ADD_CLUB,
      variables: { clubName: "Skiing", description: "A place to ski" },
    });

    const second = await server.executeOperation({
      query: queries.ADD_CLUB,
      variables: { clubName: "Skiing", description: "Another place to ski" },
    });

    expect(first.errors).toBeUndefined();
    expect(second.errors).toEqual(expect.any(Array));
  });

  it("cannot add club with description more than 30 characters", async () => {
    const addClub = await server.executeOperation({
      query: queries.ADD_CLUB,
      variables: {
        clubName: "Skiing",
        description: "this is too longgggggggggggggggggggggggggg",
        about: "this is short",
      },
    });

    expect(addClub.errors).toEqual(expect.any(Array));
  });
});

describe("Reviews", function () {
  let skiid: any;
  let hikeid: any;

  beforeEach(async () => {
    await removeAllCollections();

    skiid = (
      await server.executeOperation({
        query: queries.ADD_CLUB,
        variables: { clubName: "Skiing", description: "A place to ski" },
      })
    ).data?.addClub.id;

    hikeid = (
      await server.executeOperation({
        query: queries.ADD_CLUB,
        variables: { clubName: "Hiking", description: "A place to hike" },
      })
    ).data?.addClub.id;
  });

  it("can add one review", async () => {
    const addReview = await server.executeOperation({
      query: queries.ADD_REVIEW,
      variables: {
        clubId: skiid,
        reviewer: "Greg",
        rating: 3,
        title: "Good",
        comment: "OK",
      },
    });

    expect(addReview.errors).toBeUndefined();
  });

  it("can query all reviews and the rating of a club", async () => {
    await server.executeOperation({
      query: queries.ADD_REVIEW,
      variables: {
        clubId: skiid,
        reviewer: "Greg",
        rating: 3,
        title: "So so",
        comment: "OK",
      },
    });

    await server.executeOperation({
      query: queries.ADD_REVIEW,
      variables: {
        clubId: skiid,
        reviewer: "Vuuuton",
        rating: 4,
        title: "I am Vuuuton",
        comment: "GOOD",
      },
    });

    const reviews = await server.executeOperation({
      query: queries.GET_CLUB,
      variables: { clubId: skiid },
    });

    expect(reviews.errors).toBeUndefined();
    expect(reviews.data?.club.reviews.length).toBe(2);
    expect(reviews.data?.club.reviews[1].rating).toBe(4);
    expect(reviews.data?.club.reviews[0].title).toBe("So so");
    expect(reviews.data?.club.rating).toBe(3.5);
  });

  it("can add and query comment time correctly", async () => {
    await server.executeOperation({
      query: queries.ADD_REVIEW,
      variables: {
        clubId: skiid,
        reviewer: "Greg",
        rating: 3,
        title: "Greg here",
        comment: "GOOD",
      },
    });

    const reviews = await server.executeOperation({
      query: queries.GET_CLUB,
      variables: { clubId: skiid },
    });

    expect(reviews.errors).toBeUndefined();
  });
});

describe("Q&A", function () {
  let skiid: any;
  let hikeid: any;

  beforeEach(async () => {
    await removeAllCollections();

    skiid = (
      await server.executeOperation({
        query: queries.ADD_CLUB,
        variables: { clubName: "Skiing", description: "A place to ski" },
      })
    ).data?.addClub.id;

    hikeid = (
      await server.executeOperation({
        query: queries.ADD_CLUB,
        variables: { clubName: "Hiking", description: "A place to hike" },
      })
    ).data?.addClub.id;
  });

  it("can post one question", async () => {
    const postQuestion = await server.executeOperation({
      query: queries.POST_QUESTION,
      variables: {
        clubId: skiid,
        title: "Ski question",
        body: "OK",
      },
    });

    expect(postQuestion.errors).toBeUndefined();
  });

  it("cannot post question with empty title", async () => {
    const postQuestion = await server.executeOperation({
      query: queries.POST_QUESTION,
      variables: {
        clubId: skiid,
        body: "OK",
      },
    });

    expect(postQuestion.errors).toBeDefined();
  });

  it("can query all questions a club", async () => {
    const q1 = await server.executeOperation({
      query: queries.POST_QUESTION,
      variables: {
        clubId: skiid,
        title: "Ski question1",
        body: "OK1",
      },
    });

    const q2 = await server.executeOperation({
      query: queries.POST_QUESTION,
      variables: {
        clubId: skiid,
        title: "Ski question2",
        body: "OK2",
      },
    });

    const club = await server.executeOperation({
      query: queries.GET_CLUB,
      variables: { clubId: skiid },
    });

    expect(club.errors).toBeUndefined();
    expect(club.data?.club.questions.length).toBe(2);
    expect(club.data?.club.questions[0].questionId).toBe(q1.data?.postQuestion);
    expect(club.data?.club.questions[0].title).toBe("Ski question1");
    expect(club.data?.club.questions[0].body).toBe("OK1");
    expect(club.data?.club.questions[1].questionId).toBe(q2.data?.postQuestion);
    expect(club.data?.club.questions[1].title).toBe("Ski question2");
    expect(club.data?.club.questions[1].body).toBe("OK2");
  });

  it("can post and query answer to a question", async () => {
    const q1 = await server.executeOperation({
      query: queries.POST_QUESTION,
      variables: {
        clubId: skiid,
        title: "Ski question1",
        body: "OK1",
      },
    });

    const a1 = await server.executeOperation({
      query: queries.POST_ANSWER,
      variables: {
        questionId: q1.data?.postQuestion,
        answer: "Ski answer1",
      },
    });

    const club = await server.executeOperation({
      query: queries.GET_CLUB,
      variables: { clubId: skiid },
    });

    expect(club.errors).toBeUndefined();
    expect(club.data?.club.questions[0].answer).toBe("Ski answer1");
  });
});
