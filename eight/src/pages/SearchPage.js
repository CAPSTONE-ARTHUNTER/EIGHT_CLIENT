import React, { useState } from "react";
import SearchBox from "../components/Common/SearchBox";
import SizedBox from "../components/Common/SizedBox";
import typo from "../styles/typo";
import NoSearchResult from "../components/Search/NoSearchResult";
import ArtListBox from "../components/Search/ArtListBox";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import axios from "axios";

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

  // openAPI test용 state
  const [openApiData1, setOpenApiData1] = useState([]);
  const [apiSearchText, setApiSearchText] = useState("");

  // 인풋 바뀔 때마다 인풋 텍스트로 배열에 검색
  const onChange = (e) => {
    setText(e.target.value);
    setSearchRes(list.filter((data) => data.title.includes(text)));
  };

  // openAPI 테스트용
  const onChangeAPI = (e) => {
    setApiSearchText(e.target.value);
    apiTest();
  };

  // 돋보기 아이콘 눌러 검색할 경우 인풋 초기화
  function search(e) {
    setText(e.target.value);
    setSearchRes(list.filter((data) => data.title.includes(text)));
    setText("");
  }

  // api요청
  function apiTest() {
    axios
      .get(
        `openapi/relic/list?serviceKey=${process.env.REACT_APP_OPEN_API}&pageNo=1&numOfRows=15&name=${apiSearchText}`
      )
      .then((data) => {
        console.log(data.data.resultMsg);
        console.log(data.data.totalCount);
        // console.log(data.data.list);
        setOpenApiData1(data.data.list);
      })
      .catch((error) => console.log("error getting data", error));
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


      {/* openAPI test용 */}
      <input
        style={{ width: "100%", height: "40px", backgroundColor: "aliceBlue" }}
        onClick={onChangeAPI}
      />
      <ColWrapper>
        {openApiData1.map((data) => {
          return (
            <ColWrapper key={data.id}>
              <img
                src={data.imgThumUriL}
                style={{ height: "fit-content", width: "300px" }}
                alt="detail"
              />
              <typo.body.Body01>
                {data.nameKr} / {data.id}
              </typo.body.Body01>
            </ColWrapper>
          );
        })}
      </ColWrapper>

      
    </Layout>
  );
};

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArtListContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export default SearchPage;
