import { useContext, useEffect } from "react";
import AppContext from "../context/AppData";

export default function StepFour() {
  const { activePage, navigate } = useContext(AppContext);

  useEffect(() => {
    navigate(`/step-${activePage}`);
  }, [navigate, activePage]);
  return (
    <div className="step-body flex flex-js-al-cnt">
      <div className="success-container flex flex-col flex-js-al-cnt">
        <img
          src="src/assets/images/icon-thank-you.svg"
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
    </div>
  );
}
