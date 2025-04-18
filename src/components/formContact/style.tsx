import { screen } from "@/style/breakpoints";
import styled from "styled-components";

interface Props {
  $status?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  padding-top: 5rem;
  font-size: 40px;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  gap: 0.5rem;
  margin-bottom: 15rem;

  @media ${screen.medium} {
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.6rem;
`;

export const Button = styled.button<Props>`
  display: flex;
  width: max-content;
  padding: 1rem;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  background-color: ${({ $status }) => ($status ? "#00ff00" : "#ffaa00")};
  color: black;
  font-weight: 600;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin: 0.2rem 0;
`;

export const InputItem = styled.input`
  border-radius: 6px;
  width: 100%;
  padding: 1rem;
  font-size: 16px;
  border: 1px solid #ffffff;
  color: #ffffff;
  outline: none;
  background: transparent;

  &:focus {
    outline: 0.1rem solid #ffaa00;
    outline-offset: 2px;
  }

  &:focus + label,
  &:valid + label {
    top: 0;
    font-size: 0.875rem;
    background-color: #0d133e;
    border-radius: 6px;
    padding: 0 0.375rem;
  }
`;

export const LabelItem = styled.label`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: #d1d1d1;
  font-size: 1rem;
  pointer-events: none;
  transition: 0.3s;
`;

export const MessageField = styled(InputItem).attrs({ as: "textarea" })`
  max-width: 100%;
  display: flex;
`;
