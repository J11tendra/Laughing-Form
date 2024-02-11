import React, { useState, createContext } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [pageData, setPageData] = React.useState([
    {
      id: 1,
      title: "STEP 1",
      description: "YOUR INFO",
      isActive: true,
    },
    {
      id: 2,
      title: "STEP 2",
      description: "SELECT PLAN",
      isActive: false,
    },
    {
      id: 3,
      title: "STEP 3",
      description: "ADD-ONS",
      isActive: false,
    },
    {
      id: 4,
      title: "STEP 4",
      description: "SUMMARY",
      isActive: false,
    },
  ]);

  // Current Active Page;
  const [activePage, setActivePage] = useState(
    1 /*() => {
    return pageData.findIndex((object) => object.isActive) + 1;
  }*/
  );

  // handle Next-Button-Click;
  function handleNextButtonClick() {
    // let nextId = pageData.findIndex((object) => object.isActive) + 2;
    let nextId = activePage + 1;
    console.log(nextId);
    handleNavbarClick(nextId);
    console.log(nextId);
  }

  // handle Prev-Button-Click;
  function handlePrevButtonClick() {
    // let PrevId = activeState.findIndex((object) => object.isActive)
    let prevId = activePage - 1;
    console.log(`PrevId: ${prevId}`);
  }

  // handle Navbar -Click;
  function handleNavbarClick(id) {
    const transformedArray = pageData.map((object) => {
      return { ...object, isActive: object.id === id ? true : false };
    });
    setPageData(transformedArray);
    setActivePage(transformedArray.findIndex((object) => object.isActive) + 1);
  }

  return (
    <AppContext.Provider
      value={{
        pageData,
        activePage,
        handleNextButtonClick,
        handlePrevButtonClick,
        handleNavbarClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
