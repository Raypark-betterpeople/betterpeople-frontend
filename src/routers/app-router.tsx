import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateAccount } from "../pages/create-account";
import { Login } from "../pages/login";
import { MainPage } from "../pages/mainpage";
import '../css/App.css'
import { MyPage } from "../pages/my-page";
import { ScrollTop } from "../components/scrollTop";
import { NotFound } from "../pages/404";
import { ConfirmEmail } from "../pages/confirm-email";
import { SelectDonate } from "../pages/select-donation";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
          <Route path='/confirm' element={<ConfirmEmail />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/my-page' element={<MyPage />} />
          <Route path='donate/:id' element={<SelectDonate />}/>
      </Routes>
    </BrowserRouter>
  );
};
