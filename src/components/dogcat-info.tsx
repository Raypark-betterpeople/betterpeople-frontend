import React from "react";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import styled from "styled-components";
import Dog from "../images/dog.jpeg";

const Font = styled.p<{
  fontSize: string;
  fontColor: string;
  fontWeight: string;
  marginBottom?: string;
}>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.fontWeight};
  margin-bottom: ${(props) => props.marginBottom};
  letter-spacing: 1px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 10rem 0 10rem 0;
`;

const DirectionStyle = styled.div<{
  flexDirection: string;
  marginBottom?: string;
  marginRight? : string
}>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => props.flexDirection};
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: ${(props) => props.marginRight};
  width: 100%;
`;

const Circle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 10%;
  left:0;
  background-color: rgba(36, 179, 139);
  border-radius: 100%;
  z-index: -1;
`;

const DogImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 15px;
`;

export const DogCatInfo = () => {
  return (
    <Fade triggerOnce={false} duration={2000} fraction={0.4}>
    <Container>
      <DirectionStyle flexDirection="column" marginBottom="5rem">
        <Font
          fontSize="3rem"
          fontColor="black"
          fontWeight="800"
          marginBottom="1rem"
        >
          유기견,묘는 지금
        </Font>
        <Font fontSize="1rem" fontColor="gray" fontWeight="400">
          파양, 유기등으로 정말 많이 버려지고 있습니다.
        </Font>
        <Font fontSize="1rem" fontColor="gray" fontWeight="400">
          당신이 이 아이들의 영웅이 되어주세요.
        </Font>
      </DirectionStyle>
      <DirectionStyle flexDirection="row">
        <DirectionStyle flexDirection="column">
          <Font
            fontSize="1rem"
            fontColor="black"
            fontWeight="600"
            marginBottom="1rem"
          >
            2020년 유기견,묘 수
          </Font>
          <Font
            fontSize="4rem"
            fontColor="black"
            fontWeight="800"
            marginBottom="0.5rem"
          > 
            <CountUp end={130401} duration={1} separator=","/>
          </Font>
          <Font
            fontSize="0.8rem"
            fontColor="rgb(80,80,80)"
            fontWeight="400"
            marginBottom="1rem"
          >
            자료 : 농림축산검역본부
          </Font>
        </DirectionStyle>
        <Circle />
        <DirectionStyle flexDirection="row">
          <DogImage src={Dog} alt="dog image" />
        </DirectionStyle>
      </DirectionStyle> 
    </Container>
    </Fade>
  );
};
