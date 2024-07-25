import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/styles.scss";
import { ContextProvider } from "./context/AppData";

import Navbar from "./components/Navbar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import ButtonBottom from "./components/ButtonBottom";

export default function App() {
  return (
    <main className="main-grid grid">
      <BrowserRouter>
        <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/step-1" element={<StepOne />} />
            <Route path="/step-2" element={<StepTwo />} />
            <Route path="/step-3" element={<StepThree />} />
            <Route path="/step-4" element={<StepFour />} />
            <Route path="/" element={<StepOne />} />
          </Routes>
          <ButtonBottom />
        </ContextProvider>
      </BrowserRouter>
    </main>
  );
}
