import React, { useState } from "react";
import SearchBox from "../components/Common/SearchBox";
import SizedBox from "../components/Common/SizedBox";
import typo from "../styles/typo";
import NoSearchResult from "../components/Search/NoSearchResult";
import ArtListBox from "../components/Search/ArtListBox";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const SearchPage = (artList) => {
  // const list = artList
  //dummy data
  const list = [
    { title: "hello", body: "hello hello" },
    { title: "hi", body: "hi hi" },
    { title: "rryu", body: "description" },
  ];
  const [text, setText] = useState("");
  const [searchRes, setSearchRes] = useState(list);

  // 인풋 바뀔 때마다 인풋 텍스트로 배열에 검색
  const onChange = (e) => {
    setText(e.target.value);
    setSearchRes(list.filter((data) => data.title.includes(text)));
  };

  // 돋보기 아이콘 눌러 검색할 경우 인풋 초기화
  function search(e) {
    setText(e.target.value);
    setSearchRes(list.filter((data) => data.title.includes(text)));
    setText("");
  }
  return (
    <Layout text={"작품 검색"}>
      <SizedBox height={20} />
      <SearchBox text={text} onChange={onChange} search={search} />

      {/* 검색 결과 존재할 경우 작품 목록 표시 */}
      {searchRes.length !== 0 ? (
        <>
          <SizedBox height={26} />
          <typo.body.Body02 style={{ paddingLeft: "8px" }}>
            작품 목록
          </typo.body.Body02>
          <SizedBox height={8} />
          <ArtListContainer>
            {searchRes.map((data) => {
              return <ArtListBox key={data.title} data={data} />;
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
