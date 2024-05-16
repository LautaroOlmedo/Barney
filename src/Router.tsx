import React from "react";
import { Route, Routes } from "react-router-dom";

// -------------------- -------------------- -------------------- -------------------- --------------------

import { HomePage } from "./pages/home/Home";
import { LoginPage } from "./pages/login";
import { RouterLayout } from "./common/routerLayout/RouterLayout";
import { UserProfilePage } from "./pages/UserProfile/userProfile";
import { DogProfileSelect } from "./pages/DogProfileSelect/DogProfileSelect";
import {data} from "./mocks/userMockData";
import{dogData} from "./mocks/dogMockData";


export const AppRouter: React.FC<{}> = () => {

  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfilePage user={data[0]}/>} />
        <Route path="/dogProfileSelect" element={<DogProfileSelect dog={dogData[0]} />}/>
        // si la ruta no tiene que tener navBar o footer va por acá bajo
      </Route>
    </Routes>
  );
};
