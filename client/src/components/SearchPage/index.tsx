import { useQuery } from "@apollo/client";
import React from "react";
import { FIND_CLUBS } from "../../constants/queries";
import CollectionsPage from "../CollectionsPage";

export interface SearchPageProp {
  searchString: String;
  showModalClub: (id: string) => void;
}

const SearchPage: React.FC<SearchPageProp> = ({
  searchString,
  showModalClub,
}) => {
  const { loading, error, data } = useQuery(FIND_CLUBS, {
    variables: {
      searchString,
    },
  });

  if (loading) return <></>;
  if (error) return <p>`Error! ${error}`</p>;

  return (
    <CollectionsPage
      collectionTitle="Search"
      clubs={data.findClubs}
      showModalClub={showModalClub}
      showBackButton={false}
    />
  );
};

export default SearchPage;
