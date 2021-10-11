import "./Checkbox.css"

const Checkbox = (props) => {
    return (
        <div className="checkbox-container" >
            <label>
                <input type="checkbox"
                    className="checkbox"
                    checked={props.checked}
                    onChange={props.onChange}
                />
                <span className="checkbox-content">I agree to the <span className="highlighted">Terms</span> and <span className="highlighted">Privacy Policy</span></span>
            </label>
        </div>
    )
}
export default Checkbox