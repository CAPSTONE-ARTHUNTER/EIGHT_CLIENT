import "./App.css";
import axios from "axios";
// import fs from "fs";
import { useEffect } from "react";
import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import styled from "styled-components";

const Component = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);
  const [detected, setDetected] = useState([]);
  useEffect(() => {
    console.log("detected!", detected);
  }, [detected]);
  var infer = function () {
    console.log("infer!!");
    axios({
      method: "POST",
      url: "https://detect.roboflow.com/painting-l6exb/8",
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
        if (response.data.predictions != []) {
          for (var i = 0; i < response.data.predictions.length; i++) {
            var detectedList = [];
            console.log(response.data.predictions[i].class);
            detectedList.push(response.data.predictions[i].class);
            setDetected(detectedList);
            console.log(detectedList);
          }
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  function takeaPic() {
    const photoTaken = camera.current.takePhoto();
    setImage(photoTaken);
    setDetected([]);
    infer();
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
        {detected.map((data) => {
          <TitleText key={data}>{data}</TitleText>;
        })}
        {detected === [] ? (
          <div>
          <TitleText>nothing found</TitleText>
        </div>
        ) : <div>
            <TitleText>{detected}</TitleText>
          </div>}
      </div>
      <img src={image} height={300} width={300} alt="Taken photo" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <script src="https://cdn.roboflow.com/0.2.20/roboflow.js"></script>
        <TitleText>Eight🎱</TitleText>
        <CamContainer>
          <Component></Component>
        </CamContainer>
      </header>
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

export default App;
