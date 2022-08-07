//make the html variable p in to a variable using its id
var Eltimer = document.getElementById('count');
//set variables and values for the start time and a time variable to be operated on mathmatically within the javascript 
var startTime = 10;
var time = startTime * 60;
//the function that executes mathmatics on time and displays the result
function timer () {
    //divide time to find the minutes
    var minute = Math.floor(time / 60);
    //divide time further to find the seconds using the remainder operator so there is no weird rounding errors
    var second = time % 60;
    second = second < 10 ? '0' + second : second;
    Eltimer.innerHTML = `${minute} : ${second}`;
    //decrease the time at the end of the function
    time--;
}
//calls the function every 'second'
setInterval(timer, 1000);