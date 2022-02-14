import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Font } from "../common/styled";
import { useMe } from "../hooks/useMe";
import EarthImage from '../images/earth2.png'
interface IDonateProps {
  id: number;
  title: string;
  description: string;
  durationTime: string;
  coverImg: string;
}

const DonateContainer = styled.div`
  display: flex;
  line-height: 1.3rem;
  flex-wrap: wrap; 
  width: 100%;
  border: 1px solid rgb(200,200,200);
  padding: 1.5rem;
  position: relative;
  margin-bottom: 2rem;
  border-radius: 15px;
  transition: 0.3s;
  :hover {
    background-color: rgb(240,240,240);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 520px) {
    padding: 0.8rem;
    border-radius: 8px;
  }
`;

const DonateBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 15px;
`;

export const HomeDonate: React.FC<IDonateProps> = ({
  id,
  title,
  durationTime,
  coverImg,
}) => {
  const { data } = useMe();
  const onClick = () => {
    if(data?.me.emailVerified === false) {
      alert('이메일 인증 후 가능한 컨텐츠입니다. 🥲')
    }
  }
  return (
    <DonateContainer>
      <Link onClick={() => onClick()} to={data?.me.nickname ? data.me.emailVerified ? `donate/${id}` : '/' : 'login'}>
      <DonateBox>
        <Image src={coverImg} alt='배너' />
        <TextBox>
          <Font
            fontColor="black"
            fontWeight="800"
            fontSize="2rem"
            marginBottom="1rem"
            lineHeight='2.3rem'
            smallDeviceSize='1.3rem'
            smallDeviceLineHeight='1.3rem'
          >
            {title.split("]")[1] ? title.split(']')[0] + ']' : ""}
            <p>{title.split(']')[1]}</p>
          </Font>
          <Font
            fontColor="black"
            fontWeight="800"
            fontSize="2rem"
            marginBottom="1rem"
            lineHeight='2.3rem'
            smallDeviceSize='1.3rem'
            smallDeviceLineHeight='1.7rem'
          >
            {title.split("]")[1] ? "" : title.split(']')[0]}
          </Font>
          <Font fontColor="black" fontWeight="700" fontSize="1rem">
            {durationTime}
          </Font>
          <Font fontColor="black" fontWeight="500" fontSize="1rem" smallDeviceSize='0.8rem'>
            까지 진행되는 프로젝트에오. 어서 참여하고 일러스트를 얻어보세오!
          </Font>
        </TextBox>
      </DonateBox>
      </Link>
    </DonateContainer>
  );
};
