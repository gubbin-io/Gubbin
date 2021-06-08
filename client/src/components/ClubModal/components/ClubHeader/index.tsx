import React, { useState } from "react";
import useStyles from "./style";
import { Button } from "react-bootstrap";
import { XCircleFill } from "react-bootstrap-icons";
import { useTheme } from "react-jss";

export interface ClubHeaderProp {
  clubName?: string;
  tagline: string;
  bgUrl: string;
  iconUrl: string;
  clubColor: string;
  onHide: () => void;
}

const ClubHeader: React.FC<ClubHeaderProp> = ({
  clubName,
  tagline,
  bgUrl,
  iconUrl,
  clubColor,
  onHide,
}) => {
  const theme = useTheme();
  const classes = useStyles({ clubColor, theme });

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
        <Button className={classes.joinButton}>Join</Button>
      </div>
    </div>
  );
};

export default ClubHeader;
