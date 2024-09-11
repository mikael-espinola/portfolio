import React from "react";
import { Container } from "./style";
import Image from "next/image";
import Picture from "@/assets/images/Profile.png";
import LinkButton from "../linkButton/LinkButton";
import SocialMedia from "../socialMedia/SocialMedia";

const Profile = () => {
  return (
    <Container>
      <div className="image">
        <Image alt="profile" src={Picture} />
      </div>
      <div className="conections">
        <SocialMedia />
      </div>
    </Container>
  );
};

export default Profile;
