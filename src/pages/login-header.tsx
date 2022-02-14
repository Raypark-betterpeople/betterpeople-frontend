import React, { useState } from "react";
import styled from "styled-components";
import { Loading } from "./loading";
import Logo from "../images/ahnlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useMe } from "../hooks/useMe";
import { isLoggedInVar } from "../apollo";
import { HiMenu } from "react-icons/hi";
import { Font } from "../common/styled";
import { IoMdClose } from "react-icons/io";

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
  margin-left: 2rem;
  color: rgb(100, 100, 100);
  display: inline-block;
  :hover {
    color: rgb(95, 75, 139);
  }
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 0.2rem;
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

const GaleryButton = styled.button`
  all: unset;
  font-size: 14px;
  padding: 0.8rem;
  color: rgb(123, 86, 202);
  background-color: rgba(122, 81, 211, 0.2);
  border-radius: 5px;
  font-weight: 600;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
  }
`;

export const LoginHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onClickMenuOpen = () => {
    setMenuOpen(true);
  };
  const onClickMenuClose = () => {
    setMenuOpen(false);
  };
  const navigate = useNavigate();
  const { data, loading, error } = useMe();
  if (!data || loading || error) {
    return <Loading />;
  }
  const logoutClick = () => {
    localStorage.clear();
    isLoggedInVar(false);
    navigate("/");
    window.location.replace("/");
  };
  return (
    <>
    <HeaderSection>
      <LogoBox>
        <Link to="/">
          <LogoImage src={Logo} alt="logo image" />
        </Link>
      </LogoBox>
      <UlStyle>
        <Link to="/notices">
          <LiStyle>공지사항</LiStyle>
        </Link>
        <Link to="/about">
          <LiStyle>서비스 소개</LiStyle>
        </Link>
        <Link to="/verify-illust">
          <LiStyle>일러스트 정품인증</LiStyle>
        </Link>
        <LiStyle>
          <Link to="/my-page">
            <GaleryButton>내 갤러리 →</GaleryButton>
          </Link>
        </LiStyle>
        <LiStyle style={{ marginLeft: "0.5rem" }}>
          <GaleryButton onClick={logoutClick}>로그아웃</GaleryButton>
        </LiStyle>
      </UlStyle>
      {data.me.adminUser === true ? (
        <Link to="/admin">
          <GaleryButton>관리자페이지</GaleryButton>
        </Link>
      ) : (
        ""
      )}
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
    <Link to="/verify-illust">
      <Font
        fontColor="white"
        fontSize="1.2rem"
        fontWeight="500"
        marginBottom="1rem"
      >
        일러스트 정품인증
      </Font>
    </Link>
    <Link to="/my-page">
      <Font
        fontColor="white"
        fontSize="1.2rem"
        fontWeight="500"
        marginBottom="1rem"
      >
        내 갤러리
      </Font>
    </Link>
    <Font
        onClick={logoutClick}
        fontColor="white"
        fontSize="1.2rem"
        fontWeight="500"
        marginBottom="1rem"
      >
        로그아웃
      </Font>
  </SmallDeviceMenuContainer>
  </>
  );
};
