import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  padding-top: 5rem;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  gap: 0.5rem;
  margin-bottom: 15rem;

  @media (min-width: 700px) {
    width: 50%;
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
  background-color: #ffaa00;
  color: black;
  font-weight: 600;
`;
