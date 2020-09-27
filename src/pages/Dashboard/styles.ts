import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 30px;
  color: #3f3f3f;
  margin-top: 40px;
`;

export const Form = styled.div`
  display: flex;
  margin-top: 30px;

  input {
    width: 350px;
    padding: 16px 20px;
    border: 0;
  }

  button {
    width: 140px;

    background: #00ba00;
    border: 1px solid #00aa00;
    color: white;
  }
`;

export const Repositories = styled.div`
  margin-top: 50px;

  a {
    display: flex;
    align-items: center;

    border-radius: 5px;
    background: #fff;
    padding: 20px;
    text-decoration: none;
    position: relative;
    margin-bottom: 15px;
    transition: left 1s;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    div {
      margin-left: 10px;

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

    &::after {
      content: '>';

      font-size: 20px;
      font-weight: bold;
      color: #ddd;
      right: 20px;
      position: absolute;
    }

    &:hover {
      position: relative;
      left: 10px;
    }
  }
`;
