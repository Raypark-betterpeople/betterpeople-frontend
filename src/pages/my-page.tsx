import React, { useRef, useState } from "react";
import styled from "styled-components";
import { CommonBodyContainer, Font } from "../common/styled";
import { useMe } from "../hooks/useMe";
import { LoginHeader } from "./login-header";
import "../css/Check.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const IllustContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5rem;
  align-items: center;
`;

const IllustBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  margin-right: 2rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: 520px) {
    margin-right: 0;
  }
`;

const Image = styled.img`
  width: 300px;
  margin-bottom: 1rem;
`;

const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(150, 150, 150, 0.5);
  z-index: 200;
`;

const TokenModal = styled.div`
  box-sizing: border-box;
  display: flex;
  font-size: 0.9rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  flex-direction: column;
  word-break: break-all;
  border-radius: 10px;
  margin: 1rem;
  border: 1px solid rgb(150, 150, 150);
`;

const CopyTokenNumberBtn = styled.span`
  margin-left: auto;
  margin-top: 0.3rem;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const TokenNumberStyle = styled.textarea`
  all: unset;
  box-sizing: border-box;
  color: white;
  display: block;
  letter-spacing: 1.5px;
  line-height: 1.3rem;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  border-radius: 10px;
  width: 500px;
  @media only screen and (max-width: 520px) {
    width: 100%;
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
  }
`;

const ModalCloseButton = styled.span`
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: white;
  background-color: #df7272;
  border-radius: 5px;
  margin-left: auto;
  cursor: pointer;
  font-weight: 600;
`;

const NotIllust = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const TokenCheck = styled.span`
  cursor: pointer;
  :hover {
    color: rgba(133, 100, 206);
    text-decoration: underline;
  }
`;

export const MyPage = () => {
  const [copyOk, setCopyOk] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [token, setToken] = useState("");
  const tokenInput = useRef<HTMLTextAreaElement>(null);
  const onModalOpen = () => {
    setOpenModal(true);
  };
  const onModalClose = () => {
    setOpenModal(false);
    setCopyOk(false);
  };

  const setTokenClick = (imagesToken: string) => {
    setToken(imagesToken);
    onModalOpen();
  };

  const copyToken = () => {
    const copyTokens = tokenInput.current;
    copyTokens?.focus();
    copyTokens?.select();
    copyTokens?.setSelectionRange(0, 9999);
    document.execCommand("copy");
    setCopyOk(true);
  };

  const { data: UserData } = useMe();
  return (
    <CommonBodyContainer>
      <Helmet>
        <title>더 좋은 사람들 | 내 갤러리</title>
      </Helmet>
      {openModal ? (
        <ModalBackground>
          <TokenModal>
            <Font
              fontWeight="600"
              fontSize="1.5rem"
              fontColor="black"
              marginBottom="0.3rem"
              smallDeviceSize="1rem"
            >
              이 일러스트의 토큰입니다.
            </Font>
            <Font
              fontWeight="400"
              fontSize="0.9rem"
              fontColor="rgb(100,100,100)"
              marginBottom="1rem"
              smallDeviceSize="0.7rem"
            >
              복사한 뒤 일러스트 정품인증 페이지에서 인증이 가능합니다.
            </Font>
            <TokenNumberStyle ref={tokenInput} value={token} readOnly />
            <CopyTokenNumberBtn onClick={() => copyToken()}>
              토큰 복사
            </CopyTokenNumberBtn>
            <ModalCloseButton onClick={() => onModalClose()}>
              닫기
            </ModalCloseButton>
            {copyOk ? (
              <div className="wrapper">
                <svg
                  className="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
                <Font
                  fontColor="rgb(201,105,204)"
                  fontWeight="700"
                  fontSize="1.3rem"
                  marginBottom="0.3rem"
                >
                  Copied OK!
                </Font>
                <Link to="/verify-illust">
                  <Font fontColor="black" fontWeight="600" fontSize="0.9rem">
                    정품인증 페이지로 바로가기 →
                  </Font>
                </Link>
              </div>
            ) : (
              ""
            )}
          </TokenModal>
        </ModalBackground>
      ) : (
        ""
      )}

      <LoginHeader />
      <Font
        fontColor="black"
        fontWeight="700"
        fontSize="1.7rem"
        marginBottom="1rem"
        style={{ marginTop: "5rem" }}
        smallDeviceSize="1.2rem"
      >
        {UserData?.me.nickname}님 이 만큼이나 참여하셨네요?! 🎉
      </Font>
      <Font
        fontSize="1rem"
        fontWeight="500"
        fontColor="rgb(120,120,120)"
        marginBottom="0.1rem"
        smallDeviceSize="0.9rem"
      >
        그 동안 모인 일러스트들 입니다.
      </Font>
      <Font
        fontSize="1rem"
        fontWeight="500"
        fontColor="rgb(120,120,120)"
        marginBottom="0.3rem"
        smallDeviceSize="0.9rem"
      >
        {UserData?.me.nickname}님의 따듯한 마음 응원합니다.
      </Font>
      <IllustContainer style={{ marginTop: "3rem" }}>
        {UserData?.me.provideImage?.map((images, index) => {
          return (
            <IllustBox key={index}>
              <Image src={images.imageUrl} alt="illust" />
              <Font
                fontColor="black"
                fontSize="1rem"
                fontWeight="600"
                marginBottom="0.3rem"
                style={{ marginLeft: "auto" }}
              >
                <TokenCheck onClick={() => setTokenClick(images.token)}>
                  토큰 일련번호 확인
                </TokenCheck>
              </Font>
              <Font
                fontColor="rgb(120,120,120)"
                fontSize="0.8rem"
                fontWeight="600"
                style={{ marginLeft: "auto" }}
              >
                better-people.org
              </Font>
            </IllustBox>
          );
        })}
      </IllustContainer>
      {UserData?.me.provideImage?.slice(0, 1) === null ? (
        ""
      ) : (
        <NotIllust>
          <Font fontSize="1.5rem" fontWeight="700" fontColor="black" marginBottom='0.5rem'>
            아직 아무런 일러스트가 없네요!
          </Font>
          <Font fontSize="1.3rem" fontWeight="600" fontColor="black">
            참여하고 싶은 프로젝트에 참여하고 일러스트를 얻어보세요 👀
          </Font>
        </NotIllust>
      )}
    </CommonBodyContainer>
  );
};
