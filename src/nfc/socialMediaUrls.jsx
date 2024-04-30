import supabase from "./supabase"; // Import the supabase client

async function fetchSocialMediaUserData(userId) {
  try {
    // Check if userId is null, undefined, or an invalid value
    if (!userId || isNaN(userId)) {
      // Return null or handle the case accordingly
      return null;
    }

    const { data, error } = await supabase
      .from("social_media_data")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return null;
  }
}

const extractUserIdFromURL = () => {
  const url = window.location.pathname;
  const segments = url.split("/");
  const lastSegment = segments[segments.length - 1];

  // Check if the last segment is a valid number (user ID)
  if (!isNaN(parseInt(lastSegment))) {
    return lastSegment;
  }

  // If the last segment is not a valid number, return null or some default value
  return null;
};

async function populateSocialMediaUrls() {
  const userId = extractUserIdFromURL();
  const userData = await fetchSocialMediaUserData(userId);

  if (userData) {
    const socialMediaUrls = {
      cardbackgroundImage: userData.card_background_image,
      avatar: userData.avatar,
      name: userData.name,
      designation: userData.designation,
      phone: userData.phone,
      whatsapp: userData.whatsapp,
      website: userData.website,
      facebook: userData.facebook,
      instagram: userData.instagram,
      youtube: userData.youtube,
      linkedin: userData.linkedin,
      googleReviews: userData.google_reviews,
      paytm: userData.paytm,
      email: userData.email,
      maps: userData.maps,
      backgroundImage: userData.background_image,
    };
    return socialMediaUrls;
  } else {
    // Handle the case where fetchSocialMediaUserData returns null
    // You can return default values, show an error message, or handle it accordingly
    return {
      // Default values for socialMediaUrls
      cardbackgroundImage: "",
      avatar: "",
      name: "",
      designation: "",
      phone: "",
      whatsapp: "",
      website: "",
      facebook: "",
      instagram: "",
      youtube: "",
      linkedin: "",
      googleReviews: "",
      paytm: "",
      email: "",
      maps: "",
      backgroundImage: "",
    };
  }
}

const socialMediaUrls = await populateSocialMediaUrls();
export default socialMediaUrls;