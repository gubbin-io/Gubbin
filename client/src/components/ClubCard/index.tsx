import React from "react";
import { Card } from "react-bootstrap";
import JoinButton from "../JoinButton";
import useStyles from "./style";

export interface ClubCardProp {
  clubName: string;
  description: string;
  themeColor?: string;
  logoUri: string;
  joined: boolean;
  id: string;
  onClick: () => void;
}

const ClubCard: React.FC<ClubCardProp> = ({
  clubName,
  description,
  themeColor,
  logoUri,
  joined,
  id,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      style={{ cursor: "pointer" }}
      onClick={() => {
        onClick();
      }}
    >
      <img className={classes.clubIcon} src={logoUri} alt="Club Icon"></img>
      <div className={classes.clubDetails}>
        <span className={classes.title}>{clubName}</span>
        <span className={classes.tagline}>{description}</span>
      </div>
      <JoinButton
        clubId={id}
        joined={joined}
        clubColor={themeColor || "#1971c2"}
        style={{
          flexShrink: 0,
          marginLeft: "auto",
          height: "28px",
          width: "70px",
        }}
      />
    </Card>
  );
};

export default ClubCard;
