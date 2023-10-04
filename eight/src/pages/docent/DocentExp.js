import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import inwang from "../../assets/image/Inwang.jpg";
import SizedBox from "../../components/Common/SizedBox";
import { useState } from "react";
import styled from "styled-components";
import CollectionTab from "../../components/Collection/CollectionTab";
import typo from "../../styles/typo";
import PartialInfo from "../../components/docent/PartialInfo";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import AudioBtn from "../../components/docent/AudioBtn";

const DocentExp = ({ artInfo }) => {
  const { t } = useTranslation();
  const { artId } = useParams();
  const artPageInfo = artInfo.find((data) => data.id == artId);

  // 탭
  const [tabState, setTabState] = useState(0);
  const tabName = {
    firstko: "부분별 해설",
    secondko: "전체 해설",
    firsten: "Partial Comment",
    seconden: "Entire Comment",
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
    <Layout text={artPageInfo.name}>
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
          src={inwang}
          alt="art"
          className="artImg"
          onLoad={handleImageLoad}
        />
        {/* 이미지 height만큼 띄우기 */}
        <SizedBox height={artImgHeight + 16} />

        {/* 탭 */}
        <CollectionTab
          tabName={tabName}
          tabState={tabState}
          setTabState={setTabState}
          t={t}
        />
        <SizedBox height={16} />

        {/* 제목란 */}
        <TitleBox>
          <typo.title.Title01>{artPageInfo.name}</typo.title.Title01>
          <SizedBox Rheight={".2rem"} />
          <typo.body.Body01>
            {/* 수정필요 */}
            정선, 인왕제색도, 조선 1751년, 족자, 종이에 먹, 79.2×138.0cm, 2021년
            이건희 기증, 국보
          </typo.body.Body01>
        </TitleBox>
        <SizedBox Rheight={"2rem"} />
        {artPageInfo.quest.map((data, idx) => {
          return (
            <PartialInfo
              key={data.id}
              idx={idx}
              artInfo={data}
              t={t}
              tabState={tabState}
              // audio
              setAudioData={setAudioData}
              setPlaybackSpeed={setPlaybackSpeed}
              handleAudioPlay={handleAudioPlay}
              playbackSpeed={playbackSpeed}
              isAudioPlaying={isAudioPlaying}
              setIsAudioPlaying={setIsAudioPlaying}
              audio={audio}
              audioId={audioId}
              setAudioId={setAudioId}
            />
          );
        })}
      </Container>
    </Layout>
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

export default DocentExp;
