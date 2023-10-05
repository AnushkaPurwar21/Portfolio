import React, { useRef } from 'react';
import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { HiX } from "react-icons/hi";
import { MapContainer, TileLayer, Popup, Marker  } from 'react-leaflet';
import ContactBottom from '../ContactBottom';

const Contact = () => {
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_zvpkjfm',
            'template_u0c3qs8',
            refForm.current,
            'VnKb8k5v-iv71_7wr'
            // 'VnKb8k5v-iv71_7wr'
        ).then(
            () => {
                alert('Message successfully send');
                window.location.reload(false);
            },
            () => {
                alert('Failed to send the message, please try again!!');
            }
        );
    }

    return (
        <div className="contact">
            <div className="c-left">
            <div className="c-title">
            {' <h1> '}
            <span>Contact Me</span>
            {' </h1>'}
            </div>
            {/* {"<h1>"}  {"</h1>"} */}
                
                <div className="c-content">
                Hello! Thank you for taking the time to visit my portfolio. 
                If you have any questions or would like to discuss potential opportunities, 
                please feel free to contact me. I am always open to new 
                connections and collaborations, and I look forward to hearing from you soon.
                </div>
               
                <div className="toast">
                <div className="toast-content">
                    {/* <div className="check">
                        <FontAwesomeIcon icon={faCheck} color="#000000" />
                    </div> */}
                    {/* <div className="message">
                        <span className="text text-1">Success</span>
                        <span className="text text-2">Your message has been sent successfully</span>
                    </div> */}
                </div>
                {/* <div className="close">
                    <HiX />
                </div> */}
            </div>
                <form className="c-form" ref={refForm} onSubmit={sendEmail} >
                    <ul>
                        <li>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li>
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input type="text" name="subject" id="sub" placeholder="Subject" required />
                        </li>
                        <li>
                            <textarea name="message" id="msg" cols="30" rows="10" placeholder="Message"></textarea>
                        </li>
                        <li>
                            <input type="submit" name="send" id="send" value="SEND" />
                        </li>
                    </ul>
                    <div className="con-socials">
            <ContactBottom/>
            </div>
                    </form>
            </div>



            {/* <div className="r-toast">
                <div className="r-toast-content">
                    <div className="r-cross">
                    <HiX />
                    </div>
                    <div className="r-message">
                        <span className="r-text r-text-1">Error</span>
                        <span className="r-text r-text-2">Message not sent, please try again later </span>
                    </div>
                </div>
                <div className="r-close">
                    <HiX />
                </div>
            </div> */}
            <div className="c-right">
                <div className="info-map">
                    Anushka Purwar
                    <br />
                    Delhi, India
                    <br />
                    <span>anushka9design@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[28.666472,77.233289]} zoom={13}>
                        <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[28.666472,77.233289]}>
                            <Popup>
                                Anushka lives here, don't be shy, Contact me :{")"}  
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );

}

export default Contact;