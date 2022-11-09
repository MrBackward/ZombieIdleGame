import styled from "styled-components";
import { ProgressBar } from "./ProgressBar";

const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const Base = styled.div`
  height: 75px;
  width: ${(props) => props.width}%;
  background-color: #06a118;
`;

export function HeaderContent() {
  return (
    <HeaderContentContainer>
      <ProgressBar width={95} />
      <Base width={5} />
    </HeaderContentContainer>
  );
}
