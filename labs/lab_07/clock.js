"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
   const date = new Date();
   let hours =  date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds()
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours % 12;
        document.getElementById("ampm").textContent = "pm";
    } else { // adjust 12 noon and 12 midnight
        if(hours === 0){
            hours = 12;         
            document.getElementById("ampm").textContent = "am";
        } 
        else{
            document.getElementById("ampm").textContent = "pm";
        }
       
    }
     document.getElementById("hours").textContent= padSingleDigit(hours);
     document.getElementById("minutes").textContent= padSingleDigit(minutes);
     document.getElementById("seconds").textContent= padSingleDigit(seconds);
};


//global stop watch timer variable and elapsed time object
let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

const tickStopwatch = () => {
    // increment milliseconds by 10 milliseconds
   elapsedMilliseconds += 10;
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if(elapsedMilliseconds === 1000){
        elapsedSeconds++;
        elapsedMilliseconds = 0;
     
    }
    // if seconds total 60, increment minutes by one and reset seconds to zero
    if(elapsedSeconds === 60){
        elapsedMinutes++;
        elapsedSeconds = 0;
        elapsedMilliseconds = 0;
    }
    //display new stopwatch time
    document.getElementById("s_minutes").textContent= padSingleDigit(elapsedMinutes);
    document.getElementById("s_seconds").textContent= padSingleDigit(elapsedSeconds);
    document.getElementById("s_ms").textContent= padSingleDigit(elapsedMilliseconds);
};

// event handler functions
const startStopwatch = evt => {
    // prevent default action of link
        evt.preventDefault();
      stopwatchTimer =  setInterval(tickStopwatch,10);
    // do first tick of stop watch and then set interval timer to tick
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer
    // variable so next two functions can stop timer.
    
};

const stopStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();
        
    // stop timer
    clearInterval(stopwatchTimer);
};

const resetStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();
    // stop timer
    clearInterval(stopwatchTimer);
    // reset elapsed variables and clear stopwatch display
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;
    elapsedMinutes = 0;
    document.getElementById("s_minutes").textContent= padSingleDigit(elapsedMinutes);
    document.getElementById("s_seconds").textContent= padSingleDigit(elapsedSeconds);
    document.getElementById("s_ms").textContent= padSingleDigit(elapsedMilliseconds);
};

document.addEventListener("DOMContentLoaded", () => {
	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
	
	// set up stopwatch event handlers
    $("#start").addEventListener("click",startStopwatch);
    $("#stop").addEventListener("click",stopStopwatch);
    $("#reset").addEventListener("click",resetStopwatch);
});
