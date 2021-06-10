import React from "react";
import { Button } from "react-bootstrap";
import { CaretRightFill } from "react-bootstrap-icons";
import { useHistory } from "react-router";
import ClubCard from "../ClubCard";
import CardFiller from "../ClubCard/components/CardFiller";
import useStyles from "./style";

export interface CollectionsModuleProp {
  collectionTitle: String;
  showDivider?: boolean;
}

const CollectionsModule: React.FC<CollectionsModuleProp> = ({
  collectionTitle,
  showDivider = true,
}) => {
  const classes = useStyles({ showDivider });
  const history = useHistory();
  const iconURL =
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/soccer-ball_26bd.png";
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <span className={classes.headerText}>{collectionTitle}</span>
          <Button
            className={classes.expandButton}
            onClick={() => {
              history.push(`/collection/${collectionTitle}`);
            }}
          >
            See All
            <CaretRightFill className={classes.icon} size={16} />
          </Button>
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
          <CardFiller />
          <CardFiller />
          <CardFiller />
        </div>
      </div>
    </>
  );
};

export default CollectionsModule;
