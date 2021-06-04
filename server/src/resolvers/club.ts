import { assertValidExecutionArguments } from "graphql/execution/execute";
import Club from "../models/club";

const clubResolvers = {
  Query: {
    clubs: async () => {
      const clubs = await Club.find();
      return clubs.map(({ clubname, reviews, description, _id }: any) => ({
        clubname,
        id: _id,
        description,
        reviews,
      }));
    },

    club: async (_: any, { clubname }: any) => {
      const [club] = await Club.find({ clubname });

      return {
        clubname: club.clubname,
        id: club._id,
        description: club.description,
        reviews: club.reviews,
      };
    },
  },

  Mutation: {
    addClub: async (
      parent: any,
      { clubInfo: { clubname, description } }: any,
      context: any
    ) => {
      const newClub = new Club({ clubname, description });
      const { _id, clubname: newClubname } = await newClub.save();

      return {
        club: {
          id: _id,
          clubname: newClubname,
          description,
          reviews: [],
        },
      };
    },

    addReview: async (
      parent: any,
      { review: { clubid, reviewer, rating, comment } }: any,
      context: any
    ) => {
      const updated = await Club.updateOne(
        { _id: clubid },
        { $push: { reviews: { reviewer, rating, comment } } }
      );

      //
      return updated.ok;
    },
  },

  Club: {
    rating: (parent: any) => {
      const average = (arr: any[]) =>
        arr.reduce((p: any, c: any) => p + c, 0) / arr.length;

      if (!parent.reviews || parent.reviews.length == 0) return undefined;

      const ratings = parent.reviews.map((review: any) => review.rating);
      const averageRating = average(ratings);
      const rounded = (Math.round(averageRating * 10) / 10).toFixed(1);

      return rounded;
    },
  },
};

export default clubResolvers;
