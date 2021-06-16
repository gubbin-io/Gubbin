import React, { useState } from "react";

import DiscoverPage from "./DiscoverPage";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import useStyles from "./style";
import ClubModal from "./ClubModal";
import CategoriesPage from "./CategoriesPage";
import MyClubsPage from "./MyClubsPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import SearchPage from "./SearchPage";
import { GET_CURRENT_USER } from "../constants/queries";
import { useQuery } from "@apollo/client";
import LoadingScreen from "./LoadingScreen";
import LoginScreen from "./LoginScreen";
import CollectionsPageWithId from "./CollectionsPage/CollectionsPageWithId";
import ManageClubsPage from "./ManageClubsPage";
import ClubManagementPage from "./ClubManagementPage";

const App: React.FC<any> = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [modalClubId, setModalClubId] = useState<string | undefined>(undefined);
  const [searchString, setSearchString] = useState("");
  const { loading, error, data } = useQuery(GET_CURRENT_USER);

  if (loading) return <LoadingScreen />;
  if (error) {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    return <LoginScreen />;
  }

  sessionStorage.setItem("userId", data.currentUser.userId);

  const showModalClub = (modalClubId: string) => {
    setModalClubId(modalClubId);
    setShow(true);
  };

  const isOrganiser = data.currentUser.organizerClubs.length > 0;
  return (
    <>
      <TopBar />
      <div className={classes.outerContainer}>
        <SideBar
          searchString={searchString}
          setSearchString={setSearchString}
          showManageTab={isOrganiser}
        />
        <ClubModal show={show} setShow={setShow} clubId={modalClubId} />
        <div className={classes.scrollContainer}>
          <Container className={classes.mainContainer}>
            {searchString === "" ? (
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
                  <MyClubsPage
                    showModalClub={(id) => {
                      showModalClub(id);
                    }}
                  />
                </Route>

                <Route
                  path="/collection/:id"
                  render={({ match }) => {
                    return (
                      <CollectionsPageWithId
                        collectionID={match.params.id}
                        showModalClub={showModalClub}
                      />
                    );
                  }}
                />

                {isOrganiser && (
                  <Route exact path="/manage">
                    <ManageClubsPage
                      showModalClub={(id) => {
                        showModalClub(id);
                      }}
                    />
                  </Route>
                )}

                {isOrganiser && (
                  <Route
                    path="/manage/:id"
                    render={({ match }) => {
                      return <ClubManagementPage clubId={match.params.id} />;
                    }}
                  />
                )}

                <Route path="/">
                  <Redirect to="/discover" />;
                </Route>
              </Switch>
            ) : (
              <SearchPage
                searchString={searchString}
                showModalClub={showModalClub}
              />
            )}
          </Container>
        </div>
      </div>
    </>
  );
};

export default App;
