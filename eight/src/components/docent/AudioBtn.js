import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import { PauseIco, PlayIco, PlaySpeedIco } from "../../assets/icon";
import typo from "../../styles/typo";
import SizedBox from "../Common/SizedBox";
import AudioSpeedBtn from "./AudioSpeedBtn";

const AudioBtn = ({
  setPlaybackSpeed,
  playbackSpeed,
  isPlaying,
  audioLength,
}) => {
  const [speedSetOpen, setSpeedSetOpen] = useState(false);
  return (
    <Container>
      <Background>
        <SizedBox Rwidth={".5rem"} />
        <TouchArea>{isPlaying ? <PauseIco /> : <PlayIco />}</TouchArea>

        <typo.body.Body03>00:00 / 3:55</typo.body.Body03>

        <ProgressBarBG>
          <ProgressBar current={20} />
        </ProgressBarBG>

        <TouchArea
          onClick={() => {
            setSpeedSetOpen(!speedSetOpen);
          }}
        >
          <PlaySpeedIco fill={colors.brown} />
        </TouchArea>
        <SizedBox Rwidth={".5rem"} />
      </Background>
      {speedSetOpen ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SizedBox Rheight={"0.75rem"} />
          <ButtonSet>
            <AudioSpeedBtn
              btnSpeed={0.5}
              playbackSpeed={playbackSpeed}
              setPlaybackSpeed={setPlaybackSpeed}
            />
            <AudioSpeedBtn
              btnSpeed={1.0}
              playbackSpeed={playbackSpeed}
              setPlaybackSpeed={setPlaybackSpeed}
            />
            <AudioSpeedBtn
              btnSpeed={1.2}
              playbackSpeed={playbackSpeed}
              setPlaybackSpeed={setPlaybackSpeed}
            />
            <AudioSpeedBtn
              btnSpeed={1.4}
              playbackSpeed={playbackSpeed}
              setPlaybackSpeed={setPlaybackSpeed}
            />
            <AudioSpeedBtn
              btnSpeed={1.6}
              playbackSpeed={playbackSpeed}
              setPlaybackSpeed={setPlaybackSpeed}
            />
          </ButtonSet>
        </div>
      ) : null}

      <SizedBox Rheight={"1rem"} />
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  width: 90%;
  bottom: 10%;
  height: 3.25rem;
  display: flex;
  flex-direction: column;
`;
const Background = styled.div`
  height: 100%;
  border-radius: 3rem;
  background: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  /* dropShadow1 */
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;
const TouchArea = styled.div`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
`;
const ProgressBarBG = styled.div`
  position: relative;
  width: 55%;
  height: 0.25rem;
  border-radius: 0.25rem;
  background-color: ${colors.beige};
`;
const ProgressBar = styled.div`
  position: absolute;
  width: ${(props) => props.current + "%"};
  height: 0.25rem;
  border-radius: 0.25rem;
  background-color: ${colors.brown};
`;
const ButtonSet = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export default AudioBtn;
