import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import styled from "styled-components";
import { Font } from "../common/styled";
import DogCat from "../images/catdogs.png";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20rem 0 20rem 0;
  box-sizing: border-box;
`;

const DirectionStyle = styled.div<{
  flexDirection: string;
  marginBottom?: string;
  marginRight?: string;
  mobileAdapt?: string;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => props.flexDirection};
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: ${(props) => props.marginRight};
  width: 100%;
  @media only screen and (max-width: 900px) {
    display: ${(props) => props.mobileAdapt};
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: #7248ceb2;
  border-radius: 100%;
  z-index: -1;
`;

const DogImage = styled.img`
  position: absolute;
  display: block;
  width: 800px;
  right: 0px;
  bottom: 30px;
  z-index:-10;
  @media only screen and (max-width: 500px) {
    width: 400px;
    bottom: 20rem;
    opacity: 0.6;
  }
`;

export const DogCatInfo = () => {
  const [innerHeight, setInnerHeight] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setInnerHeight(window.innerHeight);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
    
  }, [innerHeight, currentScroll]);

  const handleScroll = () => {
    setCurrentScroll(window.scrollY);
  };
  return (
    <Fade triggerOnce={false} duration={2000} fraction={0.4}>
      <Container>
        <DirectionStyle flexDirection="row">
          <DirectionStyle flexDirection="column">
            <DirectionStyle flexDirection="column" marginBottom='10rem'>
              <Font
                fontSize="3rem"
                fontColor="black"
                fontWeight="800"
                marginBottom="1rem"
                smallDeviceSize='2rem'
              >
                유기견,묘는 지금,
              </Font>
              <Font fontSize="1rem" fontColor="rgb(100,100,100)" fontWeight="400" marginBottom='0.5rem'>
                파양, 유기등으로 정말 많이 버려지고 있습니다.
              </Font>
              <Font fontSize="1rem" fontColor="rgb(100,100,100)" fontWeight="400">
                당신의 가치가 이 곳에 있다면 유기동물들의 영웅이 되어보는건 어떠신가요?
              </Font>
            </DirectionStyle>
            <DirectionStyle flexDirection="column">
            <Circle />
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
                {currentScroll > innerHeight * 4.6 ? <CountUp end={130401} duration={1.5} separator="," /> : "0"}
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
          </DirectionStyle>
          <DirectionStyle flexDirection='none' style={{width:'0px'}}>
              <DogImage src={DogCat} alt="강아지 이미지" />
          </DirectionStyle>
        </DirectionStyle>
      </Container>
    </Fade>
  );
};
