import styled from "styled-components";

export const AdminButton = styled.button<{ opacity?: string; canClick?: string }>`
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

export const AdminInput = styled.input`
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

export const AdminTextArea = styled.textarea`
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
