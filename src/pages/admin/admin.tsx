import React, { useState } from "react";
import styled from "styled-components";
import { CommonBodyContainer, Font } from "../../common/styled";
import { useMe } from "../../hooks/useMe";
import { NotFound } from "../404";
import { CreateDonate } from "./create-donate";

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
  width: 100%;
`;

export const AdminPage = () => {
  const { data } = useMe();
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
                <Font fontSize="1.3rem" fontWeight="500" fontColor="black" marginBottom='2rem'>
                  기부세션 생성
                </Font>
                <CreateDonate />
              </WorkSpaceBox>
            ) : (
              ""
            )}
            {state === "illust" ? (
              <WorkSpaceBox>
                <Font fontSize="1.3rem" fontWeight="500" fontColor="black">
                  일러스트 생성
                </Font>
              </WorkSpaceBox>
            ) : (
              ""
            )}
            {state === "notice" ? (
              <WorkSpaceBox>
                <Font fontSize="1.3rem" fontWeight="500" fontColor="black">
                  공지사항 작성
                </Font>
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
