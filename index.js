const background = document.getElementById("background");

function changeBackgroundColor() {
    if(background.style.backgroundColor == "white"){
        background.style.backgroundColor = "black";
    }
    else {
        background.style.backgroundColor = "white";
    }
}