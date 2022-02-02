import React, { useState } from "react";
import styled from "styled-components";
import { CommonBodyContainer, DirectionStyle, Font } from "../../common/styled";
import { useDonate } from "../../hooks/allDonate";
import { useMe } from "../../hooks/useMe";
import { NotFound } from "../404";
import { CreateDonate } from "./create-donate";
import { CreateIllust } from "./create-illust";
import { CreateNotice } from "./create-notice";

const UlStyle = styled.ul`
  all: unset;
  margin-top: 3rem;
`;

const LiStyle = styled.li`
  box-sizing: border-box;
  all: unset;
  background-color: dodgerblue;
  padding: 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;

const WorkSpace = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
`;

const WorkSpaceBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ActiveDonateBox = styled.div`
  display: flex;
`;

export const AdminPage = () => {
  const { data } = useMe();
  const donate = useDonate();
  const [state, setState] = useState("donate");
  return (
    <>
      {data?.me.adminUser === true ? (
        <CommonBodyContainer>
          <Font
            style={{ marginTop: "5rem" }}
            fontWeight="600"
            fontColor="black"
            fontSize="1.5rem"
          >
            Better People Admin 👨🏻‍💻
          </Font>
          <UlStyle>
            <LiStyle onClick={() => setState("donate")}>기부 세션 생성</LiStyle>
            <LiStyle onClick={() => setState("illust")}>일러스트 생성</LiStyle>
            <LiStyle onClick={() => setState("notice")}>공지사항 작성</LiStyle>
          </UlStyle>
          <WorkSpace>
            {state === "donate" ? (
              <WorkSpaceBox>
                <DirectionStyle directionStyle="column">
                  <Font
                    fontSize="1.3rem"
                    fontWeight="500"
                    fontColor="black"
                    marginBottom="2rem"
                  >
                    기부세션 생성
                  </Font>
                  <CreateDonate />
                </DirectionStyle>
                <ActiveDonateBox>
                  <DirectionStyle directionStyle="column">
                    <Font
                      fontSize="1.3rem"
                      fontWeight="500"
                      fontColor="black"
                      marginBottom="2rem"
                    >
                      현재 활성화 되어있는 기부 세션
                    </Font>
                    {donate.data?.allDonate.donates?.map((selectDonate) => {
                      return <Font key={selectDonate.id} fontSize='1.1rem' fontWeight='500' fontColor='rgb(80,80,80)' marginBottom='1rem'>{selectDonate.title}</Font>;
                    })}
                  </DirectionStyle>
                </ActiveDonateBox>
              </WorkSpaceBox>
            ) : (
              ""
            )}
            {state === "illust" ? (
              <WorkSpaceBox>
                <DirectionStyle directionStyle="column">
                <Font fontSize="1.3rem" fontWeight="500" fontColor="black">
                  일러스트 생성
                </Font>
                <CreateIllust />
                </DirectionStyle>
              </WorkSpaceBox>
            ) : (
              ""
            )}
            {state === "notice" ? (
              <WorkSpaceBox>
                <DirectionStyle directionStyle="column">
                <Font fontSize="1.3rem" fontWeight="500" fontColor="black">
                  공지사항 작성
                </Font>
                <CreateNotice />
                </DirectionStyle>
              </WorkSpaceBox>
            ) : (
              ""
            )}
          </WorkSpace>
        </CommonBodyContainer>
      ) : (
        <NotFound />
      )}
    </>
  );
};
