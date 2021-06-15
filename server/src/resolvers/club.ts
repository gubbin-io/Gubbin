import { UserInputError } from "apollo-server-errors";
import ImageKit from "imagekit";
import Club from "../models/club";
import utils from "./utils";

import dateScalar from "./datatypes";
import { util } from "prettier";

const clubResolvers = {
  Date: dateScalar,

  Query: {
    clubs: async (parent: any, _: any, context: any) => {
      const clubs = await Club.find();

      return clubs.map((schema: any) =>
        utils.clubFromSchema(schema, context.user?.userId)
      );
    },

    club: async (_: any, { clubId }: any, context: any) => {
      const club = await Club.findOne({ _id: clubId });

      if (!club) return undefined;

      return utils.clubFromSchema(club, context.user?.userId);
    },

    findClubs: async (_: any, { searchString }: any, context: any) => {
      const regex = new RegExp(`.*${searchString}.*`, "i");
      const clubs = await Club.find({ clubName: regex });

      return clubs.map((schema: any) =>
        utils.clubFromSchema(schema, context.user?.userId)
      );
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

    updateLogo: async (_: any, { logo: { clubId, content } }: any) => {
      const imagekit = utils.getImageKit();

      const result = await imagekit.upload({
        file: content,
        fileName: Date.now().toString(),
        folder: "club_logo",
        tags: clubId.toString(),
      });

      const prev = await Club.findOneAndUpdate(
        { _id: clubId },
        {
          logoUri: result?.url,
          logoFileId: result?.fileId,
        }
      );

      imagekit.deleteFile(prev.logoFileId);

      return { uri: result?.url };
    },

    updateBackground: async (
      _: any,
      { background: { clubId, content } }: any
    ) => {
      const imagekit = utils.getImageKit();

      const result = await imagekit.upload({
        file: content,
        fileName: Date.now().toString(),
        folder: "club_background_photo",
        tags: clubId.toString(),
      });

      const prev = await Club.findOneAndUpdate(
        { _id: clubId },
        {
          backgroundUri: result?.url,
          backgroundFileId: result?.fileId,
        }
      );

      imagekit.deleteFile(prev.backgroundFileId);

      return { uri: result?.url };
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

    updateBasicInfo: async (_: any, { clubId, basicInfoInput }: any) => {
      let sets: any = {};
      for (const [k, v] of Object.entries(basicInfoInput)) {
        if (v) sets[`${k}`] = v;
      }

      const updated = await Club.updateOne({ _id: clubId }, { $set: sets });
      return {
        success: updated.ok,
      };
    },
  },

  Club: {
    rating: async (parent: any) => {
      const club = await Club.findOne(parent.id).populate("reviews").exec();
      return utils.avgRating(club.reviews);
    },

    questions: async (parent: any) => {
      const result = await Club.findOne({ _id: parent.id })
        .populate("questions")
        .exec();
      return result.questions
        .map(utils.questionFromSchema)
        .sort(utils.questionCompareFunc);
    },

    reviews: async (parent: any) => {
      const result = await Club.findOne({ _id: parent.id })
        .populate("reviews")
        .exec();

      return result.reviews
        .map(utils.reviewFromSchema)
        .sort(utils.reviewCompareFunc);
    },
  },
};

export default clubResolvers;
