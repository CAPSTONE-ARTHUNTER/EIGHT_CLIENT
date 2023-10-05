import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import typo from "../../styles/typo";
import SizedBox from "../Common/SizedBox";
import TwoBtn from "./Button/TwoBtn";
import { useNavigate } from "react-router-dom";

const TagDetectedModal = ({ data, LB }) => {
  const navigate = useNavigate();
  return (
    <ScreenBg>
      <Container>
        <Background image={data.image}>
          <TxtBg>
            <SizedBox Rwidth={"1rem"} />
            <TxtWrapper>
              <SizedBox Rheight={"1rem"} />
              <typo.title.Title01 color={colors.white}>
                {data.name}
              </typo.title.Title01>
              <SizedBox Rheight={"1.6rem"} />
            </TxtWrapper>
          </TxtBg>
        </Background>
        <SizedBox Rheight={"3rem"} />
        <TwoBtn
          LB={LB}
          RB={() => {
            navigate(`/docent/${data.id}`, { state: { prevPage: "detect" } });
          }}
        />
      </Container>
    </ScreenBg>
  );
};
const ScreenBg = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const Container = styled.div`
  width: 80%;
`;
const Background = styled.div`
  display: flex;
  height: 23rem;
  flex-shrink: 0;
  border-radius: 2rem;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* dropShadow1 */
  box-shadow: 0.125rem 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.1);
`;
const TxtBg = styled.div`
  align-self: flex-end;
  display: flex;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  border-radius: 0 0 2rem 2rem;
  background: rgba(71, 71, 71, 0.4);

  /* back */
  backdrop-filter: blur(0.25rem);
`;
const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default TagDetectedModal;
