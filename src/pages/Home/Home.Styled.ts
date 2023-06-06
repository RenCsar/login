import styled from "@emotion/styled";

export const Container = styled.div`
  & .welcome-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 40px;

    & .lottie-container {
      width: 500px;
    }
  }

  & .text-container {
    padding: 0 80px;
    margin-top: 20px;
    text-align: center;
    color: var(--azul-escuro);
    font-weight: 500;
    font-size: 18px;

    & p + p {
      margin-top: 10px;
    }
  }

  & .lottie-space {
    display: flex;
    width: 100%;
    justify-content: center;

    & .lottie-container {
      width: 460px;
    }
  }

  @media (max-width: 600px) {
    & .welcome-container {
      & .lottie-container {
        width: 400px;
      }
    }

    & .text-container {
      padding: 0 30px;
      font-size: 15px;
    }
  }

  @media (max-width: 400px) {
    & .welcome-container {
      & .lottie-container {
        width: 300px;
      }
    }

    & .text-container {
      padding: 0 5px;
      font-size: 14px;
    }
  }
`;