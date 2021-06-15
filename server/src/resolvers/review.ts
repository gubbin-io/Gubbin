import { UserInputError } from "apollo-server-errors";

import Club, { Review } from "../models/club";
import User from "../models/user";

const reviewResolvers = {
  Query: {},

  Mutation: {
    addReview: async (_: any, data: any, { user }: any) => {
      const { clubId, rating, title, comment, anonymousReview } = data.review;
      if (rating > 5 || rating < 1) throw new UserInputError("Invalid rating");

      if (!user || !user.userId) {
        // TODO: Error
      }

      const userSchema = await User.findOne({ _id: user.userId });
      if (!userSchema) {
        // TODO: Error
      }

      const newReview = new Review({
        rating,
        title,
        comment,
        commentTime: Date.now(),
        anonymousReview,
        reviewer: user.userId,
      });

      const savedReview = await newReview.save();

      await Club.updateOne(
        { _id: clubId },
        {
          $push: {
            reviews: savedReview._id,
          },
        }
      );
      return savedReview._id;
    },

    postResponse: async (_: any, data: any) => {
      const { reviewId, response } = data.answerPost;
      const updated = await Review.updateOne(
        { _id: reviewId },
        {
          response,
          responseTime: Date.now(),
        }
      );

      return updated.ok;
    },
  },
};

export default reviewResolvers;
