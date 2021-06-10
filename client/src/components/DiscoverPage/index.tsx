import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import ClubCard from "../ClubCard";
import { Container, Row } from "react-bootstrap";
import ClubModal from "../ClubModal";
import useStyles from "./style";
import { GET_CLUBS } from "../../constants/queries";
import CollectionsModule from "../CollectionsModule";

export interface DiscoverPageProp {
  showModalClub: (id: string) => void;
}

const DiscoverPage: React.FC<DiscoverPageProp> = ({ showModalClub }) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_CLUBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div className={classes.mainContainer}>
      <CollectionsModule collectionTitle="Summer's Calling!" />
      <CollectionsModule collectionTitle="Beat the heat." showDivider={false} />
      {/* <Row>
          {data.clubs.map(({ clubName, rating, id }: any) => (
            <ClubCard
              key={id}
              clubName={clubName}
              rating={rating}
              onClick={() => showModalClub(id)}
            />
          ))}
        </Row> */}
    </div>
  );
};

export default DiscoverPage;
