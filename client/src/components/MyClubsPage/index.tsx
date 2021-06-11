import React from "react";
import CollectionsPage from "../CollectionsPage";

export interface MyClubsPageProp {
  showModalClub: (id: string) => void;
}

const MyClubsPage: React.FC<MyClubsPageProp> = ({ showModalClub }) => {
  return (
    <CollectionsPage
      collectionID="60c2a579fc9fae915373f2bb"
      showBackButton={false}
      showModalClub={showModalClub}
    />
  );
};

export default MyClubsPage;
