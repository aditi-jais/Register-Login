function validationS(valuess){

    if(valuess.email.length===0){
        alert('Enter an email.')
        return;
    }
    if(valuess.username.length===0){
        alert('Enter a username.')
        return;
    }
    if(valuess.password.length===0){
        alert('Enter a password.')
         return;
    }
    if(valuess.confirmPassword.length===0){
        alert('Enter a confirm password.')
        return;
    }

    if (valuess.username.length < 3 || valuess.username.length > 15){
            alert('Username must be between 3 and 15 characters');
            return;
          }
      
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(valuess.email)) {
            alert('Please enter a valid email address');
            return;
          }
      
          if (valuess.password.length < 8 || valuess.password.length > 20) {
            alert('Password must be between 8 and 20 characters');
            return;
          }
      
          if (valuess.password !== valuess.confirmPassword) {
            alert('Password does not match');
            return;
          }
      
          alert('Registration successful!');
}

export default validationS;