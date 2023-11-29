"use strict";

$(document).ready( () => {
	// display data from session storage
	//creating variables to hold the user info
	let email = sessionStorage.getItem("userEmail");
	let phone = sessionStorage.getItem("userPhone");
	let zip = sessionStorage.getItem("userZip");
	let dob = sessionStorage.getItem("userDOB");

//displaying
	$("#email").text(email);
	$("#phone").text(phone);
	$("#zip").text( zip);
	$("#dob").text( dob);

	$("#back").click( () => {
		//going back 1 session
		history.back();
	}); // end of click()
	
}); // end of ready()