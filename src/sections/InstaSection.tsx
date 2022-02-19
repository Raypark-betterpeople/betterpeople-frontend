import React from "react";
import styled from "styled-components";
import { Font, Highlight } from "../common/styled";
import { useMe } from "../hooks/useMe";
import IphoneImage from "../images/iphone.png";
import FeedImage from "../images/insta.png";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0 5rem 0;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

const IPhone = styled.img`
  width: 350px;
  z-index:15;
  @media only screen and (max-width: 380px) {
    width: 300px;
  }
`;

const Feed = styled.img`
  width: 305px;
  height: 620px;
  border-radius: 30px;
  @media only screen and (max-width: 380px) {
    height:520px;
  }
`;

const FontContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 520px) {
    align-items: flex-start;
    margin-bottom: 3rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
`;

const SlideContainer = styled.div`
  position: absolute;
  width: 305px;
  top: 35px;
  left: 7px;
  padding: 1rem;
  padding-bottom: 0;
  border-radius: 30px;
  @media only screen and (max-width: 380px) {
    width: 250px;
  }
`;

export const InstaSection = () => {
  const { data } = useMe();
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed:3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Container>
      <FontContainer>
        <Font
          fontColor="black"
          fontSize="2.3rem"
          fontWeight="600"
          marginBottom="0.5rem"
          smallDeviceSize='1.5rem'
        >
          {data?.me.nickname ? `${data.me.nickname}님` : "당신"}의{" "}
          <Highlight>선한 영향력</Highlight>을
        </Font>
        <Font
          fontColor="black"
          fontSize="2.3rem"
          fontWeight="600"
          marginBottom="2rem"
          smallDeviceSize='1.5rem'
        >
          공유해주세요!
        </Font>
        <Font
          fontColor="gray"
          fontSize="1rem"
          fontWeight="500"
          marginBottom="0.5rem"
          smallDeviceSize='0.8rem'
        >
          {data?.me.nickname ? `${data.me.nickname}님` : "당신"}이 가치있다고
          생각하는 기부 세션에 참여하고, 인증가능한 일러스트를 얻어보세요!
        </Font>
        <Font fontColor="gray" fontSize="1rem" fontWeight="500" smallDeviceSize='0.8rem'>
          {data?.me.nickname ? `${data.me.nickname}님` : "당신"}의 멋짐을 세상에
          알려보는건 어떤가요?
        </Font>
      </FontContainer>
      <ImageContainer>
        <IPhone src={IphoneImage} alt="아이폰" />
        <SlideContainer>
          <Slick {...settings}>
            <Feed src={FeedImage}/>
            <Feed src={FeedImage}/>
            <Feed src={FeedImage}/>
          </Slick>
        </SlideContainer>
      </ImageContainer>
    </Container>
  );
};
