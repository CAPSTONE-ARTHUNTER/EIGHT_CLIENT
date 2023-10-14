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
import { serverLoggedAxios } from "../api";
import { useQuery } from "react-query";

const SearchPage = () => {
  const [text, setText] = useState("");
  const [searchRes, setSearchRes] = useState({ data: [] });
  const location = useLocation();
  const mainSearchTxt = location.state;

  const searchPageList = useQuery(
    `searchPageList`,
    () =>
      serverLoggedAxios.get("/app/artwork").then((res) => {
        return res.data.data;
      }),
    {
      staleTime: 30000000,
      cacheTime: Infinity,
      enabled: true,
    }
  );

  useEffect(() => {
    if (searchPageList.isFetched) setSearchRes(searchPageList);
  }, [searchPageList.status]);

  useEffect(() => {
    if (mainSearchTxt !== null && searchPageList.data) {
      setSearchRes({
        data: searchPageList.data.filter((data) =>
          data.art_name_kr.includes(text)
        ),
      });
    }
  }, [mainSearchTxt]);

  // 인풋 바뀔 때마다 인풋 텍스트로 배열에 검색
  const onChange = (e) => {
    setText(e.target.value);
    setSearchRes({
      data: searchPageList.data.filter((data) =>
        data.art_name_kr.includes(text)
      ),
    });
  };

  // 돋보기 아이콘 눌러 검색할 경우 인풋 초기화
  function search(e) {
    setText(e.target.value);
    setSearchRes({
      data: searchPageList.data.filter((data) =>
        data.art_name_kr.includes(text)
      ),
    });
    setText("");
  }
  return (
    <Layout text={t("header.searchPage")}>
      {searchPageList.isLoading ? (
        <typo.body.Body02>Loading...</typo.body.Body02>
      ) : null}
      {searchPageList.isFetched ? (
        <>
          <SizedBox height={20} />
          <SearchBox text={text} onChange={onChange} search={search} t={t} />

          {/* 검색 결과 존재할 경우 작품 목록 표시 */}
          {searchRes.data ? (
            <>
              <SizedBox height={26} />
              <typo.body.Body02 style={{ paddingLeft: "8px" }}>
                {t("searchPage.artList")}
              </typo.body.Body02>
              <SizedBox height={8} />
              <ArtListContainer>
                {searchRes.data.map((data) => {
                  return <ArtListBox key={data.art_id} data={data} />;
                })}
              </ArtListContainer>
            </>
          ) : (
            <NoSearchResult />
          )}
        </>
      ) : null}
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
