import avgRating from "../../src/resolvers/utils";

describe("average rating calculated correctly", function () {
  const reviews = [
    { rating: 3, comment: "lol" },
    { rating: 5, comment: "haha" },
    { rating: 3, comment: "yes!" },
  ];
  it("average rating of empty reviews is undefined", function () {
    expect(avgRating([])).toBe(undefined);
  });
  it("average rating of null object is undefined", function () {
    expect(avgRating(null)).toBe(undefined);
    expect(avgRating(undefined)).toBe(undefined);
  });
  it("average rating of some reviews is the numerical average of ratings", function () {
    expect(avgRating(reviews)).toBe("3.7");
  });
});
