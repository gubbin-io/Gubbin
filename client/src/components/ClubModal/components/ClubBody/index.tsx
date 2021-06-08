import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { Review } from "../../../../constants/types";
import ClubReviews from "../ClubReviews";
import useStyles from "./style";

export interface ClubBodyProp {
  clubid: string;
  clubName: string;
  about: string;
  numMembers: number;
  rating?: number;
  reviews: Review[];
}

const ClubBody: React.FC<ClubBodyProp> = ({
  clubid,
  clubName,
  about,
  numMembers,
  rating,
  reviews,
}) => {
  const classes = useStyles();

  return (
    <Tab.Container defaultActiveKey="first">
      <Row style={{ height: "100%", marginBottom: "8px" }}>
        {/* Sidebar */}
        <Col sm={3}>
          <p>Ratings: {rating ? `${rating} / 5` : `No ratings yet`}</p>
          <p>Members: {numMembers}</p>
          {/* Vertical Tab Group */}
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">{`Ratings & Reviews`}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        {/* Main Content of Tab */}
        <Col className={classes.contentColumn}>
          <Tab.Content className={classes.contentTab}>
            {/* About Tab */}
            <Tab.Pane eventKey="first">
              <h4>About</h4>
              <p>{about}</p>
            </Tab.Pane>
            {/* Ratings & Reviews Tab */}
            <Tab.Pane eventKey="second">
              <ClubReviews
                clubid={clubid}
                clubName={clubName}
                reviews={reviews}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ClubBody;
