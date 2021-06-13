import { UserInputError } from "apollo-server-errors";

import Club, { Review } from "../models/club";

const reviewResolvers = {
  Query: {},

  Mutation: {
    addReview: async (_: any, data: any) => {
      const { clubId, rating, title, comment } = data.review;
      if (rating > 5 || rating < 1) throw new UserInputError("Invalid rating");

      const newReview = new Review({
        rating,
        title,
        comment,
        commentTime: Date.now(),
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
