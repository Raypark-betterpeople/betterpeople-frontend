import React from "react";
import styled from "styled-components";
import { Font, Highlight } from "../common/styled";
import IllustDummy from "../images/catpixeldemo.png";
import EarthIllust from "../images/sunearth.png";

interface IGoodsProps {
  title: string;
  durationTime: string;
  width?: string;
  height?: string;
  illust?: string;
}

const GoodsBox = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  padding: 1.2rem;
  background-color: rgba(250,250,250,0.5);
  border: 1px solid rgb(220,220,220);
  box-shadow: 4px 8px 12px rgb(200,200,200);
  margin-bottom: 1rem;
`;

const FontBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const Illust = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;


export const VerifyGoods: React.FC<IGoodsProps> = ({
  title,
  durationTime,
  height,
  width,
  illust,
}) => {
  return (
    <GoodsBox style={{ height: height, width: width }}>
      <Font fontColor="rgb(100,100,100)" fontSize="0.9rem" fontWeight="700" style={{margin:'auto'}}>
          <Highlight>verified illust</Highlight>
        </Font>
      {illust === "earth" ? (
        <Illust src={EarthIllust} />
      ) : (
        <Illust src={IllustDummy} alt="굿즈 일러스트" />
      )}
      <FontBox>
        {illust !== "earth" ? (
          <Font
            fontColor="rgb(50,50,50)"
            fontWeight="600"
            fontSize="1.3rem"
            marginBottom='0.5rem'
          >
            더좋사 님
          </Font>
        ) : (
          <Font
            fontColor="rgb(50,50,50)"
            fontWeight="600"
            fontSize="1.3rem"
            marginBottom='0.5rem'
          >
             더좋사 님
          </Font>
        )}
        <Font fontColor='rgb(90,90,90)' fontWeight='500' fontSize='0.85rem'>
          "{durationTime}" 에 진행된,
        </Font>
        <Font fontColor='rgb(90,90,90)' fontWeight='500' fontSize='0.85rem' marginBottom='1rem'>
          "{title}" 에 참여
        </Font>
        <Font fontColor="rgb(120,120,120)" fontSize="0.8rem" fontWeight="600" style={{marginLeft:'auto'}}>
          better-people.org
        </Font>
      </FontBox>
    </GoodsBox>
  );
};
