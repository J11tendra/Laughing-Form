import { useContext } from "react";
import AppContext from "../context/AppData";

const BtnNext = () => {
  const { handlePrevButtonClick, handleNextButtonClick, activePage } =
    useContext(AppContext);
  return (
    <div className="footer-btn flex flex-js-spbtw-al-cnt">
      {/* <button type="button" id={props.id} onClick={props.handleClick}>
        Next Step
      </button> */}
      {activePage >= 2 && (
        <button className="back-btn" onClick={handlePrevButtonClick}>
          Go Back
        </button>
      )}
      {activePage === 4 ? (
        <button className="next-btn" onClick={handleNextButtonClick}>
          Confirm
        </button>
      ) : (
        <button className="next-btn" onClick={handleNextButtonClick}>
          Next Step
        </button>
      )}
    </div>
  );
};

export default BtnNext;
