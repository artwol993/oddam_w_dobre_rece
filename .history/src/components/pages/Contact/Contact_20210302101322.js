import React, { useState } from 'react';
import ContactForm from './ContactForm'

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }


    return (
        <div>
            <ContactForm />
            {!isSubmitted ? <ContactForm submitForm={submitForm} /> : <FormSuccess />}
        </div>
    )
}

export default Contact
