"use client";
import React from "react";
import { Apresentation, Container, ProfileContainer } from "./style";
import Description from "../description/Description";
import Profile from "../profile/Profile";
import { useLangContext } from "@/contextApi/LangProvider";

const DevInfo = () => {
  const { lang } = useLangContext();

  return (
    <Container>
      <Apresentation>
        <Description lang={lang} />
      </Apresentation>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
    </Container>
  );
};

export default DevInfo;
