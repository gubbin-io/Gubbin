import React from "react";
import CollectionsPage from "../CollectionsPage";
import useStyles from "./style";

export interface MyClubsPageProp {}

const MyClubsPage: React.FC<MyClubsPageProp> = ({}) => {
  const classes = useStyles();

  return (
    <>
      <CollectionsPage collectionTitle={"My Clubs"} showBackButton={false} />
    </>
  );
};

export default MyClubsPage;
