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
        clubname: "Skiing",
        description: "A place to ski",
        about: "A very long description\n for skiing",
      },
    });

    expect(addClub.errors).toBeUndefined();
    const clubid = addClub.data?.addClub.id;

    console.log(JSON.stringify(addClub.data));

    const club = await server.executeOperation({
      query: GET_CLUB,
      variables: { clubid: clubid },
    });

    console.log(JSON.stringify(club.data));

    expect(club.errors).toBeUndefined();
    expect(club.data?.club.clubname).toBe("Skiing");
    expect(club.data?.club.description).toBe("A place to ski");
    expect(club.data?.club.about).toBe("A very long description\n for skiing");
  });

  it("can query multiple clubs", async () => {
    await server.executeOperation({
      query: ADD_CLUB,
      variables: { clubname: "Skiing", description: "A place to ski" },
    });

    await server.executeOperation({
      query: ADD_CLUB,
      variables: { clubname: "Hiking", description: "A place to hike" },
    });

    const clubs = await server.executeOperation({
      query: GET_CLUBS,
    });

    expect(clubs.errors).toBeUndefined();
    expect(clubs.data?.clubs.length).toBe(2);
    expect(clubs.data?.clubs[0].clubname).toBe("Skiing");
    expect(clubs.data?.clubs[0].description).toBe("A place to ski");
    expect(clubs.data?.clubs[1].clubname).toBe("Hiking");
    expect(clubs.data?.clubs[1].description).toBe("A place to hike");
  });

  it("cannot add the same slub repetitively", async () => {
    const first = await server.executeOperation({
      query: ADD_CLUB,
      variables: { clubname: "Skiing", description: "A place to ski" },
    });

    const second = await server.executeOperation({
      query: ADD_CLUB,
      variables: { clubname: "Skiing", description: "Another place to ski" },
    });

    expect(first.errors).toBeUndefined();
    expect(second.errors).toEqual(expect.any(Array));
  });
});

describe("can add and query reviews correctly", function () {
  let skiid: any;
  let hikeid: any;

  beforeAll(async () => {
    await db.collection("clubs").deleteMany({});

    skiid = (
      await server.executeOperation({
        query: ADD_CLUB,
        variables: { clubname: "Skiing", description: "A place to ski" },
      })
    ).data?.addClub.id;

    hikeid = (
      await server.executeOperation({
        query: ADD_CLUB,
        variables: { clubname: "Hiking", description: "A place to hike" },
      })
    ).data?.addClub.id;
  });

  it("can add one review", async () => {
    const addReview = await server.executeOperation({
      query: ADD_REVIEW,
      variables: { clubid: skiid, reviewer: "Greg", rating: 3, comment: "OK" },
    });

    expect(addReview.errors).toBeUndefined();
  });

  it("can query all reviews and the rating of a club", async () => {
    await server.executeOperation({
      query: ADD_REVIEW,
      variables: {
        clubid: skiid,
        reviewer: "Vuuuton",
        rating: 4,
        comment: "GOOD",
      },
    });

    const reviews = await server.executeOperation({
      query: GET_CLUB,
      variables: { clubid: skiid },
    });

    expect(reviews.errors).toBeUndefined();
    expect(reviews.data?.club.reviews.length).toBe(2);
    expect(reviews.data?.club.reviews[1].rating).toBe(4);
    expect(reviews.data?.club.rating).toBe(3.5);
  });
});
