import styled from "styled-components";
import { colors } from "./color";
import "./font.css";

const Title01 = styled.text`
  font-size: 24px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  color: ${(props) => (props.color ? props.color : colors.black)};
`;

const Body01 = styled.text`
  font-size: 12px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.24px;
  color: ${(props) => (props.color ? props.color : colors.black)};
`;
const Body02 = styled.text`
  font-size: 14px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${(props) => (props.color ? props.color : colors.black)};
`;
const Body03 = styled.text`
  font-size: 10px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
  color: ${(props) => (props.color ? props.color : colors.black)};
`;

const typo = {
  title: {
    Title01: Title01,
  },
  body: {
    Body01: Body01,
    Body02: Body02,
    Body03: Body03,
  },
};

export default typo;
