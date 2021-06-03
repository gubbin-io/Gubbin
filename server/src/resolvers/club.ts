import Club from "../models/club";

const clubResolvers = {
  Query: {
    clubs: async () => {
      const clubs = await Club.find();
      return clubs.map(({ clubname, _id }: any) => ({
        clubname,
        id: _id,
      }));
    },

    club: async (_: any, { clubname }: any) => {
      const [club] = await Club.find({ clubname });

      return {
        clubname: club.clubname,
        id: club._id,
        reviews: club.reviews,
      };
    },
  },

  Mutation: {
    addClub: async (
      parent: any,
      { clubInfo: { clubname } }: any,
      context: any
    ) => {
      const newClub = new Club({ clubname });
      const { _id, clubname: newClubname } = await newClub.save();

      return {
        club: {
          id: _id,
          clubname: newClubname,
          reviews: [],
        },
      };
    },
  },
};

export default clubResolvers;
