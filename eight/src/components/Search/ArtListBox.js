import React from "react";
import styled from "styled-components";

// 임시 이미지
import typo from "../../styles/typo";
import { colors } from "../../styles/color";
import SizedBox from "../Common/SizedBox";
import { useNavigate } from "react-router-dom";
import i18n from "../../i18n";
const ArtListBox = ({ data }) => {
  const navigate = useNavigate();

  return (
    <BackGround
      searchImage={data.art_image_url}
      onClick={() => {
        navigate(`/docent/${data.art_id}`, { state: { prevPage: "search" } });
      }}
    >
      <InfoArea>
        <TextGroup>
          <typo.body.Body02 color={colors.white}>
            {i18n.language === "en" ? (
              <>{data.art_name_en}</>
            ) : (
              <>{data.art_name_kr}</>
            )}
          </typo.body.Body02>
          <SizedBox height={2} />
          <typo.body.Body03 color={colors.white}>
            {i18n.language === "en" ? null : (
              <>
                {data.art_artist_name} / {data.art_era}
              </>
            )}
          </typo.body.Body03>
        </TextGroup>
      </InfoArea>
    </BackGround>
  );
};

const BackGround = styled.div`
  width: 48%;
  height: 12.75rem;
  background-image: url(${(props) => props.searchImage});
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  position: relative;
  flex-shrink: 0;
  margin-bottom: 1rem;
`;
const InfoArea = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0px 0px 0.5rem 0.5rem;
  background: rgba(71, 71, 71, 0.4);
  backdrop-filter: blur(0.25rem);

  position: absolute;
  bottom: 0;
`;
const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
`;
export default ArtListBox;
