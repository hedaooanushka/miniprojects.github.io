var numSquares=6;
var colors=generateRandomColor(numSquares);
var square = document.querySelectorAll(".square"); 
var pickedColor = pickColor();
var colordisplay = document.querySelector("#colordisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");	
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColor(numSquares);
	pickedColor = pickColor();
	colordisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for(var i=0;i<square.length;i++) {
		if(colors[i]) {
			square[i].style.backgroundColor = colors[i];
		}
		else {
			square[i].style.display="none";
		}
	}
    h1.style.backgroundColor="steelblue";
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors=generateRandomColor(numSquares);
	pickedColor = pickColor();
	colordisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for(var i=0;i<square.length;i++) {
			square[i].style.backgroundColor = colors[i];
			square[i].style.display="block";	
	}
    h1.style.backgroundColor="steelblue";
});

reset.addEventListener("click", function(){
	colors=generateRandomColor(numSquares);
	pickedColor = pickColor();
	colordisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	reset.textContent="New Colors";
	for(var i=0;i<square.length;i++) {
	    square[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue";

});

colordisplay.textContent = pickedColor;

for(var i=0;i<square.length;i++) {
	square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor===pickedColor) {
			messageDisplay.textContent = "Correct";
            changeColor(pickedColor);
            h1.style.backgroundColor=pickedColor;
            reset.textContent = "Play Again?";
		}
		else {
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	});
}

function changeColor(color){
	for (var i=0;i<square.length;i++) {
		square[i].style.backgroundColor=color;
	}
} 
      

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num) {
	var arr=[];
	for (var i=0;i<num;i++) {
		arr.push(randomColor());  
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}