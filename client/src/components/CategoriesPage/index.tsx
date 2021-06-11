import React from "react";
import { useQuery } from "@apollo/client";
import useStyles from "./style";
import { GET_CLUBS } from "../../constants/queries";
import CollectionsModule from "../CollectionsModule";

export interface CategoriesPageProp {
  showModalClub: (id: string) => void;
}

const CategoriesPage: React.FC<CategoriesPageProp> = ({ showModalClub }) => {
  const classes = useStyles();

  return (
    <>
      {/* Sports */}
      <CollectionsModule
        collectionID="60c2a51cfc9fae915373f2b9"
        showModalClub={showModalClub}
      />
      {/* Academic */}
      <CollectionsModule
        collectionID="60c2a56afc9fae915373f2ba"
        showModalClub={showModalClub}
        showDivider={false}
      />
    </>
  );
};

export default CategoriesPage;
