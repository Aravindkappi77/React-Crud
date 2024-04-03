import React, { createContext, useContext, useState } from "react";

const DetailsDataContext = createContext();

export const useDetailsDataContext = () => useContext(DetailsDataContext);

export const DetailsDataProvider = ({ children }) => {
  const [detailsData, setDetailsData] = useState(null);

  const setDetails = (data) => {
    setDetailsData(data);
  };

  return (
    <DetailsDataContext.Provider value={{ detailsData, setDetails }}>
      {children}
    </DetailsDataContext.Provider>
  );
};
