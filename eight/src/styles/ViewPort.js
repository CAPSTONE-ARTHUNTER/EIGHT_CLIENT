import React from "react";
import styled from "styled-components";

const ViewPort = (props) => {
  return <LayOut>{props.children}</LayOut>;
};

const LayOut = styled.div`
  max-width: 425px;
  margin: auto;
`;
export default ViewPort;
