import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 30px;
  color: #3f3f3f;
  margin-top: 40px;
  line-height: 40px;
  max-width: 300px;
`;

export const Form = styled.form<FormProps>`
  display: flex;

  margin-top: 30px;
  max-width: 700px;

  input {
    flex: 1;
    padding: 16px 20px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3f3f3f;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: red;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 140px;

    padding: 10px 30px;
    background: #00ba00;
    color: white;
    border: 1px solid #00aa00;
    border-radius: 0 5px 5px 0;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#00aa00')};
    }
  }

  @media (max-width: 600px) {
    & {
      flex-direction: column;

      button {
        border-radius: 5px;
        margin-top: 10px;
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: red;
  margin-top: 10px;
  font-size: 14px;
`;

export const Repositories = styled.div`
  margin-top: 50px;
  max-width: 700px;

  a {
    display: flex;
    align-items: center;

    border-radius: 5px;
    background: #fff;
    padding: 20px;
    text-decoration: none;
    position: relative;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 15px;
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    div {
      margin: 0 10px;
      flex: 1;

      strong {
        color: #3f3f3f;
        font-size: 16px;
      }

      p {
        color: #aaa;
        font-size: 14px;
        margin-top: 3px;
      }
    }

    svg {
      color: #ccd;
      margin-left: auto;
    }
  }
`;
