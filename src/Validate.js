const Validate = (name, value, error) => {

    switch (name) {
        case "name": {
            if (value.trim().length === 0) {
                error.name = 'Name is required';
            }
            else {
                delete error.name
            }
        }
            break;
        case "email": {
            if (!/\S+@\S+\.\S+/.test(value)) {
                error.email = 'Email address is invalid';
            }
            else {
                delete error.email
            }
        }
            break;
        case "password": {

            if (value.length < 6) {
                error.password = 'Password must be 6 characters long';
            }
            else {
                delete error.password
            }
        }
            break;
        default: error = {}
    }



    return error;
}

export default Validate;