import styled from "styled-components";

const ComponentContainer = styled.div`
  width: ${(props) => props.width}%;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 5px;
`;

const ProgressBarFiller = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: #a60c0c;
  border-radius: 5px;
  text-align: right;
`;

const ProgressBarLabel = styled.span`
  font-family: "Arial";
  color: white;
  margin-right: 2px;
`;

const ProgressBarTimer = styled.span`
  font-family: "Arial";
  margin-left: 2px;
`;

export function ProgressBar({ width }) {
  return (
    <ComponentContainer width={width}>
      <ProgressBarContainer>
        <ProgressBarFiller>
          <ProgressBarLabel>50%</ProgressBarLabel>
        </ProgressBarFiller>
        <ProgressBarTimer>10:32</ProgressBarTimer>
      </ProgressBarContainer>
    </ComponentContainer>
  );
}
