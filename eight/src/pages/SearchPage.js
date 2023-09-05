import React, { useState } from "react";
import SearchBox from "../components/Common/SearchBox";
import SizedBox from "../components/Common/SizedBox";
import typo from "../styles/typo";
import NoSearchResult from "../components/Search/NoSearchResult";
import ArtListBox from "../components/Search/ArtListBox";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { t } from "i18next";

const SearchPage = ({ artList }) => {
  const [text, setText] = useState("");
  const [searchRes, setSearchRes] = useState(artList);
  const location = useLocation();
  // 메인페이지 검색 결과 받아오기
  const mainSearchTxt = location.state;

  useEffect(() => {
    if (mainSearchTxt !== null) {
      setSearchRes(artList.filter((data) => data.name.includes(mainSearchTxt)));
    }
  }, [mainSearchTxt]);

  // 인풋 바뀔 때마다 인풋 텍스트로 배열에 검색
  const onChange = (e) => {
    setText(e.target.value);
    setSearchRes(artList.filter((data) => data.name.includes(text)));
  };

  // 돋보기 아이콘 눌러 검색할 경우 인풋 초기화
  function search(e) {
    setText(e.target.value);
    setSearchRes(artList.filter((data) => data.name.includes(text)));
    setText("");
  }
  return (
    <Layout text={t("header.searchPage")}>
      <SizedBox height={20} />
      <SearchBox text={text} onChange={onChange} search={search} t={t} />

      {/* 검색 결과 존재할 경우 작품 목록 표시 */}
      {searchRes.length !== 0 ? (
        <>
          <SizedBox height={26} />
          <typo.body.Body02 style={{ paddingLeft: "8px" }}>
            {t("searchPage.artList")}
          </typo.body.Body02>
          <SizedBox height={8} />
          <ArtListContainer>
            {searchRes.map((data, idx) => {
              return <ArtListBox key={data.name} data={data} idx={idx} />;
            })}
          </ArtListContainer>
        </>
      ) : (
        <NoSearchResult />
      )}
    </Layout>
  );
};
const ArtListContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export default SearchPage;
