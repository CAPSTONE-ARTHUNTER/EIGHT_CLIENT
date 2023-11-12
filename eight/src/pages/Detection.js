import React, { useEffect, useRef, useState } from "react";
import { t } from "i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { detect } from "../api/Detection.apis";
import NotiModal from "../components/Common/NotiModal";
import FoundBottomModal from "../components/Detection/FoundBottomModal";
import Layout from "../components/Layout/Layout";
import CamComponent from "../components/Detection/CamComponent";
import SizedBox from "../components/Common/SizedBox";
import { colors } from "../styles/color";
import typo from "../styles/typo";
import CaptureBtn from "../components/Detection/Button/CaptureBtn";
import styled from "styled-components";
import { getGptComment } from "../api/GptDocent";

const DocentCam = () => {
  const navigation = useNavigate();
  const camera = useRef(null);
  const [image, setImage] = useState();
  const location = useLocation().pathname;
  const [detected, setDetected] = useState([]);
  const detectionState = {
    default: "Detect",
    ongoing: "Detecting...",
    success: "Success",
    noresult: "No result",
    error: "error",
  };
  const [detectState, setDetectState] = useState(detectionState.default);
  const [triggerRefetch, setTriggerRefetch] = useState(false);
  const [notFoundModal, setNotFoundModal] = useState(false);
  const [foundModalOpen, setFoundModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    img: null,
    artName: "testArt",
    partName: "testPart",
    relicId: -1,
    elementDescription: "test description",
  });

  //detect page가 아니면 cam close
  useEffect(() => {
    if (location !== "*/detectPart") {
      camera.current = null;
    }
  }, [location]);

  useEffect(() => {
    if (image) {
      infer();
    }
  }, [image]);

  var infer = async function () {
    setDetectState(detectionState.ongoing);
    if (image === undefined) {
      console.log("image is undefined.");
    } else {
      // class restriction 추가
      await detect(image)
        .then((response) => {
          setDetectState(detectionState.success);
          // 결과 있는 경우
          if (response.data.predictions.length !== 0) {
            setDetected(() => {
              const DetectedList = [];
              for (var i = 0; i < response.data.predictions.length; i++) {
                console.log(response.data.predictions[i].class);
                DetectedList.push(response.data.predictions[i].class);
              }
              return DetectedList;
            });
          } else {
            // 결과 없는 경우
            setDetected([]);
            setDetectState(detectionState.noresult);
          }
        })
        .catch(function (error) {
          console.log(error.message);
          setDetectState(detectionState.error);
        })
        .finally(cleanArray());
    }
  };

  useEffect(() => {
    console.log(detectState);
    if (
      detectState === detectionState.success ||
      detectState === detectionState.noresult
    )
      handleModal();
  }, [detectState]);

  function cleanArray() {
    setTimeout(() => {
      setDetected([]);
      setDetectState(detectionState.default);
      setImage();
    }, 2000);
  }

  async function takeaPic() {
    const photoTaken = await camera.current.takePhoto();
    setImage(photoTaken);
  }

  function handleModal() {
    if (detected.length !== 0) {
      getGptComment(detected[0])
        .then((res) => {
          setModalInfo({
            img: res.elementImage,
            artName: res.relicName,
            partName: res.elementName,
            relicId: res.relicId,
            elementDescription: res.elementDescription,
          });
          setFoundModalOpen(true);
        })
        .catch((err) => {
          setNotFoundModal(true);
          console.log(err);
        });
    } else {
      setNotFoundModal(true);
    }
  }
  function closeNotiModal() {
    setNotFoundModal(false);
  }

  function viewGptDesc() {
    // 해설 페이지 라우팅 (데이터 넘겨주기)
    navigation("/gptdocent", {
      state: modalInfo,
    });
  }
  return (
    <>
      <Background>
        {/* 태그 검색 실패시 모달 */}
        {notFoundModal ? (
          <NotiModal text={t("DocentPage.Cam.fail")} onClick={closeNotiModal} />
        ) : null}
        {foundModalOpen ? (
          <FoundBottomModal
            setFoundModalOpen={setFoundModalOpen}
            image={modalInfo.img}
            partTitle={modalInfo.artName + " - " + modalInfo.partName}
            triggerRefetch={triggerRefetch}
            setTriggerRefetch={setTriggerRefetch}
            onBtnClick={() => {
              viewGptDesc();
            }}
          />
        ) : null}
        <Layout text="DocentCam">
          <Container>
            <CamContainer>
              <CamComponent
                detected={detected}
                detectState={detectState}
                camera={camera}
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

            <SizedBox Rwidth={"1.5rem"} />
            <PartContainer>
              <SizedBox Rheight={"0.75rem"} />

              {/* 텍스트 */}
              <div style={{ paddingLeft: "2.5rem" }}>
                <typo.body.Body02 color={colors.white}>
                  작품의 궁금한 부분을 촬영하세요!
                </typo.body.Body02>
              </div>
            </PartContainer>

            {/* 촬영 버튼 */}
            <CaptureBtn takeaPic={takeaPic} />
          </Container>
        </Layout>
      </Background>
    </>
  );
};

const Background = styled.div`
  background-color: ${colors.black};
  position: absolute;
  width: 100%;
  height: 100%;
`;

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
  /* background-color: ${colors.black}; */
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
const PartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default DocentCam;
