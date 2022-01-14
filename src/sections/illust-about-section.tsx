import React from 'react';
import styled from 'styled-components';
import { Font, Highlight } from '../common/styled';

const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 5rem 0;
`

export const IllustAbout = () => {
    return (
        <SectionContainer>
            <Font fontColor='black' fontSize="3rem" fontWeight="600" marginBottom='1rem'>
                당신이 관심있는 프로젝트에 참여하고,
            </Font>
            <Font fontColor='black' fontSize="3rem" fontWeight="600">
                자신만 인증할 수 있는 <Highlight>굿즈 일러스트</Highlight>를 받아보세요!
            </Font>
        </SectionContainer>
    )
}