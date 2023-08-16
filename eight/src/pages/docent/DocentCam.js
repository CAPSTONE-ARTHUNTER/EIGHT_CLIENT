import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import { colors } from "../../styles/color";
import { useLocation } from "react-router-dom";
import { detect } from "../../api/Detection.apis";
import CamComponent from "../../components/Detection/CamComponent";
import CaptureBtn from "../../components/Detection/Button/CaptureBtn";
import typo from "../../styles/typo";
import SizedBox from "../../components/Common/SizedBox";
import Target from "../../components/Detection/Target";
import testImage from "../../assets/image/Inwang.jpg";

const DocentCam = () => {
  const camera = useRef(null);
  const [image, setImage] = useState();
  const location = useLocation().pathname;
  const [detected, setDetected] = useState(["Detect"]);
  const [currentState, setCurrentState] = useState({
    idx: null,
    name: null,
  });

  const SampleCollectData = [
    {
      solved_element_id: 1,
      is_solved: true,
      solved_at: "1995-12-17T03:24:00",
      element_id: 1,
      user_id: 1234,

      name: "a",
      image: testImage,
    },
    {
      solved_element_id: 2,
      is_solved: false,
      solved_at: "1995-12-17T03:24:00",
      element_id: 2,
      user_id: 1235,

      name: "b",
      image: testImage,
    },
    {
      solved_element_id: 3,
      is_solved: true,
      solved_at: "1995-12-17T03:24:00",
      element_id: 3,
      user_id: 1236,

      name: "c",
      image: testImage,
    },
    {
      solved_element_id: 4,
      is_solved: false,
      solved_at: "1995-12-17T03:24:00",
      element_id: 4,
      user_id: 1237,

      name: "d",
      image: testImage,
    },
  ];

  //detect page가 아니면 cam close
  useEffect(() => {
    if (location !== "/detect") {
      camera.current = null;
    }
  }, [location]);

  useEffect(() => {
    if (image) {
      infer();
    }
  }, [image]);

  var infer = function () {
    var detectedList = [];
    console.log("infer!!");
    setDetected([]);
    if (image === undefined) {
      console.log("image is undefined.");
    } else if (currentState.name === null) {
      console.log("select the piece");
      cleanArray();
    } else {
      const config = {
        params: {
          classes: currentState.name,
        },
      };
      detect(image, config)
        .then(function (response) {
          console.log(response.data);
          if (response.data.predictions.length !== 0) {
            setDetected((prevDetectedList) => {
              const updatedDetectedList = [...prevDetectedList];
              for (var i = 0; i < response.data.predictions.length; i++) {
                console.log(response.data.predictions[i].class);
                updatedDetectedList.push(response.data.predictions[i].class);
              }
              return updatedDetectedList;
            });
          } else {
            setDetected((prevDetectedList) => [...prevDetectedList, "none"]);
          }
          cleanArray();
        })
        .catch(function (error) {
          console.log(error.message);
          detectedList = ["error"];
          setDetected(detectedList);
          cleanArray();
        });
    }
  };

  function cleanArray() {
    setTimeout(() => {
      setDetected(["Detect"]);
      setImage();
      console.log("clean!");
    }, 1500);
  }

  async function takeaPic() {
    const photoTaken = await camera.current.takePhoto();
    setImage(photoTaken);
    console.log("capture");
  }

  return (
    <Background>
      <Layout text="DocentCam">
        <Container>
          <CamContainer>
            <CamComponent detected={detected} camera={camera} />
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
            {/* 감지된 결과 있으면 창 띄우기 */}
            ...
          </CamContainer>

          <SizedBox Rwidth={"1.5rem"} />
          <PartContainer>
            {/* 슬롯 */}
            <PartSlot>
              {SampleCollectData.map((data, idx) => {
                return (
                  <Target
                    key={data.element_id}
                    partDone={data.is_solved}
                    image={data.image}
                    selected={currentState.idx === idx ? true : false}
                    onClick={() => {
                      setCurrentState({ idx: idx, name: data.name });
                    }}
                  />
                );
              })}
            </PartSlot>

            <SizedBox Rheight={"0.75rem"} />

            {/* 텍스트 */}
            <div style={{ paddingLeft: "2.5rem" }}>
              <typo.title.Title01 color={colors.white}>
                작품제목 {currentState.name ? "- " + currentState.name : null}
              </typo.title.Title01>
              <typo.body.Body02 color={colors.white}>
                찾으려는 조각을 선택해주세요!
              </typo.body.Body02>
            </div>
          </PartContainer>

          {/* 촬영 버튼 */}
          <CaptureBtn takeaPic={takeaPic} />
        </Container>
      </Layout>
    </Background>
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
  border-radius: 16px;
  background: rgba(125, 125, 125, 0.2);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  gap: 0.75rem;
`;

export default DocentCam;
