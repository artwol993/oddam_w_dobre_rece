import React from 'react';
import "../../../scss/components/Contact.scss";

function Contact() {

    const [contactFormName, setContactFormName] = useState("");
    const[contactFromEmail, setContactFormEmail] = useState("");
    const[contactFromTxt, setContactFormTxt] = useState("");

    return (
        <>
            <div className="contact-container" id="contact">

                <div className="contact-box contact-box1"></div>
                <div className="contact-box contact-box2">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="decoration"></div>
                    <input
                        type="text"
                        className={"contact-form-element"}
                        name="contact-form-name"
                        placeholder="Krzysztof"
                        value={contactFormName} />
                    <input
                        type="text"
                        className={"contact-form-element"}
                        name="contact-form-email"
                        placeholder="abc@xyz.pl"
                        value={contactFormName} />

                </div>

            </div>
        </>
    )
}

export default Contact
