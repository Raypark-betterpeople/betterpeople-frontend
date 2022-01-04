import React from "react";
import styled from "styled-components";
import Logo from "../images/noaround_logo.png";

const Container = styled.div`
  width: 100vw;
  background-color: rgb(250, 250, 250);
  padding-bottom: 3rem;
`;

const NoAroundLogo = styled.img`
  width: 100px;
  height: 100px;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20%;
  grid-template-rows: 3fr 1fr 1fr 1fr 1fr; 
  justify-content: center;
  align-items: center;
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
`;

const Font = styled.p<{
  fontSize: string;
  fontWeight?: string;
  fontColor?: string;
}>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor};
  line-height: 1.8rem;
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
          <Font fontSize="20px" fontWeight="600">
            Team
          </Font>
          <Font fontSize="16px" fontColor="rgb(150,150,150)">
            더 좋은 사람들 블로그
          </Font>
          <Font fontSize="16px" fontColor="rgb(150,150,150)">
            채용
          </Font>
        </ItemContainer>
        <ItemContainer>
          <NoAroundLogo src={Logo} alt="로고" />
        </ItemContainer>
        <ItemContainer>
          <Font fontSize="18px" fontWeight="600">
            Copyright ⓒ BetterPeople Inc. All Rights Reserved
          </Font>
        </ItemContainer>
        <ItemContainer>
          <Font fontSize="14px" fontColor="rgb(150,150,150)">
            사업자등록번호 411-86-01799 | 통신판매신고 제2020-서울강남-01164호
            | 대표 : 박상준
          </Font>
          <Font fontSize="14px" fontColor="rgb(150,150,150)">
            서울특별시 강남구 테헤란로 131, 15층 (역삼동,한국지식재산센터)
          </Font>
        </ItemContainer>
        <ItemContainer>
          <Font fontSize="18px" fontWeight="600">
            BetterPeople Inc. 기본약관
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
