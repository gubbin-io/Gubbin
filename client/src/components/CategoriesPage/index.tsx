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

  const { loading, error, data } = useQuery(GET_CLUBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div className={classes.mainContainer}>
      <CollectionsModule collectionTitle="Sports" />
      <CollectionsModule collectionTitle="Acedemic" showDivider={false} />
    </div>
  );
};

export default CategoriesPage;
