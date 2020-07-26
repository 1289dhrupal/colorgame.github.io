
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
    setModeButtons();
    setSquares()  
    resetGame();  
}
function setSquares(){
    for(var i=0; i< squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor){
                // console.log("correct");
                messageDisplay.textContent = "Correct !";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Agian ?"
            } else{
                // console.log("wrong");
                this.style.backgroundColor ="#232323";  
                messageDisplay.textContent = "Try Again !";
            }
        });
    }
}

function setModeButtons(){
    for(var i=0; i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            numSquares = this.textContent === "Easy" ? 3 : 6;
            resetGame();
        });
    }
}

function resetGame(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display ="block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display ="none";
        }

    }
    h1.style.backgroundColor ="steelblue";
}


resetButton.addEventListener("click", function(){
  resetGame();
});


function changeColors(color){
    for(var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = color;
    }   
}

function pickColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0; i<num; i++){
        var random = randomColor();
        arr.push(random);
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}