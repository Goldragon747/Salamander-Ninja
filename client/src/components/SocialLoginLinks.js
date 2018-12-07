import React from "react";
import fb from "../assets/fb_signin.png";
import google from "../assets/google_signin.png";

const SocialLoginLinks = () => (
  <div>
    <p style={{ textAlign: "center" }}>- OR -</p>

    <div style={{ display: "flex" }}>
      <a
        href={`http://localhost:5150/auth/facebook?linkinguri=${
          window.location.origin
        }/socialauthredirect`}
      >
        <img src={fb} alt={"fblogo"} style={{ flexGrow: 1, width: "95%" }} />
      </a>
      <a
        href={`http://localhost:5150/auth/google?linkinguri=${
          window.location.origin
        }/socialauthredirect`}
      >
        <img
          src={google}
          alt={"googlelogo"}
          style={{ flexGrow: 1, width: "95%" }}
        />
      </a>
    </div>
  </div>
);

export default SocialLoginLinks;
