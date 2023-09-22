import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CaptureBtn from "../components/Detection/Button/CaptureBtn";
import SizedBox from "../components/Common/SizedBox";
import { colors } from "../styles/color";
import { Camera } from "react-camera-pro";
import { PostOcrImg } from "../api/GoogleOcr.apis";
import TagDetectedModal from "../components/Detection/TagDetectedModal";
import testImage from "../assets/image/Inwang.jpg";
import { t } from "i18next";
import NotiModal from "../components/Common/NotiModal";

function DetectOcr() {
  const camera = useRef(null);
  const [image, setImage] = useState();
  const location = useLocation().pathname;
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [foundModal, setFoundModal] = useState(true);
  const [notFoundModal, setNotFoundModal] = useState(true);
  const sampleTextDetectionData = {
    image: testImage,
    name: "예시데이터",
    desc: "예시데이터설명",
  };
  //detection page가 아니면 cam close
  useEffect(() => {
    if (location !== "/detection") {
      camera.current = null;
    }
  }, [location]);

  useEffect(() => {
    if (image) {
      let img = image.split(",");
      const ocrImgData = {
        requests: [
          {
            image: {
              content: img[1],
            },
            features: [
              {
                type: "TEXT_DETECTION",
              },
            ],
          },
        ],
      };
      PostOcrImg(ocrImgData).then((res) =>
        console.log(res.data.responses[0].fullTextAnnotation.text)
      );
      cleanArray();
    }
  }, [image]);

  function cleanArray() {
    setTimeout(() => {
      setImage();
    }, 1500);
  }

  async function takeaPic() {
    const photoTaken = await camera.current.takePhoto();
    setImage(photoTaken);
    console.log("capture");
  }

  function closeFoundModal() {
    setFoundModal(false);
  }
  function closeNotFoundModal() {
    setNotFoundModal(false);
  }

  return (
    <Layout text={t("header.detectionPage")}>
      <Container>
        {/* 태그 검색 실패시 모달 */}
        {notFoundModal ? (
          <NotiModal
            text={t("DocentPage.Cam.fail")}
            onClick={closeNotFoundModal}
          />
        ) : null}

        {/* 태그 검색 성공시 모달 */}
        {foundModal ? (
          <TagDetectedModal
            data={sampleTextDetectionData}
            LB={closeFoundModal}
          />
        ) : null}
        <SizedBox height={90} />
        <CamContainer>
          <Camera
            ref={camera}
            numberOfCamerasCallback={setNumberOfCameras}
            aspectRatio={1 / 1}
            facingMode="environment"
          />
          {/* image가 존재할 때만 카메라 프레임 위에 표시 */}
          {image ? (
            <ResultImgContainer>
              <img
                src={image}
                alt="detected"
                style={{ width: "100%", height: "100%", position: "" }}
              />
            </ResultImgContainer>
          ) : null}
        </CamContainer>
        {foundModal ? null : <CaptureBtn takeaPic={takeaPic} />}
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
`;

const CamContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
const ResultImgContainer = styled.div`
  position: absolute;
  width: fit-content;
`;
export default DetectOcr;
