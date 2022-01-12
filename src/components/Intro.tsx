import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../css/Intro.css";
import { useMe } from "../hooks/useMe";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 500vh;
  flex-direction: column;
`;

const Section = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  opacity: 0;
  top: 0;
  transition: 1s;
`;

const NonStickySection = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Font = styled.p`
  font-size: 4rem;
  font-weight: 600;
  line-height: 5rem;
  @media only screen and (max-width: 520px) {
    font-size:1.8rem;
    line-height:2.5rem;
  }
`;

const HighLight = styled.span`
  display: inline-block;
  font-size: 4rem;
  font-weight: 600;
  line-height: 5rem;
  background:linear-gradient(to top, rgba(36, 179, 139, 0.5), transparent 50%);
  @media only screen and (max-width: 520px) {
    font-size:1.8rem;
    line-height:2.5rem;
  }
`;

export const Intro = () => {
  const { data } = useMe();
  const [currentScroll, setCurrentScroll] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);


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
    <Container>
      <NonStickySection>
        {data ? (
          <Font>
            {data.me.nickname}님의 <HighLight>소비의 가치</HighLight>는
          </Font>
        ) : (
          <Font>
            여러분의 <HighLight>소비의 가치</HighLight>는
          </Font>
        )}
        <Font>어디에있나요? 🧐</Font>
      </NonStickySection>
      <Section
        className={currentScroll > innerHeight * 1 && currentScroll < innerHeight * 1.7 ? "active" : ""
        }
      >
        <Font>
          <HighLight>{data?.me.nickname ? `${data.me.nickname}님` : "당신" }</HighLight>은
        </Font>
        <Font>동물을 좋아하시나요? 🐈‍⬛🐕</Font>
      </Section>
      <Section
        className={
          currentScroll > window.innerHeight * 2 && currentScroll < window.innerHeight * 2.7
            ? "active"
            : ""
        }
      >
        <Font>아니면,</Font>
        <Font>지구🌎 의 건강에는 </Font>
        <Font>관심이 있으신가요?</Font>
      </Section>
      <Section
        className={
          window.scrollY > window.innerHeight * 3 && window.scrollY < window.innerHeight * 3.7
            ? "active"
            : ""
        }
      >
        <Font>무엇이든 좋아요, {data?.me.nickname ? `${data.me.nickname}님` : "당신" }의 </Font>
        <Font>
        <HighLight>관심분야의 영웅</HighLight>이 되고,
        </Font>
        <Font>마음껏 자랑해주세요!</Font>
      </Section>
      <Section
        className={
          window.scrollY > window.innerHeight * 3.7 && window.scrollY < window.innerHeight * 4.7
            ? "active"
            : ""
        }
      >
        <Font>저희가 당신이 영웅이 될 수 있게</Font>
        <Font>도와드릴께요 🧚‍♀️</Font>
      </Section>
    </Container>
  );
};
