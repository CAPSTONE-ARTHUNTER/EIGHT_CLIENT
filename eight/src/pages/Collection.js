import React from "react";
import SizedBox from "../components/Common/SizedBox";
import UserBox from "../components/MainPage/UserBox";
import CollectionTab from "../components/Collection/CollectionTab";
import Layout from "../components/Layout/Layout";

const Collection = () => {
  return (
    <Layout text={"도감"}>
      <SizedBox height={8} />
      <CollectionTab />
      <SizedBox height={12} />
      <UserBox />
    </Layout>
  );
};

export default Collection;
