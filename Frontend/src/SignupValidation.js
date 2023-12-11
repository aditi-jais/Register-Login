function validationS(valuess) {
  let errors={
    username: "",
    email: "",
    password: "",
    confirmPassword:""
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;

  if (valuess.email === "") {
    errors.email = "Error"
    alert('Enter an email.')
    // return;
  }
  else if (valuess.username === "") {
    errors.username = "error"
    alert('Enter a username.')
    // return;
  }
  else if (valuess.password === "") {
    errors.password = "error"
    alert('Enter a password.')
    // return;
  }
  else if (valuess.confirmPassword === "") {
    errors.confirmPassword = "error"
    alert('Enter a confirm password.')
    // return;
  }

  else if (valuess.username.length < 3 || valuess.username.length > 15) {
    errors.username = "error"
    alert('Username must be between 3 and 15 characters');
    // return;
  }

  else if (!emailRegex.test(valuess.email)) {
    errors.email = "error"
    alert('Please enter a valid email address');
    // return;
  }
  else if (!password_pattern.test(valuess.password)) {
    errors.password = "error"
    alert('Password must have at least one lowercase letter, one uppercase letter, one digit and one special character from the set @$!%*?&.');
    // return;
  }

  else if (valuess.password.length < 8 || valuess.password.length > 20) {
    errors.password = "error"
    alert('Password must contain more that 8 characters');
    // return;
  }

  else if (valuess.password !== valuess.confirmPassword) {
    errors.confirmPassword = "error"
    alert('Password does not match');
    // return;
  }
return errors;
}

export default validationS;