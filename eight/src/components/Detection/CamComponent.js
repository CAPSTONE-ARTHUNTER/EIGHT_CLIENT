import React from "react";
import { Camera } from "react-camera-pro";
import { useState } from "react";
import { colors } from "../../styles/color";
import typo from "../../styles/typo";

const CamComponent = ({ detected, detectState, camera }) => {
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  return (
    <>
      <Camera
        ref={camera}
        numberOfCamerasCallback={setNumberOfCameras}
        aspectRatio={1 / 1}
        facingMode="environment"
      />
      <div>
        <div>
          <typo.title.Title01 color={colors.orange}>
            {detectState}
          </typo.title.Title01>
        </div>
        <div>
          {detected.map((data) => (
            <typo.title.Title01 key={data} color={colors.orange}>
              {data}
            </typo.title.Title01>
          ))}
        </div>
      </div>
    </>
  );
};

export default CamComponent;
