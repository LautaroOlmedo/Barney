import React from "react";
import { Route, Routes } from "react-router-dom";

// -------------------- -------------------- -------------------- -------------------- --------------------

import { HomePage } from "./pages/home/Home";
import { LoginPage } from "./pages/login";
<<<<<<< HEAD
import { ProfilePage } from "./pages/profile/profile";
import { RouterLayout } from "./common/routerLayout/RouterLayout";
=======
import { RouterLayout } from "./common/RouterLayout";
import { UserProfilePage } from "./pages/profile/userProfile";
>>>>>>> origin/Gonzalo

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        // si la ruta no tiene que tener navBar o footer va por acá bajo
      </Route>
    </Routes>
  );
};
