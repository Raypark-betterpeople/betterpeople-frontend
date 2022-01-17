import React from "react";
import styled from "styled-components";
import { Font, Highlight } from "../common/styled";
import IllustDummy from "../images/illustdummy.png";

interface IGoodsProps {
  title: string;
  durationTime: string;
  width?: string;
  height?: string;
}

const GoodsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 3rem;
  border-radius: 15px;
  border: 2px solid rgb(200,200,200);
`;

const FontBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const Illust = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 15px;
  margin-bottom: 2rem;
`;

export const VerifyGoods: React.FC<IGoodsProps> = ({ title, durationTime, height, width }) => {
  return (
    <GoodsBox style={{height: height, width: width}}>
      <Illust src={IllustDummy} alt="굿즈 일러스트" />
      <FontBox>
        <Font
          fontColor="rgb(50,50,50)"
          fontWeight="600"
          fontSize="2rem"
          marginBottom="1rem"
        >
          고영들의 영웅 <Highlight>'더좋사'</Highlight>님
        </Font>
        <Font fontColor="rgb(50,50,50)" fontWeight="500" fontSize="1.3rem">
          위 사람은,
        </Font>
        <p>
          {durationTime}에 진행된 {title}에 참여한
        </p>
        <Font
          fontColor="black"
          fontWeight="400"
          fontSize="1rem"
          marginBottom="1.5rem"
        >
          너무나도 착하신 분입니다 😇
        </Font>
        <Font fontColor="black" fontSize="0.9rem" fontWeight="600">
          이 일러스트는 <Highlight>Better people에서 인증된 일러스트</Highlight>
          입니다.
        </Font>
        <Font fontColor="rgb(180,180,180)" fontSize="0.9rem" fontWeight="400">
          better-people.org
        </Font>
      </FontBox>
    </GoodsBox>
  );
};
