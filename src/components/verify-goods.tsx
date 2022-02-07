import React from "react";
import styled from "styled-components";
import { Bold, Font } from "../common/styled";
import IllustDummy from "../images/catpixeldemo.png";
import EarthIllust from "../images/sunearth.png";
import KidsIllust from "../images/kids.png";
import { HiBadgeCheck } from "react-icons/hi";

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
  background-color: rgba(250, 250, 250, 0.5);
  border: 1px solid rgb(220, 220, 220);
  box-shadow: 4px 8px 12px rgb(200, 200, 200);
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

const Icon = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  text-align: center;
  vertical-align: center;
  transform: translateY(6px);
  margin-right: 0.2rem;
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
      <Font
        fontColor="rgb(60,60,60)"
        fontSize="0.9rem"
        fontWeight="400"
        style={{ marginRight: "auto"}}
      >
        <Icon>
          <HiBadgeCheck color='rgb(129, 78, 240)' />
        </Icon>
         Verified illust
      </Font>
      {illust === "earth" ? <Illust src={EarthIllust} /> : ""}
      {illust === "kids" ? <Illust src={KidsIllust} /> : ""}
      {illust === "cats" ? <Illust src={IllustDummy} /> : ""}
      <FontBox>
        <Font
          fontColor="rgb(50,50,50)"
          fontWeight="600"
          fontSize="1.3rem"
          marginBottom="0.5rem"
        >
          더좋사 님
        </Font>
        <Font fontColor="rgb(90,90,90)" fontWeight="500" fontSize="0.85rem">
          <Bold>"{durationTime}"</Bold>에 진행된,
        </Font>
        <Font
          fontColor="rgb(90,90,90)"
          fontWeight="500"
          fontSize="0.85rem"
          marginBottom="1rem"
        >
          <Bold>"{title}"</Bold> 에 참여
        </Font>
        <Font
          fontColor="rgb(120,120,120)"
          fontSize="0.8rem"
          fontWeight="600"
          style={{ marginLeft: "auto" }}
        >
          better-people.org
        </Font>
      </FontBox>
    </GoodsBox>
  );
};
