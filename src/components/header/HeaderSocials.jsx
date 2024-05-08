import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/prithwish-samanta-b3aa46256/"
        target="blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/prithwish-samanta" target="blank">
        <FaGithub />
      </a>
      <a href="https://www.hackerrank.com/profile/wprith" target="blank">
        <FaHackerrank />
      </a>
    </div>
  );
};

export default HeaderSocials;
