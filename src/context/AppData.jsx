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
    name: "",
    email: "",
    phone: "",
    plan: "",
    planDuration: "Monthly",
    addOns: {
      onlineService: {
        title: "Online service",
        selected: true,
        price: 1,
      },
      largerStorage: {
        title: "Larger storage",
        selected: true,
        price: 2,
      },
      customizableProfile: {
        title: "Customizable profile",
        selected: true,
        price: 2,
      },
    },
  });

  // input errors;
  const [errors, setErrors] = useState({});

  // handle form validation;
  const validateInput = (e) => {
    const name = e?.target?.name;
    let isValid = true;
    const newErrors = {};
    const phoneRegex = /^\d{3}\d{3}\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (name) {
      // Validate phone number to be 10 digit;
      case "phone":
        if (!formData.phone) {
          newErrors.phone = "Phone is required";
          isValid = false;
        } else if (!phoneRegex.test(formData.phone)) {
          newErrors.phone = "Enter a valid 10-digit phone number";
          isValid = false;
        }

      // Validate email
      case "email":
        if (!formData.email) {
          newErrors.email = "Email is required";
          isValid = false;
        } else if (!emailRegex.test(formData.email)) {
          newErrors.email = "Enter a valid a email address";
          isValid = false;
        }
        break;

      // validate both;
      default:
        if (!formData.email) {
          newErrors.email = "Email is required";
          isValid = false;
        } else if (!emailRegex.test(formData.email)) {
          newErrors.email = "Enter a valid a email address";
          isValid = false;
        }
        if (!formData.phone) {
          newErrors.phone = "Phone is required";
          isValid = false;
        } else if (!phoneRegex.test(formData.phone)) {
          newErrors.phone = "Enter a valid 10-digit phone number";
          isValid = false;
        }
        break;
    }

    setErrors(newErrors);
    return isValid;
  };

  // handle Next-Button-Click;
  function handleNextButtonClick() {
    let nextId = activePage + 1;

    if (validateInput()) {
      if (nextId <= pageData.length) {
        handleNavbarClick(nextId);
      }
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

  // handle Navbar Click;
  function handleNavbarClick(id) {
    // If valid input then proceed;
    if (validateInput()) {
      const transformedArray = pageData.map((object) => {
        return { ...object, isActive: object.id === id ? true : false };
      });
      setPageData(transformedArray);
      setActivePage(
        transformedArray.findIndex((object) => object.isActive) + 1
      );

      navigate(
        `/step-${transformedArray.findIndex((object) => object.isActive) + 1}`
      );
    }
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
        [name]: { ...prevData.addOns[name], selected: checked },
      },
    }));
  }

  // Calculate the plan price;
  const calculatePlanPrice = () => {
    const price =
      formData.planDuration === "Monthly" && formData.plan === "Arcade"
        ? "$9/mo"
        : formData.planDuration === "Monthly" && formData.plan === "Arcade"
        ? "$90/yr"
        : formData.planDuration === "Monthly" && formData.plan === "Pro"
        ? "$15/mo"
        : formData.planDuration === "Monthly" && formData.plan === "Advanced"
        ? "$12/mo"
        : formData.planDuration === "Yearly" && formData.plan === "Arcade"
        ? "$90/yr"
        : formData.planDuration === "Yearly" && formData.plan === "Advanced"
        ? "$120/yr"
        : "$150/yr";
    return price;
  };

  //  Calculate addon price;
  const calculateAddOnItem = () => {
    const items = Object.entries(formData.addOns).map(([key, addon]) => {
      return addon.selected ? (
        <div
          key={key}
          className="summary-items-container-addons flex flex-js-spbtw-al-cnt"
        >
          <h3>{addon.title}</h3>
          <span>
            {formData.planDuration === "Monthly"
              ? `+$${addon.price}/mo
          `
              : `+$${addon.price * 10}/yr`}
          </span>
        </div>
      ) : null;
    });

    return items;
  };

  // Calculate the total price based on selected addons;
  const calculateTotalPrice = () => {
    const addons = formData.addOns;
    const addonPrices = {
      onlineService: 1,
      largerStorage: 2,
      customizableProfile: 2,
    };

    const selectedAddons = Object.keys(addons).filter(
      (addon) => addons[addon].selected
    );
    let totalPrice = selectedAddons.reduce(
      (total, addon) => total + addonPrices[addon],
      0
    );
    if (formData.plan === "Arcade" && formData.planDuration === "Yearly") {
      totalPrice = `$${totalPrice * 10 + 90}/yr`;
      return totalPrice;
    } else if (
      formData.plan === "Advanced" &&
      formData.planDuration === "Yearly"
    ) {
      totalPrice = `$${totalPrice * 10 + 120}/yr`;
      return totalPrice;
    } else if (formData.plan === "Pro" && formData.planDuration === "Yearly") {
      totalPrice = `$${totalPrice * 10 + 150}/yr`;
      return totalPrice;
    } else if (formData.plan === "Pro" && formData.planDuration === "Monthly") {
      totalPrice = `$${totalPrice + 15}/mo`;
      return totalPrice;
    } else if (
      formData.plan === "Advanced" &&
      formData.planDuration === "Monthly"
    ) {
      totalPrice = `$${totalPrice + 12}/mo`;
      return totalPrice;
    } else if (
      formData.plan === "Arcade" &&
      formData.planDuration === "Monthly"
    ) {
      totalPrice = `$${totalPrice + 9}/mo`;
      return totalPrice;
    }
  };

  return (
    <AppContext.Provider
      value={{
        pageData,
        activePage,
        showThankYou,
        formData,
        errors,
        validateInput,
        handleAddOnChange,
        handleToggleStatus,
        handleFormChange,
        navigate,
        handleConfirmButtonClick,
        handleNextButtonClick,
        handlePrevButtonClick,
        handleNavbarClick,
        calculateAddOnItem,
        calculatePlanPrice,
        calculateTotalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
