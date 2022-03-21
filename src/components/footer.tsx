import React from "react";
import styled from "styled-components";
import { Font } from "../common/styled";
import Logo from "../images/sociallogo.svg";

const Container = styled.div`
  box-sizing: border-box;
  background-color: rgba(224, 123, 207, 0.068);
  padding: 3rem 18% 2rem 18%;
  @media only screen and (max-width: 520px) {
    padding: 1rem;
    padding-top: 2rem;
  }
`;

const Text = styled.div`
  display: flex;
  @media only screen and (max-width: 520px) {
    margin-bottom: 0.5rem;
  }
`;

const GrayText = styled.p`
  @media only screen and (max-width: 520px) {
    margin-left: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const AddressContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

const VerticalBar = styled.div`
  border-left: 2px solid rgb(80, 80, 80);
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Logos = styled.img`
  width: 200px;
  transform: translateX(-0.5rem);
  @media only screen and (max-width: 520px) {
    width: 150px;
  }
`

export const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <Logos src={Logo} />
        <Font
          fontColor="rgb(150,150,150)"
          fontSize="1rem"
          fontWeight="800"
          smallDeviceSize="1rem"
        >
          better-people.org
        </Font>
      </LogoContainer>
      <AddressContainer>
        <Text>
          <Font
            fontColor="black"
            fontSize="1rem"
            fontWeight="400"
            smallDeviceSize="0.7rem"
          >
            서울특별시 강남구 테헤란로 79길 6 4층, 브이611(삼성동, 제이에스타워)
          </Font>
        </Text>
        <VerticalBar />
        <Text>
          <GrayText>
            <Font
              fontColor="rgb(100,100,100)"
              fontSize="1rem"
              fontWeight="400"
              smallDeviceSize="0.7rem"
            >
              사업자등록번호
            </Font>
          </GrayText>
          <Font
            style={{ marginLeft: "1rem" }}
            fontColor="black"
            fontSize="1rem"
            fontWeight="400"
            smallDeviceSize="0.7rem"
          >
            388-87-02419
          </Font>
        </Text>
      </AddressContainer>
      <AddressContainer>
        <Text>
          <GrayText>
            <Font
              style={{marginRight:'1rem'}}
              fontColor="rgb(100,100,100)"
              fontSize="1rem"
              fontWeight="400"
              smallDeviceSize="0.7rem"
            >
              대표
            </Font>
          </GrayText>
          <Font
            fontColor="black"
            fontSize="1rem"
            fontWeight="400"
            smallDeviceSize="0.7rem"
          >
            박상준
          </Font>
        </Text>
        <VerticalBar />
        <Text>
          <GrayText>
            <Font
            style={{marginRight:'1rem'}}
              fontColor="rgb(100,100,100)"
              fontSize="1rem"
              fontWeight="400"
              smallDeviceSize="0.7rem"
            >
              대표 번호
            </Font>
          </GrayText>
          <Font
            fontColor="black"
            fontSize="1rem"
            fontWeight="400"
            smallDeviceSize="0.7rem"
          >
            010-3977-9827
          </Font>
        </Text>
        <VerticalBar />
        <Text>
          <GrayText>
            <Font
              style={{ marginRight: "1rem" }}
              fontColor="rgb(100,100,100)"
              fontSize="1rem"
              fontWeight="400"
              smallDeviceSize="0.7rem"
            >
              이메일
            </Font>
          </GrayText>
          <Font
            style={{ marginRight: "1rem" }}
            fontColor="black"
            fontSize="1rem"
            fontWeight="400"
            smallDeviceSize="0.7rem"
          >
            contact@better-people.org
          </Font>
        </Text>
      </AddressContainer>
      <AddressContainer style={{ marginTop: "3rem" }}>
        <Font
          style={{ marginRight: "1rem" }}
          fontColor="rgb(100,100,100)"
          fontSize="1rem"
          fontWeight="400"
          smallDeviceSize="0.7rem"
        >
          개인정보 처리방침
        </Font>
      </AddressContainer>
      <AddressContainer>
        <Font
          style={{ marginRight: "1rem" }}
          fontColor="black"
          fontSize="0.9rem"
          fontWeight="400"
          smallDeviceSize="0.7rem"
        >
          Copyright. © Social Chaining. ALL RIGHTS RESERVED.
        </Font>
      </AddressContainer>
    </Container>
  );
};
