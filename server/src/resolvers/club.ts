import { UserInputError } from "apollo-server-errors";
import Club from "../models/club";
import avgRating from "./utils";

const clubResolvers = {
  Query: {
    clubs: async () => {
      const clubs = await Club.find();

      return clubs.map(
        ({
          clubname,
          reviews,
          description,
          about,
          logo_uri,
          background_uri,
          _id,
        }: any) => ({
          clubname,
          id: _id,
          description,
          about,
          logo_uri,
          background_uri,
          reviews,
        })
      );
    },

    club: async (_: any, { clubid }: any) => {
      const club = await Club.findOne({ _id: clubid });

      if (!club) return undefined;

      return {
        clubname: club.clubname,
        id: club._id,
        description: club.description,
        about: club.about,
        reviews: club.reviews,
        logo_uri: club.logo_uri,
        background_uri: club.background_uri,
      };
    },
  },

  Mutation: {
    addClub: async (
      _: any,
      { clubInfo: { clubname, description, about } }: any
    ) => {
      const club = await Club.findOne({ clubname });
      if (club)
        throw new UserInputError(`Duplicated club name \"${clubname}\".`);

      if (description.length > 30)
        throw new UserInputError(
          "Shot description exceeds 30 characters limit"
        );

      const newClub = new Club({ clubname, description, about, reviews: [] });
      const { _id, clubname: newClubname } = await newClub.save();

      return {
        id: _id,
        clubname: newClubname,
        description,
        about,
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
