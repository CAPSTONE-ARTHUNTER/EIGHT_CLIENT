import React from "react";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import styled from "styled-components";
import SizedBox from "../Common/SizedBox";

const Layout = (props) => {
  return (
    <Container>
      <TopBar text={props.text} />
      <SizedBox height={52} />
      {props.children}
      <BottomBar />
      <SizedBox height={56} />
    </Container>
  );
};
const Container = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 32px;
`;
export default Layout;
