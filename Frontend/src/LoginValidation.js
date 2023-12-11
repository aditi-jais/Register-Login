function validation(values)
{
    let error={
      email: "",
      password: ""
    }
    // const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(values.email===""){
      error.email="error"
        alert("Name should not be empty")
        // return;
    }
    
    
    else if(values.password===""){
      error.password="error"
        alert("Password should not be empty")
        // return;
    }
return error;
}

export default validation;