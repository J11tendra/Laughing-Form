import { useContext, useEffect } from "react";
import AppContext from "../context/AppData";

export default function StepThree() {
  const { activePage, navigate } = useContext(AppContext);

  useEffect(() => {
    navigate(`/step-${activePage}`);
  }, [navigate, activePage]);
  return <h1>StepThree</h1>;
}
