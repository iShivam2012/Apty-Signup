const Validate = (name, value) => {
    let errors = {};

    if (name === "name" && value.trim().length === 0) {
        errors.name = 'Name is required';
    }
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
        errors.email = 'Email address is invalid';
    }
    if (name === "password" && value.length < 6) {
        errors.password = 'Password must be 6 characters long';
    }

    return errors;
}

export default Validate;