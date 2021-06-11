import React from "react";
import CollectionsPage from "../CollectionsPage";
import useStyles from "./style";

export interface MyClubsPageProp {
  showModalClub: (id: string) => void;
}

const MyClubsPage: React.FC<MyClubsPageProp> = ({ showModalClub }) => {
  const classes = useStyles();

  return (
    <CollectionsPage
      collectionID="60c2a579fc9fae915373f2bb"
      showBackButton={false}
      showModalClub={showModalClub}
    />
  );
};

export default MyClubsPage;
