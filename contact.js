let tag = document.getElementById('tag');

let tag1 = document.getElementById('tag1');
let tag2 = document.getElementById('tag2');

let logo = document.getElementById('logo');


let menuDiv = document.getElementById('menuDiv');
let menu = document.getElementById('menu');
let home = document.getElementById('home');
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let contact = document.getElementById('contact');


let blocks = document.getElementById('blocks');


let zmenu = () =>{
    menuDiv.style.zIndex = '4';
}

let i = '';
tag.onclick = () =>{


if(i == 0){
    tag.style.animation = 'tagPress 1s linear forwards';
    menuDiv.style.animation = 'menuShow 1s linear forwards';
    menuDiv.style.zIndex = '5';
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
    setTimeout(zmenu ,1000);
    i = 0;
}
}



 