import React from "react";
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
  background-color: gray;
  margin-bottom: 2rem;
  border-radius: 15px;
`;

const Button = styled.button`
  all: unset;
  padding: 1rem 1rem;
  color:rgb(36, 179, 139);
  background-color: rgba(36, 179, 139, 0.2);
  border-radius: 5px;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: scale(1.05);
  }
`

export const HomeDonate: React.FC<IDonateProps> = ({
  id,
  title,
  durationTime,
  coverImg,
}) => {
  const { data } = useMe();
  return (
    <DonateContainer>
      <Link to={data?.me.nickname ? `donate/${id}` : 'login'}>
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
            smallDeviceLineHeight='1.7rem'
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
