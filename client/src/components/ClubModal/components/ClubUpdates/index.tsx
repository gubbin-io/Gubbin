import React from "react";
import useStyles from "./style";
import { Card } from "react-bootstrap";
import { ClubUpdate } from "../../../../constants/types";

export interface ClubUpdatesProp {
  updates: ClubUpdate[];
}

const ClubUpdates: React.FC<ClubUpdatesProp> = ({ updates }) => {
  const classes = useStyles();

  return (
    <>
      <span className={classes.sectionHeading}>{`Updates`}</span>
      <hr className={classes.divider} />
      {updates.length === 0 && <p>No updates published at the moment.</p>}
      {updates.map(({ updateId, title, description, date }) => (
        <Card className={classes.reviewCard} key={updateId}>
          <Card.Body className={classes.reviewBody}>
            <div className={classes.bodyHeader}>
              <div className={classes.headerLeft}>
                <span className={classes.extraLargeText}>{title}</span>
                <span className={classes.smallText}>
                  {new Date(date).toLocaleDateString()}
                </span>
              </div>
            </div>
            <Card.Text className={classes.bodyText}>{description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ClubUpdates;
