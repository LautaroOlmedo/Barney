import React from "react";
import { Route, Routes } from "react-router-dom";


import { HomePage } from "./pages/home/Home";
import { LoginPage } from "./pages/login";
import { RouterLayout } from "./common/routerLayout/RouterLayout";
import { UserProfilePage } from "./pages/UserProfile/userProfile";
import { LoginError } from "./pages/login/errors/loginError";
import {data} from "./mocks/userMockData"


export const AppRouter: React.FC<{}> = () => {

  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/errors" element={<LoginError error="Usuario o contraseña incorrectos"/>} />
        <Route path="/profile" element={<UserProfilePage user={data[0]}/>} />
        // si la ruta no tiene que tener navBar o footer va por acá bajo
      </Route>
    </Routes>
  );
};
