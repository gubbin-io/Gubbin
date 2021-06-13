import { useQuery } from "@apollo/client";
import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { GET_CLUB_COLLECTION } from "../../constants/queries";
import ClubCard from "../ClubCard";
import CardFiller from "../ClubCard/components/CardFiller";
import LoadingScreen from "../LoadingScreen";
import useStyles from "./style";

export interface CollectionsPageProp {
  collectionID: String;
  showBackButton?: boolean;
  showModalClub: (id: string) => void;
}

const CollectionsPage: React.FC<CollectionsPageProp> = ({
  collectionID,
  showBackButton = true,
  showModalClub,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_CLUB_COLLECTION, {
    variables: { collectionId: collectionID },
  });

  if (loading) return <LoadingScreen />;
  if (error) return <p>`Error! ${error}`</p>;

  return (
    <>
      <div className={classes.header}>
        {showBackButton && (
          <Button
            className={classes.backButton}
            onClick={() => {
              history.goBack();
            }}
          >
            <ArrowLeftShort className={classes.icon} size={36} />
          </Button>
        )}
        <div className={classes.heading}>
          <span className={classes.titleText}>
            {data.clubCollection.collectionName}
          </span>
          <hr className={classes.divider} />
        </div>
      </div>

      <div className={classes.body}>
        {data.clubCollection.clubs.map((club: string) => (
          <ClubCard
            clubID={club}
            key={club}
            onClick={() => showModalClub(club)}
          />
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

export default CollectionsPage;
