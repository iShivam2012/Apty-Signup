import "./Input.css"

const Input = (props) => {
    return (
        <div className={`control ${props.isValid === false ? "invalid" : ""}`} >
            <label htmlFor={props.id}>{props.label}</label>
            <i className={`icon ${props.icon} ${props.isValid === false ? "invalid" : ""}`} ></i>
            <input
                id={props.id}
                name={props.id}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
            <i className={`symbol ${props.isValid === false ? "symbol-invalid fa fa-times" : "symbol-valid fa fa-check"}`} ></i>
        </div>

    )
}
export default Input