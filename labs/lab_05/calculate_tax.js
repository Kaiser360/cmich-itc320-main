"use strict";
const $ = selector => document.querySelector(selector);

const processEntry = () => {
	
const grossIncome = parseInt($("#income").value);
		if(isNaN(grossIncome) || grossIncome < 0){
			alert("ERROR: That is not a correct value! Must be at least 0.");
			$("#income").focus();
		} else{
			$("#tax").value = calculateTax(grossIncome).toFixed(2);
			$("#income").focus();
		}
		
};

//calculate tax method taking the parameter grossIncome which is passed from the process Entry method
const calculateTax = (grossIncome) => {
		//series of if-else-if statements to check income and return the amount of tax owed
		if(grossIncome >= 0 && grossIncome <= 9875){
			return grossIncome * .1;
		} 
		else if( grossIncome > 9875  && grossIncome <= 40125){
			return	((grossIncome - 9875) *.12) + 987.5
		} 
		else if (grossIncome > 40125 && grossIncome <= 85525){
			return ((grossIncome - 40125) * .22) + 4617.5;
		} 
		else if (grossIncome > 85525 && grossIncome <= 163300){
			return ((grossIncome - 85525) * .24) + 14605.5;
		} 
		else if(grossIncome > 163300 && grossIncome <= 207350){
			return ((grossIncome - 163300)* .32) + 33271.5;
		} 
		else if (grossIncome > 207350 && grossIncome <= 518400){
			return((grossIncome - 207350)*.35) + 47367.5;
		}
		else {
			return ((grossIncome -518400)*.37) + 156235;
		}
	
};	

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});