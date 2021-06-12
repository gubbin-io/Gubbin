import React from "react";
import Spinner from "react-bootstrap/Spinner";

export interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = ({}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Spinner animation="border" variant={"dark"} />
    </div>
  );
};

export default LoadingScreen;
