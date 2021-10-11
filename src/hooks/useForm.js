import { useState } from "react"
import Validate from "../Validate"

const useForm = () => {
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
        setError(Validate(userEntered))
    }

    return { handleChange, userEntered, error }
}
export default useForm