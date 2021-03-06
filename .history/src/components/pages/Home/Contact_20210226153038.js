import React from 'react';
import "../../../scss/components/Contact.scss";
import useForm from "./useForm";
import validate from "./validateForm"

const Contact = () => {

    const { handleChange, values, handleSubmit, errors } = useForm(validate);

    return (

        <div className="contact-container" id="contact">

            <div className="contact-box contact-box1"></div>
            <div className="contact-box contact-box2">
                <form className="contact-box-form" onSubmit={handleSubmit}>
                    <div className="contact-tittle-box">
                        <h2>Skontaktuj się z nami</h2>
                        <div className="decoration"></div>
                    </div>
                    <div className="contact-box-form-container">
                        <div className="contact-box-form-part1">
                            <label htmlFor="username">Wpisz swoje imię</label>
                            <input
                                id="username"
                                type="text"
                                className="contact-form-element"
                                name="username"
                                placeholder="Krzysztof"
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p>{errors.username}</p>}
                        </div>
                        <div className="contact-box-form-part2">
                            <label for="email">Wpisz swój email</label>
                            <input
                                id="email"
                                type="email"
                                className="contact-form-element"
                                name="email"
                                placeholder="abc@xyz.pl"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                    </div>

                    <div className="contact-box-form-textarea">
                        <label for="textarea">Wpisz swoją wiadomość</label>
                        <textarea
                            id="textarea"
                            cols="10"
                            rows="6"
                            className="contact-form-element-textarea"
                            name="textarea"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            value={values.textarea}
                            onChange={handleChange}
                        />
 {errors.username && <p>{errors.username}</p>}
                    </div>

                    <div className="contact-button-box">
                        <button className="contact-button" type="submit" >Wyślij</button>
                    </div>

                </form>

            </div>


        </div>

    )
}

export default Contact
