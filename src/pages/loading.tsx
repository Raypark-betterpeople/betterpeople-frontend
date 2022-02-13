import React from 'react'
import styled, { keyframes } from 'styled-components'
import { DirectionStyle, Font } from '../common/styled'
import LogoImage from '../images/ahnlogo.png'

const ImageOpacity = keyframes`
    0% {
        opacity: 100%
    }
    100% {
        opacity: 0%
    }
`

const LoadingSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: white;
`

const LoadingImage = styled.img`
    width: 150px;
    height: 150px;
    animation: ${ImageOpacity} 0.7s infinite alternate;
    margin-bottom: 1rem;
`



export const Loading = () => {
    return(
        <LoadingSection>
            <DirectionStyle directionStyle='column'>
            <LoadingImage src={LogoImage} alt='image logo' />
            <Font fontSize='1rem' fontColor="rgb(150,150,150)" fontWeight="500">조금만 기다려 주세요!</Font>
            </DirectionStyle>
        </LoadingSection>
    )
}