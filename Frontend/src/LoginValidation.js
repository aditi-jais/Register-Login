function validation(values)
{
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(values.email===""){
        alert("Name should not be empty")
        return;
    }
    else if(!email_pattern.test(values.email)){
        alert("Email Didn't match")
        return;
    }
    
    if(values.password===""){
        alert("Password should not be empty")
        return;
    }
    else if(!password_pattern.test(values.password)){
        alert("Password Didn't match")
        return;
    }
}

export default validation;