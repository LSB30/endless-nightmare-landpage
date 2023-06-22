import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 70vh;
  gap: 1rem;
  text-align: center;

  > p {
    font-size: 1.6rem;
    font-weight: bold;

    > span {
      color: #ffc700;
    }
  }

  > p:nth-child(3) {
    font-size: 2rem;
    font-weight: 400;
    opacity: 0.5;
  }

  
`;

export const Title = styled.div`
  text-align: center;
  max-width: 71.4rem;
  width: 100%;

  > h1 {
    color: #ffc700;
    font-size: 6.4rem;
    font-weight: 400;
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 5rem;
    }
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 5rem;

  > p {
    color: rgba(255,255,255, 60%);
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 1px solid rgba(255,255,255, 60%);
    cursor: pointer;
  }
`;
