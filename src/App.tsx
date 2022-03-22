import React from "react";
import { Footer } from "./components/footer";
import { KakaoChat } from "./components/kakao";
import { AppRouter } from "./routers/app-router";

function App() {
  return (
    <>
   <AppRouter />
   <KakaoChat />
   <Footer />
   </>
  );
}

export default App;
