import React from "react";
import { Apresentation, Container, ProfileContainer } from "./style";
import Description from "../description/Description";
import Profile from "../profile/Profile";

const DevInfo = () => {
  return (
    <Container>
      <Apresentation>
        <Description lang="pt" />
      </Apresentation>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
    </Container>
  );
};

export default DevInfo;
