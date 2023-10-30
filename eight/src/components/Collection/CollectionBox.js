import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import typo from "../../styles/typo";
import { useNavigate } from "react-router-dom";

const CollectionBox = ({ dataId, img, found, num }) => {
  const navigation = useNavigate();
  return (
    <>
      {found ? (
        <Background
          backImg={img}
          onClick={() => {
            navigation(`/docent/${dataId}`, {
              state: { prevPage: "collection" },
            });
          }}
        />
      ) : (
        <Background>
          {found === false && (
            <typo.title.Title01 color={colors.lightGrey}>
              {num}
            </typo.title.Title01>
          )}
        </Background>
      )}
    </>
  );
};
const Background = styled.div`
  display: flex;
  width: 32%;
  height: 7rem;
  justify-content: center;
  align-items: center;
  background-color: ${colors.beige};
  border-radius: 0.5rem;

  background-image: url(${(props) => props.backImg});
  background-size: cover;
  background-position: center;
`;
export default CollectionBox;
