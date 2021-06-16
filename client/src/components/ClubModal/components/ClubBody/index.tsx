import React from "react";
import { Tab, Row, Col } from "react-bootstrap";
import {
  ClubEvent,
  Committee,
  Question,
  Review,
  SocialMedia,
} from "../../../../constants/types";
import ClubReviews from "../ClubReviews";
import ClubQAs from "../ClubQAs";
import useStyles from "./style";
import ClubSideBar from "../ClubSideBar";
import ClubEvents from "../ClubEvents";
import ClubSocialMedia from "../ClubSocialMedia";

export interface ClubBodyProp {
  clubId: string;
  clubName: string;
  about: string;
  clubColor: string;
  numMembers: number;
  rating?: number;
  reviews: Review[];
  events: ClubEvent[];
  questions: Question[];
  socialMedia?: SocialMedia;
  committee: Committee[];
}

const ClubBody: React.FC<ClubBodyProp> = ({
  clubId,
  socialMedia,
  about,
  clubColor,
  numMembers,
  rating,
  questions,
  events,
  committee,
  reviews,
}) => {
  const classes = useStyles();

  return (
    <Tab.Container defaultActiveKey="about">
      <Row style={{ height: "100%", marginBottom: "8px" }}>
        <ClubSideBar
          clubColor={clubColor}
          numMembers={numMembers}
          rating={rating}
          numReviews={reviews.length}
        />
        {/* Main Content of Tab */}
        <Col className={classes.contentColumn}>
          <Tab.Content>
            <Tab.Pane eventKey="about">
              <span className={classes.sectionHeading}>{`About`}</span>
              <hr className={classes.divider} />
              <p>{about}</p>
            </Tab.Pane>
            <Tab.Pane eventKey="reviews">
              <ClubReviews
                clubId={clubId}
                reviews={reviews}
                clubColor={clubColor}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="questions">
              <ClubQAs
                clubId={clubId}
                questions={questions}
                clubColor={clubColor}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="events">
              <ClubEvents events={events} />
            </Tab.Pane>

            <Tab.Pane eventKey="social">
              <ClubSocialMedia
                clubColor={clubColor}
                socialMedia={socialMedia}
                committee={committee}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ClubBody;
