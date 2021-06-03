import { assertValidExecutionArguments } from "graphql/execution/execute";
import Club from "../models/club";

const clubResolvers = {
  Query: {
    clubs: async () => {
      const clubs = await Club.find();
      return clubs.map(({ clubname, reviews, _id }: any) => ({
        clubname,
        id: _id,
        reviews,
      }));
    },

    club: async (_: any, { clubname }: any) => {
      const [club] = await Club.find({ clubname });

      return {
        clubname: club.clubname,
        id: club._id,
        reviews: club.reviews,
      };
    },
  },

  Mutation: {
    addClub: async (
      parent: any,
      { clubInfo: { clubname } }: any,
      context: any
    ) => {
      const newClub = new Club({ clubname });
      const { _id, clubname: newClubname } = await newClub.save();

      return {
        club: {
          id: _id,
          clubname: newClubname,
          reviews: [],
        },
      };
    },
  },

  Club: {
    rating: (parent: any) => {
      const average = (arr: any[]) =>
        arr.reduce((p: any, c: any) => p + c, 0) / arr.length;

      if (!parent.reviews || parent.reviews.length == 0) return undefined;

      const ratingss = parent.reviews.map((review: any) => review.rating);
      const result = average(ratingss);
      return result;
    },
  },
};

export default clubResolvers;
