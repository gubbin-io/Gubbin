import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CLUB_COLLECTION } from "../../constants/queries";
import CollectionsPage from "../CollectionsPage";
import LoadingScreen from "../LoadingScreen";

export interface MyClubsPageProp {
  showModalClub: (id: string) => void;
}

const MyClubsPage: React.FC<MyClubsPageProp> = ({ showModalClub }) => {
  const { loading, error, data } = useQuery(GET_CLUB_COLLECTION, {
    variables: { collectionId: "60c2a579fc9fae915373f2bb" },
  });

  if (loading) return <LoadingScreen />;
  if (error) return <p>`Error! ${error}`</p>;

  return (
    <CollectionsPage
      showBackButton={false}
      showModalClub={showModalClub}
      collectionTitle={data.clubCollection.collectionName}
      clubs={data.clubCollection.clubs}
    />
  );
};

export default MyClubsPage;
