import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import SizedBox from "../../components/Common/SizedBox";
import { useState } from "react";
import styled from "styled-components";
import typo from "../../styles/typo";
import PartialInfo from "../../components/docent/PartialInfo";
import AudioBtn from "../../components/docent/AudioBtn";
import { useLocation } from "react-router-dom";

const GPTDocent = () => {
  const location = useLocation();
  const gptData = location.state;
  const partialInfoData = {
    name: gptData.artName + " - " + gptData.partName,
    description: gptData.elementDescription,
    solved: true,
  };

  //   이미지높이
  const [artImgHeight, setArtImageHeight] = useState(0);
  const handleImageLoad = (event) => {
    const imgElement = event.target;
    setArtImageHeight(imgElement.height);
  };

  //Audio
  const [audioData, setAudioData] = useState();
  const [audio, setAudio] = useState(new Audio());
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioId, setAudioId] = useState();

  function handleAudioPlay() {
    if (isAudioPlaying && audio.src !== "") {
      audio.pause();
      setIsAudioPlaying(false);
    } else if (audio.src !== "") {
      audio.play();
      setIsAudioPlaying(true);
    } else {
      console.log("no audio");
    }
  }
  useEffect(() => {
    if (audioData) {
      audio.pause();
      setAudio(new Audio("data:audio/wav;base64," + audioData.data));
      setIsAudioPlaying(true);
    }
  }, [audioData]);

  useEffect(() => {
    setTimeout(() => {
      if (isAudioPlaying === true && audio.currentSrc) {
        audio.play();
      }
    }, 500);
  }, [audio]);

  useEffect(() => {
    audio.playbackRate = playbackSpeed;
  }, [playbackSpeed]);

  audio.addEventListener("ended", function (e) {
    e.stopPropagation();
    console.log("audio ended");
    setIsAudioPlaying(false);
    audio.pause();
  });
  return (
    <>
      <Layout text={gptData.partName}>
        {/* 하단 오디오 탭 */}
        {audioData ? (
          // audio 존재하는 경우에만 AudioBtn 표시
          <AudioBtn
            setPlaybackSpeed={setPlaybackSpeed}
            playbackSpeed={playbackSpeed}
            isPlaying={isAudioPlaying}
            setIsAudioPlaying={setIsAudioPlaying}
            handleAudioPlay={handleAudioPlay}
            audio={audio}
          />
        ) : null}

        <Container>
          <img
            src={gptData.img}
            alt="art"
            className="artImg"
            onLoad={handleImageLoad}
          />
          {/* 이미지 height만큼 띄우기 */}
          <SizedBox height={artImgHeight + 16} />

          {/* 제목란 */}
          <TitleBox>
            <typo.title.Title01>
              {gptData.artName + " - " + gptData.partName}
            </typo.title.Title01>
            <SizedBox Rheight={".2rem"} />
          </TitleBox>
          <SizedBox Rheight={"2rem"} />
          <PartialInfo
            data={partialInfoData}
            tabState={0}
            artId={gptData.relicId}
            // audio
            setAudioData={setAudioData}
            handleAudioPlay={handleAudioPlay}
            isAudioPlaying={isAudioPlaying}
            audioId={audioId}
            setAudioId={setAudioId}
          />
        </Container>
      </Layout>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .artImg {
    position: absolute;
    width: 100%;
    right: 0;
    left: 0;
  }
`;
const TitleBox = styled.div`
  padding: 0.6rem;
  /* line-break: anywhere; */
  word-break: keep-all;
`;

export default GPTDocent;
