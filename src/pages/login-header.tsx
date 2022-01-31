import React from "react";
import styled from "styled-components";
import { Loading } from "./loading";
import Logo from "../images/noaround_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useMe } from "../hooks/useMe";
import { isLoggedInVar } from "../apollo";

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
    color: rgb(36, 179, 139);
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 0.2rem;
`;

const GaleryButton = styled.button`
  all: unset;
  font-size: 14px;
  padding: 0.8rem;
  color: rgb(36, 179, 139);
  background-color: rgba(36, 179, 139, 0.2);
  border-radius: 5px;
  font-weight: 600;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
  }
`;

const Font = styled.p<{
  fontSize: string;
  fontColor: string;
  fontWeight: string;
}>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.fontWeight};
  @media only screen and (max-width: 520px) {
    font-size: 1rem;
  }
`;

export const LoginHeader = () => {
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
    <HeaderSection>
      <LogoBox>
        <LogoImage src={Logo} alt="logo image" />
        <Font fontSize="20px" fontColor="rgb(36,179,139)" fontWeight="700">
          better people
        </Font>
      </LogoBox>
      <UlStyle>
        <Link to="/notices">
          <LiStyle>공지사항</LiStyle>
        </Link>
        <Link to="/">
          <LiStyle>서비스 소개</LiStyle>
        </Link>
        <Link to="/">
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
    </HeaderSection>
  );
};
