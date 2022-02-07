import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/ahnlogo.png";

const HeaderSection = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
`;

const UlStyle = styled.ul`
  display: flex;
  align-items: center;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LiStyle = styled.li`
  text-decoration: none;
  font-size: 15px;
  color: rgb(100, 100, 100);
  margin-right: 3rem;
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 0.2rem;
`;

const GaleryButton = styled.button`
  all: unset;
  font-size: 14px;
  padding: 0.8rem 1rem 0.8rem 1rem;
  color: rgb(95, 75, 139);
  background-color: rgba(95, 75, 139, 0.2);
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;

const Font = styled.p<{
  fontSize: string;
  fontColor: string;
  fontWeight: string;
}>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.fontWeight};
`;

export const LogoutHeader = () => {
  return (
    <HeaderSection>
      <LogoBox>
        <LogoImage src={Logo} alt="logo image" />
      </LogoBox>
      <UlStyle>
        <Link to="/notices">
          <LiStyle>공지사항</LiStyle>
        </Link>
        <LiStyle>서비스 소개</LiStyle>
        <LiStyle>일러스트 정품인증</LiStyle>
        <LiStyle>
          <Link to="/login">
            <GaleryButton>로그인</GaleryButton>
          </Link>
        </LiStyle>
      </UlStyle>
    </HeaderSection>
  );
};
