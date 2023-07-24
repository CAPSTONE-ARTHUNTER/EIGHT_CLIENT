import React from "react";
import { Camera } from "react-camera-pro";
import { useState } from "react";
import { colors } from "../../styles/color";
import typo from "../../styles/typo";

const CamComponent = ({ detected, camera }) => {
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
        {detected.length === 0 ? (
          <div>
            <typo.title.Title01 color={colors.orange}>
              detecting...
            </typo.title.Title01>
          </div>
        ) : (
          <div>
            {detected.map((data) => (
              <typo.title.Title01 key={data} color={colors.orange}>
                {data}
              </typo.title.Title01>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CamComponent;
