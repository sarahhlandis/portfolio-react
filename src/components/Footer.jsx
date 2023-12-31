import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <div className="relative bottom-0 left-0 bg-white">
      <div className="flex items-center justify-between py-5 text-3xl">
        <div className="flex-grow text-xs font-poppins font-extralight text-center">
          &copy; Sarah Landis 2022. All rights reserved.
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/sarahhlandis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#BAE6FD" }}
            />
          </a>
          <a
            href="https://github.com/sarahhlandis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: "#BAE6FD" }}
            />
          </a>
          <a
            href={`mailto:${import.meta.env.VITE_APP_EMAIL}`}
            // target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ color: "#38bdf8", opacity: ".4" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

