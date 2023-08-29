import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import typo from "../../styles/typo";

const AudioSpeedBtn = ({ btnSpeed, setPlaybackSpeed, playbackSpeed }) => {
  return (
    <SpeedBtn
      onClick={() => {
        setPlaybackSpeed(btnSpeed);
      }}
      selected={playbackSpeed === btnSpeed ? true : false}
    >
      <typo.body.Body01>{btnSpeed}x</typo.body.Body01>
    </SpeedBtn>
  );
};
const SpeedBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid ${colors.beige};
  background-color: ${(props) =>
    props.selected === true ? colors.orange : colors.white};
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
`;
export default AudioSpeedBtn;
