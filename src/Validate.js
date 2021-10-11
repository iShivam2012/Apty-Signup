const Validate = (userEntered) => {
    let errors = {};

    if (userEntered.name.trim().length === 0) {
        errors.name = 'Name is required';
    }
    if (!/\S+@\S+\.\S+/.test(userEntered.email)) {
        errors.email = 'Email address is invalid';
    }
    if (userEntered.password.length < 6) {
        errors.password = 'Password must be 6 characters long';
    }

    return errors;
}

export default Validate;