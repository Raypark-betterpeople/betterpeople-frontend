import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateAccount } from "../pages/create-account";
import { Login } from "../pages/login";
import { MainPage } from "./mainpage";
import '../css/App.css'
import { isLoggedInVar } from "../apollo";
import { MyPage } from "../pages/my-page";
import { ScrollTop } from "../components/scrollTop";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/my-page' element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
