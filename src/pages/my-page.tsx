import React from "react";
import { CommonBodyContainer } from "../common/styled";
import { useMe } from "../hooks/useMe";
import { LoginHeader } from "./login-header";

export const MyPage = () => {
  const { data: UserData } = useMe();
  return (
    <CommonBodyContainer>
      <LoginHeader />
      <div style={{marginTop:'3rem'}}>
        {UserData?.me.provideImage?.map((images, index) => {
          return (
            <div key={index} style={{position:'relative', width: "300px", marginTop:'1rem' }}>
              <div style={{backgroundImage:`url('${images.imageUrl}')`, width:'300px', height:'150px', backgroundPosition:'center'}}/>
              <div>{images.donateDurationDate}</div>
              <div>{images.donateSessionTitle}</div>
              <p>토큰</p>
              <span style={{display:'block', wordWrap:'break-word', backgroundColor:'rgb(200,200,200)'}}>{images.token}</span>
            </div>
          );
        })}
      </div>
    </CommonBodyContainer>
  );
};
