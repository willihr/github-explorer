import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#a8a8b3')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 50px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      margin-left: 20px;

      strong {
        font-size: 20px;
        color: #3f3f3f;
      }

      p {
        font-size: 14px;
        color: #aaa;
        margin-top: 3px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 20px;

    li {
      display: flex;
      flex-direction: column;

      & + li {
        margin-left: 50px;
      }

      strong {
        font-size: 24px;
        color: #3f3f3f;
      }

      span {
        font-size: 16px;
        color: #aaa;
      }
    }
  }
`;

export const Issues = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-decoration: none;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    transition: transform 0.2s;

    & + a {
      margin-top: 15px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 18px;
        color: #3f3f3f;
      }

      span {
        font-size: 16px;
        color: #aaa;
        margin-top: 5px;
      }
    }

    svg {
      color: #aaa;
    }
  }
`;
