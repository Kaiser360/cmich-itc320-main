let firstName = sessionStorage.getItem("userFirst");
let lastName = sessionStorage.getItem("userLast");

$("#firstAndLast").text(firstName + " " + lastName);

	$("#previous").click( () => {
		history.back();
	}); 