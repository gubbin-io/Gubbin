import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserInputError } from "apollo-server-errors";
import utils from "./utils";

const userResolvers = {
  Query: {
    currentUser: async (parent: any, _: any, { user }: any) => {
      if (!user) return undefined;
      const curUser = await User.findOne({ _id: user.userId });
      if (!curUser) return undefined;

      return {
        userId: curUser._id,
        userName: curUser.userName,
      };
    },
  },

  Mutation: {
    register: async (_: any, { userInfo: { userName, password } }: any) => {
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(password, salt);

      const user = await User.findOne({ userName });
      if (user) throw new UserInputError("Duplicated username");

      const newUser = new User({
        userName,
        password: hashPass,
        memberClubs: [],
        organizerClubs: [],
      });
      const { _id } = await newUser.save();

      return {
        userId: _id,
      };
    },

    login: async (_: any, { userInfo: { userName, password } }: any) => {
      const user = await User.findOne({ userName });
      if (!user) throw new UserInputError("Invalid username");

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return new UserInputError("Invalid Credentials");

      // TODO: user SECRET from .env
      return {
        token: jwt.sign({ userId: user._id }, "SECRET", {
          algorithm: "HS256",
          expiresIn: "1y",
        }),
      };
    },

    addMemberClub: async (_: any, { userClub: { clubId, userId } }: any) => {
      const updated = await User.updateOne(
        { _id: userId },
        {
          $push: {
            memberClubs: clubId,
          },
        }
      );

      return {
        success: updated.ok,
      };
    },

    removeMemberClub: async (_: any, { userClub: { clubId, userId } }: any) => {
      const updated = await User.updateOne(
        { _id: userId },
        {
          $pull: {
            memberClubs: clubId,
          },
        }
      );

      return {
        success: updated.ok,
      };
    },

    addOrganizerClub: async (_: any, { userClub: { clubId, userId } }: any) => {
      const updated = await User.updateOne(
        { _id: userId },
        {
          $push: {
            organizerClubs: clubId,
          },
        }
      );

      return {
        success: updated.ok,
      };
    },

    removeOrganizerClub: async (
      _: any,
      { userClub: { clubId, userId } }: any
    ) => {
      const updated = await User.updateOne(
        { _id: userId },
        {
          $pull: {
            organizerClubs: clubId,
          },
        }
      );

      return {
        success: updated.ok,
      };
    },
  },

  User: {
    memberClubs: async (parent: any) => {
      const result = await User.findOne({ _id: parent.userId })
        .populate("memberClubs")
        .exec();
      return result.memberClubs.map((schema: any) =>
        utils.clubFromSchema(schema, parent.userId)
      );
    },
    organizerClubs: async (parent: any) => {
      const result = await User.findOne({ _id: parent.userId })
        .populate("organizerClubs")
        .exec();
      return result.organizerClubs.map((schema: any) =>
        utils.clubFromSchema(schema, parent.userId)
      );
    },
  },
};

export default userResolvers;
