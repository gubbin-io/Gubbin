import { useMutation } from "@apollo/client";
import React, { CSSProperties } from "react";
import { Button } from "react-bootstrap";
import { ADD_MEMBER_CLUB, GET_MEMBER_CLUBS } from "../../constants/queries";
import useStyles from "./style";

export interface JoinButtonProp {
  joined: boolean;
  clubId: string;
  clubColor: string;
  style?: CSSProperties;
}

const JoinButton: React.FC<JoinButtonProp> = ({
  joined,
  clubId,
  clubColor,
  style,
}) => {
  const classes = useStyles({ clubColor });

  const [addMemberClub] = useMutation(ADD_MEMBER_CLUB, {
    refetchQueries: [{ query: GET_MEMBER_CLUBS }],
  });

  function handleJoin() {
    const userId = sessionStorage.getItem("userId");

    if (userId && userId !== "undefined") {
      addMemberClub({ variables: { userId, clubId: clubId } });
    }
  }

  return (
    <Button
      disabled={joined}
      className={classes.joinButton}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleJoin();
      }}
      style={style}
    >
      {joined ? `Joined` : `Join`}
    </Button>
  );
};

export default JoinButton;
