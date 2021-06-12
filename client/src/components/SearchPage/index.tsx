import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CLUBS } from "../../constants/queries";
import { Club } from "../../constants/types";
import ClubCard from "../ClubCard";
import CardFiller from "../ClubCard/components/CardFiller";
import useStyles from "./style";

export interface SearchPageProp {
  searchString: String;
  showModalClub: (id: string) => void;
}

const SearchPage: React.FC<SearchPageProp> = ({
  searchString,
  showModalClub,
}) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_CLUBS);

  if (loading) return <></>;
  if (error) return <p>`Error! ${error}`</p>;

  return (
    <>
      <div className={classes.header}>
        <div className={classes.heading}>
          <span className={classes.titleText}>Search</span>
          <hr className={classes.divider} />
        </div>
      </div>

      <div className={classes.body}>
        {data.clubs
          .filter(
            ({ clubName }: Club) =>
              clubName.toUpperCase().indexOf(searchString.toUpperCase()) >= 0
          )
          .map(({ id }: Club) => (
            <ClubCard clubID={id} key={id} onClick={() => showModalClub(id)} />
          ))}
        <CardFiller />
        <CardFiller />
        <CardFiller />
        <CardFiller />
        <CardFiller />
      </div>
    </>
  );
};

export default SearchPage;
