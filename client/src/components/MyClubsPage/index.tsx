import React from "react";
import CollectionsPage from "../CollectionsPage";
import useStyles from "./style";

export interface MyClubsPageProp {}

const MyClubsPage: React.FC<MyClubsPageProp> = ({}) => {
  const classes = useStyles();

  return (
    <>
      {/* My Clubs */}
      <CollectionsPage
        collectionID="60c2a579fc9fae915373f2bb"
        showBackButton={false}
      />
    </>
  );
};

export default MyClubsPage;
