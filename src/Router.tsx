import React from "react";
import { Route, Routes } from "react-router-dom";

// -------------------- -------------------- -------------------- -------------------- --------------------

import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
<<<<<<< HEAD
import { RouterLayout } from "./common/RouterLayout";
import { ProfilePage } from "./pages/profile/profile";
=======
import { RouterLayout } from "./common/RouterLayout/RouterLayout";
>>>>>>> origin/development

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        // si la ruta no tiene que tener navBar o footer va por acá bajo
      </Route>
    </Routes>
  );
};
