export default function validateForm(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "Podaj imie"
    }

    if (!values.email) {
        errors.email = "Email jest wymagany";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.textarea) {
        errors.textarea = "value is required";
    } else if (values.textarea.length < 6) {
        errors.password = "textarea needs to be 6 characters or more";
    }

    return errors;
}