import React from 'react';
import styled from 'styled-components';
import { Font, Highlight } from '../common/styled';
import IphoneImage from '../images/iphone.png'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 0 5rem 0;
`

const IPhone = styled.img`
    width: 350px;
`

const FontContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImageContainer = styled.div`
    display: flex;
`

export const InstaSection = () => {
    return (
        <Container>
            <FontContainer>
                <Font fontColor='black' fontSize='3rem' fontWeight='600' marginBottom='0.5rem'>
                    당신의 <Highlight>선한 영향력</Highlight>을
                </Font>
                <Font fontColor='black' fontSize='3rem' fontWeight='600' marginBottom='1rem'>
                    공유해주세요!
                </Font>
                <Font fontColor='gray' fontSize='1rem' fontWeight='500' marginBottom='0.5rem'>
                    당신이 가치있다고 생각하는 기부 세션에 참여하고, 인증가능한 일러스트를
                    얻어보세요!
                </Font>
                <Font fontColor='gray' fontSize='1rem' fontWeight='500'>
                    당신의 멋짐을 세상에 알려보는건 어떤가요 흐흐
                </Font>
            </FontContainer>
            <ImageContainer>
            <IPhone src={IphoneImage} alt='아이폰' />
            </ImageContainer>
        </Container>
    )
}