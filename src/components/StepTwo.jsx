import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppData";

export default function StepTwo() {
  const { activePage, navigate } = useContext(AppContext);

  useEffect(() => {
    navigate(`/step-${activePage}`);
  }, [navigate, activePage]);
  return <h1>StepTwo</h1>;
}
