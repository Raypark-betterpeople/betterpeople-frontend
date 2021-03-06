import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import styled from "styled-components";
import EarthImage from '../images/earthwater.png'

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
  line-height: 1.4rem;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20rem 0 20rem 0;
  box-sizing: border-box;
`;

const HighLight = styled.span`
  display: inline-block;
  background-color: hsla(0, 100%, 50%, 0.3);
  color: black;
  font-weight: 600;
`

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

const EarthImages = styled.img`
  position: absolute;
  width: 900px;
  border-radius: 15px;
  right: 0px;
  top: -5rem;
  z-index: -10;
  @media only screen and (max-width: 500px) {
    width: 400px;
    top: -14rem;
    opacity: 0.5;
  }
`;

export const EarthInfo = () => {
  const [innerHeight, setInnerHeight] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setInnerHeight(window.innerHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
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
            <DirectionStyle flexDirection="column" marginBottom="10rem">
              <Font
                fontSize="3rem"
                fontColor="black"
                fontWeight="800"
                marginBottom="2rem"
              >
                ????????? ??????,
              </Font>
              <Font fontSize="1rem" fontColor="gray" fontWeight="400">
                ?????? ???????????? ?????? ?????? ????????? ????????? ????????? ?????? ????????????.
              </Font>
              <Font fontSize="1rem" fontColor="gray" fontWeight="400">
                2100????????? <HighLight>?????? 73cm</HighLight>?????? ????????? ?????? ????????????..
              </Font>
              <Font fontSize="1rem" fontColor="gray" fontWeight="400">
                ????????? ????????? ????????? ???????????? ????????? ??????????
              </Font>
            </DirectionStyle>
            <DirectionStyle flexDirection="column">
              <Circle />
              <Font
                fontSize="1rem"
                fontColor="black"
                fontWeight="600"
                marginBottom="2rem"
              >
                2021??? ?????? ?????????, 30?????????
              </Font>
              <Font
                fontSize="4rem"
                fontColor="black"
                fontWeight="800"
                marginBottom="1rem"
              >
                {currentScroll > innerHeight * 5.5 ? (
                  <CountUp
                    end={9.1}
                    duration={1.5}
                    separator=","
                    decimal="."
                    decimals={1}
                  />
                ) : (
                  "0"
                )}
                cm ??????
              </Font>
              <Font
                fontSize="0.8rem"
                fontColor="rgb(80,80,80)"
                fontWeight="400"
                marginBottom="1rem"
              >
                ?????? : ?????????
              </Font>
            </DirectionStyle>
          </DirectionStyle>
          <DirectionStyle
            flexDirection="none"
            style={{width:'1px'}}
          >
              <EarthImages src={EarthImage} alt="?????? ?????????" />
          </DirectionStyle>
        </DirectionStyle>
      </Container>
    </Fade>
  );
};
