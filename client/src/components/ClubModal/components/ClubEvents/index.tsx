import React from "react";
import useStyles from "./style";
import { ReactTinyLink } from "react-tiny-link";
import { ClubEvent } from "../../../../constants/types";

export interface ClubEventsProp {
  events: ClubEvent[];
}

const ClubEvents: React.FC<ClubEventsProp> = ({ events }) => {
  const classes = useStyles();

  // TODO: use our own proxy https://www.npmjs.com/package/cors-anywhere
  console.log(events);
  return (
    <>
      <span className={classes.sectionHeading}>{`Events`}</span>
      <hr className={classes.divider} />
      {events.length === 0 && <p>No events published at the moment.</p>}
      {events.map(({ eventId, title, link }) => (
        <div className={classes.eventCard} key={eventId}>
          <span className={classes.largeText}>{title}</span>
          {link && (
            <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              url={link}
              proxyUrl="https://thingproxy.freeboard.io/fetch"
            />
          )}
        </div>
      ))}
    </>
  );
};

export default ClubEvents;
