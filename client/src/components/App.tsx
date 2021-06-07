import React from "react";
import DiscoverPage from "./DiscoverPage";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { useTheme } from "react-jss";
import useStyles from "./style";

const App: React.FC<any> = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

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
