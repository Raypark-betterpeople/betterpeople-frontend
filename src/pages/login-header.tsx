import { gql, useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import { meQuery } from "../__generated__/meQuery";
import { Loading } from "./loading";
import Logo from "../images/noaround_logo.png";
import { Link } from "react-router-dom";

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
  color: rgb(100,100,100);
  margin-right:3rem;
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

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      nickname
      emailVerified
      profileImg
    }
  }
`;

export const LoginHeader = () => {
  
  const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  console.log(data);
  if (!data || loading || error) {
    return <Loading />;
  }
  return (
    <HeaderSection>
      <LogoBox>
        <LogoImage src={Logo} alt="logo image" />
        <Font fontSize="20px" fontColor="rgb(36,179,139)" fontWeight="700">
          better people
        </Font>
      </LogoBox>
      <UlStyle>
        <LiStyle>공지사항</LiStyle>
        <LiStyle>서비스 소개</LiStyle>
        <LiStyle>
            <Link to='/my-page'><GaleryButton>내 갤러리 →</GaleryButton></Link>
        </LiStyle>
      </UlStyle>
    </HeaderSection>
  );
};
