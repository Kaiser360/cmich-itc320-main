"use strict";

$("#arrival_date").focus();



$(document).ready( () => {
	//form validation method
	const formValidation = () =>{
		const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		
		
		let arrive = $("#arrival_date").val();
		let nights = $("#nights").val();
		let name = $("#name").val();
		let email = $("#email").val();
		let phone = $("#phone").val();
		let isValid = true;
		
		if(arrive === "" ){
			isValid = false;
			document.getElementById("arrival_dateError").textContent = "This field is required";
		} else{
			document.getElementById("arrival_dateError").textContent = "";
			
		}
		if(isNaN(nights)){
			isValid = false;
			document.getElementById("nightsError").textContent = "Must be Numeric";
		}  else{
			document.getElementById("nightsError").textContent = "";
			
		}
		if(name === ""){
			isValid = false;
			document.getElementById("nameError").textContent = "Please enter a name";
		}else{
			document.getElementById("nameError").textContent = "";
			
		}
		if(!emailPattern.test(email)){
			isValid =false;
			document.getElementById("emailError").textContent = "Must be a valid email";
		} else{
			document.getElementById("emailError").textContent = "";
			
		}
		if( phone === ""){
			isValid =false;
			document.getElementById("phoneError").textContent = "This field is required";
		} else{
			document.getElementById("phoneError").textContent = "";
			
		}
		
		return isValid;
		}
	$("#submit").on("click",evt => {
	if(!formValidation()){
		evt.preventDefault();
	}
});

}); // end ready