import styled from "styled-components";
import Work from "../../assets/work.webp";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Work});
    background-size: cover;
    filter: blur(5px);
    z-index: -1;
  }

  & .logo {
    margin: 30px 0 15px 0;
    & img {
      width: 300px;
    }
  }

  & .login-card {
    display: flex;
    background-color: var(--bg-login-card);
    width: 800px;
    height: 400px;
    border-radius: 10px;
    box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.25);
    padding: 10px;

    & .lottie-container {
      width: 50%;
      display: flex;
      align-items: flex-start;
      margin-top: 15px;

      & .lottie-text-container {
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

    & .login-container {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding-top: 50px;
      gap: 15px;
      align-items: center;

      & .text-login {
        width: 300px;
        color: var(--verde-teal);
      }

      form {
        display: flex;
        flex-direction: column;
        width: 300px;
        gap: 15px;

        & .btn-container {
          margin-top: 10px;
        }
      }
    }
  }

  @media (max-width: 850px) {
    justify-content: center;
    & .logo {
      & img {
        width: 250px;
      }
    }

    & .login-card {
      width: 700px;
    }
  }

  @media (max-width: 750px) {
    & .logo {
      & img {
        width: 200px;
      }
    }

    & .login-card {
      width: 650px;

      & .lottie-container {
        & .lottie-text-container {
          & p {
            padding: 0 10px;
          }
        }
      }
    }
  }

  @media (max-width: 670px) {
    & .logo {
      & img {
        width: 180px;
      }
    }

    & .login-card {
      width: 400px;
      flex-direction: column-reverse;

      & .lottie-container {
        flex: 1;
        width: 100%;
        justify-content: center;

        & .lottie-text-container {
          & p {
            padding: 0 10px;
          }
        }

        & .lottie {
          display: none;
        }
      }

      & .login-container {
        padding-top: 0px;
        flex: 1;
        width: 100%;
        justify-content: center;
        margin-top: 20px;

        form {
          & .btn-container {
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }

  @media (max-width: 450px) {
    & .logo {
      & img {
        width: 150px;
      }
    }

    & .login-card {
      flex: 1;
      max-height: 450px;
      max-width: 400px;

      & .lottie-container {
        & .lottie-text-container {
          & p {
            padding: 0 30px;
            margin-top: 10px;
          }
        }
      }

      & .login-container {
        & .text-login {
          width: 250px;
          color: var(--verde-teal);
        }
        form {
          width: 250px;
        }
      }
    }
  }
`;