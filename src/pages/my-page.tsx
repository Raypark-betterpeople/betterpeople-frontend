import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { isLoggedInVar } from '../apollo';

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

export const MyPage = () => {
    const navigate = useNavigate();
    const logoutClick = () => {
        localStorage.clear();
        isLoggedInVar(false);
        navigate('/')
        window.location.replace("/")
      };
    return (
        <GaleryButton onClick={logoutClick}>로그아웃</GaleryButton>
    )
}