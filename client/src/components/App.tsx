import React, { useState } from "react";

import DiscoverPage from "./DiscoverPage";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import useStyles from "./style";
import ClubModal from "./ClubModal";
import CollectionsPage from "./CollectionsPage";
import CategoriesPage from "./CategoriesPage";
import MyClubsPage from "./MyClubsPage";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

const App: React.FC<any> = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [modalClubId, setModalClubId] = useState<string | undefined>(undefined);

  const showModalClub = (modalClubId: string) => {
    setModalClubId(modalClubId);
    setShow(true);
  };

  return (
    <>
      <TopBar />
      <div className={classes.outerContainer}>
        <SideBar />
        <ClubModal show={show} setShow={setShow} clubId={modalClubId} />

        <Switch>
          <Route path="/discover">
            <DiscoverPage
              showModalClub={(id) => {
                showModalClub(id);
              }}
            />
          </Route>
          <Route path="/categories">
            <CategoriesPage
              showModalClub={(id) => {
                showModalClub(id);
              }}
            />
          </Route>
          <Route path="/myclubs">
            <MyClubsPage />
          </Route>

          <Route exact path="/">
            <Redirect to="/discover" />;
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
