import React from 'react'
import styled, { keyframes } from 'styled-components'
import LogoImage from '../images/around_logo.png'

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
`



export const Loading = () => {
    return(
        <LoadingSection>
            <LoadingImage src={LogoImage} alt='image logo' />
        </LoadingSection>
    )
}