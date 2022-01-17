import React from "react";
import Slick, { Settings } from "react-slick";
import styled, { keyframes } from "styled-components";
import { Font, Highlight } from "../common/styled";
import { VerifyGoods } from "../components/verify-goods";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15rem 0;
`;

const move = keyframes`
  0% {
    transform:(translateX(0));
  }
  100% {
    transform: translateX(-2700px);
  }
`

const GoodsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6rem;
  width: 3500px;
  gap: 5rem;
  animation: ${move} 50s infinite linear;
`;

const HiddenBox = styled.div`
  width: 100%;
  overflow: hidden;
`

export const IllustAbout = () => {
  return (
    <SectionContainer>
      <Font
        fontColor="black"
        fontSize="3rem"
        fontWeight="600"
        marginBottom="1rem"
      >
        당신이 관심있는 프로젝트에 참여하고,
      </Font>
      <Font fontColor="black" fontSize="3rem" fontWeight="600">
        자신만 인증할 수 있는 <Highlight>굿즈 일러스트</Highlight>를 받아보세요!
      </Font>
      <HiddenBox>
      <GoodsContainer>
        <VerifyGoods
          title="유기견,묘를 위한 컨텐츠"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
        />
        <VerifyGoods
          title="지구가 뜨거워 컨텐츠"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
          illust='earth'
        />
        <VerifyGoods
          title="유기견,묘를 위한 컨텐츠"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
        />
        <VerifyGoods
          title="지구가 뜨거워 컨텐츠"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
          illust='earth'
        />
        <VerifyGoods
          title="유기견,묘를 위한 컨텐츠"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
        />
        <VerifyGoods
          title="지구가 뜨거워 컨텐츠"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
          illust='earth'
        />
        <VerifyGoods
          title="유기견,묘를 위한 컨텐츠"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
        />
      </GoodsContainer>
      </HiddenBox>
    </SectionContainer>
  );
};