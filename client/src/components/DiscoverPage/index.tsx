import React from "react";
import CollectionsModule from "../CollectionsModule";
import FeaturedSocieties from "./components/FeaturedSocieties";

export interface DiscoverPageProp {
  showModalClub: (id: string) => void;
}

const DiscoverPage: React.FC<DiscoverPageProp> = ({ showModalClub }) => {
  return (
    <>
      <FeaturedSocieties showModalClub={showModalClub} />
      {/* Summer is calling! */}
      <CollectionsModule
        collectionID="60c24477bc2a8247244184a5"
        showModalClub={showModalClub}
      />
      {/* Beat the heat! */}
      <CollectionsModule
        collectionID="60c24ba2cdbf3552fd23f897"
        showModalClub={showModalClub}
      />
    </>
  );
};

export default DiscoverPage;
