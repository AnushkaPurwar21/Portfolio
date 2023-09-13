import React from "react";
import './index.scss';
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillBehanceCircle, AiFillGithub } from "react-icons/ai";

const ContactBottom=()=>{
    return(
        <div className="bottom-nav">
            <div className="socials">
                <ul>
                    <li> <a href="https://github.com/BeginnerCoder21"><AiFillGithub/> </a> </li>
                    <li> <a href="https://in.linkedin.com/in/anushka-purwar-58b23a19b"><RiLinkedinFill/> </a> </li>
                    <li> <a href="https://www.behance.net/crafterina29"> <AiFillBehanceCircle/> </a> </li>
                </ul>
            </div>
        </div>
    );
}

export default ContactBottom;