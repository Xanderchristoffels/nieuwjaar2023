var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
// Get today's date and time
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.querySelector('.days').innerHTML = days;
document.querySelector('.hours').innerHTML = hours;
document.querySelector('.minutes').innerHTML = minutes;
document.querySelector('.seconds').innerHTML = seconds;



if (days==0 && hours==0) {
    document.getElementById('columnDays').style.display = "none";
    document.getElementById('columnHours').style.display = "none";
    document.getElementById('columnMinutes').style.display = "none";
    document.getElementById('columnSeconds').style.display = "none";
    document.getElementById('countTime').innerHTML = minutes + ":" + seconds
}

if(days==0 && hours==0 && minutes==0 && seconds<21){
    document.getElementById('countTime').innerHTML = ""
    document.getElementById('title').innerHTML = ""
    document.getElementById('lastCount').innerHTML = seconds
}
// If the count down is finished, write some text
if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
    document.getElementById("lastCount").innerHTML = "Gelukkig<br>Nieuwjaar!";
    document.body.style.backgroundImage = "url('firework.jpg')";
    document.getElementById("lastCount").style.fontSize = "200px";
    document.getElementById('columnDays').style.display = "none";
    document.getElementById('columnHours').style.display = "none";
    document.getElementById('columnMinutes').style.display = "none";
    document.getElementById('columnSeconds').style.display = "none";
    document.getElementById('title').innerHTML = ""
    
}

}, 1000);

