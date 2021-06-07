import React from "react";
import ExplorePage from "./ExplorePage";
import useStyles from "./style";
import TopBar from "./TopBar";

function App() {
  useStyles();

  return (
    <>
      <TopBar />
      <ExplorePage />
    </>
  );
}

export default App;
