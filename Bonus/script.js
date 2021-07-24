/*
Hier heb ik "click" vervangen met "mouseover". Het menu verdwijnt nu pas, wanneer een kleur gekozen is of 
wanneer er weer met de muis over het hamburgermenu geschoven wordt.
*/
document.getElementById("menu-button").addEventListener("mouseover", colorToggle);

/*
Hier gebruik ik "mouseout" om ervoor te zorgen dat, wanneer je met je cursor weer van het hamburgermenu weggaat, 
het menu weer verdwijnt.Zo werd het in de opdracht omschreven. Je kan nu alleen geen kleur kiezen uit het menu.
Als u deze optie wil zien, dan graag de volgende regel uitcommenten*/

//document.getElementById("menu-button").addEventListener("mouseout", colorToggle);

let backgroundHome = function home(){ 
    let getColorMenu = document.querySelector(".color-navigation");
    let bodyBackground = document.querySelector("body");
    bodyBackground.style.backgroundColor = "lightgrey";
    getColorMenu.style.backgroundColor = "lightgrey";
    colorToggle()
    //Naam van de gekozen kleur op de achtergrond van de pagina
    let nameColor = document.querySelector("span");
    nameColor.innerHTML = "<p>Home</p>";
}

let backgroundRed = function red(){ 
    let getColorMenu = document.querySelector(".color-navigation");
    let bodyBackground = document.querySelector("body");
    bodyBackground.style.backgroundColor = "red";
    getColorMenu.style.backgroundColor = "red";
    colorToggle()
    //Naam van de gekozen kleur op de achtergrond van de pagina
    let nameColor = document.querySelector("span");
    nameColor.innerHTML = "<p>Red</p>";
}

let backgroundOrange = function orange(){ 
    let getColorMenu = document.querySelector(".color-navigation");
    let bodyBackground = document.querySelector("body");
    bodyBackground.style.backgroundColor = "orange";
    getColorMenu.style.backgroundColor = "orange";
    colorToggle()
    //Naam van de gekozen kleur op de achtergrond van de pagina
    let nameColor = document.querySelector("span");
    nameColor.innerHTML = "<p>Orange</p>";
}

let backgroundPurple = function purple(){ 
    let getColorMenu = document.querySelector(".color-navigation");
    let bodyBackground = document.querySelector("body");
    bodyBackground.style.backgroundColor = "purple";
    getColorMenu.style.backgroundColor = "purple";
    colorToggle()
    //Naam van de gekozen kleur op de achtergrond van de pagina
    let nameColor = document.querySelector("span");
    nameColor.innerHTML = "<p>Purple</p>";
}

let backgroundGreen = function green(){ 
    let getColorMenu = document.querySelector(".color-navigation");
    let bodyBackground = document.querySelector("body");
    bodyBackground.style.backgroundColor = "green";
    getColorMenu.style.backgroundColor = "green";
    colorToggle()
    //Naam van de gekozen kleur op de achtergrond van de pagina
    let nameColor = document.querySelector("span");
    nameColor.innerHTML = "<p>Green</p>";
}

//event Listeners van de kleurlinks/knoppen.
document.getElementById("home").addEventListener("click", backgroundHome);
document.getElementById("red").addEventListener("click", backgroundRed);
document.getElementById("orange").addEventListener("click", backgroundOrange);
document.getElementById("purple").addEventListener("click", backgroundPurple);
document.getElementById("green").addEventListener("click", backgroundGreen);

//Met de knoppen 1, 2, 3, 4 en 5 (geen numpad) op het toetsenbord, veranderen de kleuren.
document.addEventListener('keydown', function() {
    let getColorMenu = document.querySelector(".color-navigation");
    let bodyBackground = document.querySelector("body");
    let nameColor = document.querySelector("span");
    let keyboardNumber = event.keyCode;
    if (keyboardNumber === 49) {
        bodyBackground.style.backgroundColor = 'lightgrey';
        getColorMenu.style.backgroundColor = "lightgrey";
        nameColor.innerHTML = "<p>Lightgrey</p>";
    } else if (keyboardNumber === 50) {
        bodyBackground.style.backgroundColor = 'red';
        getColorMenu.style.backgroundColor = "red";
        nameColor.innerHTML = "<p>Red</p>";
    } else if (keyboardNumber === 51) {
        bodyBackground.style.backgroundColor = 'orange';
        getColorMenu.style.backgroundColor = "orange";
        nameColor.innerHTML = "<p>Orange</p>";
    } else if (keyboardNumber === 52) {
        bodyBackground.style.backgroundColor = 'purple';
        getColorMenu.style.backgroundColor = "purple";
        nameColor.innerHTML = "<p>Purple</p>";
    } else if (keyboardNumber === 53) {
        bodyBackground.style.backgroundColor = 'green';
        getColorMenu.style.backgroundColor = "green";
        nameColor.innerHTML = "<p>Green</p>";
    }
});


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

//Radiobuttons, toegevoegd aan het menu om beide menu's werkend te zien.

document.getElementById("radio-home").addEventListener("click", backgroundHome);
document.getElementById("radio-red").addEventListener("click", backgroundRed);
document.getElementById("radio-orange").addEventListener("click", backgroundOrange);
document.getElementById("radio-purple").addEventListener("click", backgroundPurple);
document.getElementById("radio-green").addEventListener("click", backgroundGreen);



