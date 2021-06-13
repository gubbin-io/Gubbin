import React from "react";
import { Button, Card } from "react-bootstrap";
import useStyles from "./style";

export interface ClubCardProp {
  clubName: string;
  description: string;
  themeColor?: string;
  logoUri: string;
  onClick: () => void;
}

const ClubCard: React.FC<ClubCardProp> = ({
  clubName,
  description,
  themeColor,
  logoUri,
  onClick,
}) => {
  const classes = useStyles({
    clubColor: themeColor,
  });

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
      <Button className={classes.joinButton}>Join</Button>
    </Card>
  );
};

export default ClubCard;
