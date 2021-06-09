import React from "react";
import DiscoverPage from "./DiscoverPage";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import useStyles from "./style";

const App: React.FC<any> = () => {
  const classes = useStyles();

  return (
    <>
      <TopBar />
      <div className={classes.outerContainer}>
        <SideBar />
        <DiscoverPage />
      </div>
    </>
  );
};

export default App;
