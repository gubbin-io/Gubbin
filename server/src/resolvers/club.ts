import { UserInputError } from "apollo-server-errors";
import ImageKit from "imagekit";
import Club from "../models/club";
import avgRating from "./utils";
import dateScalar from "./datatypes";

const clubResolvers = {
  Date: dateScalar,

  Query: {
    clubs: async () => {
      const clubs = await Club.find();

      return clubs.map(
        ({
          clubName,
          reviews,
          description,
          numMembers,
          themeColor,
          about,
          logoUri,
          backgroundUri,
          _id,
        }: any) => ({
          clubName,
          id: _id,
          description,
          numMembers,
          themeColor,
          about,
          logoUri,
          backgroundUri,
          reviews,
        })
      );
    },

    club: async (_: any, { clubId }: any) => {
      const club = await Club.findOne({ _id: clubId });

      if (!club) return undefined;

      return {
        clubName: club.clubName,
        id: club._id,
        description: club.description,
        about: club.about,
        reviews: club.reviews.map(
          ({ _id, reviewer, rating, title, comment, commentTime }: any) => ({
            id: _id,
            reviewer,
            rating,
            title,
            comment,
            commentTime,
          })
        ),
        numMembers: club.numMembers,
        themeColor: club.themeColor,
        logoUri: club.logoUri,
        backgroundUri: club.backgroundUri,
      };
    },
  },

  Mutation: {
    addClub: async (_: any, data: any) => {
      // TODO: accept files as inputs instead of URIs
      const {
        description,
        clubName,
        numMembers,
        themeColor,
        about,
        logoUri,
        backgroundUri,
      } = data.clubInfo;

      // TODO: Throw checking and saving logic below into a separate components and add tests
      const club = await Club.findOne({ clubName });
      if (club)
        throw new UserInputError(`Duplicated club name \"${clubName}\".`);

      if (description.length > 30)
        throw new UserInputError(
          "Shot description exceeds 30 characters limit"
        );

      const newClub = new Club({
        description,
        clubName,
        numMembers: numMembers || 0,
        themeColor: themeColor || "#1971C2",
        about: about || "",
        logoUri,
        backgroundUri,
        reviews: [],
      });

      const savedClub = await newClub.save();
      savedClub.id = savedClub._id;
      delete savedClub._id;
      return savedClub;
    },

    addReview: async (
      _: any,
      { review: { clubId, reviewer, rating, title, comment } }: any
    ) => {
      if (rating > 5 || rating < 1) throw new UserInputError("Invalid rating");

      const updated = await Club.updateOne(
        { _id: clubId },
        {
          $push: {
            reviews: {
              reviewer,
              rating,
              title,
              comment,
              commentTime: new Date(),
            },
          },
        }
      );

      return updated.ok;
    },

    addLogo: async (_: any, { logo: { clubId, content } }: any) => {
      // console.log(logo);
      // const { filename, mimetype, createReadStream } = await logo;
      // console.log(filename);
      // const stream = createReadStream();
      // const chunks: any[] = [];
      // const content: string = await new Promise((resolve, reject) => {
      //   stream.on("data", (chunk: any) => chunks.push(Buffer.from(chunk)));
      //   stream.on("error", (err: any) => reject(err));
      //   stream.on("end", () =>
      //     resolve(Buffer.concat(chunks).toString("base64"))
      //   );
      // });

      // console.log(content);
      let imagekit = new ImageKit({
        publicKey: "public_kC3Isp/ICZSn3Glw68BA3tWFcRs=",
        privateKey:
          process.env.IMAGEKIT_PRIVATE_KEY || "PRIVATE KEY UNDEFINED IN .env",
        urlEndpoint: "https://ik.imagekit.io/gubbin/",
      });

      imagekit.upload(
        {
          file: content,
          fileName: "newfile.png",
        },
        function (error, result) {
          if (error) console.log(error);
          else console.log(result);
        }
      );
      console.log("here");
      return { filename: "newfile.png" };
    },
  },

  Club: {
    rating: (parent: any) => {
      return avgRating(parent.reviews);
    },
  },
};

export default clubResolvers;
