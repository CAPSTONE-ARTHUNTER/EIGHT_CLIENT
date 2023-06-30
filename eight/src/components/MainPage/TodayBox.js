import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import { CollectionIco, DocentIco } from "../../assets/icon";
import typo from "../../styles/typo";

// 임시 이미지
import testImage from "../../assets/image/Inwang.jpg";

const TodayBox = () => {
  const [todayImage, setTodayImage] = useState(testImage);
  const [todayTitle, setTodayTitle] = useState("제목 예시");
  const [todayBody, setTodayBody] = useState("부가 설명 예시");
  return (
    <BackContainer todayImage={todayImage}>
      <TextGroup>
        <typo.title.Title01 color={colors.white}>
          {todayTitle}
        </typo.title.Title01>
        <typo.body.Body01 color={colors.white}>{todayBody}</typo.body.Body01>
      </TextGroup>
      <ButtonGroup>
        <RowWrapper>
          <DocentGoBtn
            onClick={() => {
              console.log("해설 화면으로 이동");
            }}
          >
            <DocentIco />
            <typo.body.Body02 color={colors.white}>
              해설 보러가기
            </typo.body.Body02>
          </DocentGoBtn>
          <CollectionGoBtn
            onClick={() => {
              console.log("도감 화면으로 이동");
            }}
          >
            <CollectionIco />
            <typo.body.Body02>도감으로 가기</typo.body.Body02>
          </CollectionGoBtn>
        </RowWrapper>
      </ButtonGroup>
    </BackContainer>
  );
};

const BackContainer = styled.div`
  width: 280px;
  height: 260px;
  background-color: ${colors.beige};
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url(${(props) => props.todayImage});
  background-size: cover;
  background-position: center;
`;
const TextGroup = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  color: ${colors.white};
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

// 내부 버튼
const DocentGoBtn = styled.button`
  border-radius: 32px;
  border: none;
  background: rgba(243, 243, 243, 0.3);
  backdrop-filter: blur(6px);
  height: 52px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;

  color: ${colors.white};
`;
const CollectionGoBtn = styled.button`
  border-radius: 32px;
  border: none;
  background: ${colors.white};
  height: 52px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;

  color: ${colors.brown};
`;
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 4px;
`;
export default TodayBox;
