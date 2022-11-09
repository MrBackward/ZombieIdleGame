import { TitleBar } from "./components/TitleBar";
import { HeaderContent } from "./components/HeaderContent";

import styled from "styled-components";

const AppContainer = styled.div`
  hr {
    width: 100%;
  }
`;

function App() {
  return (
    <div className="App">
      <AppContainer>
        <TitleBar />
        <hr />
        <HeaderContent />
        <hr />
      </AppContainer>
    </div>
  );
}

export default App;
