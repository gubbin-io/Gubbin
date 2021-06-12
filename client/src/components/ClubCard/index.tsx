import { useQuery } from "@apollo/client";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { GET_CLUB_CARD } from "../../constants/queries";
import useStyles from "./style";

export interface UserProp {
  clubID: String;
  onClick: () => void;
}

const User: React.FC<UserProp> = ({ clubID, onClick }) => {
  const { loading, error, data } = useQuery(GET_CLUB_CARD, {
    variables: { clubId: clubID },
  });

  const classes = useStyles({
    clubColor: loading || error ? "#1971c2" : data.club.themeColor,
  });

  let body = <></>;

  if (loading) body = <></>;
  else if (error) body = <p>Error! {error.message}</p>;
  else {
    body = (
      <>
        <img
          className={classes.clubIcon}
          src={data.club.logoUri}
          alt="Club Icon"
        ></img>
        <div className={classes.clubDetails}>
          <span className={classes.title}>{data.club.clubName}</span>
          <span className={classes.tagline}>{data.club.description}</span>
        </div>
        <Button className={classes.joinButton}>Join</Button>
      </>
    );
  }

  return (
    <Card
      className={classes.card}
      style={{ cursor: "pointer" }}
      onClick={() => {
        onClick();
      }}
    >
      {body}
    </Card>
  );
};

export default User;
