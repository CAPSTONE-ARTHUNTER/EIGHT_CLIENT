import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import { PuzzleIco } from "../../assets/icon";
import typo from "../../styles/typo";
import { useNavigate } from "react-router-dom";
import i18n from "../../i18n";
import { translate } from "../../api/GoogleTranslate.apis";
import { useQuery } from "react-query";

const PartPageBtn = ({ artInfo, prevPage }) => {
  const navigate = useNavigate();
  const content = useQuery(
    [`docent_btn_${artInfo.id}`],
    () => translate(artInfo.content, i18n.language),
    {
      staleTime: 300000,
      cacheTime: Infinity,
      enabled: i18n.language === "en",
    }
  );

  //   colors
  let puzzleColor = colors.copper1;
  let borderColor = colors.copper2;
  let bgColor = colors.white;

  if (artInfo.solved === true) {
    puzzleColor = colors.brown;
    borderColor = colors.brown;
    bgColor = colors.beige;
  } else {
    puzzleColor = colors.copper1;
    borderColor = colors.copper2;
    bgColor = colors.white;
  }

  return (
    <Background
      borderColor={borderColor}
      bgColor={bgColor}
      onClick={() => {
        navigate(`detail/${artInfo.id}`, { state: { prevPage: prevPage } });
      }}
    >
      <PuzzleIco fill={puzzleColor} />
      <TitleBox>
        <typo.body.Body01>
          {i18n.language === "en" ? content.data : artInfo.content}
        </typo.body.Body01>
      </TitleBox>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  width: 46%;
  height: 6.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : colors.copper2)};
  background: ${(props) => (props.bgColor ? props.bgColor : colors.white)};

  /* dropShadow1 */
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;
const TitleBox = styled.div`
  display: flex;
  width: 136px;
  flex-direction: column;
  word-break: keep-all;
  text-align: center;
`;
export default PartPageBtn;
