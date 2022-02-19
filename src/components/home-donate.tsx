import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Font } from "../common/styled";
import { useMe } from "../hooks/useMe";
import EarthImage from "../images/earth2.png";
interface IDonateProps {
  id: number;
  title: string;
  description: string;
  durationTime: string;
  coverImg: string;
}

const DurationLabel = styled.div`
  display: inline-block;
  padding: 0.3rem;
  background-color: #949494;
  border-radius: 5px;
  color: white;
  @media only screen and (max-width: 520px) {
    padding: 0.1rem 0.3rem 0.1rem 0.3rem;
    font-weight: 500;
  }
`;

const DonateContainer = styled.div`
  display: flex;
  line-height: 1.3rem;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  margin-bottom: 5rem;
  border-radius: 15px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 520px) {
    border-radius: 8px;
    margin-bottom: 3rem;
  }
`;

const DonateBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Whitespace = styled.div`
  white-space: pre-wrap;
`

const Image = styled.img`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 15px;
  margin-top: 0.5rem;
`;

export const HomeDonate: React.FC<IDonateProps> = ({
  id,
  title,
  durationTime,
  coverImg,
  description,
}) => {
  const { data } = useMe();
  const onClick = () => {
    if (data?.me.emailVerified === false) {
      alert("이메일 인증 후 가능한 컨텐츠입니다. 🥲");
    }
  };
  return (
    <DonateContainer>
      <Link
        onClick={() => onClick()}
        to={
          data?.me.nickname
            ? data.me.emailVerified
              ? `donate/${id}`
              : "/"
            : "login"
        }
      >
        <DonateBox>
          <Font
            fontColor="black"
            fontWeight="600"
            fontSize="0.9rem"
            smallDeviceSize="0.7rem"
          >
            <DurationLabel>🕙 진행기간 : {durationTime} 까지</DurationLabel>
          </Font>
          <Image src={coverImg} alt="배너" />
          <TextBox>
            <Font
              fontColor="rgb(80,80,80)"
              fontWeight="700"
              fontSize="1.5rem"
              lineHeight="1.5rem"
              smallDeviceSize="1rem"
              smallDeviceLineHeight="1.2rem"
            >
              {title.split("]")[1] ? title.split("]")[0] + "]" : ""}
            </Font>
            <Font
              fontColor="black"
              fontWeight="700"
              fontSize="1.5rem"
              lineHeight="1.5rem"
              smallDeviceSize="1rem"
              smallDeviceLineHeight="1.2rem"
              marginBottom='0.3rem'
            >
              {title.split(']')[1] ? title.split("]")[1] : ""}
            </Font>
            <Font
              fontColor="black"
              fontWeight="700"
              fontSize="1.5rem"
              lineHeight="1.5rem"
              smallDeviceSize="1rem"
              smallDeviceLineHeight="1.7rem"
              marginBottom='0.2rem'
            >
              {title.split("]")[1] ? "" : title.split("]")[0]}
            </Font>
            <Whitespace>
            <Font
              fontWeight="400"
              fontSize="0.9em"
              fontColor="rgb(100,100,100)"
              smallDeviceSize="0.7rem"
              smallDeviceLineHeight="1rem"
            >
              {description}
            </Font>
            </Whitespace>
          </TextBox>
        </DonateBox>
      </Link>
    </DonateContainer>
  );
};
