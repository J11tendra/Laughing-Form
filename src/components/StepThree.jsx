import { useContext, useEffect } from "react";
import AppContext from "../context/AppData";

export default function StepThree() {
  const { activePage, formData, handleAddOnChange, navigate } =
    useContext(AppContext);

  useEffect(() => {
    navigate(`/step-${activePage}`);
  }, [navigate, activePage]);

  return (
    <div className="step-body flex flex-js-al-cnt">
      <div className="form-container flex flex-js-cnt">
        <form>
          <div className="form-align flex flex-col">
            <h1 className="form-head">Pick add-ons</h1>
            <p className="form-para">
              Add-ons help enhance your gaming experience.
            </p>
            <div className="stp-three-input-container flex flex-col">
              <label
                htmlFor="onlineService"
                className={`step-three-label-text flex flex-js-spbtw-al-cnt ${
                  formData.addOns.onlineService ? "active" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="onlineService"
                  checked={formData.addOns.onlineService}
                  onChange={(e) => {
                    handleAddOnChange(e);
                  }}
                />
                <div className="label-head">
                  <h3>Online Service</h3>
                  <p>Access to multiplayer games</p>
                </div>
                <span>
                  {formData.planDuration === "Monthly" ? "+$1/mo" : "+$10/yr"}
                </span>
              </label>
              <label
                htmlFor="largerStorage"
                className={`step-three-label-text flex flex-js-spbtw-al-cnt ${
                  formData.addOns.largerStorage ? "active" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="largerStorage"
                  checked={formData.addOns.largerStorage}
                  onChange={(e) => {
                    handleAddOnChange(e);
                  }}
                />
                <div className="label-head">
                  <h3>Larger storage</h3>
                  <p>Extra 1TB of cloud save</p>
                </div>
                <span>
                  {formData.planDuration === "Monthly" ? "+$2/mo" : "+$20/yr"}
                </span>
              </label>
              <label
                htmlFor="customizableProfile"
                className={`step-three-label-text flex flex-js-spbtw-al-cnt ${
                  formData.addOns.customizableProfile ? "active" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="customizableProfile"
                  checked={formData.addOns.customizableProfile}
                  onChange={(e) => {
                    handleAddOnChange(e);
                  }}
                />
                <div className="label-head">
                  <h3>Customizable Profile</h3>
                  <p>Custom theme on your profile</p>
                </div>
                <span>
                  {formData.planDuration === "Monthly" ? "+$2/mo" : "+$20/yr"}
                </span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
