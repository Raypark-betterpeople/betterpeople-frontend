import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DirectionStyle, Font, Highlight } from "../common/styled";
import { HomeDonate } from "../components/home-donate";
import { useDonate } from "../hooks/allDonate";
import { allDonateQuery_allDonate_donates } from "../__generated__/allDonateQuery";

const DonateSectionContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  padding: 10rem 0;
  line-height: 3rem;
  flex-direction: column;
`;

const DonateBoxSection = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 520px) {
    margin-top: 1rem;
  }

`

const NotPublic = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 10;
  background-color: rgba(50, 50, 50, 0.3);
  width: 100%;
  height: 93%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  @media only screen and (max-width: 520px) {
    font-size: 1rem;
    font-weight: 600;
    color: white;
  }
`;

const NotPublicContainer = styled.div`
  position: relative;
  display: flex;
`

const NotPublicPadding = styled.div`
  padding: 1.5rem;
  @media only screen and (max-width: 520px) {
    padding: 1rem;
  }
`

export const DonateSession = () => {
  const { data } = useDonate();
  const [donates, setDonates] = useState<
    allDonateQuery_allDonate_donates[] | null
  >();
  useEffect(() => {
    setDonates(data?.allDonate.donates);
  }, [data?.allDonate.donates]);
  return (
    
    <DonateSectionContainer>
      <DirectionStyle style={{ textAlign: "start" }} directionStyle="column">
        <Font fontColor="black" fontWeight="600" fontSize="1.8rem" smallDeviceSize='1.3rem' smallDeviceLineHeight='1rem' marginBottom='0.5rem'>
          <Highlight>현재!</Highlight> 진행중인
        </Font>
        <Font fontColor="black" fontWeight="600" fontSize="2rem" smallDeviceSize='1.3rem' smallDeviceLineHeight='1.5rem' lineHeight='1rem'>
          기부 프로젝트에 참여하고, 굿즈 받아오!
        </Font>
      </DirectionStyle>
      <DonateBoxSection>
      {donates?.map((donate) => {
        return donate.publicStatus ? (
          <HomeDonate
            key={donate.id}
            description={donate.description}
            title={donate.title}
            id={donate.id}
            durationTime={donate.durationTime}
            coverImg={donate.coverImg}
          />
        ) : (
          <NotPublicContainer>
            <NotPublic>준비 중인 프로젝트에요 🕙
            </NotPublic>
            <NotPublicPadding>
            <HomeDonate
              key={donate.id}
              description={donate.description}
              title={donate.title}
              id={donate.id}
              durationTime={donate.durationTime}
              coverImg={donate.coverImg}
            />
            </NotPublicPadding>
          </NotPublicContainer>
        );
      })}
      </DonateBoxSection>
    </DonateSectionContainer>
  );
};
