import React, { useEffect } from 'react'
import styled from 'styled-components'

const ChatIcon = styled.a`
    padding: 1rem;
    position: fixed;
    top: 30px;
    right: 0;
    background-color: #ecd716;
    color: #584231;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
`

declare global {
    interface Window {
        Kakao: any;
    }
}

export const KakaoChat = () => {
    if(!window.Kakao) {
        window.Kakao.init('a53674671c05c06ff2cdb372f719f8fe')
    }
    const chatChannel = () => {
        window.Kakao.Channel.chat({
            channelPublicId: '_nVHxeb'
        })
    }
    return (
        <ChatIcon onClick={chatChannel}>카카오톡 채널</ChatIcon>
    )
}