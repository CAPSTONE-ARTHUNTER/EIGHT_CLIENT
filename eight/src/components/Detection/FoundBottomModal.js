import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/color";
//test Image
import testImage from "../../assets/image/Inwang.jpg";
import confetti from "../../assets/image/confetti.png";
import typo from "../../styles/typo";
import { CloseIco } from "../../assets/icon";

const FoundBottomModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [visible, setVisible] = useState(true);
  
  const [image, setImage] = useState(testImage);
  const [partTitle, setPartTitle] = useState("테스트-부분");

  useEffect(() => {
    setVisible(showModal);
  }, [showModal]);

  const handleCloseModal = () => {
    setVisible(false);
    setTimeout(() => {
      setShowModal(false);
    }, 150);
  };

  return (
    <>
      {showModal && (
        <Background visible={visible}>
          <ConfettiContainer />
          <PartImage image={image} />
          <CloseIcoCon
            onClick={() => {
              handleCloseModal();
            }}
          >
            <CloseIco />
          </CloseIcoCon>

          <TextWrapper>
            <typo.title.Title01>{partTitle}</typo.title.Title01>
            <typo.body.Body02>우와! 해당하는 부분을 찾았어요</typo.body.Body02>
          </TextWrapper>
          <ConfirmButton
            onClick={() => {
              handleCloseModal();
            }}
          >
            <typo.body.Body02>수집하기</typo.body.Body02>
          </ConfirmButton>
        </Background>
      )}
    </>
  );
};
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const Background = styled.div`
  width: 100%;
  height: 283px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 32px 32px 0px 0px;
  background-color: ${colors.lightGrey};
  display: flex;
  justify-content: center;

  animation: ${(props) => (props.visible ? fadeIn : fadeOut)} 0.15s ease-out;
`;

const PartImage = styled.div`
  width: 132px;
  height: 138px;
  border-radius: 48px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: -20%;
`;

const ConfettiContainer = styled.div`
  width: 207px;
  height: 181px;
  top: -40%;
  z-index: 3;
  background-image: url(${confetti});
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
`;
const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: 40%;
  align-items: center;
`;

const CloseIcoCon = styled.button`
  position: absolute;
  border: none;
  right: 0;
  top: 0;
  padding: 12px;
  border-radius: 32px;
`;

const ConfirmButton = styled.button`
  display: flex;
  align-self: flex-end;
  margin-bottom: 32px;
  width: 60%;
  height: 50px;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  border: none;
  background-color: ${colors.orange};

  /* dropShadow1 */
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;

export default FoundBottomModal;
