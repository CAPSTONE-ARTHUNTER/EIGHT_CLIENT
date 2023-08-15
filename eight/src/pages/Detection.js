import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CaptureBtn from "../components/Detection/Button/CaptureBtn";
import SizedBox from "../components/Common/SizedBox";
import { colors } from "../styles/color";
import CamComponent from "../components/Detection/CamComponent";
import { detect } from "../api/Detection.apis";

function Detection() {
  const camera = useRef(null);
  const [image, setImage] = useState();
  const location = useLocation().pathname;
  const [detected, setDetected] = useState(["Detect"]);

  //detection page가 아니면 cam close
  useEffect(() => {
    if (location !== "/detection") {
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
    }
    detect(image)
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
    <Layout text={"작품 인식"}>
      <Container>
        <SizedBox height={90} />
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
        <CaptureBtn takeaPic={takeaPic} />
      </Container>
      <script src="https://cdn.roboflow.com/0.2.20/roboflow.js"></script>
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
export default Detection;
