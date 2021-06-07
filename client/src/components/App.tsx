import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ExplorePage from "./ExplorePage";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Container fluid>
        <Row className="flex-xl-nowrap">
          <SideBar />
          <Col md={9} xl={10} xs={12} as="main">
            <ExplorePage />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
