import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { Club } from "../../constants/types";
import ClubCard from "../ClubCard";
import CardFiller from "../ClubCard/components/CardFiller";
import useStyles from "./style";

export interface CollectionsPageProp {
  showBackButton?: boolean;
  showModalClub: (id: string) => void;
  collectionTitle: String;
  clubs: Club[];
}

const CollectionsPage: React.FC<CollectionsPageProp> = ({
  clubs,
  collectionTitle,
  showBackButton = true,
  showModalClub,
}) => {
  const classes = useStyles();
  const history = useHistory();

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
          <span className={classes.titleText}>{collectionTitle}</span>
          <hr className={classes.divider} />
        </div>
      </div>

      <div className={classes.body}>
        {clubs.map((club: any) => (
          <ClubCard
            clubID={club.id}
            key={club.id}
            onClick={() => showModalClub(club.id)}
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
