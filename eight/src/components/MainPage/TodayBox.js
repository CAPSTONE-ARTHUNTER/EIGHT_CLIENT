import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import { CollectionIco, DocentIco } from "../../assets/icon";
import typo from "../../styles/typo";
import i18next, { t } from "i18next";
import { useNavigate } from "react-router-dom";

const TodayBox = (boxInfo) => {
  const navigate = useNavigate();

  return (
    <BackContainer todayImage={boxInfo.data.art_image_url}>
      <TextGroup>
        {i18next.language === "en" ? (
          <>
            <typo.title.Title01 color={colors.white}>
              {boxInfo.data.art_name_en}
            </typo.title.Title01>
          </>
        ) : (
          <>
            <typo.title.Title01 color={colors.white}>
              {boxInfo.data.art_name_kr}
            </typo.title.Title01>
            <typo.body.Body01 color={colors.white}>
              {boxInfo.data.art_artist_name} / {boxInfo.data.art_era}
            </typo.body.Body01>
          </>
        )}
      </TextGroup>
      <ButtonGroup>
        <RowWrapper>
          <DocentGoBtn
            onClick={() => {
              navigate(`/docent/${boxInfo.data.art_id}`, {
                state: { prevPage: "main" },
              });
            }}
          >
            <DocentIco />
            <typo.body.Body02 color={colors.white}>
              {t("mainPage.goDocent")}
            </typo.body.Body02>
          </DocentGoBtn>
          <CollectionGoBtn
            onClick={() => {
              navigate("/collection");
            }}
          >
            <CollectionIco fill={colors.brown} />
            <typo.body.Body02>{t("mainPage.goCollection")}</typo.body.Body02>
          </CollectionGoBtn>
        </RowWrapper>
      </ButtonGroup>
    </BackContainer>
  );
};

const BackContainer = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: ${colors.beige};
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

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
