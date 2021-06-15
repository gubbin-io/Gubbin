import React from "react";
import useStyles from "./style";
import { ReactTinyLink } from "react-tiny-link";

export interface ClubEventsProp {}

const ClubEvents: React.FC<ClubEventsProp> = ({}) => {
  const classes = useStyles();

  // TODO: use our own proxy https://www.npmjs.com/package/cors-anywhere

  return (
    <>
      <span className={classes.sectionHeading}>{`Events`}</span>
      <hr className={classes.divider} />

      <div className={classes.eventCard}>
        <span className={classes.largeText}>IC Hello World!</span>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          url="https://ic-hello-world.devpost.com/"
          proxyUrl="https://thingproxy.freeboard.io/fetch"
        />
      </div>

      <div className={classes.eventCard}>
        <span className={classes.largeText}>IC Hello World!</span>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          url="https://ic-hello-world.devpost.com/"
          proxyUrl="https://thingproxy.freeboard.io/fetch"
        />
      </div>

      <div className={classes.eventCard}>
        <span className={classes.largeText}>IC Hello World!</span>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          url="https://ic-hello-world.devpost.com/"
          proxyUrl="https://thingproxy.freeboard.io/fetch"
        />
      </div>
    </>
  );
};

export default ClubEvents;
