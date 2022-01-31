import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { AdminButton } from "../../common/admin/admin-styled";
import { useDonate } from "../../hooks/allDonate";
import { Font } from "../../common/styled";
import styled from "styled-components";
import { createImage, createImageVariables } from "../../__generated__/createImage";
import { useNavigate } from "react-router-dom";

const CREATE_ILLUST_MUTATION = gql`
  mutation createImage($createImageInput: CreateImageInput!) {
    createImage(input: $createImageInput) {
      ok
      error
    }
  }
`;

interface IImageForm {
  donateId: any;
  file: FileList;
}

const Select = styled.select`
  padding: 1rem;
  margin-bottom: 2rem;
`;

const RegistIllustContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 3rem;
`;

const RegistIllust = styled.div`
  width: 200px;
  height: 200px;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  background-color: rgb(220, 220, 220);
  margin: 1rem;
`;

const CreateDonateContainer = styled.div`
  margin-top: 3rem;
`;

export const CreateIllust = () => {
  const { data } = useDonate();
  const result = data?.allDonate.donates;

  const {
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IImageForm>({
    mode: "onChange",
  });
  const filterImage = result?.filter(
    (filterDonate) => filterDonate.id === +watch("donateId")
  );
  const onCompleted = (data: createImage) => {
    const {
      createImage: { ok, error },
    } = data;
    if (ok) {
      alert('일러스트가 등록되었습니다. 수고했어요 ㅎㅎ')
    }
  };
  const [createImage] = useMutation<
    createImage,
    createImageVariables
  >(CREATE_ILLUST_MUTATION, { onCompleted });
  const onSubmit = async () => {
    try {
      const { file } = getValues();
      const actualFile = file[0];
      const formBody = new FormData();
      formBody.append("file", actualFile);
      const { url } = await (
        await fetch("http://localhost:4000/uploads", {
          method: "POST",
          body: formBody,
        })
      ).json();
      const {donateId} = getValues();
      const donateIds = parseInt(donateId);
      createImage({
        variables: {
          createImageInput: {
            donateId: donateIds,
            imageUrl:url,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const {donateId} = getValues();
  console.log(typeof(donateId))

  return (
    <CreateDonateContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Font
          fontColor="rgb(80,80,80)"
          fontWeight="500"
          fontSize="1.2rem"
          marginBottom="0.3rem"
        >
          할당될 기부 세션을 골라주시오! 👨🏻‍💻
        </Font>
        <Select {...register("donateId", { required: true })}>
          {data?.allDonate.donates?.map((selectDonate) => {
            return (
              <option key={selectDonate.id} value={selectDonate.id}>
                {selectDonate.title}
              </option>
            );
          })}
        </Select>
        <Font
          fontColor="rgb(80,80,80)"
          fontWeight="400"
          fontSize="1rem"
          marginBottom="0.5rem"
        >
          현재 이 기부세션에 등록되어 있는 일러스트
        </Font>
        <RegistIllustContainer>
          {filterImage?.map((filterImages) => {
            return filterImages.donateImage?.map((donateImages) => {
              return (
                <RegistIllust
                  style={{ backgroundImage: `url('${donateImages.imageUrl}')` }}
                />
              );
            });
          })}
        </RegistIllustContainer>
        <Font
          fontColor="rgb(80,80,80)"
          fontWeight="500"
          fontSize="1.2rem"
          marginBottom="0.3rem"
        >
          이미지를 업로드 해주시오! 👀
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
          <AdminButton>기부 세션 생성</AdminButton>
        ) : (
          <AdminButton canClick="none" opacity="0.5">
            기부 세션 생성
          </AdminButton>
        )}
      </form>
    </CreateDonateContainer>
  );
};
