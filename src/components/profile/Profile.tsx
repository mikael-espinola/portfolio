import React from "react";
import { Box, ConnectionsBox, Container, ImageBox } from "./style";
import SocialMedia from "../socialMedia/SocialMedia";

const Profile = () => {
  return (
    <Container>
      <Box>
        <ImageBox
          alt="profile"
          width={240}
          height={240}
          src="/assets/images/profile/Profile.png"
        />
      </Box>
      <ConnectionsBox>
        <SocialMedia />
      </ConnectionsBox>
    </Container>
  );
};

export default Profile;
