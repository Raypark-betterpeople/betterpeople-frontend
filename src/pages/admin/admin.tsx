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
            Better People Admin π¨π»βπ»
          </Font>
          <UlStyle>
            <LiStyle onClick={() => setState("donate")}>κΈ°λΆ μΈμ μμ±</LiStyle>
            <LiStyle onClick={() => setState("illust")}>μΌλ¬μ€νΈ μμ±</LiStyle>
            <LiStyle onClick={() => setState("notice")}>κ³΅μ§μ¬ν­ μμ±</LiStyle>
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
                    κΈ°λΆμΈμ μμ±
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
                      νμ¬ νμ±ν λμ΄μλ κΈ°λΆ μΈμ
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
                  μΌλ¬μ€νΈ μμ±
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
                  κ³΅μ§μ¬ν­ μμ±
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
