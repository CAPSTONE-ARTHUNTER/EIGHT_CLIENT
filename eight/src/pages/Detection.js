import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import styled from "styled-components";
import BottomBar from "../components/Common/BottomBar";
import { useLocation } from "react-router-dom";

const Component = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState();
  const [detected, setDetected] = useState(["Detect"]);
  const location = useLocation().pathname;

  //detection page가 아니면 cam close
  useEffect(()=>{
    if (location!=='/detection'){
      camera.current=null
    }
  },[location])

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
    axios({
      method: "POST",
      url: "https://detect.roboflow.com/painting-l6exb/9",
      params: {
        api_key: process.env.REACT_APP_ROBOFLOW_API, //env처리
      },
      data: image,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
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

  async function takeaPic() {
    const photoTaken = await camera.current.takePhoto();
    setImage(photoTaken);
  }

  function cleanArray() {
    setTimeout(() => {
      setDetected(["Detect"]);
      console.log("clean!");
    }, 1500);
  }

  return (
    <div>
      <Camera
        ref={camera}
        numberOfCamerasCallback={setNumberOfCameras}
        aspectRatio={1 / 1}
        facingMode="environment"
      />
      <button onClick={() => takeaPic()}>Take photo</button>
      <button
        // hidden={numberOfCameras <= 1}
        onClick={() => {
          camera.current.switchCamera();
        }}
      >
        switchCamera
      </button>
      <div>
        {detected.length === 0 ? (
          <div>
            <TitleText>detecting...</TitleText>
          </div>
        ) : (
          <div>
            {detected.map((data) => (
              <TitleText key={data}>{data}</TitleText>
            ))}
          </div>
        )}
      </div>
      <img src={image} height={300} width={300} alt="Taken photo" />
    </div>
  );
};

function Detection(props) {
  return (
    <div>
      <header className="App-header">
        <script src="https://cdn.roboflow.com/0.2.20/roboflow.js"></script>
        <TitleText>Eight🎱</TitleText>
        <CamContainer>
          <Component></Component>
        </CamContainer>
      </header>
      <BottomBar/>
    </div>
  );
}

const TitleText = styled.text`
  font-size: 40pt;
`;
const CamContainer = styled.div`
  height: 300px;
  width: 300px;
  background: black;
`;

export default Detection;
