import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/Home";
import { LoginPage } from "./pages/login";
import { RouterLayout } from "./common/routerLayout/RouterLayout";
import { UserProfilePage } from "./pages/UserProfile/userProfile";
import { DogProfileSelect } from "./pages/DogProfileSelect/DogProfileSelect";
import { UserUpdatePage } from "./pages/UserProfile/userUpdatePage";
import { data } from "./mocks/userMockData";
import { dogData } from "./mocks/dogMockData";
import { DogProfilePage } from "./pages/dogProfile/DogProfile";
import { DogUpdatePage } from "./pages/dogProfile/dogUpdatePage";
import { RegisterPage } from "./pages/register/Register";
import { Matchs } from "./components/Matchs/Matchs";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route
          path="/home"
          element={<HomePage user={data[0]} dog={dogData[0]} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/userProfile" element={<UserProfilePage />} />
        <Route path="/dogProfile" element={<DogProfilePage />} />
        {/* <Route
          path="/dogProfileSelect"
          element={<DogProfileSelect dog={dogData[0]} />}
        /> */}
        <Route path="/matchs" element={<Matchs dogs={dogData} />} />
        <Route path="/updateProfile" element={<UserUpdatePage />} />
        <Route path="/updateDogProfile" element={<DogUpdatePage />} />
      </Route>
    </Routes>
  );
};
