import Club, { Question } from "../models/club";
import User from "../models/user";

const questionResolvers = {
  Query: {},

  Mutation: {
    postQuestion: async (_: any, data: any, { user }: any) => {
      const { clubId, title, body, anonymousQuestion } = data.questionPost;

      if (!user || !user.userId) {
        // TODO: Error
      }

      const userSchema = await User.findOne({ _id: user.userId });
      if (!userSchema) {
        // TODO: Error
      }

      const newQuestion = new Question({
        title,
        body,
        questionTime: Date.now(),
        anonymousQuestion,
        questioner: user.userId,
      });

      const savedQuestion = await newQuestion.save();

      await Club.updateOne(
        { _id: clubId },
        {
          $push: {
            questions: savedQuestion._id,
          },
        }
      );
      return savedQuestion._id;
    },

    postAnswer: async (_: any, data: any) => {
      const { questionId, answer } = data.answerPost;
      const updated = await Question.updateOne(
        { _id: questionId },
        {
          answer,
          answerTime: Date.now(),
        }
      );

      return updated.ok;
    },
  },
};

export default questionResolvers;
