import { useState } from "react"

const useForm = (Validate) => {
    const [userEntered, setUserEntered] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserEntered({
            ...userEntered,
            [name]: value
        })
        setError(Validate(name, value, error))
    }

    return { handleChange, userEntered, error }
}
export default useForm