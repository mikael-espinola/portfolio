import React from "react";
import { Container } from "./style";
import Image from "next/image";
// import Picture from "";
import SocialMedia from "../socialMedia/SocialMedia";

const Profile = () => {
  return (
    <Container>
      <div className="image">
        <Image
          alt="profile"
          width={240}
          height={240}
          src="/assets/images/profile/Profile.png"
        />
      </div>
      <div className="conections">
        <SocialMedia />
      </div>
    </Container>
  );
};

export default Profile;
