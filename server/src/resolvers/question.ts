import Club, { Question } from "../models/club";

const questionResolvers = {
  Query: {},

  Mutation: {
    postQuestion: async (_: any, data: any) => {
      const { clubId, title, body } = data.questionPost;

      const newQuestion = new Question({
        title,
        body,
        questionTime: Date.now(),
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
