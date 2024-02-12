import { useContext, useEffect } from "react";
import AppContext from "../context/AppData";

export default function StepOne() {
  const { activePage, navigate } = useContext(AppContext);

  useEffect(() => {
    navigate(`/step-${activePage}`);
  }, [navigate, activePage]);
  return <h1>StepOne</h1>;
}
