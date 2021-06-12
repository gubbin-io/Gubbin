import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserInputError } from "apollo-server-errors";

const userResolvers = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users.map(({ userName, _id }: any) => ({
        userName,
        userId: _id,
      }));
    },

    currentUser: async (parent: any, _: any, { user }: any) => {
      if (!user) return undefined;
      const curUser = await User.findOne({ _id: user.userId });
      if (!curUser) return undefined;

      return {
        userId: curUser._id,
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
      const { _id, userName: newUserName } = await newUser.save();

      return {
        userId: _id,
        userName: newUserName,
      };
    },

    login: async (_: any, { userInfo: { userName, password } }: any) => {
      const user = await User.findOne({ userName });
      if (!user) throw new UserInputError("Invalid username");

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return new UserInputError("Invalid Credentials");

      return {
        token: jwt.sign({ userId: user._id }, "SECRET", {
          algorithm: "HS256",
          expiresIn: "1d",
        }),
      };
    },

    addMemberClub: async (_: any, { userClub: { clubId, userId } }: any) => {
      const updated = await User.updateOne(
        { _id: userId },
        {
          $push: {
            memberClubs: {
              clubId,
            },
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
            organizerClubs: {
              clubId,
            },
          },
        }
      );

      return {
        success: updated.ok,
      };
    },
  },

  User: {
    firstLetterOfUsername: (parent: any) => parent.username[0],
  },
};

export default userResolvers;
