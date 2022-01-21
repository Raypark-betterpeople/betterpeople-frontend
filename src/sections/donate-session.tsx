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
        <Font fontColor="black" fontWeight="600" fontSize="1.8rem">
          <Highlight>현재!</Highlight> 진행중인
        </Font>
        <Font fontColor="black" fontWeight="600" fontSize="2.5rem">
          기부 프로젝트에 참여해보세오
        </Font>
      </DirectionStyle>
      <DonateBoxSection>
      {donates?.map((donate) => {
        return (
          <HomeDonate
            description={donate.description}
            title={donate.title}
            id={donate.id}
            durationTime={donate.durationTime}
            coverImg={donate.coverImg}
          />
        );
      })}
      </DonateBoxSection>
    </DonateSectionContainer>
  );
};
