function avgRating(reviews: any) {
  if (!reviews || reviews.length == 0) return undefined;

  const ratings = reviews.map((review: any) => review.rating);
  const averageRating =
    ratings.reduce((p: number, c: number) => p + c, 0) / ratings.length;
  const rounded = (Math.round(averageRating * 10) / 10).toFixed(1);

  return rounded;
}

export default avgRating;
