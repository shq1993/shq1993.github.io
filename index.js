let tag=document.getElementsByClassName("tag");
let target=document.getElementsByClassName("target");

for(let i=0;i<tag.length;i++){
	tag[i].onclick=function(){
		autoTime(i);
	}
}
let timer;
function autoTime(i){
	timer=setInterval(function(){
		let w_Y=window.scrollY;
		let v=8;
		window.scrollTo(0,w_Y+v);
		autoPlay();
		let w_Y1=window.scrollY;
		if(w_Y>=target[i].offsetTop || w_Y==w_Y1){
			window.clearInterval(timer);
		}
	},1);
}
let myAuto=document.getElementById("myaudio");
function autoPlay(){
	myAuto.src="music_img/带你去旅行.mp3";
	myAuto.play();
}
function pausePlay(){
	myAuto.pause();
}
let span_speed=3;
let span_timer;
function span_Jump(){
	span_timer=setInterval(function(){
		tag[0].style.top=parseInt(tag[0].style.top)-span_speed+"px";
		span_speed-=0.2;
		if(parseInt(tag[0].style.top)>=0){
			clearInterval(span_timer);
			span_speed=3;
		}
	},10);
}
tag[0].onmouseover=function(){
	clearInterval(span_timer);
	span_Jump();
}

//---------------------------------------------




//---------------------------------------------

let local_time=document.getElementsByClassName('local_time')[0];

function getTime(){
	var date_h=new Date().getHours();
	var date_m=new Date().getMinutes();
	var date_s=new Date().getSeconds();
	local_time.innerHTML=date_h+":"+date_m+":"+date_s;
	// local_time.style.color="rgb("+parseInt(Math.random()*255)+","
	// +parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
	local_time.style.color="white";
}

var add=setInterval("getTime()",1000);

var img=document.getElementsByClassName('img');
var spa=document.getElementsByClassName('spa');

for(var i=0;i<img.length;i++){
	if(i<=8){
		img[i].style.backgroundImage="url(music_img/my0"+(i+1)+".jpg)";
		img[i].style.backgroundSize="cover";
	}
	else{
		img[i].style.backgroundImage="url(music_img/my"+(i+1)+".jpg)";
		img[i].style.backgroundSize="cover";
	}
}
var index=0;
var little=document.getElementsByClassName("little");
function clear(){
	for(var i=0;i<img.length;i++){
		img[i].className="img";
		little[i].className="little";
	}
}

function show(){
	img[index].className="img show";
	little[index].className="little little_show";
}

var lbt_timer;
let lbt_time=0;
lbt_timer=setInterval(function(){
	lbt_time++;
	if(lbt_time>=4){
		clear();
		index++;
		if(index>img.length-1){
			index=0;
		}
		show();
		lbt_time=0;
	}
	
},1000)

var index1=0;
function clear1(){
	for(var i=0;i<spa.length;i++){
		spa[i].className="spa";
	}
}

function show1(){
	spa[index1].className="spa spa_show";
}

var lbt_timer1;
lbt_timer1=setInterval(function(){
	clear1();
	index1++;
	if(index1>spa.length-1){
		index1=0;
	}
	show1();
},3000)

for(let i=0;i<little.length;i++){
	little[i].onclick=function(){
		lbt_time=0;
		clear();
		index=i;
		show();
	}
}

var box=document.getElementsByClassName("box");
for(var i=0;i<box.length;i++){
	var img_=document.createElement("img");
	img_.setAttribute("src","music_img/style"+(i+11)+".jpg");
	img_.className="img_";
	img_.style.width="100%";
	img_.style.height="100%";
	box[i].appendChild(img_);
}
var shadow=document.getElementsByClassName('shadow')[0];
var shadow_show=document.getElementsByClassName('shadow_show')[0];
var img_=document.getElementsByClassName('img_');
var img_s=document.createElement("img");
for(let i=0;i<img_.length;i++){
	img_[i].onclick=function(){
		shadow.style.display="inline-block";
		// console.log(img_[i].src);
		img_s.style.width="100%";
		img_s.style.height="100%";
		img_s.setAttribute("src",img_[i].src);
		shadow_show.appendChild(img_s);
	}
}
img_s.onclick=function(){
	shadow.style.display="none";
}
var prev=document.getElementsByClassName('prev')[0];
var next=document.getElementsByClassName('next')[0];

prev.onclick=function(){
	alert("后退");
}
next.onclick=function(){
	alert("前进");
}
