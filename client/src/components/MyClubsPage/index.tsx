import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MEMBER_CLUBS } from "../../constants/queries";
import CollectionsPage from "../CollectionsPage";
import LoadingScreen from "../LoadingScreen";

export interface MyClubsPageProp {
  showModalClub: (id: string) => void;
}

const MyClubsPage: React.FC<MyClubsPageProp> = ({ showModalClub }) => {
  const { loading, error, data } = useQuery(GET_MEMBER_CLUBS);

  if (loading) return <LoadingScreen />;
  if (error) return <p>`Error! ${error}`</p>;

  return (
    <CollectionsPage
      showBackButton={false}
      showModalClub={showModalClub}
      collectionTitle={"My Clubs"}
      clubs={data.currentUser.memberClubs}
    />
  );
};

export default MyClubsPage;
