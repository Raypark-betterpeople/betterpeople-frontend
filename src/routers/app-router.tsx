import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateAccount } from "../pages/create-account";
import { Login } from "../pages/login";
import { MainPage } from "./mainpage";
import '../css/App.css'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-account' element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
};
