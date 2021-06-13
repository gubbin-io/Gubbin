function avgRating(reviews: any) {
  if (!reviews || reviews.length == 0) return undefined;

  const ratings = reviews.map((review: any) => review.rating);
  const averageRating =
    ratings.reduce((p: number, c: number) => p + c, 0) / ratings.length;
  const rounded = (Math.round(averageRating * 10) / 10).toFixed(1);

  return rounded;
}

function clubFromSchema(clubSchema: any) {
  return {
    clubName: clubSchema.clubName,
    id: clubSchema._id,
    description: clubSchema.description,
    about: clubSchema.about,
    reviews: clubSchema.reviews.map(
      ({ _id, reviewer, rating, title, comment, commentTime }: any) => ({
        id: _id,
        reviewer,
        rating,
        title,
        comment,
        commentTime,
      })
    ),
    numMembers: clubSchema.numMembers,
    themeColor: clubSchema.themeColor,
    logoUri: clubSchema.logoUri,
    backgroundUri: clubSchema.backgroundUri,
    committee: clubSchema.committee,
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

export default { avgRating, clubFromSchema, questionFromSchema };
