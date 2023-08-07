import React from "react";
import styled from "styled-components";

const SizedBox = ({ width, height, Rwidth, Rheight }) => {
  return (
    <Container
      width={width}
      height={height}
      Rwidth={Rwidth}
      Rheight={Rheight}
    />
  );
};
const Container = styled.div`
  width: ${(props) => (props.width ? props.width + "px" : props.Rwidth)};
  height: ${(props) => (props.height ? props.height + "px" : props.Rheight)};
`;

export default SizedBox;
