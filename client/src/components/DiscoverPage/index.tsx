import React from "react";
import { useQuery } from "@apollo/client";
import useStyles from "./style";
import { GET_CLUBS } from "../../constants/queries";
import CollectionsModule from "../CollectionsModule";

export interface DiscoverPageProp {
  showModalClub: (id: string) => void;
}

const DiscoverPage: React.FC<DiscoverPageProp> = ({ showModalClub }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      {/* Summer is calling! */}
      <CollectionsModule collectionID="60c24477bc2a8247244184a5" />
      {/* Beat the heat! */}
      <CollectionsModule
        collectionID="60c24ba2cdbf3552fd23f897"
        showDivider={false}
      />
    </div>
  );
};

export default DiscoverPage;
