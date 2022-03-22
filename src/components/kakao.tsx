import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import KakaoImage from '../images/kakao.png'

const Dokey = keyframes`
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(1.1);
  }
`;

const ChatIcon = styled.a`
    z-index: 1000;
    padding: 0 1.5rem 1rem 0;
    position: fixed;
    bottom: 0;
    right: 0;
    cursor: pointer;
    @media only screen and (max-width: 520px) {
    padding: 0.5rem;
  }
`

const KakaoImageIcon = styled.img`
    width: 100px;
    height: 100px;
    animation: ${Dokey} 0.7s infinite alternate linear;
    @media only screen and (max-width: 520px) {
    padding: 0.5rem;
    width: 80px;
    height: 80px;
  }
`

declare global {
    interface Window {
        Kakao: any;
    }
}

export const KakaoChat = () => {
    useEffect(() => {
        if(window.Kakao.isInitialized() === false) {
            window.Kakao.init('a53674671c05c06ff2cdb372f719f8fe')
        }
    })
    const chatChannel = () => {
        window.Kakao.Channel.chat({
            channelPublicId: '_nVHxeb'
        })
    }
    return (
        <ChatIcon onClick={chatChannel}><KakaoImageIcon src={KakaoImage} alt='kakaoimages' /></ChatIcon>
    )
}