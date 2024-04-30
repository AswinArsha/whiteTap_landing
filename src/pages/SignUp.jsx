import React, { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../supabase";
import Header from "../partials/Header";

function SignUp() {
  const [formData, setFormData] = useState({
    card_background_image: "",
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
    google_reviews: "",
    paytm: "",
    email: "",
    maps: "",
    background_image: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase
        .from("social_media_data")
        .insert([formData]);

      if (error) {
        console.error("Error inserting data into Supabase:", error.message);
      } else {
        console.log("Data inserted successfully");
        setFormData({
          card_background_image: "",
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
          google_reviews: "",
          paytm: "",
          email: "",
          maps: "",
          background_image: "",
          password: "",
        });
      }
    } catch (err) {
      console.error("Error with Supabase:", err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Unlock the Power of NFC Business Cards</h1>
              </div>

              <div className="max-w-lg mx-auto">
                <form onSubmit={handleSubmit}>
                  {/* Basic Information */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full sm:w-1/2 px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full sm:w-1/2 px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        class="form-input w-full text-gray-800"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="designation"
                      >
                        Designation
                      </label>
                      <input
                        id="designation"
                        name="designation"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="Enter your designation"
                        value={formData.designation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="website"
                      >
                        Website
                      </label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="Enter you website"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="whatsapp"
                      >
                        WhatsApp
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="WhatsApp number"
                        value={formData.whatsapp}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="facebook"
                      >
                        Facebook
                      </label>
                      <input
                        id="facebook"
                        name="facebook"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="Facebook profile"
                        value={formData.facebook}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="instagram"
                      >
                        Instagram
                      </label>
                      <input
                        id="instagram"
                        name="instagram"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="Instagram handle"
                        value={formData.instagram}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="youtube"
                      >
                        YouTube
                      </label>
                      <input
                        id="youtube"
                        name="youtube"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="YouTube channel"
                        value={formData.youtube}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="linkedin"
                      >
                        LinkedIn
                      </label>
                      <input
                        id="linkedin"
                        name="linkedin"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="LinkedIn profile"
                        value={formData.linkedin}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Additional Features */}
                  <div class="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="google_reviews"
                      >
                        Google Reviews
                      </label>
                      <input
                        id="google_reviews"
                        name="google_reviews"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="Google reviews link"
                        value={formData.google_reviews}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="paytm"
                      >
                        Paytm
                      </label>
                      <input
                        id="paytm"
                        name="paytm"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="Paytm link"
                        value={formData.paytm}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Maps and Design-Related Fields */}
                  <div class="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="maps"
                      >
                        Maps
                      </label>
                      <input
                        id="maps"
                        name="maps"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="Maps link"
                        value={formData.maps}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="card_background_image"
                      >
                        Card Background Image
                      </label>
                      <input
                        id="card_background_image"
                        name="card_background_image"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="Card background image URL"
                        value={formData.card_background_image}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="avatar"
                      >
                        Avatar
                      </label>
                      <input
                        id="avatar"
                        name="avatar"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="Avatar image URL"
                        value={formData.avatar}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="w-full sm:w-1/2 px-3">
                      <label
                        class="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="background_image"
                      >
                        Background Image
                      </label>
                      <input
                        id="background_image"
                        name="background_image"
                        type="text"
                        class="form-input w-full text-gray-800"
                        placeholder="Background image URL"
                        value={formData.background_image}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div class="flex flex-wrap -mx-3 mt-6">
                    <div class="w-full px-3">
                      <button
                        class="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                        type="submit"
                      >
                        Sign up
                      </button>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div class="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a class="underline" href="#0">
                      terms & conditions
                    </a>
                    , and our{" "}
                    <a class="underline" href="#0">
                      privacy policy
                    </a>
                    .
                  </div>
                </form>

                <div class="text-gray-600 text-center mt-6">
                  Already using White Tap?{" "}
                  <Link
                    to="/signin"
                    class="text-blue-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUp;
