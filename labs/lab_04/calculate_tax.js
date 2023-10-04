"use strict";

const $ = selector => document.querySelector(selector);
//setting the focus to the subtotal text box
$("#subtotal").focus();
//method used to process entries and calculate the sales tax and total
const processEntries = () => {
	//getting the values for subtotal and taxRate from their text boxes
	const subTotal = parseFloat($("#subtotal").value);
	const taxRate = parseFloat($("#taxRate").value);
//input validation
 if (isNaN(taxRate)||taxRate < 0 || taxRate > 12){
	alert("Tax Rate must be > 0 and < 12")
}
//input validation
else if(isNaN(subTotal)||subTotal < 0 || subTotal > 10000){
	alert("Subtotal must be > 0 and < 10000")
} 
else  {
	//calculating the sales tax and total then putting those values into the apporiate text box
	const salesTax = (subTotal * taxRate) /100;
	const total = subTotal + salesTax;
	$("#salesTax").value = salesTax.toFixed(2);
	$("#total").value = total.toFixed(2);	
}
$("#subtotal").focus();
};
//method to clear all the text box
const clearEnteries = () =>{
		$("#subtotal").value = " ";
		$("#taxRate").value = " ";
		$("#salesTax").value = " ";
		$("#total").value = " ";
		$("#subtotal").focus();
};
//method to clear only the subtotal box 
const clearSubTotal= () =>{
	$("#subtotal").value = " ";
	$("#subtotal").focus();

};
//method to clear only the tax rate box
const clearTaxRate = () =>{
	$("#taxRate").value = " ";
};


document.addEventListener("DOMContentLoaded", () => {
	// event listeners that do what is described in the methods
	$("#calculate").addEventListener("click", processEntries, clearSubTotal,clearTaxRate);
	$("#clear").addEventListener("click",clearEnteries);
	$("#subtotal").addEventListener("click", clearSubTotal);
	$("#taxRate").addEventListener("click", clearTaxRate);
});