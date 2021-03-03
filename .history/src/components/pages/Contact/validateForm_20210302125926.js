export default function validateForm(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "Podaj imie"
    }

    if (!values.email) {
        errors.email = "Podaj email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email jest nieprawidłowy';
    }

    if (!values.textarea) {
        errors.textarea = "Tre";
    } else if (values.textarea.length < 6) {
        errors.password = "Podaj przynajmniej 6 znaków";
    }

    return errors;
}