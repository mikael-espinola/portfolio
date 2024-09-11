import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  margin-top: 15rem;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  gap: 0.5rem;
  margin-bottom: 15rem;

  @media (min-width: 700px) {
    padding: 1rem 5rem;
    margin-bottom: 15rem;
  }
  @media (min-width: 900px) {
    padding: 1rem 25rem;
    margin-bottom: 15rem;
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: 2px solid orange;
  }
`;

export const MessageField = styled.textarea`
  width: 100%;
  height: 6rem;
  padding: 0.6rem 0.5rem 0;
  font-family: "Segoe UI";
  border-radius: 8px;
  border: none;

  &:focus {
    outline: 2px solid orange;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.6rem;
`;

export const Button = styled.button`
  display: flex;
  width: max-content;
  padding: 1rem;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  background-color: #9f7304;
  color: #fff;
`;
