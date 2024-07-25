import { useContext, useEffect } from "react";
import AppContext from "../context/AppData";

export default function StepFour() {
  const {
    activePage,
    navigate,
    formData,
    showThankYou,
    handleNavbarClick,
    calculatePlanPrice,
    calculateAddOnItem,
    calculateTotalPrice,
  } = useContext(AppContext);

  useEffect(() => {
    navigate(`/step-${activePage}`);
  }, [navigate, activePage]);

  const handleChangeButtonClick = () => {
    handleNavbarClick(2);
    navigate("/step-2");
  };

  return (
    <div className="step-body flex flex-js-al-cnt">
      {showThankYou ? (
        // Thank you component;
        <div className="success-container flex flex-col flex-js-al-cnt">
          <img
            src="images/icon-thank-you.svg"
            alt="success-logo"
            className="success-img"
          />
          <h2 className="success-head">Thank you!</h2>
          <p className="success-para">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. if you ever need support, please feel free to email us
            at support@multistepform.com.
          </p>
        </div>
      ) : (
        // Summary component;
        <div className="form-container flex flex-js-cnt">
          <div className="form-align flex flex-col">
            <h1 className="form-head">Finishing up</h1>
            <p className="form-para">
              Double-check everything looks OK before confirming.
            </p>
            <div className="stp-four-summary-container flex flex-col">
              <div className="summary-items-container flex flex-col">
                <div className="summary-items-container-head flex flex-js-spbtw">
                  <h3>
                    {formData.plan}
                    {` (${formData.planDuration})`}
                    <span onClick={handleChangeButtonClick}>Change</span>
                  </h3>
                  <span>{calculatePlanPrice()}</span>
                </div>
                {calculateAddOnItem()}
              </div>
              <div className="summary-total-container flex flex-js-spbtw-al-cnt">
                <h3>Total ({formData.planDuration})</h3>
                <span>{calculateTotalPrice()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
