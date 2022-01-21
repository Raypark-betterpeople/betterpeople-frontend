import React from "react";
import styled from "styled-components";
import { Font } from "../common/styled";
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
  border-radius: 15px;
  padding: 2rem;
  position: relative;
  margin-bottom: 2rem;
`;

const DonateBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

const Button = styled.button`
  all: unset;
  padding: 0.5rem 1rem;
  color:rgb(36, 179, 139);
  background-color: rgba(36, 179, 139, 0.2);
  border-radius: 5px;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: scale(1.05);
  }
`

export const HomeDonate: React.FC<IDonateProps> = ({
  id,
  title,
  description,
  durationTime,
  coverImg,
}) => {
  return (
    <DonateContainer>
      <DonateBox>
        <Image src={EarthImage} alt="기부 이미지" />
        <TextBox>
          <Font
            fontColor="black"
            fontWeight="800"
            fontSize="2rem"
            marginBottom="1rem"
            lineHeight='2.3rem'
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
          <Font fontColor="black" fontWeight="500" fontSize="1rem" marginBottom='1rem'>
            {description}
          </Font>
          <Font fontColor="black" fontWeight="700" fontSize="1rem">
            {durationTime}
          </Font>
          <Font fontColor="black" fontWeight="500" fontSize="1rem">
            까지 진행되는 프로젝트에오! 어서 참여하고 일러스트를 얻어보세오!
          </Font>
        </TextBox>
      </DonateBox>
      <Button>알아보실래오?</Button>
    </DonateContainer>
  );
};
