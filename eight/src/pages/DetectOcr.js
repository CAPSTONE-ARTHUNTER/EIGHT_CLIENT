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
import { serverTagRecognize } from "../api/Artwork.apis";

function DetectOcr() {
  const camera = useRef(null);
  const [image, setImage] = useState();
  const location = useLocation().pathname;
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [foundModal, setFoundModal] = useState(false);
  const [notFoundModal, setNotFoundModal] = useState(false);
  const [tagDetectedData, setTagDetectedData] = useState({
    id: -1,
    image: testImage,
    name: "예시데이터",
  });
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
      PostOcrImg(ocrImgData).then((res) => {
        // ocr 결과 있는 경우
        if (res.data.responses[0].textAnnotations) {
          console.log(res.data.responses[0].fullTextAnnotation.text);
          const data = {
            text: res.data.responses[0].fullTextAnnotation.text,
          };
          serverTagRecognize(data).then((res) => {
            if (res.data.error === null) {
              // 발견한 경우
              setTagDetectedData({
                id: res.data.id,
                image: testImage,
                name: res.data.name,
              });
              setFoundModal(true);
            } else {
              // 서버에서 결과 못 찾은 경우
              console.log("no res - server");
              return setNotFoundModal(true);
            }
          });
        } else {
          // ocr 결과 없을 경우 실패 모달
          console.log("no text - ocr");
          return setNotFoundModal(true);
        }
      });
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
          <TagDetectedModal data={tagDetectedData} LB={closeFoundModal} />
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
