import styled from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    max-width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      & + input {
        margin-top: 8px;
      }

      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;

      color: #f4ede8;
      box-sizing: border-box;
    }

    button {
      background: #ff9000;
      color: #312e38;
      font-weight: 500;

      width: 100%;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      margin-top: 16px;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      font-size: 14px;
      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /* Estiliza apenas os a's que vem diretamente após a tag content */
  > a {
    color: #ff9000;
    font-size: 14px;
    text-decoration: none;

    display: flex;
    align-items: center;
    margin-top: 24px;

    transition: color 0.2s;

    svg {
      margin-right: 10px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) center no-repeat;
  background-size: cover;
`;
