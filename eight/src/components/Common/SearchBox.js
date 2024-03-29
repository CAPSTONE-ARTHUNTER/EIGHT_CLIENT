import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import { SearchBarIco } from "../../assets/icon";
import SizedBox from "./SizedBox";

const SearchBox = ({ text, onChange, search, t }) => {
  return (
    <BackGround>
      <SizedBox width={16} />
      <InputBox
        placeholder={t("mainPage.searchMsg")}
        onChange={onChange}
        defaultValue={text || ""}
      />
      <IconContainer onClick={search}>
        <SearchBarIco />
      </IconContainer>
    </BackGround>
  );
};

const BackGround = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;
const IconContainer = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;
const InputBox = styled.input`
  color: ${colors.black};
  border: none;
  ::placeholder {
    color: ${colors.copper1};
  }
  :focus {
    outline: none;
  }
  width: 216px;
  height: 24px;
`;

export default SearchBox;
