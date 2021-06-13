import { useQuery } from "@apollo/client";
import React from "react";
import CollectionsPage from ".";
import { GET_CLUB_COLLECTION } from "../../constants/queries";
import LoadingScreen from "../LoadingScreen";

export interface CollectionsPageWithIdProp {
  collectionID: String;
  showBackButton?: boolean;
  showModalClub: (id: string) => void;
}

const CollectionsPageWithId: React.FC<CollectionsPageWithIdProp> = ({
  collectionID,
  showBackButton = true,
  showModalClub,
}) => {
  const { loading, error, data } = useQuery(GET_CLUB_COLLECTION, {
    variables: { collectionId: collectionID },
  });

  if (loading) return <LoadingScreen />;
  if (error) return <p>`Error! ${error}`</p>;

  return (
    <CollectionsPage
      showBackButton={showBackButton}
      showModalClub={showModalClub}
      collectionTitle={data.clubCollection.collectionName}
      clubs={data.clubCollection.clubs}
    />
  );
};

export default CollectionsPageWithId;
