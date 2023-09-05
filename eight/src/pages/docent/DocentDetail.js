import React from "react";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import { PointIco, PuzzleIco } from "../../assets/icon";
import { colors } from "../../styles/color";
import inwang from "../../assets/image/Inwang.jpg";
import typo from "../../styles/typo";
import SizedBox from "../../components/Common/SizedBox";
import { useState } from "react";
import WideBtn from "../../components/Common/WideBtn";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const DocentDetail = ({ artInfo }) => {
  const { artId } = useParams();
  const { detailId } = useParams();
  const { t } = useTranslation();
  const [artImgHeight, setArtImageHeight] = useState(0);
  const navigate = useNavigate();
  const artPageInfo = artInfo.find((item) => item.id == artId);
  const artPageDetailInfo = artPageInfo.quest.find(
    (item) => item.id == detailId
  );
  const handleImageLoad = (event) => {
    const imgElement = event.target;
    setArtImageHeight(imgElement.height);
  };
  const exData = {
    elements: [
      {
        id: "1",
        point: "30,20", //"x,y"
        isSolved: true,
      },
      {
        id: "2",
        point: "30,60",
        isSolved: true,
      },
      {
        id: "3",
        point: "90,10",
        isSolved: false,
      },
      {
        id: "4",
        point: "10,75",
        isSolved: true,
      },
    ],
    element_solved_num: 3, //요소 찾은 개수
    element_num: 4, //요소 전체 개수
  };

  return (
    <Layout text={artPageInfo.name}>
      <SizedBox Rheight={"1.5rem"} />

      <ColWrapper>
        {/* 퍼즐모양 */}
        <TopBox>
          <PuzzleIco fill={colors.brown} />
          <SizedBox Rheight={".5rem"} />
          <typo.body.Body01>{artPageDetailInfo.content}</typo.body.Body01>
        </TopBox>
        <SizedBox Rheight={"2rem"} />
      </ColWrapper>

      {/* 이미지 */}
      <ColWrapper>
        <ImgWrapper>
          {/* point 표시 */}
          {exData.elements.map((ele) => {
            const pointLocation = ele.point.split(",");
            return (
              <PointLocation
                key={ele.id + "point"}
                left={pointLocation[0]}
                top={pointLocation[1]}
              >
                <PointIco fill={ele.isSolved ? colors.orange : colors.white} />
              </PointLocation>
            );
          })}
          <img
            src={inwang}
            alt="art"
            className="artImg"
            onLoad={handleImageLoad}
          />
        </ImgWrapper>
        <SizedBox height={artImgHeight} />
        <SizedBox Rheight={"2rem"} />
      </ColWrapper>

      {/* 수집한 부분 수 표시 */}
      <ColWrapper>
        {/* 세부정보 받아와 처리 */}
        <RowWrapper style={{ gap: "0.75rem" }}>
          {exData.elements.map((ele) => {
            return <Dot key={ele.id + "dot"} solved={ele.isSolved} />;
          })}
        </RowWrapper>
        <SizedBox Rheight={".75rem"} />
        <typo.body.Body02>
          {exData.element_solved_num}/{exData.element_num}
        </typo.body.Body02>
        <SizedBox Rheight={"1.5rem"} />

        <TxtBox>
          <WideBtn
            text={t("DocentPage.Detail.btnTxt")}
            onClick={() => {
              navigate("detect");
            }}
          />
          <SizedBox Rheight={"2rem"} />

          {/* 텍스트 제목 */}
          <RowWrapper>
            <PointIco fill={colors.orange} />
            <SizedBox Rwidth={"0.5rem"} />
            <typo.body.Body02>{artPageDetailInfo.content}</typo.body.Body02>
          </RowWrapper>
          <SizedBox Rheight={"1rem"} />

          {/* 텍스트 바디 */}
          <typo.body.DocentContent>
            {artPageDetailInfo.contentDetail}
          </typo.body.DocentContent>
        </TxtBox>
      </ColWrapper>
    </Layout>
  );
};

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .artImg {
    width: 100%;
    position: relative;
    left: 0;
    right: 0;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 8.5rem;
  align-items: center;
  word-break: keep-all;
  text-align: center;
`;

const TxtBox = styled.div`
  width: 94%;
  display: flex;
  flex-direction: column;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  word-break: keep-all;
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: ${(props) => (props.solved ? colors.orange : colors.copper1)};
`;
const PointLocation = styled.div`
  position: absolute;
  z-index: 2;
  left: ${(props) => props.left + "%"};
  top: ${(props) => props.top + "%"};
`;
const ImgWrapper = styled.div`
  position: absolute;
  width: 100%;
`;
export default DocentDetail;
