import { ApolloServer } from "apollo-server";

import dotenv from "dotenv";

import schema from "../../src/schema";
import resolvers from "../../src/resolvers";
import connectDB from "../../src/connect";
import { ADD_CLUB, GET_CLUB, GET_CLUBS, ADD_REVIEW } from "./queries";

dotenv.config();
// In-memory MongoDB using jest-mongodb
const db = connectDB(process.env.MONGO_URL);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
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

describe("can add and query clubs correctly", function () {
  beforeEach(async () => {
    await removeAllCollections();
  });

  it("can add and query one club", async () => {
    const addClub = await server.executeOperation({
      query: ADD_CLUB,
      variables: {
        clubName: "Skiing",
        description: "A place to ski",
        about: "A very long description\n for skiing",
      },
    });

    expect(addClub.errors).toBeUndefined();
    const clubId = addClub.data?.addClub.id;

    const club = await server.executeOperation({
      query: GET_CLUB,
      variables: { clubId: clubId },
    });

    expect(club.errors).toBeUndefined();
    expect(club.data?.club.clubName).toBe("Skiing");
    expect(club.data?.club.description).toBe("A place to ski");
    expect(club.data?.club.about).toBe("A very long description\n for skiing");
  });

  it("can query multiple clubs", async () => {
    await server.executeOperation({
      query: ADD_CLUB,
      variables: { clubName: "Skiing", description: "A place to ski" },
    });

    await server.executeOperation({
      query: ADD_CLUB,
      variables: { clubName: "Hiking", description: "A place to hike" },
    });

    const clubs = await server.executeOperation({
      query: GET_CLUBS,
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
      query: ADD_CLUB,
      variables: { clubName: "Skiing", description: "A place to ski" },
    });

    const second = await server.executeOperation({
      query: ADD_CLUB,
      variables: { clubName: "Skiing", description: "Another place to ski" },
    });

    expect(first.errors).toBeUndefined();
    expect(second.errors).toEqual(expect.any(Array));
  });

  it("cannot add club with description more than 30 characters", async () => {
    const addClub = await server.executeOperation({
      query: ADD_CLUB,
      variables: {
        clubName: "Skiing",
        description: "this is too longgggggggggggggggggggggggggg",
        about: "this is short",
      },
    });

    expect(addClub.errors).toEqual(expect.any(Array));
  });
});

describe("can add and query reviews correctly", function () {
  let skiid: any;
  let hikeid: any;

  beforeEach(async () => {
    await removeAllCollections();

    skiid = (
      await server.executeOperation({
        query: ADD_CLUB,
        variables: { clubName: "Skiing", description: "A place to ski" },
      })
    ).data?.addClub.id;

    hikeid = (
      await server.executeOperation({
        query: ADD_CLUB,
        variables: { clubName: "Hiking", description: "A place to hike" },
      })
    ).data?.addClub.id;
  });

  it("can add one review", async () => {
    const addReview = await server.executeOperation({
      query: ADD_REVIEW,
      variables: {
        clubId: skiid,
        reviewer: "Greg",
        rating: 3,
        title: "Good",
        comment: "OK",
        commentTime: Date.now(),
      },
    });

    expect(addReview.errors).toBeUndefined();
  });

  it("can query all reviews and the rating of a club", async () => {
    await server.executeOperation({
      query: ADD_REVIEW,
      variables: {
        clubId: skiid,
        reviewer: "Greg",
        rating: 3,
        title: "So so",
        comment: "OK",
      },
    });

    await server.executeOperation({
      query: ADD_REVIEW,
      variables: {
        clubId: skiid,
        reviewer: "Vuuuton",
        rating: 4,
        title: "I am Vuuuton",
        comment: "GOOD",
      },
    });

    const reviews = await server.executeOperation({
      query: GET_CLUB,
      variables: { clubId: skiid },
    });

    expect(reviews.errors).toBeUndefined();
    expect(reviews.data?.club.reviews.length).toBe(2);
    expect(reviews.data?.club.reviews[1].rating).toBe(4);
    expect(reviews.data?.club.reviews[0].title).toBe("So so");
    expect(reviews.data?.club.rating).toBe(3.5);
  });

  it("can add and query comment time correctly", async () => {
    const commentTime = Date.now();

    await server.executeOperation({
      query: ADD_REVIEW,
      variables: {
        clubId: skiid,
        reviewer: "Greg",
        rating: 3,
        title: "Greg here",
        comment: "GOOD",
        commentTime,
      },
    });

    const reviews = await server.executeOperation({
      query: GET_CLUB,
      variables: { clubId: skiid },
    });

    expect(reviews.errors).toBeUndefined();
    expect(reviews.data?.club.reviews[0].commentTime).toBe(commentTime);
  });

  it("cannot submit without title", async () => {
    const commentTime = Date.now();

    const addReview = await server.executeOperation({
      query: ADD_REVIEW,
      variables: {
        clubId: skiid,
        reviewer: "Greg",
        rating: 3,
        comment: "GOOD",
        commentTime,
      },
    });

    expect(addReview.errors).toBeDefined();
  });
});
