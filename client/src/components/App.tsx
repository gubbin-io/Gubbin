import React, { useState } from "react";

import DiscoverPage from "./DiscoverPage";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import useStyles from "./style";
import ClubModal from "./ClubModal";
import CategoriesPage from "./CategoriesPage";
import MyClubsPage from "./MyClubsPage";
import { Switch, Route, Redirect } from "react-router-dom";
import CollectionsPage from "./CollectionsPage";
import { Container } from "react-bootstrap";
import SearchPage from "./SearchPage";
import { GET_CURRENT_USER } from "../constants/queries";
import { useQuery } from "@apollo/client";
import LoadingScreen from "./LoadingScreen";
import LoginScreen from "./LoginScreen";

const App: React.FC<any> = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [modalClubId, setModalClubId] = useState<string | undefined>(undefined);
  const [searchString, setSearchString] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_CURRENT_USER);

  if (loading) return <LoadingScreen />;
  if (error)
    return (
      <LoginScreen
        loadUser={() => {
          refetch();
        }}
      />
    );

  console.log(data);

  const showModalClub = (modalClubId: string) => {
    setModalClubId(modalClubId);
    setShow(true);
  };

  return (
    <>
      <TopBar />
      <div className={classes.outerContainer}>
        <SideBar
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <ClubModal show={show} setShow={setShow} clubId={modalClubId} />

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
                    <CollectionsPage
                      collectionID={match.params.id}
                      showModalClub={showModalClub}
                    />
                  );
                }}
              />

              <Route exact path="/">
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
    </>
  );
};

export default App;
