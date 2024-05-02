import React from "react";
import { Route, Routes } from "react-router-dom";

// -------------------- -------------------- -------------------- -------------------- --------------------

import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
