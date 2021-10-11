import { useState } from "react"
import useForm from "../hooks/useForm"
import Button from "../UI/Button"
import Checkbox from "../UI/Checkbox"
import Input from "../UI/Input"
import "./SignUp.css"

const SignUp = (props) => {
    const [isChecked, setIsChecked] = useState(false)
    const { handleChange, userEntered, error } = useForm()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("Submit")
        console.log(userEntered)
    }

    const checkHandler = (e) => {
        setIsChecked(e.target.checked)
    }

    let isInValid = Object.keys(error).length > 0 || !userEntered.name || !isChecked

    return (
        <div className="container" >
            <div className="form-card">
                <h1 className="card-title" >Let's Get Started</h1>
                <h3 className="card-content" >Discover the best places in the world at your fingertips!</h3>
                <form onSubmit={onSubmitHandler}>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={userEntered.name}
                        onChange={handleChange}
                        isValid={error.name ? false : true}
                        icon="fa fa-user"
                    />
                    {error.name && <p className="error" >{error.name}</p>}
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={userEntered.email}
                        onChange={handleChange}
                        isValid={error.email ? false : true}
                        icon="fa fa-at"
                    />
                    {error.email && <p className="error">{error.email}</p>}
                    <Input id="password"
                        type="password"
                        placeholder="Password"
                        value={userEntered.password}
                        onChange={handleChange}
                        isValid={error.password ? false : true}
                        icon="fa fa-lock"
                    />
                    {error.password && <p className="error">{error.password}</p>}
                    <Checkbox checked={isChecked} onChange={checkHandler} />
                    <Button type="submit" disabled={isInValid}>SIGN UP</Button>
                </form>
            </div>
            <div className="img-card" >
                <img src="https://marvel-live.freetls.fastly.net/canvas/2021/6/89bc49d2817c486d9282f2d1bd7d8268?quality=95&fake=.png" alt="form-img" className="form-img" />
            </div>
        </div>
    )
}
export default SignUp
