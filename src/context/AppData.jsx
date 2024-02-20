import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

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

  // Manage Thank You component;
  const [showThankYou, setShowThankYou] = useState(false);

  // managing routes;
  const navigate = useNavigate();

  // Current Active Page;
  const [activePage, setActivePage] = useState(1);

  // All user data;
  const [formData, setFormData] = useState({
    name: "Jitendra",
    email: "email",
    phone: "9356565838",
    plan: "",
    planDuration: "Monthly",
    addOns: {
      onlineService: true,
      largerStorage: false,
      customizableProfile: true,
    },
  });

  // handle Next-Button-Click;
  function handleNextButtonClick() {
    let nextId = activePage + 1;

    if (nextId <= pageData.length) {
      handleNavbarClick(nextId);
    }
  }

  // handle Prev-Button-Click;
  function handlePrevButtonClick() {
    let prevId = activePage - 1;

    if (prevId >= 1) {
      handleNavbarClick(prevId);
    }
  }

  // handle Confirm-Button-Click to toggle Thank You Comp;
  function handleConfirmButtonClick() {
    setShowThankYou((prevValue) => !prevValue);
  }

  // handle Navbar -Click;
  function handleNavbarClick(id) {
    const transformedArray = pageData.map((object) => {
      return { ...object, isActive: object.id === id ? true : false };
    });
    setPageData(transformedArray);
    setActivePage(transformedArray.findIndex((object) => object.isActive) + 1);

    navigate(
      `/step-${transformedArray.findIndex((object) => object.isActive) + 1}`
    );
  }

  // handle form data change;
  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // handle Toggle status;
  function handleToggleStatus() {
    setFormData((prevData) => ({
      ...prevData,
      planDuration: prevData.planDuration === "Monthly" ? "Yearly" : "Monthly",
    }));
  }

  // handle Add-ons change;
  function handleAddOnChange(e) {
    const { name, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      addOns: {
        ...prevData.addOns,
        [name]: checked,
      },
    }));

    () => {
      console.log(formData.addOns);
      console.log("Label is clicked now");
    };
  }

  return (
    <AppContext.Provider
      value={{
        pageData,
        activePage,
        showThankYou,
        formData,
        handleAddOnChange,
        handleToggleStatus,
        handleFormChange,
        navigate,
        handleConfirmButtonClick,
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
