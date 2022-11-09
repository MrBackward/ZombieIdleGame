import styled from "styled-components";

const TitleBarContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Arial";
  }
`;

export function TitleBar() {
  return (
    <TitleBarContainer>
      <h1>Yet Another Zombie Game</h1>
    </TitleBarContainer>
  );
}
