import React from "react";
import styled from "styled-components";
import { LockedIco, PlayIco, PuzzleIco } from "../../assets/icon";
import typo from "../../styles/typo";
import { colors } from "../../styles/color";
import SizedBox from "../Common/SizedBox";
import { useTranslation } from "react-i18next";
import { translate } from "../../api/GoogleTranslate.apis";
import { useQuery } from "react-query";
import { ttsTransform } from "../../api/TTS.apis";
// import { getSpeech } from "../../api/getSpeech";

const PartialInfo = ({ idx, artInfo, t, tabState }) => {
  const { i18n } = useTranslation();
  const translatedData = useQuery(
    [`translation_${idx}`],
    () => translate(artInfo.contentDetail, i18n.language),
    {
      staleTime: 300000,
      cacheTime: Infinity,
      enabled: i18n.language !== "ko",
    }
  );
  return (
    <>
      {tabState === 0 ? (
        // 부분 해설
        <Container>
          <RowWrapper>
            <ColWrapper>
              {artInfo.solved ? (
                <PuzzleIco fill={colors.brown} />
              ) : (
                <PuzzleIco fill={colors.copper1} />
              )}
              <SizedBox Rheight={".5rem"} />
              {artInfo.solved && (
                <TouchArea
                  onClick={() => {
                    // tts
                    let content, voicelngCode, voiceName;
                    if (i18n.language === "ko") {
                      content = artInfo.contentDetail;
                      voicelngCode = "ko-KR";
                      voiceName = "ko-KR-Neural2-B";
                    } else if (i18n.language === "en") {
                      content = translatedData.data;
                      voicelngCode = "en-US";
                      voiceName = "en-US-Neural2-F";
                    }
                    const ttsData = {
                      input: {
                        text: content,
                      },
                      voice: {
                        languageCode: voicelngCode,
                        name: voiceName,
                      },
                      audioConfig: {
                        audioEncoding: "MP3",
                        effectsProfileId: [
                          "small-bluetooth-speaker-class-device",
                        ],
                        pitch: 0,
                        speakingRate: 1,
                      },
                    };
                    ttsTransform(ttsData).then((res) => {
                      const audio = new Audio(
                        "data:audio/wav;base64," + res.data.audioContent
                      );
                      audio.addEventListener("loadeddata", () => {
                        audio.play();
                      });
                    });
                    // Web Speech API
                    // if (i18n.language !== "ko") {
                    //   getSpeech(translatedData.data, "en-US");
                    // } else {
                    //   getSpeech(artInfo.contentDetail, "ko-KR");
                    // }
                  }}
                >
                  <PlayIco />
                </TouchArea>
              )}
            </ColWrapper>
            <ColWrapper style={{ width: "100%" }}>
              <TitleBox>
                <typo.body.Body01>{artInfo.content}</typo.body.Body01>
              </TitleBox>
              <SizedBox Rheight={".5rem"} />

              <BodyBox>
                {/* 잠긴 부분입니다 */}
                {!artInfo.solved && (
                  <BlockWindow>
                    <LockedIco />
                    <SizedBox Rheight={"0.75rem"} />
                    <typo.body.Body02>
                      {t("DocentPage.Exp.lockedMsg1")}
                    </typo.body.Body02>
                    <typo.body.Body01>
                      {t("DocentPage.Exp.lockedMsg2")}
                    </typo.body.Body01>
                  </BlockWindow>
                )}
                <typo.body.DocentContent>
                  {i18n.language === "ko"
                    ? artInfo.contentDetail
                    : translatedData.data}
                </typo.body.DocentContent>
              </BodyBox>
            </ColWrapper>
            <SizedBox Rwidth={"1rem"} />
          </RowWrapper>
          <SizedBox Rheight={"3rem"} />
        </Container>
      ) : (
        // 전체 해설
        <div style={{ paddingLeft: ".6rem", paddingRight: ".6rem" }}>
          <typo.body.DocentContent>
            {i18n.language === "ko"
              ? artInfo.contentDetail
              : translatedData.data}
          </typo.body.DocentContent>
          <SizedBox Rheight={"2rem"} />
        </div>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
`;
const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;
const TitleBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0.6rem;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 1px solid ${colors.brown};
  background: ${colors.white};
`;
const TouchArea = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BodyBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BlockWindow = styled.div`
  width: 104%;
  height: 100%;
  border-radius: 0.75rem;
  background: rgba(243, 243, 243, 0.4);
  backdrop-filter: blur(0.4rem);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default PartialInfo;
