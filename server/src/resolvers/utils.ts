import User from "../models/user";

function avgRating(reviews: any) {
  if (!reviews || reviews.length == 0) return undefined;

  const ratings = reviews.map((review: any) => review.rating);
  const averageRating =
    ratings.reduce((p: number, c: number) => p + c, 0) / ratings.length;
  const rounded = (Math.round(averageRating * 10) / 10).toFixed(1);

  return rounded;
}

async function clubFromSchema(clubSchema: any, userId: any) {
  const find = await User.findOne({
    _id: userId,
    memberClubs: clubSchema._id,
  });
  const joined = find != null;

  return {
    clubName: clubSchema.clubName,
    id: clubSchema._id,
    description: clubSchema.description,
    about: clubSchema.about,
    numMembers: clubSchema.numMembers,
    themeColor: clubSchema.themeColor,
    logoUri: clubSchema.logoUri,
    backgroundUri: clubSchema.backgroundUri,
    joined: joined,
    socialMedia: clubSchema.socialMedia,
  };
}

function questionFromSchema(questionSchema: any) {
  return {
    questionId: questionSchema._id,
    title: questionSchema.title,
    body: questionSchema.body,
    questionTime: questionSchema.questionTime,
    answer: questionSchema.answer,
    answerTime: questionSchema.answerTime,
  };
}

function reviewFromSchema(reviewSchema: any) {
  return {
    id: reviewSchema._id,
    rating: reviewSchema.rating,
    title: reviewSchema.title,
    comment: reviewSchema.comment,
    commentTime: reviewSchema.commentTime,
    response: reviewSchema.response,
    responseTime: reviewSchema.responseTime,
    reviewer: { userName: "Anonymous" },
  };
}

export default {
  avgRating,
  clubFromSchema,
  questionFromSchema,
  reviewFromSchema,
};
