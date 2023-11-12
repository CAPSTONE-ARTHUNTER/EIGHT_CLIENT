import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import { colors } from "../../styles/color";
import { useLocation, useParams } from "react-router-dom";
import { detect } from "../../api/Detection.apis";
import CamComponent from "../../components/Detection/CamComponent";
import CaptureBtn from "../../components/Detection/Button/CaptureBtn";
import typo from "../../styles/typo";
import SizedBox from "../../components/Common/SizedBox";
import Target from "../../components/Detection/Target";
import FoundBottomModal from "../../components/Detection/FoundBottomModal";
import { serverLoggedAxios } from "../../api";
import NotiModal from "../../components/Common/NotiModal";
import { t } from "i18next";
import { partRegister } from "../../api/PartRegister";

const DocentCam = () => {
  const camera = useRef(null);
  const [image, setImage] = useState();
  const location = useLocation().pathname;
  const [detected, setDetected] = useState([]);
  const detectionState = {
    default: "Detect",
    ongoing: "Detecting...",
    success: "Success",
    noresult: "No result",
    notarget: "select the piece",
    error: "error",
  };
  const [detectState, setDetectState] = useState(detectionState.default);
  const [currentState, setCurrentState] = useState({
    id: null,
    name: null,
    image: null,
    solved: null,
  });
  const [elements, setElements] = useState([
    {
      id: -1,
      name: "element_name",
      image: "https://www.museum.go.kr/files/zin/curator_150_4.jpg",
      solved: false,
    },
  ]);
  const [triggerRefetch, setTriggerRefetch] = useState(false);
  const [notFoundModal, setNotFoundModal] = useState(false);
  const [foundModalOpen, setFoundModalOpen] = useState(false);

  const { artId, detailId } = useParams();

  useEffect(() => {
    console.log("get data");
    setTimeout(() => {
      serverLoggedAxios
        .get(`/app/artwork/elements/${artId}/${detailId}`)
        .then((res) => {
          setElements(res.data.data.elementInfoList);
        });
    }, 300);
  }, [triggerRefetch]);

  //detect page가 아니면 cam close
  useEffect(() => {
    if (location !== "*/detect") {
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
    } else if (currentState.name === null) {
      // 부분 선택하지 않은 경우
      setDetectState(detectionState.notarget);
      cleanArray();
    } else {
      // class restriction 추가
      const config = {
        params: {
          classes: currentState.name,
          confidence: 10,
        },
      };
      await detect(image, config)
        .then((response) => {
          console.log(response.data);
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

  /** 감지된 결과가 찾으려는 부분 이름과 일치하면 발견 모달 띄우기 */
  function handleModal() {
    const sameRes = detected.filter((data) => data === currentState.name);
    if (sameRes.length !== 0) {
      console.log("detected2: ", detected);
      console.log("currentState.name: ", currentState.name);
      setFoundModalOpen(true);
    } else {
      setNotFoundModal(true);
      console.log("no same res");
    }
  }
  function closeNotiModal() {
    setNotFoundModal(false);
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
            image={currentState.image}
            partTitle={currentState.name}
            triggerRefetch={triggerRefetch}
            setTriggerRefetch={setTriggerRefetch}
            onBtnClick={()=>{
              partRegister(currentState.name)
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
              {/* 슬롯 */}
              <PartSlot>
                {elements.map((data) => {
                  return (
                    <Target
                      key={data.id}
                      partDone={data.solved}
                      image={data.image}
                      selected={currentState.id === data.id ? true : false}
                      onClick={() => {
                        setCurrentState({
                          id: data.id,
                          name: data.name,
                          image: data.image,
                          solved: data.solved,
                        });
                      }}
                    />
                  );
                })}
              </PartSlot>

              <SizedBox Rheight={"0.75rem"} />

              {/* 텍스트 */}
              <div style={{ paddingLeft: "2.5rem" }}>
                <typo.title.Title01 color={colors.white}>
                  {currentState.name
                    ? currentState.name
                    : "찾으려는 조각을 선택해주세요!"}
                </typo.title.Title01>
                <typo.body.Body02 color={colors.white}>
                  찾으려는 조각을 선택해주세요!
                </typo.body.Body02>
              </div>
            </PartContainer>

            {/* 촬영 버튼 */}
            {currentState.solved ? null : <CaptureBtn takeaPic={takeaPic} />}
            {/* <CaptureBtn takeaPic={takeaPic} /> */}
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

const PartSlot = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  overflow: scroll;
  height: 5rem;
  width: fit-content;
  border-radius: 1rem;
  background: rgba(125, 125, 125, 0.2);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  gap: 0.75rem;
`;

export default DocentCam;
