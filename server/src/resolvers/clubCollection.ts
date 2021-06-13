import ClubCollection from "../models/clubCollection";

const clubCollectionResolvers = {
  Query: {
    clubCollections: async () => {
      const collections = await ClubCollection.find();

      return collections.map(({ _id, collectionName, clubs }: any) => ({
        collectionId: _id,
        collectionName,
        // TODO: return full clubs here, refactor code so that its possible?
        clubs: clubs.map(({ clubId }: any) => clubId),
      }));
    },

    clubCollection: async (_: any, { collectionId }: any) => {
      const collection = await ClubCollection.findOne({ _id: collectionId });

      if (!collection) return undefined;

      return {
        collectionId: collection._id,
        collectionName: collection.collectionName,
        // TODO: return full clubs here, refactor code so that its possible?
        clubs: collection.clubs.map(({ clubId }: any) => clubId),
      };
    },
  },

  Mutation: {
    newCollection: async (_: any, data: any) => {
      const collectionName = data.collectionInfo.collectionName;

      const newCollection = new ClubCollection({
        collectionName,
        clubs: [],
      });

      const savedCollection = await newCollection.save();
      return {
        collection: {
          collectionId: savedCollection._id,
          collectionName,
          clubs: [],
        },
      };
    },

    addToCollection: async (_: any, data: any) => {
      const { clubId, collectionId } = data.clubToCollection;

      const updated = await ClubCollection.updateOne(
        { _id: collectionId },
        {
          $push: {
            clubs: {
              clubId,
            },
          },
        }
      );

      return {
        success: updated.ok,
      };
    },
  },
};

export default clubCollectionResolvers;