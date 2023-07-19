import React, { useEffect, useState } from "react";
import styled from "styled-components";
import userProfile from "../../assets/image/userProfile.png";
import typo from "../../styles/typo";

const Profile = ({ userInfo }) => {
  const userName = userInfo.userName
  const userEmail = userInfo.userEmail

  return (
    <Container>
      <img src={userProfile} className="profileImg" alt="pic" />
      <TextGroup>
        <typo.title.Title02>{userName} 님</typo.title.Title02>
        <typo.body.Body02>{userEmail}</typo.body.Body02>
      </TextGroup>
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 14px;

  .profileImg {
    width: 54px;
    padding: 10px;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Profile;
