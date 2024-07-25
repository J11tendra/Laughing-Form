import { useContext, useEffect } from "react";
import AppContext from "../context/AppData";

export default function StepTwo() {
  const {
    formData,
    activePage,
    navigate,
    handleFormChange,
    handleToggleStatus,
  } = useContext(AppContext);

  useEffect(() => {
    navigate(`/step-${activePage}`);
  }, [navigate, activePage]);
  return (
    <div className="step-body flex flex-js-al-cnt">
      <div className="form-container flex flex-js-cnt">
        <form>
          <div className="form-align flex flex-col">
            <h1 className="form-head">Select Your Plan</h1>
            <p className="form-para">
              You have the option of monthly or yearly billing.
            </p>
            <div className="stp-two-input-container flex flex-col">
              <label
                htmlFor="arcade"
                className={`radio-label flex flex-al-cnt ${
                  formData.plan === "Arcade" ? "checked" : ""
                }`}
              >
                <div className="radio-img">
                  <img src="public/images/icon-arcade.svg" alt="arcade" />
                </div>
                <div className="radio-text flex flex-col">
                  <h3>Arcade</h3>
                  <span className="label-price">
                    {formData.planDuration === "Monthly" ? "$9/mo" : "$90/yr"}
                  </span>
                  {formData.planDuration === "Yearly" && (
                    <span className="label-offer">2 months free</span>
                  )}
                </div>
                <input
                  type="radio"
                  name="plan"
                  value="Arcade"
                  id="arcade"
                  onChange={handleFormChange}
                  className="radio-input"
                />
              </label>
              <label
                htmlFor="advanced"
                className={`radio-label flex flex-al-cnt ${
                  formData.plan === "Advanced" ? "checked" : ""
                }`}
              >
                <div className="radio-img">
                  <img src="public/images/icon-advanced.svg" alt="arcade" />
                </div>
                <div className="radio-text flex flex-col">
                  <h3>Advanced</h3>
                  <span className="label-price">
                    {formData.planDuration === "Monthly" ? "$12/mo" : "$120/yr"}
                  </span>
                  {formData.planDuration === "Yearly" && (
                    <span className="label-offer">2 months free</span>
                  )}
                </div>
                <input
                  type="radio"
                  name="plan"
                  value="Advanced"
                  id="advanced"
                  onChange={handleFormChange}
                  className="radio-input"
                />
              </label>
              <label
                htmlFor="pro"
                className={`radio-label flex flex-al-cnt ${
                  formData.plan === "Pro" ? "checked" : ""
                }`}
              >
                <div className="radio-img">
                  <img src="public/images/icon-pro.svg" alt="arcade" />
                </div>
                <div className="radio-text flex flex-col">
                  <h3>Pro</h3>
                  <span className="label-price">
                    {formData.planDuration === "Monthly" ? "$15/mo" : "$150/yr"}
                  </span>
                  {formData.planDuration === "Yearly" && (
                    <span className="label-offer">2 months free</span>
                  )}
                </div>
                <input
                  type="radio"
                  name="plan"
                  value="Pro"
                  id="pro"
                  onChange={handleFormChange}
                  className="radio-input"
                />
              </label>
            </div>

            {/* toggle switch */}
            <div className="toggle-container flex flex-js-al-cnt">
              Monthly
              <div
                className="toggle-switch flex flex-al-cnt"
                onClick={handleToggleStatus}
              >
                <span
                  className={`switch ${
                    formData.planDuration === "Yearly" ? "active" : ""
                  }`}
                ></span>
              </div>
              Yearly
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
