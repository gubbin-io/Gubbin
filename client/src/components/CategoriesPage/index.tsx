import React from "react";
import CollectionsModule from "../CollectionsModule";

export interface CategoriesPageProp {
  showModalClub: (id: string) => void;
}

const CategoriesPage: React.FC<CategoriesPageProp> = ({ showModalClub }) => {
  return (
    <>
      {/* Sports */}
      <CollectionsModule
        collectionID="60c2a51cfc9fae915373f2b9"
        showModalClub={showModalClub}
      />
      {/* Academic */}
      <CollectionsModule
        collectionID="60c2a56afc9fae915373f2ba"
        showModalClub={showModalClub}
        showDivider={false}
      />
    </>
  );
};

export default CategoriesPage;
