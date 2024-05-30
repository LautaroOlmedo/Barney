import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/home/Home";
import { LoginPage } from "./pages/login";
import { RouterLayout } from "./common/routerLayout/RouterLayout";
import { UserProfilePage } from "./pages/UserProfile/userProfile";
import { DogProfileSelect } from "./pages/DogProfileSelect/DogProfileSelect";
import { data } from "./mocks/userMockData";
import { dogData } from "./mocks/dogMockData";
import { LoginError } from "./pages/login/errors/loginError";
import { DogProfilePage } from "./pages/dogProfile/DogProfile";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/home" element={<HomePage dog={dogData[1]} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/login/errors"
          element={<LoginError error="Usuario o contraseña incorrectos" />}
        />
        <Route
          path="/userProfile"
          element={<UserProfilePage user={data[0]} />}
        />
        <Route
          path="/dogProfile"
          element={<DogProfilePage dog={dogData[0]} user={data[0]} />}
        />
        <Route
          path="/dogProfileSelect"
          element={<DogProfileSelect dog={dogData[0]} />}
        />
        //si la ruta no tiene que tener navBar o footer va por acá bajo
      </Route>
    </Routes>
  );
};
