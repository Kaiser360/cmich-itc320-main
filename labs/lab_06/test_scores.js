"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const displayResults = () =>{
	let size = scores.length;
	let average = 0;
	let highestScore = 0;
	let highestScoreIndex = 0;
	let highestScoreName = " ";
for(let i = 0; i < size; i++){
	 average += scores[i];
	if(highestScore < scores[i]){
		highestScore = scores[i];
		highestScoreIndex = i;
		highestScoreName = names[highestScoreIndex];
	}
}
average = average/size
const heading = document.createElement('h2');
heading.textContent = 'Results';
document.body.appendChild(heading);
const p = document.createElement('p');
p.textContent = 'Average Score = ' + average.toFixed(0);
document.body.appendChild(p);
const p1 = document.createElement('p');
p1.textContent = 'High Score is ' + highestScoreName + ' with a ' + highestScore;
document.body.appendChild(p1);

}

const addScore = () => {

}
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