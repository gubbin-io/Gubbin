import User from "../models/user";
import bcrypt from "bcrypt";
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

    user: async (_: any, { userId }: any) => {
      const user = await User.findOne({ _id: userId });

      if (!user) return undefined;

      return {
        userName: user.userName,
        userId: user._id,
      };
    },

    login: async (_: any, { userInfo: { userName, password } }: any) => {
      const user = await User.findOne({ userName });
      if (!user) throw new UserInputError("Invalid username");

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) return new UserInputError("Invalid Credentials");

      return {
        userId: user._id,
        userName: user.userName,
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
