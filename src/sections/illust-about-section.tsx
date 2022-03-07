import React from "react";
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
    transform: translateX(-1900px);
  }
`

const GoodsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6rem;
  width: 2700px;
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
        fontSize="2rem"
        fontWeight="600"
        marginBottom="0.5rem"
        smallDeviceSize='1.5rem'
      >
        관심있는 프로젝트에 참여하고,
      </Font>
      <Font fontColor="black" fontSize="2rem" fontWeight="600" smallDeviceSize='1.5rem'>
        자신만 인증할 수 있는 <Highlight>일러스트 굿즈</Highlight>를 받아보세요!
      </Font>
      <HiddenBox>
      <GoodsContainer>
        <VerifyGoods
          title="유기견,묘 센터의 와기들에게"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
          illust='cats'
        />
        <VerifyGoods
          title="지구 수위 올리기!"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
          illust='earth'
        />
        <VerifyGoods
          title="보호종료아동들의 내일을 응원합니다!"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
          illust='kids'
        />
        <VerifyGoods
          title="유기견,묘 센터의 와기들에게"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
          illust='bigworld'
        />
        <VerifyGoods
          title="지구가 뜨거워 컨텐츠"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
          illust='earth'
        />
        <VerifyGoods
          title="보호종료아동들의 내일을 응원합니다!"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
          illust='kids'
        />
        <VerifyGoods
          title="유기견,묘를 위한 컨텐츠"
          durationTime="2022년 1월 1일 ~ 2022년 3월 1일"
          illust='cats'
        />
      </GoodsContainer>
      </HiddenBox>
    </SectionContainer>
  );
};