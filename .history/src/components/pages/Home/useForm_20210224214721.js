import { useState, useEffect } from 'react'

const useForm = () => {
    const [values, setValues] = useState({
        name: "";
        email: "";
        text: "";
    })

    const [errors, setErrors] = useState({})


    const handleChange = e => {

        setValues({
            ...values,
            [e.target.name]:e.target.values
        })
    }
}