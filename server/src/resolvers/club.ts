import { UserInputError } from "apollo-server-errors";
import Club from "../models/club";
import avgRating from "./utils";

const clubResolvers = {
  Query: {
    clubs: async () => {
      const clubs = await Club.find();

      return clubs.map(
        ({
          clubName,
          reviews,
          description,
          about,
          logoUri,
          backgroundUri,
          _id,
        }: any) => ({
          clubName,
          id: _id,
          description,
          about,
          logoUri,
          backgroundUri,
          reviews,
        })
      );
    },

    club: async (_: any, { clubId }: any) => {
      const club = await Club.findOne({ _id: clubId });

      if (!club) return undefined;

      return {
        clubName: club.clubName,
        id: club._id,
        description: club.description,
        about: club.about,
        reviews: club.reviews.map(
          ({ _id, reviewer, rating, comment }: any) => ({
            id: _id,
            reviewer,
            rating,
            comment,
          })
        ),
        logoUri: club.logoUri,
        backgroundUri: club.backgroundUri,
      };
    },
  },

  Mutation: {
    addClub: async (
      _: any,
      { clubInfo: { clubName, description, about } }: any
    ) => {
      const club = await Club.findOne({ clubName });
      if (club)
        throw new UserInputError(`Duplicated club name \"${clubName}\".`);

      if (description.length > 30)
        throw new UserInputError(
          "Shot description exceeds 30 characters limit"
        );

      const newClub = new Club({ clubName, description, about, reviews: [] });
      const { _id, clubName: newClubname } = await newClub.save();

      return {
        id: _id,
        clubName: newClubname,
        description,
        about,
        reviews: [],
      };
    },

    addReview: async (
      _: any,
      { review: { clubId, reviewer, rating, comment } }: any
    ) => {
      if (rating > 5 || rating < 1) throw new UserInputError("Invalid rating");

      const updated = await Club.updateOne(
        { _id: clubId },
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
