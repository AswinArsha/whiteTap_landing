import React from "react";
import {
  Main,
  ProfileCard,
  ProfileAvatar,
  ProfileImage,
  ContentCard,
  ProfileDetails,
  Username,
  Designation,
  ProfileButton,
  ConnectButton,
} from "./ProfileCardStyledComponents";
import { generateVCard } from "./generateVCard";
import { shareContact } from "./shareContact";
import socialMediaUrls from "./socialMediaUrls";

const ProfileCardComponent = () => (
  <Main>
    <ProfileCard>
      <img
        src={socialMediaUrls.cardbackgroundImage || "path/to/default/image.jpg"}
        alt="Background"
      />
    </ProfileCard>
    <ContentCard>
      <ProfileImage>
        <ProfileAvatar
          src={socialMediaUrls.avatar || "path/to/default/avatar.jpg"}
          alt="Avatar"
        />
      </ProfileImage>
      <ProfileDetails>
        <Username>{socialMediaUrls.name || "Default Name"}</Username>
        <Designation>
          <span>{socialMediaUrls.designation || "Default Designation"}</span>
        </Designation>
      </ProfileDetails>
      <ProfileButton id="profile-button">
        <ConnectButton onClick={generateVCard}>Save Contact</ConnectButton>
        <ConnectButton onClick={shareContact}>Share Contact</ConnectButton>
      </ProfileButton>
    </ContentCard>
  </Main>
);

export default ProfileCardComponent;
