import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import mongoose from "mongoose";

import schema from "../src/schema";
import resolvers from "../src/resolvers";
import connectDB from "../src/connect";

dotenv.config();
connectDB(process.env.TEST_DB_URI);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

describe("add and query clubs correctly", function () {
  it("can add club", async () => {
    await server.executeOperation({
      query: "addClub",
      variables: {
        clubInfo: {
          clubname: "Skiing",
          description: "Snowy sport",
        },
      },
    });

    // const result = await server.executeOperation({
    //   query: "club",
    //   variables: {
    //     clubname: "Skiing",
    //   },
    // });

    // console.log(Object.keys(result));
    // expect(result.data?.club.description).toBe("Snowy sport");
  });

  //   beforeAll(async () => {
  //     await removeAllCollections();
  //   });

  //   afterEach(async () => {
  //     await removeAllCollections();
  //   });

  //   afterAll(async () => {
  //     await dropAllCollections();
  //     await mongoose.connection.close();
  //   });
});

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany({});
  }
}

async function dropAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
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

// describe("insert", () => {
//   let db: any;

//   beforeAll(async () => {
//     dotenv.config();
//     const mongoURI: any = process.env.DB_URI;
//     mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     const db = mongoose.connection;
//     db.on("error", console.error.bind(console, "connection error:"));
//   });

//   afterAll(async () => {
//     await mongoose.disconnect();
//     done();
//   });

//   it("should insert a club into collection", async () => {
//     const newClub = new Club({ clubname: "Yoga", description: "Yoga club" });
//     await newClub.save();

//     const insertedClub = await Club.findOne({ clubname: "Yoga" });
//     expect(insertedClub).toEqual(newClub);
//   });
// });
