import { UserInputError } from "apollo-server-errors";
import Club from "../models/club";
import avgRating from "./utils";

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
      const club = await Club.findOne({ clubname });

      if (!club) return undefined;

      return {
        clubname: club.clubname,
        id: club._id,
        description: club.description,
        reviews: club.reviews,
      };
    },
  },

  Mutation: {
    addClub: async (_: any, { clubInfo: { clubname, description } }: any) => {
      const club = await Club.findOne({ clubname });
      if (club)
        throw new UserInputError(`Duplicated club name \"${clubname}\".`);

      const newClub = new Club({ clubname, description, reviews: [] });
      const { _id, clubname: newClubname } = await newClub.save();

      return {
        id: _id,
        clubname: newClubname,
        description,
        reviews: [],
      };
    },

    addReview: async (
      _: any,
      { review: { clubid, reviewer, rating, comment } }: any
    ) => {
      if (rating > 5 || rating < 1) throw new UserInputError("Invalid rating");

      const updated = await Club.updateOne(
        { _id: clubid },
        { $push: { reviews: { reviewer, rating, comment } } }
      );

      return updated.ok;
    },
  },

  Club: {
    rating: (parent: any) => {
      return avgRating(parent.reviews);
    },
  },
};

export default clubResolvers;
