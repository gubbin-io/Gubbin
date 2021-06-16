import User from "../models/user";
import ImageKit from "imagekit";
import { AuthenticationError, ForbiddenError } from "apollo-server";

function avgRating(reviews: any) {
  if (!reviews || reviews.length == 0) return undefined;

  const ratings = reviews.map((review: any) => review.rating);
  const averageRating =
    ratings.reduce((p: number, c: number) => p + c, 0) / ratings.length;
  const rounded = (Math.round(averageRating * 10) / 10).toFixed(1);

  return rounded;
}

function eventsFromSchema(eventsSchema: any) {
  return eventsSchema.map(({ _id, title, body, link, date }: any) => {
    return { eventId: _id, title, body, link, date };
  });
}

function updatesFromSchema(updatesSchema: any) {
  let temp: any[] = updatesSchema.map(
    ({ _id, title, description, date }: any) => {
      return { updateId: _id, title, description, date };
    }
  );
  temp.sort(updateCompareFunc);
  return temp;
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
    committee: clubSchema.committee,
    joined: joined,
    socialMedia: clubSchema.socialMedia,
    events: eventsFromSchema(clubSchema.events),
    updates: updatesFromSchema(clubSchema.updates),
  };
}

async function questionFromSchema(questionSchema: any) {
  let user = await User.findOne({ _id: questionSchema.questioner });
  let userName: String;
  if (questionSchema.anonymousQuestion || !user) {
    userName = "Anonymous";
  } else {
    userName = user.userName;
  }

  return {
    questionId: questionSchema._id,
    title: questionSchema.title,
    body: questionSchema.body,
    questionTime: questionSchema.questionTime,
    questioner: { userName },
    anonymousQuestion: questionSchema.anonymousQuestion,
    answer: questionSchema.answer,
    answerTime: questionSchema.answerTime,
  };
}

async function reviewFromSchema(reviewSchema: any) {
  let user = await User.findOne({ _id: reviewSchema.reviewer });
  let userName: String;
  if (reviewSchema.anonymousReview || !user) {
    userName = "Anonymous";
  } else {
    userName = user.userName;
  }

  return {
    id: reviewSchema._id,
    rating: reviewSchema.rating,
    title: reviewSchema.title,
    comment: reviewSchema.comment,
    commentTime: reviewSchema.commentTime,
    response: reviewSchema.response,
    responseTime: reviewSchema.responseTime,
    anonymousReview: reviewSchema.anonymousReview,
    reviewer: { userName },
  };
}

function reviewCompareFunc(review1: any, review2: any) {
  if (review1.commentTime > review2.commentTime) return -1;
  if (review1.commentTime < review2.commentTime) return 1;
  return 0;
}

function questionCompareFunc(question1: any, question2: any) {
  if (question1.questionTime > question2.questionTime) return -1;
  if (question1.questionTime < question2.questionTime) return 1;
  return 0;
}

function updateCompareFunc(update1: any, update2: any) {
  if (update1.date > update2.date) return -1;
  if (update1.date < update2.date) return 1;
  return 0;
}

function getImageKit() {
  return new ImageKit({
    publicKey: "public_kC3Isp/ICZSn3Glw68BA3tWFcRs=",
    privateKey:
      process.env.IMAGEKIT_PRIVATE_KEY || "PRIVATE KEY UNDEFINED IN .env",
    urlEndpoint: "https://ik.imagekit.io/gubbin/",
  });
}

async function authenticateUser(user: any) {
  if (!user || !user.userId) {
    throw new AuthenticationError("You must be logged in");
  }

  const userSchema = await User.findOne({ _id: user.userId });
  if (!userSchema) {
    throw new AuthenticationError("Invalid credentials");
  }
}

async function checkIsMember(userId: any, clubId: any) {
  const user = await User.findById(userId);
  if (
    !user.memberClubs.includes(clubId) &&
    !user.organizerClubs.includes(clubId)
  ) {
    throw new ForbiddenError("You are not a member of this club");
  }
}

async function checkIsOrganizer(userId: any, clubId: any) {
  const user = await User.findById(userId);
  if (!user.organizerClubs.includes(clubId)) {
    throw new ForbiddenError("You are not an organizer of this club");
  }
}

export default {
  avgRating,
  clubFromSchema,
  questionFromSchema,
  reviewFromSchema,
  reviewCompareFunc,
  questionCompareFunc,
  getImageKit,
  authenticateUser,
  checkIsMember,
  checkIsOrganizer,
};
