function Validation(values){

    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(values.email === ""){
        error.email = "Email should not be empty";
    }else if(!email_pattern.test(values.email)){
        error.email = "Invalid email pattern. Make sure your email address has at least one character before and after the @ symbol, and it contains a dot (.) after the @ symbol. ";
    }else{
        error.email = "";
    }
    
    if(values.password === ""){
        error.password = "Password should not be empty";
    }else if(!password_pattern.test(values.password)){
        error.password = "Invalid password type. Make sure your password contains at least one digit, one lowercase letter, and one uppercase letter. It also requires a minimum length of 8 characters.";
    }else{
        error.password = "";
    }
    return error;

}

export default Validation;