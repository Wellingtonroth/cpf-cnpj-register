import * as React from "react";
import styled from "styled-components";

const Loading = (props) => (
  <Loader style={{ width: props.width }}>
    {" "}
  </Loader>
);

const Loader = styled.div`
  border-radius: 24px;
  margin: 16px;
  background-color: #cccccc;
  height: 8px;
  animation: dimmer-gray 1.5s;
  animation-iteration-count: infinite;

  @keyframes dimmer-gray {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.3;
    }
  }
`;

export default Loading;
