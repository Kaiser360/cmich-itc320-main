let firstName = sessionStorage.getItem("userFirst");
let lastName = sessionStorage.getItem("userLast");
let email =	sessionStorage.getItem("userEmail");
let phone=  sessionStorage.getItem("userPhone");
let	state = sessionStorage.getItem("userState");
let zip =   sessionStorage.getItem("userZip");
$("#firstAndLast").text(firstName + " " + lastName);
$("#email").text(email);
$("#phone").text(phone);
$("#state").text(state);
$("#zip").text(zip);

	$("#previous").click( () => {
		history.back();
	}); 