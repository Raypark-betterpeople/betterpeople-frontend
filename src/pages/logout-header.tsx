import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/ahnlogo.png";
import { IoMdClose } from "react-icons/io";
import { Font } from "../common/styled";

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
  @media only screen and (max-width: 900px) {
    display: none;
  }
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
  :hover {
    color: rgb(82, 27, 201);
  }
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

const SmallDeviceMenu = styled.div`
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    display: block;
  }
`;

const SmallDeviceMenuContainer = styled.div<{
  displayed: boolean;
  transforms: boolean;
}>`
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100vw;
  z-index: 200;
  background-color: rgba(166, 110, 189, 0.7);
  transform: ${(props) =>
    props.transforms === true ? "translateY(65px)" : "translateY(-30vh)"};
  top: 0;
  left: 0;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoutHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onClickMenuOpen = () => {
    setMenuOpen(true);
  };
  const onClickMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <HeaderSection>
        <Link to="/">
          <LogoBox>
            <LogoImage src={Logo} alt="logo image" />
          </LogoBox>
        </Link>
        <UlStyle>
          <Link to="/notices">
            <LiStyle>공지사항</LiStyle>
          </Link>
          <Link to="/about">
            <LiStyle>서비스 소개</LiStyle>
          </Link>
          <Link to="/login">
            <LiStyle>일러스트 정품인증</LiStyle>
          </Link>
          <LiStyle>
            <Link to="/login">
              <GaleryButton>로그인</GaleryButton>
            </Link>
          </LiStyle>
        </UlStyle>
        {menuOpen ? (
          <SmallDeviceMenu onClick={() => onClickMenuClose()}>
            <IoMdClose size="1.5rem" />
          </SmallDeviceMenu>
        ) : (
          <SmallDeviceMenu onClick={() => onClickMenuOpen()}>
            <HiMenu size="1.5rem" />
          </SmallDeviceMenu>
        )}
      </HeaderSection>
      <SmallDeviceMenuContainer transforms={menuOpen} displayed={menuOpen}>
        <Link to="/notices">
          <Font
            fontColor="white"
            fontSize="1.2rem"
            fontWeight="500"
            marginBottom="1rem"
          >
            공지사항
          </Font>
        </Link>
        <Link to="/about">
          <Font
            fontColor="white"
            fontSize="1.2rem"
            fontWeight="500"
            marginBottom="1rem"
          >
            서비스 소개
          </Font>
        </Link>
        <Link to="/login">
          <Font
            fontColor="white"
            fontSize="1.2rem"
            fontWeight="500"
            marginBottom="1rem"
          >
            로그인
          </Font>
        </Link>
        <Link to="/create-account">
          <Font
            fontColor="white"
            fontSize="1.2rem"
            fontWeight="500"
            marginBottom="1rem"
          >
            회원가입
          </Font>
        </Link>
      </SmallDeviceMenuContainer>
    </>
  );
};
