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

  &.welcome-container {
    width: 200px;
  }

  & .lottie-space {
    display: flex;
    width: 100%;
    justify-content: center;

    & .lottie-container {
      width: 460px;
    }
  }
`;