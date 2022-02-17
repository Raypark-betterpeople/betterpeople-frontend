import React from "react";
import styled from "styled-components";
import Logo from "../images/ahnlogo.png";

const Container = styled.div`
  background-color: rgb(250, 250, 250);
  padding-bottom: 3rem;
  @media only screen and (max-width: 520px) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
`;

const NoAroundLogo = styled.img`
  width: 100px;
  height: 100px;
  @media only screen and (max-width: 520px) {
    display: none;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20%;
  grid-template-rows: 3fr 1fr 1fr 1fr 1fr; 
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 30% 30% 30%;
  }
  @media only screen and (max-width: 520px) {
    grid-template-rows: 28% 28% 0fr 4% 35% 6% 4%;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  :nth-child(4) {
    grid-column: 1/4;
  }
  :nth-child(5) {
    grid-column: 1/4;
  }
  :nth-child(6) {
    grid-column: 1/4;
  }
  @media only screen and (max-width: 520px) {
    :nth-child(0) {
      grid-column: 1/4;
    }
    :nth-child(1) {
      grid-column: 1/4;
    }
    :nth-child(2) {
      grid-column: 1/4;
    }
  }
`;

const Font = styled.p<{
  fontSize: string;
  fontWeight?: string;
  fontColor?: string;
  hover? : string
}>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor};
  line-height: 1.8rem;
  @media only screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <GridSection>
        <ItemContainer>
          <Font fontSize="20px" fontWeight="600">
            Contact
          </Font>
          <Font fontSize="16px" fontColor="rgb(150,150,150)">
            전화: +82 010-3977-9827
          </Font>
          <Font fontSize="16px" fontColor="rgb(150,150,150)">
            이메일: contact@better-people.org
          </Font>
        </ItemContainer>
        <ItemContainer>
        </ItemContainer>
        <ItemContainer>
          <NoAroundLogo src={Logo} alt="로고" />
        </ItemContainer>
        <ItemContainer>
          <Font fontSize="18px" fontWeight="600">
            Copyright (주)소셜 체이닝 All Rights Reserved
          </Font>
        </ItemContainer>
        <ItemContainer>
          <Font fontSize="14px" fontColor="rgb(150,150,150)">
            사업자등록번호 411-86-01799 | 통신판매신고 제2020-서울강남-01164호
            | 대표 : 박상준
          </Font>
          <Font fontSize="14px" fontColor="rgb(150,150,150)">
            서울특별시 강남구 테헤란로 79길 6 JS타워 1, 3-5층 브이611
          </Font>
        </ItemContainer>
        <ItemContainer>
          <Font fontSize="18px" fontWeight="600">
            Social Chaning Inc. 기본약관
          </Font>
        </ItemContainer>
        <ItemContainer>
        <Font fontSize="14px" fontColor="rgb(150,150,150)">
            서비스 이용약관
          </Font>
        </ItemContainer>
        <ItemContainer>
        <Font fontSize="14px" fontColor="rgb(150,150,150)">
            개인정보 처리방침
          </Font>
        </ItemContainer>
      </GridSection>
    </Container>
  );
};
