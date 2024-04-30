// src/nfc/Customerside.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BackgroundImageComponent from "./BackgroundImageComponent";
import ProfileCardComponent from "./ProfileCardComponent";
import SocialMediaComponent from "./SocialMediaComponent";
import supabase from "../supabase";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

function Customerside({ userId }) {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const { data, error } = await supabase
          .from("social_media_data")
          .select("*")
          .eq("id", userId)
          .single();

        if (error) {
          setError("Error fetching card data");
        } else if (data) {
          setCardData(data);
        } else {
          setError("No card data found");
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCardData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!cardData) {
    return <div>No card data found</div>;
  }

  return (
    <CenteredContainer>
      <BackgroundImageComponent src={cardData.background_image} />
      <ProfileCardComponent
        avatar={cardData.avatar}
        name={cardData.name}
        designation={cardData.designation}
        phone={cardData.phone}
        whatsapp={cardData.whatsapp}
        website={cardData.website}
      />
      <SocialMediaComponent
        facebook={cardData.facebook}
        instagram={cardData.instagram}
        youtube={cardData.youtube}
        linkedin={cardData.linkedin}
        googleReviews={cardData.google_reviews}
        paytm={cardData.paytm}
        email={cardData.email}
        maps={cardData.maps}
      />
    </CenteredContainer>
  );
}

export default Customerside;
