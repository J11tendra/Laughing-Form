import { useContext, useEffect } from "react";
import AppContext from "../context/AppData";

export default function StepOne() {
  const { activePage, navigate, formData, handleFormChange } =
    useContext(AppContext);

  useEffect(() => {
    navigate(`/step-${activePage}`);
  }, [navigate, activePage]);
  return (
    <div className="step-body flex flex-js-al-cnt">
      <div className="form-container flex flex-js-cnt">
        <form>
          <div className="form-align flex flex-col">
            <h1 className="form-head">Personal Info</h1>
            <p className="form-para">
              Please provide your name, email address, and phone number.
            </p>
            <div className="stp-one-input-container flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="text-input"
              />
            </div>
            <div className="stp-one-input-container flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="text-input"
              />
            </div>
            <div className="stp-one-input-container flex flex-col">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="text-input"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
