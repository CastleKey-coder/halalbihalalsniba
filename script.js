const sections = document.querySelectorAll(".hero, .section");
const dots = document.querySelectorAll(".nav-dots span");
const navDots = document.getElementById("navDots");

function goSection(index){
sections[index].scrollIntoView({
behavior:"smooth"
});
}

window.addEventListener("scroll",()=>{

let current=0;

sections.forEach((section,i)=>{

const top = section.offsetTop - 200;

if(scrollY >= top){
current = i;
}

});

if(current > 0){
navDots.classList.add("show");
}else{
navDots.classList.remove("show");
}

dots.forEach(dot=>dot.classList.remove("active"));

if(current > 0 && dots[current-1]){
dots[current-1].classList.add("active");
}

});

function bukaUndangan(){
document.getElementById("undangan").scrollIntoView({
behavior:"smooth"
});
music.play();
}

const targetDate = new Date("March 28, 2026 08:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();
const distance = targetDate - now;

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(distance < 0){
clearInterval(timer);
document.querySelector(".countdown").innerHTML="Acara Dimulai!";
}

},1000);

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

musicBtn.addEventListener("click",function(){

if(music.paused){
music.play();
musicBtn.innerHTML="🔊";
}else{
music.pause();
musicBtn.innerHTML="🔇";
}

});
