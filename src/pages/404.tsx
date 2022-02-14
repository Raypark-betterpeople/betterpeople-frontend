import React from "react";
import styled from "styled-components";
import { Font, DirectionStyle } from "../common/styled";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFound = () => {
  return (
    <Container>
      <DirectionStyle directionStyle="column">
        <Font fontSize="1.5rem" fontWeight="500" fontColor="rgb(100,100,100)" marginBottom='1rem'>
          404 not found.
        </Font>
        <Font fontSize="1rem" fontWeight="500" fontColor="black">
          잘못된 접근이므로, 페이지를 찾을 수 없습니다 🥲
        </Font>
      </DirectionStyle>
    </Container>
  );
};
