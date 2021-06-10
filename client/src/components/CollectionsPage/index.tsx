import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeftShort } from "react-bootstrap-icons";
import ClubCard from "../ClubCard";
import CardFiller from "../ClubCard/components/CardFiller";
import useStyles from "./style";

export interface CollectionsPageProp {
  collectionTitle: String;
}

const CollectionsPage: React.FC<CollectionsPageProp> = ({
  collectionTitle,
}) => {
  const classes = useStyles();
  const iconURL =
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/soccer-ball_26bd.png";
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.header}>
          <Button className={classes.backButton}>
            <ArrowLeftShort className={classes.icon} size={36} />
          </Button>
          <div className={classes.heading}>
            <span className={classes.titleText}>{collectionTitle}</span>
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
