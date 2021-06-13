import { UserInputError } from "apollo-server-errors";
import ImageKit from "imagekit";
import Club from "../models/club";
import utils from "./utils";

import dateScalar from "./datatypes";

const clubResolvers = {
  Date: dateScalar,

  Query: {
    clubs: async () => {
      const clubs = await Club.find();

      return clubs.map(utils.clubFromSchema);
    },

    club: async (_: any, { clubId }: any) => {
      const club = await Club.findOne({ _id: clubId });

      if (!club) return undefined;

      return utils.clubFromSchema(club);
    },

    findClubs: async (_: any, { searchString }: any) => {
      const regex = new RegExp(`.*${searchString}.*`, "i");
      const clubs = await Club.find({ clubName: regex });

      return clubs.map(utils.clubFromSchema);
    },
  },

  Mutation: {
    addClub: async (_: any, data: any) => {
      // TODO: accept files as inputs instead of URIs
      const {
        description,
        clubName,
        numMembers,
        themeColor,
        about,
        logoUri,
        backgroundUri,
      } = data.clubInfo;

      // TODO: Throw checking and saving logic below into a separate components and add tests
      const club = await Club.findOne({ clubName });
      if (club)
        throw new UserInputError(`Duplicated club name \"${clubName}\".`);

      if (description.length > 30)
        throw new UserInputError(
          "Shot description exceeds 30 characters limit"
        );

      const newClub = new Club({
        description,
        clubName,
        numMembers: numMembers || 0,
        themeColor: themeColor || "#1971C2",
        about: about || "",
        logoUri,
        backgroundUri,
        reviews: [],
      });

      const savedClub = await newClub.save();
      savedClub.id = savedClub._id;
      delete savedClub._id;
      return savedClub;
    },

    addReview: async (
      _: any,
      { review: { clubId, reviewer, rating, title, comment } }: any
    ) => {
      if (rating > 5 || rating < 1) throw new UserInputError("Invalid rating");

      const updated = await Club.updateOne(
        { _id: clubId },
        {
          $push: {
            reviews: {
              reviewer,
              rating,
              title,
              comment,
              commentTime: new Date(),
            },
          },
        }
      );

      return updated.ok;
    },

    updateLogo: async (_: any, { logo: { clubId, content } }: any) => {
      const imagekit = new ImageKit({
        publicKey: "public_kC3Isp/ICZSn3Glw68BA3tWFcRs=",
        privateKey:
          process.env.IMAGEKIT_PRIVATE_KEY || "PRIVATE KEY UNDEFINED IN .env",
        urlEndpoint: "https://ik.imagekit.io/gubbin/",
      });

      const filename: string = Date.now().toString();
      imagekit.upload(
        {
          file: content,
          fileName: filename,
          folder: "club_logo",
          tags: clubId.toString(),
        },
        async (error, result) => {
          if (error) throw error;
          else {
            const updated = await Club.updateOne(
              { _id: clubId },
              {
                logoUri: result?.url,
                logoUriThumbnail: result?.thumbnailUrl,
                logoFileId: result?.fileId,
              }
            );
          }
          return { uri: result?.url, thumbnailUri: result?.thumbnailUrl };
        }
      );
    },

    updateSocialMedia: async (_: any, { clubId, socialMedia }: any) => {
      let sets: any = {};
      for (const [k, v] of Object.entries(socialMedia)) {
        sets[`socialMedia.${k}`] = v;
      }

      const updated = await Club.updateOne({ _id: clubId }, { $set: sets });
      return {
        success: updated.ok,
      };
    },
  },

  Club: {
    rating: (parent: any) => {
      return utils.avgRating(parent.reviews);
    },

    questions: async (parent: any) => {
      const result = await Club.findOne({ _id: parent.id })
        .populate("questions")
        .exec();
      return result.questions.map(utils.questionFromSchema);
    },
  },
};

export default clubResolvers;
