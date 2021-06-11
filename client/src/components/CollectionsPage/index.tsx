import { useQuery } from "@apollo/client";
import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { GET_CLUB_COLLECTION } from "../../constants/queries";
import ClubCard from "../ClubCard";
import CardFiller from "../ClubCard/components/CardFiller";
import useStyles from "./style";

export interface CollectionsPageProp {
  collectionID: String;
  showBackButton?: boolean;
}

const CollectionsPage: React.FC<CollectionsPageProp> = ({
  collectionID,
  showBackButton = true,
}) => {
  const classes = useStyles();
  const iconURL =
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/soccer-ball_26bd.png";
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_CLUB_COLLECTION, {
    variables: { collectionId: collectionID },
  });

  if (loading) return <></>;
  if (error) return <p>`Error! ${error}`</p>;

  return (
    <>
      <div className={classes.mainContainer}>
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
          <ClubCard
            clubName="Football"
            description="Become an Airborne Ranger!"
            clubIconURL={iconURL}
            onClick={() => {}}
          />
          <ClubCard
            clubName="Hockey"
            description="Prepping for freshers tour"
            clubIconURL={iconURL}
            onClick={() => {}}
          />
          <ClubCard
            clubName="Cricket"
            description="Now offering free net sessions!"
            clubIconURL={iconURL}
            onClick={() => {}}
          />
          <ClubCard
            clubName="Fly Fishing"
            description="Your weekend adventure awaits!"
            clubIconURL={iconURL}
            onClick={() => {}}
          />
          <ClubCard
            clubName="Ultimate Frisbee"
            description="Throw. Run. Jump. Catch. Score."
            clubIconURL={iconURL}
            onClick={() => {}}
          />
          <ClubCard
            clubName="Lawn Tennis"
            description="Courts opening soon!"
            clubIconURL={iconURL}
            onClick={() => {}}
          />
          <ClubCard
            clubName="Beach Volleyball"
            description="Over the net & to the ground!"
            clubIconURL={iconURL}
            onClick={() => {}}
          />
          <CardFiller />
          <CardFiller />
          <CardFiller />
        </div>
      </div>
    </>
  );
};

export default CollectionsPage;
