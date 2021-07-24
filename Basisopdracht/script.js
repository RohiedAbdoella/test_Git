document.getElementById("menu-button").addEventListener("click", colorToggle);

let backgroundHome = function home(){ 
    let getColorMenu = document.querySelector(".color-navigation");
    let bodyBackground = document.querySelector("body");
    bodyBackground.style.backgroundColor = "lightgrey";
    getColorMenu.style.backgroundColor = "lightgrey";
    colorToggle()
}

let backgroundRed = function red(){ 
    let getColorMenu = document.querySelector(".color-navigation");
    let bodyBackground = document.querySelector("body");
    bodyBackground.style.backgroundColor = "red";
    getColorMenu.style.backgroundColor = "red";
    colorToggle()
}

let backgroundOrange = function orange(){ 
    let getColorMenu = document.querySelector(".color-navigation");
    let bodyBackground = document.querySelector("body");
    bodyBackground.style.backgroundColor = "orange";
    getColorMenu.style.backgroundColor = "orange";
    colorToggle()
}

let backgroundPurple = function purple(){ 
    let getColorMenu = document.querySelector(".color-navigation");
    let bodyBackground = document.querySelector("body");
    bodyBackground.style.backgroundColor = "purple";
    getColorMenu.style.backgroundColor = "purple";
    colorToggle()
}

let backgroundGreen = function green(){ 
    let getColorMenu = document.querySelector(".color-navigation");
    let bodyBackground = document.querySelector("body");
    bodyBackground.style.backgroundColor = "green";
    getColorMenu.style.backgroundColor = "green";
    colorToggle()
}

//event Listeners van de kleurlinks/knoppen.
document.getElementById("home").addEventListener("click", backgroundHome);
document.getElementById("red").addEventListener("click", backgroundRed);
document.getElementById("orange").addEventListener("click", backgroundOrange);
document.getElementById("purple").addEventListener("click", backgroundPurple);
document.getElementById("green").addEventListener("click", backgroundGreen);


let toggleStatus = false;

/*
Function om het menu zichtbaar te maken na het klikken op het hamburgermenu en 
om weer te laten verdwijnen na kleurkeuze.
*/
function colorToggle() {
    let getColorMenu = document.querySelector(".color-navigation");
    let getColorMenuUl = document.querySelector(".color-navigation ul");
        if (toggleStatus === false){
            getColorMenuUl.style.visibility = "visible";
            getColorMenuUl.style.overflow = "visible";
                getColorMenu.style.width = "272px";
                getColorMenu.style.padding = "0";
                toggleStatus = true;
        }
        else if (toggleStatus === true){
            getColorMenuUl.style.visibility = "hidden";
            getColorMenuUl.style.overflow = "hidden";
                getColorMenu.style.width = "50px";
                getColorMenu.style.padding = "0 5px";
                toggleStatus = false;
        }   
}

