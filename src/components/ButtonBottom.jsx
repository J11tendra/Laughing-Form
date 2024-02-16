import { useContext } from "react";
import AppContext from "../context/AppData";

const BtnNext = () => {
  const {
    showThankYou,
    handlePrevButtonClick,
    handleNextButtonClick,
    handleConfirmButtonClick,
    activePage,
  } = useContext(AppContext);
  return !showThankYou ? (
    <div className="flex flex-js-al-cnt">
      <div className="footer-btn flex flex-js-spbtw-al-cnt">
        {activePage >= 2 && (
          <button className="back-btn" onClick={handlePrevButtonClick}>
            Go Back
          </button>
        )}
        {activePage === 4 ? (
          <button className="next-btn" onClick={handleConfirmButtonClick}>
            Confirm
          </button>
        ) : (
          <button className="next-btn" onClick={handleNextButtonClick}>
            Next Step
          </button>
        )}
      </div>
    </div>
  ) : null;
};

export default BtnNext;
