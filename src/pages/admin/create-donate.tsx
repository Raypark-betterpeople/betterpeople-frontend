import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Font } from "../../common/styled";
import { FormError } from "../../components/form-error";
import {
  createDonate,
  createDonateVariables,
} from "../../__generated__/createDonate";

const CREATE_DONATE_MUTATION = gql`
  mutation createDonate($createDonateInput: CreateDonateInput!) {
    createDonate(input: $createDonateInput) {
      ok
      error
    }
  }
`;

interface IDonateForm {
  title: string;
  description: string;
  durationTime: string;
  file: FileList;
  file2: FileList;
}

const CreateDonateBox = styled.div`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  padding: 1rem;
  border-radius: 7px;
  border: 1px solid rgb(200, 200, 200);
  margin-top: 0.5rem;
  width: 100%;
  min-width: 500px;
  margin-bottom: 2rem;
  color: rgb(80, 80, 80);
  :hover {
    border: 1px solid dodgerblue;
  }

  :focus {
    border: 1px solid dodgerblue;
    background-color: rgba(37, 106, 196, 0.1);
  }
  @media only screen and (max-width: 520px) {
    margin-top: 0.4rem;
    font-size: 12px;
    padding: 0.8rem;
  }
`;

const Button = styled.button<{ opacity?: string; canClick?: string }>`
  all: unset;
  background-color: dodgerblue;
  color: white;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-radius: 5px;
  transition: 0.5s;
  font-weight: 500;
  cursor: pointer;
  pointer-events: ${(props) => props.canClick};
  opacity: ${(props) => props.opacity};
  :hover {
    opacity: 0.7;
  }
  @media only screen and (max-width: 520px) {
    padding: 0.8rem 1rem 0.8rem 1rem;
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  all: unset;
  width: 100%;
  padding: 1rem;
  line-height: 1.5rem;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  height: 30vh;
  margin-bottom: 2rem;
  :hover {
    border: 1px solid dodgerblue;
  }

  :focus {
    border: 1px solid dodgerblue;
    background-color: rgba(37, 106, 196, 0.1);
  }
`;

export const CreateDonate = () => {
  const {
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IDonateForm>({
    mode: "onChange",
  });
  const onCompleted = (data: createDonate) => {
    const {
      createDonate: { ok, error },
    } = data;
    if (ok) {
      setUploading(false);
      alert('기부 세션이 생성되었습니다. 수고했어요 ㅎㅎ')
    }
    if(error) {
      console.log(error)
    }
  };
  console.log(watch());
  const [createDonate, { data }] = useMutation<
    createDonate,
    createDonateVariables
  >(CREATE_DONATE_MUTATION, { onCompleted });
  const [uploading, setUploading] = useState(false);
  const onSubmit = async () => {
    try {
      const { file } = getValues();
      const {file2} = getValues();
      const actualFile = file[0];
      const descriptionImgFile = file2[0];
      const formBody = new FormData();
      const formBody2 = new FormData();
      formBody.append("file", actualFile);
      formBody2.append('file2',descriptionImgFile);
      const { url } = await (
        await fetch("http://localhost:4000/uploads", {
          method: "POST",
          body: formBody,
        })
      ).json();
      const { url2 } = await (
        await fetch("http://localhost:4000/uploads2", {
          method: "POST",
          body: formBody2,
        })
      ).json();
      console.log(url2);
      const { title, description, durationTime } = getValues();
      createDonate({
        variables: {
          createDonateInput: {
            title,
            description,
            coverImg: url,
            durationTime,
            descriptionImg: url2,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CreateDonateBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Font fontSize="1.2rem" fontColor="rgb(100,100,100)" fontWeight="500">
          기부 타이틀을 작성해주시오! 👀
        </Font>
        <Input
          style={{ boxSizing: "border-box" }}
          {...register("title", { required: "타이틀은 필수 입니다. 👨🏻‍💻" })}
          type="text"
          required
        />
        {errors.title?.message && (
          <FormError errorMessage={errors.title.message} />
        )}
        <Font
          fontSize="1.2rem"
          fontColor="rgb(100,100,100)"
          fontWeight="500"
          marginBottom="0.5rem"
        >
          어떤 기부인지 설명해주시오! 😇
        </Font>
        <TextArea
          style={{ boxSizing: "border-box" }}
          {...register("description", { required: "설명은 필수 입니다. 👨🏻‍💻" })}
          required
        />
        {errors.description?.message && (
          <FormError errorMessage={errors.description.message} />
        )}
        <Font
          fontSize="1.2rem"
          fontColor="rgb(100,100,100)"
          fontWeight="500"
          marginBottom="0.5rem"
        >
          언제까지 진행되는지 알려주시오! 🏃🏻‍♂️
        </Font>
        <Input
          style={{ boxSizing: "border-box" }}
          {...register("durationTime", {
            required: "진행기간은 필수 입니다. 👨🏻‍💻",
          })}
          type="text"
          required
        />
        {errors.durationTime?.message && (
          <FormError errorMessage={errors.durationTime.message} />
        )}
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
          marginBottom="0.5rem"
        >
          ( 영어 이름의 이미지를 사용할 것! ⚠️)
        </Font>
        <input
          {...register("file", { required: true })}
          type="file"
          accept="image/*"
          style={{marginBottom:'4rem'}}
        />
        <Font
          fontSize="1.2rem"
          fontColor="rgb(100,100,100)"
          fontWeight="500"
        >
          설명 이미지를 선택해주세요!
        </Font>
        <Font
          fontSize="0.8rem"
          fontColor="red"
          fontWeight="400"
          marginBottom="0.5rem"
        >
          ( 영어 이름의 이미지를 사용할 것! ⚠️)
        </Font>
        <input
          {...register("file2", { required: true })}
          type="file"
          accept="image/*"
          style={{marginBottom:'2rem'}}
        />
        <div>
        {isValid ? (
          <Button>기부섹션 생성</Button>
        ) : (
          <Button canClick="none" opacity="0.5">
            기부섹션 생성
          </Button>
        )}
        </div>
      </form>
    </CreateDonateBox>
  );
};
