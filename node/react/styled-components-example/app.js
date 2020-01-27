import React from "react";
import styled from "styled-components";

const ButtonComponent = ({ className }) => (
  <button className={className}>Click</button>
);
const StyleButtonComponent = styled(ButtonComponent).attrs({
  className: "hogehoge"
})`
  color: red;
`;

const App = () => {
  return (
    <div>
      <p>Hello</p>

      <StyleButtonComponent />
    </div>
  );
};

export default App;
