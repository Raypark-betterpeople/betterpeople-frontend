import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AdminInput, AdminTextArea, AdminButton } from "../../common/admin/admin-styled";
import { Font } from "../../common/styled";
import { createNotice, createNoticeVariables } from "../../__generated__/createNotice";

const CREATE_NOTICE_MUTATION = gql`
  mutation createNotice($createNoticeInput: CreateNoticeInput!) {
    createNotice(input: $createNoticeInput) {
      ok
      error
    }
  }
`;

interface INoticeForm {
  mainTitle: string;
  subTitle: string;
  description: string;
  file: FileList;
}

const CreateNoticeBox = styled.div`
    margin-top: 3rem;
`

export const CreateNotice = () => {
    const onCompleted = (data: createNotice) => {
        const {
          createNotice: { ok, error },
        } = data;
        if (ok) {
          alert('공지 사항이 생성되었습니다. 수고했어요 ㅎㅎ')
        }
        console.log(error)
      };
      const [createNotice, { data }] = useMutation<
    createNotice,
    createNoticeVariables
  >(CREATE_NOTICE_MUTATION, { onCompleted });
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<INoticeForm>({
    mode: "onChange",
  });
  const onSubmit = async () => {
    try {
      const { file } = getValues();
      const actualFile = file[0];
      const formBody = new FormData();
      formBody.append("file", actualFile);
      const { url } = await (
        await fetch('https://better-people.org/uploads', {
          method: "POST",
          body: formBody,
        })
      ).json();
      const { mainTitle, description, subTitle } = getValues();
      createNotice({
        variables: {
          createNoticeInput: {
            mainTitle,
            description,
            subTitle,
            image: url,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CreateNoticeBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Font fontSize="1.2rem" fontColor="rgb(100,100,100)" fontWeight="500">
          공지사항 메인 타이틀 작성 👨🏻‍💻
        </Font>
        <AdminInput {...register('mainTitle', {required: true})} type='text' />
        <Font fontSize="1.2rem" fontColor="rgb(100,100,100)" fontWeight="500">
          공지사항 서브 타이틀 작성 👨🏻‍💻
        </Font>
        <AdminInput {...register('subTitle', {required: true})} type='text' />
        <Font fontSize="1.2rem" fontColor="rgb(100,100,100)" fontWeight="500" marginBottom='1rem'>
          공지사항 설명 작성 👀
        </Font>
        <AdminTextArea {...register('description', {required: true})} />
        <Font
          fontSize="1.2rem"
          fontColor="rgb(100,100,100)"
          fontWeight="500"
        >
          커버 이미지를 선택해주시오!
        </Font>
        <Font
          fontSize="0.8rem"
          fontColor="red"
          fontWeight="400"
          marginBottom="1rem"
        >
          ( 영어 이름의 이미지를 사용할 것! ⚠️)
        </Font>
        <input
          {...register("file", { required: true })}
          type="file"
          accept="image/*"
          style={{
            border: "1px solid gray",
            padding: "1rem",
            borderRadius: "5px",
            marginRight:'1rem',
          }}
        />
        {isValid ? (
          <AdminButton>공지사항 생성</AdminButton>
        ) : (
          <AdminButton canClick="none" opacity="0.5">
            공지사항 생성
          </AdminButton>
        )}
      </form>
    </CreateNoticeBox>
  );
};
