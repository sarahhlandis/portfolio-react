import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (
        <div className="relative bottom-0">
            <div className="right-0 flex flex-col items-end pb-5 pt-5 text-5xl">
                <a href="https://www.linkedin.com/in/sarahhlandis/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: "#BAE6FD" }} />
                </a>
                <a href="https://github.com/sarahhlandis" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare} style={{ color: "#BAE6FD" }} />
                </a>
            </div>
            <div className="relative flex bottom-2 font-poppins font-extralight text-xs justify-center w-screen">&copy; Sarah Landis 2022. All rights reserved.</div>
        </div>
    );
}
