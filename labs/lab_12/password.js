"use strict";

const getRandomNumber = max => {
	let random = null;
    
	if (!isNaN(max)) {
		random = Math.random();             // value >= 0.0 and < 1.0
		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
		random = random + 1;                // value is an integer between 1 and max
	}
	return random;
};

$(document).ready( () => {
    $("#generate").click( () => {
     $("#password").val( "" ); // clear previous entry
     //variable to hold password
        let password = "";
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        let num = $("#num").val();
        //checking to make sure the number is valid
        if(isNaN(num) || num < 1){
            alert("Please enter a valid number");
        } else{
            for(let i= 0; i < num; i++){
                //selecting a random character 
                let randomChar = chars[Math.floor (Math.random() * chars.length)];
                //adding random character to the password
                password += randomChar;
            }
        }
        //setting the password to the password field
        $("#password").val(password);
            
    }); // end click()
    
    $("#clear").click( () => {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()