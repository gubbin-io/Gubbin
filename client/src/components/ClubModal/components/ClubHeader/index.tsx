import React from "react";
import useStyles from "./style";
import { Button } from "react-bootstrap";
import { XCircleFill } from "react-bootstrap-icons";
import JoinButton from "../../../JoinButton";

export interface ClubHeaderProp {
  clubId: string;
  joined: boolean;
  clubName?: string;
  tagline: string;
  bgUrl: string;
  iconUrl: string;
  clubColor: string;
  onHide: () => void;
}

const ClubHeader: React.FC<ClubHeaderProp> = ({
  clubId,
  joined,
  clubName,
  tagline,
  bgUrl,
  iconUrl,
  clubColor,
  onHide,
}) => {
  const classes = useStyles({ clubColor });

  return (
    <div className={classes.header}>
      <div className={classes.background}>
        <img
          src={bgUrl}
          alt="club_background"
          className={classes.backgroundImage}
        />
      </div>
      {/* Top right options pane for a modal */}
      <div className={classes.options}>
        <Button onClick={onHide} className={classes.closeButton}>
          <XCircleFill size={20} />
        </Button>
      </div>
      {/* Club icon - wrapped in a hovering box */}
      <div className={classes.iconBox}>
        <img src={iconUrl} alt="club_icon" className={classes.icon} />
      </div>
      {/* Club name and tag line */}
      <div className={classes.details}>
        <span className={classes.clubName}>{clubName}</span>
        <br />
        <span className={classes.tagline}>{tagline}</span>
      </div>
      {/* Join club button */}
      <div className={classes.join}>
        <JoinButton clubId={clubId} joined={joined} clubColor={clubColor} />
      </div>
    </div>
  );
};

export default ClubHeader;
