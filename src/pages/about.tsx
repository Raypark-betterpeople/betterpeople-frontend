import { useReactiveVar } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer, Font, GrayFont, Highlight } from "../common/styled";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";
import { FaMoneyCheck, FaCheckSquare, FaInstagram } from "react-icons/fa";
import Part1 from '../images/part1r.png'
import Part2 from '../images/part2r.png'
import Part3 from '../images/part3r.png'
import Part4 from '../images/part4r.png'
import Part5 from '../images/part5r.png'
import Part6 from '../images/part6r.png'
import { Loading } from "./loading";
import { Helmet } from "react-helmet";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0 5rem 0;
  line-height: 1.5rem;
`;

const IconBox = styled.div`
  padding: 1.3rem 1.5rem 1.3rem 1.5rem;
  margin-right: auto;
  background-color: #da6ed4;
  color: white;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 2px 4px 8px gray;
  @media only screen and (max-width: 520px) {
    margin-right: 0;
  }
`;

const IllustContainer = styled.div`
  width: 100%;
  height: 320px;
  background-color: rgb(150, 150, 150);
  margin-top: 1rem;
  margin-bottom: 10rem;
`;

const ProcessContainer = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 520px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProcessBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 8px 12px rgb(200, 200, 200);
  width: 33%;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-right: 1.5rem;
  margin-bottom: 5rem;
  @media only screen and (max-width: 520px) {
    width: 100%;
    align-items: center;
    padding-left: 20%;
    padding-right: 20%;
    margin-bottom: 2rem;
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
`

const DescriptionImg = styled.img`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5rem;
  border: 1px solid rgb(200,200,200);
  border-radius: 15px;
  padding: 1rem;
  @media only screen and (max-width: 520px) {
    margin-bottom: 3rem;
  }
`

export const AboutPage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <CommonBodyContainer>
      <Helmet>
        <title>더 좋은 사람들 | 서비스 소개</title>
      </Helmet>
      {Part1 && Part6 ? '' : <Loading />}
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
      <AboutContainer>
        <Font
          lineHeight="2.2rem"
          fontSize="2rem"
          fontWeight="700"
          fontColor="rgb(90, 41, 194)"
          smallDeviceSize="1.5rem"
          smallDeviceLineHeight="1.7rem"
        >
          착한 일 한거는 숨기는게 미덕?
        </Font>
        <Font
          fontSize="1.3rem"
          fontWeight="600"
          fontColor="rgb(90, 41, 194)"
          marginBottom="3rem"
          smallDeviceSize="1.2rem"
        >
          뎃츠 노노! 우린 공유해오!
        </Font>
        <Font
          fontSize="1.1rem"
          fontWeight="600"
          fontColor="black"
          marginBottom="1rem"
        >
          이제는 <Highlight>우리의 가치소비를 드러낼 때!</Highlight> 힙하게 선한
          영향력 행사하고 힙한 일러스트도 받고, 사람들에게 자랑해봐요!
        </Font>
        <Font
          fontSize="1rem"
          fontWeight="400"
          fontColor="rgb(80,80,80)"
          smallDeviceSize="0.8rem"
          smallDeviceLineHeight="1rem"
        >
          우리팀은 여러분이 착한 일에 참여하면 힙하고 귀여운 '일러스트'를
          제공합니다 👋🏻
        </Font>
        <Font
          fontSize="1rem"
          fontWeight="400"
          fontColor="rgb(80,80,80)"
          marginBottom="3rem"
          smallDeviceSize="0.8rem"
          smallDeviceLineHeight="1rem"
        >
          이 일러스트에는 여러분의 닉네임과 어떤 좋은 일에 참여했는지 등에 대한
          정보가 나와있어요!
        </Font>
        <Font
          lineHeight="2.5rem"
          fontSize="2rem"
          fontWeight="600"
          fontColor="black"
          marginBottom="0.3rem"
          smallDeviceSize="1.2rem"
          smallDeviceLineHeight="1.3rem"
        >
          제공하는 메인 일러스트는 힙-한 픽셀아트!
        </Font>

        <Font
          lineHeight="2.5rem"
          fontSize="2rem"
          fontWeight="600"
          fontColor="rgb(100,100,100)"
          smallDeviceSize="1.2rem"
          smallDeviceLineHeight="1.3rem"
        >
          각자 자신이 원하는 가치의 세션에 참여하면,
        </Font>
        <Font
          lineHeight="2.5rem"
          fontSize="2rem"
          fontWeight="600"
          fontColor="rgb(100,100,100)"
          smallDeviceSize="1.2rem"
          smallDeviceLineHeight="1.3rem"
        >
          주제에 맞는 일러스트 등장!
        </Font>
        <IllustContainer>일러스트 섹션</IllustContainer>
        <Font
          lineHeight="2.5rem"
          fontSize="2rem"
          fontWeight="600"
          fontColor="black"
          marginBottom="1rem"
          smallDeviceSize="1.3rem"
        >
          어떻게 참여해오?
        </Font>
        <ProcessContainer>
          <ProcessBox>
            <IconBox>
              <FaMoneyCheck fontSize="2rem" />
            </IconBox>
            <Font
              lineHeight="1.3rem"
              fontSize="1.3rem"
              fontWeight="600"
              fontColor="black"
              marginBottom="1rem"
              smallDeviceSize="0.9rem"
            >
              원하는 프로젝트의 일러스트 구매
            </Font>
            <Font
              lineHeight="1.3rem"
              fontSize="1rem"
              fontWeight="400"
              fontColor="rgb(100,100,100)"
              smallDeviceSize="0.7rem"
              smallDeviceLineHeight="1rem"
            >
              각자의 가치는 다르잖아요? 자신의 가치가 있는 세션의 일러스트를
              구매하세요!
            </Font>
          </ProcessBox>
          <ProcessBox>
            <IconBox>
              <FaCheckSquare fontSize="1.6rem" />
            </IconBox>
            <Font
              lineHeight="1.3rem"
              fontSize="1.3rem"
              fontWeight="600"
              fontColor="black"
              marginBottom="1.5rem"
              smallDeviceSize="0.9rem"
            >
              구매한 일러스트 본인인증
            </Font>

            <Font
              lineHeight="1.3rem"
              fontSize="1rem"
              fontWeight="400"
              fontColor="rgb(100,100,100)"
              smallDeviceSize="0.7rem"
              smallDeviceLineHeight="1rem"
            >
              구매한 일러스트의 토큰을 이용해 자신의 구매를 인증해보세요!
            </Font>
          </ProcessBox>
          <ProcessBox>
            <IconBox>
              <FaInstagram fontSize="1.6rem" />
            </IconBox>
            <Font
              lineHeight="1.3rem"
              fontSize="1.3rem"
              fontWeight="600"
              fontColor="black"
              marginBottom="1.5rem"
              smallDeviceSize="0.9rem"
            >
              착한 일 알리기!
            </Font>

            <Font
              lineHeight="1.3rem"
              fontSize="1rem"
              fontWeight="400"
              fontColor="rgb(100,100,100)"
              smallDeviceSize="0.7rem"
              smallDeviceLineHeight="1rem"
            >
              정품 인증한 일러스트를 sns를 통해 남에게 자랑하고, 참여를
              독려해요!
            </Font>
          </ProcessBox>
        </ProcessContainer>
        <Font fontColor="black" fontSize="1.5rem" fontWeight="600" marginBottom='0.5rem' smallDeviceSize='1.2rem'>
          <Highlight>매 기간마다 프로젝트가 달라져요!</Highlight>
        </Font>
        <Font fontColor="rgb(100,100,100)" fontSize="1rem" fontWeight="500" smallDeviceSize='0.8rem' smallDeviceLineHeight='1rem'>
          우리 팀은 가치를 구별하지 않습니다. 누구한테나 마음이 향하는 곳은
          틀리니까요.
        </Font>
        <Font fontColor="rgb(100,100,100)" fontSize="1rem" fontWeight="500" smallDeviceSize='0.8rem'>
          모두의 다양성을 이해하고, 자신이 원하는 가치에 함께해요!
        </Font>
        <DescriptionContainer>
        <Font fontColor="black" fontSize="1.5rem" fontWeight="700" smallDeviceSize='0.8rem' marginBottom='0.5rem'>
          1. 원하는 프로젝트의 일러스트를 구매하세요!
        </Font>
        <DescriptionImg src={Part1} alt='설명 이미지1' />
        <Font fontColor="black" fontSize="1.5rem" fontWeight="700" smallDeviceSize='0.8rem' marginBottom='0.5rem'>
          2. 상단 메뉴바의 내 갤러리에 들어가요!
        </Font>
        <DescriptionImg src={Part2} alt='설명 이미지2' />
        <Font fontColor="black" fontSize="1.5rem" fontWeight="700" smallDeviceSize='0.8rem' marginBottom='0.5rem'>
          3. 원하는 일러스트의 토큰 일련번호를 확인해요!
        </Font>
        <DescriptionImg src={Part3} alt='설명 이미지3' />
        <Font fontColor="black" fontSize="1.5rem" fontWeight="700" smallDeviceSize='0.8rem' marginBottom='0.5rem'>
          4. 토큰 번호를 직접 복사, 혹은 토큰 복사를 클릭해주세요!
        </Font>
        <DescriptionImg src={Part4} alt='설명 이미지4' />
        <Font fontColor="black" fontSize="1.5rem" fontWeight="700" smallDeviceSize='0.8rem' marginBottom='0.5rem'>
          5. 복사가 완료되면 인증 페이지로 이동해주세요!
        </Font>
        <DescriptionImg src={Part5} alt='설명 이미지5' />
        <Font fontColor="black" fontSize="1.5rem" fontWeight="700" smallDeviceSize='0.8rem' marginBottom='0.5rem'>
          6. 마지막으로 토큰 일련번호를 입력하면 일러스트가 등장해요!
        </Font>
        <DescriptionImg src={Part6} alt='설명 이미지6' />
        </DescriptionContainer>
        <Font fontColor="black" fontSize="1.5rem" fontWeight="700" smallDeviceSize='1rem' lineHeight='1.7rem' smallDeviceLineHeight='1rem'>
          <GrayFont>여러분이 관심 있는 가치소비</GrayFont> 는 어떤 것인지 저희 팀에게 알려주세요!
        </Font>
        <Font fontColor="black" fontSize="1.5rem" fontWeight="700" smallDeviceSize='1rem' marginBottom='0.5rem'>
          그게 무엇이든 저희가 알맞는 프로젝트를 진행해볼께요!
        </Font>
      </AboutContainer>
    </CommonBodyContainer>
  );
};
