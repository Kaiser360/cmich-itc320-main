"use strict";
const $ = selector => document.querySelector(selector);
$("#name").focus();
const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const displayResults = () =>{
	//variables to hold things
	let size = scores.length;
	let totalScore = 0;
	let highestScore = 0;
	let highestScoreIndex = 0;
	let highestScoreName = "";
	let average = 0;
	
	//for loop to iterate the size of the arrays
for(let i = 0; i < size; i++){
	//adding up the total score
	 totalScore += scores[i];
	//if statement to check for highest score
	if(highestScore < scores[i]){
		highestScore = scores[i];
		highestScoreIndex = i;
		highestScoreName = names[highestScoreIndex];
	}
}
average = totalScore/size;

//added the h2 elements and their content
const heading = document.createElement('h2');
heading.textContent = 'Results';
document.body.appendChild(heading);
//adding the p elements and their content
const p = document.createElement('p');
p.textContent = 'Average Score = ' + average.toFixed(0);
document.body.appendChild(p);

const p1 = document.createElement('p');
p1.textContent = 'High Score is ' + highestScoreName + ' with a ' + highestScore;
document.body.appendChild(p1);

}
//method to add a score
const addScore = () => {
let name = $("#name").value;
let score = $("#score").value;

//data validation
if(name === ""){
	document.getElementById("nameError").textContent = "Please enter a name";
} else{
	names.push(name);
	$("#name").value = "";
}
if(score < 0 || score > 100){
	document.getElementById("scoreError").textContent = "Score must be between 0 and 100";
}else{
scores.push(parseInt(score));
$("#score").value = "";
}
$("#name").focus();
}
//method to display the scores 
const displayScores = () => {
const heading = document.createElement('h2');
heading.textContent = 'Scores';
document.body.appendChild(heading);
for(let i = 0; i < scores.length; i++){;
const p = document.createElement('p');
p.textContent = names[i] + '\t' +scores[i];
document.body.appendChild(p);
}
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});