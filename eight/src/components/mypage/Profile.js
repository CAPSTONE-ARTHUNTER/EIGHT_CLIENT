import React, { useEffect, useState } from "react";
import styled from "styled-components";
import userProfile from "../../assets/image/userProfile.png";
import typo from "../../styles/typo";
import { getUserProfile } from "../../api/Users.apis";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    exp: 0,
    id: 0,
    name: "",
    picture: userProfile,
    socialType: "",
  });

  useEffect(() => {
    getUserProfile().then((res) => {
      setUserInfo(res);
    });
  }, []);

  return (
    <Container>
      <img src={userInfo.picture} className="profileImg" alt="pic" />
      <TextGroup>
        <typo.title.Title02>{userInfo.name}</typo.title.Title02>
        <typo.body.Body02>{userInfo.email}</typo.body.Body02>
      </TextGroup>
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  .profileImg {
    width: 3rem;
    padding: 10px;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Profile;
