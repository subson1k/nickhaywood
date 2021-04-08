
let tag = document.getElementById('tag');

let tag1 = document.getElementById('tag1');
let tag2 = document.getElementById('tag2');

let logo = document.getElementById('logo');
let dog = document.getElementById('dogImg');
let container2 = document.getElementById('container2');

let powered = document.getElementById('powered');
let htmlImg = document.getElementById('htmlImg');
let cssImg = document.getElementById('cssImg');
let jsImg = document.getElementById('jsImg');


let menuDiv = document.getElementById('menuDiv');
let menu = document.getElementById('menu');
let home = document.getElementById('home');
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let contact = document.getElementById('contact');

let i = '';
tag.onclick = () =>{

if(i == 0){
    tag.style.animation = 'tagPress 1s linear forwards';
    menuDiv.style.animation = 'menuShow 1s linear forwards';
    menu.style.animation = 'menuShow 1s linear forwards';
    home.style.animation = 'menuShow 1s linear forwards';
    about.style.animation = 'menuShow 1s linear forwards';
    projects.style.animation = 'menuShow 1s linear forwards';
    contact.style.animation = 'menuShow 1s linear forwards';
    tag1.style.animation = 'tag1 1s linear forwards';
    tag2.style.animation = 'tag2 1s linear forwards';
    i = 1;
} else{
    tag.style.animation = 'tagBack 1s linear forwards';
    menuDiv.style.animation = 'menuHide 1s linear forwards';
    menu.style.animation = 'menuHide 1s linear forwards';
    home.style.animation = 'menuHide 1s linear forwards';
    about.style.animation = 'menuHide 1s linear forwards';
    projects.style.animation = 'menuHide 1s linear forwards';
    contact.style.animation = 'menuHide 1s linear forwards';
    tag1.style.animation = 'tag1Reverse 1s linear forwards';
    tag2.style.animation = 'tag2Reverse 1s linear forwards';
    i = 0;
}
}



   
 window.onscroll = function(){
     myFunction()
 };
 
 function myFunction(){
     if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        dog.style.animation = 'dogWider 2s linear forwards';
        powered.style.animation = 'Appear 2s linear 0.5s forwards';
        htmlImg.style.animation = 'logoSlide 1s linear 0s forwards';
        cssImg.style.animation = 'logoSlide 1s linear 0.3s forwards';
        jsImg.style.animation = 'logoSlide 1s linear 0.9s forwards';
     }
     
     
 }


