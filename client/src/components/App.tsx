import React, { useState } from "react";

import DiscoverPage from "./DiscoverPage";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import useStyles from "./style";
import ClubModal from "./ClubModal";
import CollectionsPage from "./CollectionsPage";

const App: React.FC<any> = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [modalClubId, setModalClubId] = useState<string | undefined>(undefined);

  const showModalClub = (modalClubId: string) => {
    setModalClubId(modalClubId);
    setShow(true);
  };

  const showCollectionsPage = false;

  return (
    <>
      <TopBar />
      <div className={classes.outerContainer}>
        <SideBar />
        <ClubModal show={show} setShow={setShow} clubId={modalClubId} />
        {showCollectionsPage ? (
          <CollectionsPage collectionTitle={"Summer Calling!"} />
        ) : (
          <DiscoverPage
            showModalClub={(id) => {
              showModalClub(id);
            }}
          />
        )}
      </div>
    </>
  );
};

export default App;
