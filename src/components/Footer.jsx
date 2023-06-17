import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (
        <div>
            <div className="fixed bottom-0 right-0 flex flex-col items-end pr-5 pb-5 text-5xl">
                <a href="https://www.linkedin.com/in/sarahhlandis/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffedd5" }} />
                </a>
                <a href="https://github.com/sarahhlandis" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare} style={{ color: "#ffedd5" }} />
                </a>
            </div>
            <span className="fixed flex bottom-0 font-poppins font-extralight text-xs justify-end">&copy; Sarah Landis 2022. All rights reserved.</span>
        </div>
    );
}
