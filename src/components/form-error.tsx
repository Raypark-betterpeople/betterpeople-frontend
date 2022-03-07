import React from "react";
import styled from "styled-components";

interface IFormError {
  errorMessage: string | any;
}

const ErrorFont = styled.span`
    font-family: sans-serif;
    color: red;
    font-size: 12px;
    display: inline-block;
    margin-top: 0.5rem;
`;

export const FormError: React.FC<IFormError> = ({ errorMessage }) => {
  return <ErrorFont>{errorMessage}</ErrorFont>;
};
