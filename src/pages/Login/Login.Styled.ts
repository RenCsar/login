import styled from "styled-components";
import Work from '../../assets/work.webp'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Work});
    background-size: cover;
    filter: blur(4px);
    z-index: -1;
  }

  .login-card {
    display: flex;
    background-color: var(--bg-login-card);
    width: 800px;
    height: 400px;
    border-radius: 10px;
    box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.25);
    padding: 10px;

    .lottie-container {
      width: 50%;
      display: flex;
      align-items: flex-start;
      margin-top: 15px;

      .lottie-text-container {
        width: 100%;
        display: flex;
        justify-content: center;

        & p {
          font-size: 13px;
          text-align: center;
          color: var(--roxo-claro);
          width: 320px;
        }
      }
    }

    .login-container {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding-top: 50px;
      gap: 15px;
      align-items: center;

      .text-login {
        width: 300px;
        color: var(--verde-teal);
      }

      form {
        display: flex;
        flex-direction: column;
        width: 300px;
        gap: 15px;

        .btn-container {
          margin-top: 10px;
        }
      }
    }
  }
`;