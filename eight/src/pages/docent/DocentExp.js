import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import SizedBox from "../../components/Common/SizedBox";
import { useState } from "react";
import styled from "styled-components";
import CollectionTab from "../../components/Collection/CollectionTab";
import typo from "../../styles/typo";
import PartialInfo from "../../components/docent/PartialInfo";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import AudioBtn from "../../components/docent/AudioBtn";
import { useQuery } from "react-query";
import { serverLoggedAxios } from "../../api";

const DocentExp = () => {
  const { t } = useTranslation();
  const { artId } = useParams();

  // 탭
  const [tabState, setTabState] = useState(0);
  const tabName = {
    firstko: "부분별 해설",
    secondko: "전체 해설",
    firsten: "Partial Comment",
    seconden: "Entire Comment",
  };

  const expPageInfo = useQuery(
    `expPageInfo_${artId}`,
    () =>
      serverLoggedAxios.get(`/app/artwork/parts/${artId}`).then((res) => {
        return res.data.data;
      }),
    {
      staleTime: 300000,
      cacheTime: Infinity,
      enabled: tabState === 0,
    }
  );
  const expPageEntireInfo = useQuery(
    `expPageEntireInfo_${artId}`,
    () =>
      serverLoggedAxios.get(`app/artwork/details/${artId}`).then((res) => {
        return res.data.data.relicDescription;
      }),
    {
      staleTime: 300000,
      cacheTime: Infinity,
      enabled: tabState === 1,
    }
  );

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
      {expPageInfo.isLoading ? (
        <typo.title.Title01>Loading...</typo.title.Title01>
      ) : null}
      {expPageInfo.isFetched ? (
        <Layout text={expPageInfo.data.relicName}>
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
              src={expPageInfo.data.relicImage}
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
              <typo.title.Title01>
                {expPageInfo.data.relicName}
              </typo.title.Title01>
              <SizedBox Rheight={".2rem"} />
              <typo.body.Body01>
                {expPageInfo.data.author} / {expPageInfo.data.nationality}
              </typo.body.Body01>
            </TitleBox>
            <SizedBox Rheight={"2rem"} />
            {tabState === 0 ? (
              <>
                {expPageInfo.data.partDescriptionInfoList.map((part) => {
                  return (
                    <PartialInfo
                      key={"partialInfo" + expPageInfo.data.partNum + part.name}
                      data={part}
                      tabState={tabState}
                      artId={artId}
                      // audio
                      setAudioData={setAudioData}
                      handleAudioPlay={handleAudioPlay}
                      isAudioPlaying={isAudioPlaying}
                      audioId={audioId}
                      setAudioId={setAudioId}
                    />
                  );
                })}
              </>
            ) : (
              <PartialInfo
                data={expPageEntireInfo}
                tabState={tabState}
                artId={artId}
                // audio
                setAudioData={setAudioData}
                handleAudioPlay={handleAudioPlay}
                isAudioPlaying={isAudioPlaying}
                audioId={audioId}
                setAudioId={setAudioId}
              />
            )}
          </Container>
        </Layout>
      ) : null}
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

export default DocentExp;
