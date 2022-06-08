var colors = ["blue", "red", "purple", "pink", "green", "orange", "yellow", "gray"];
var word = colors[Math.floor(Math.random()*colors.length)];
console.log(word);
var guessesLeft = 10;
var answerArray = []; 
var guesses = [];
var congratulations = "Congratulations";
console.log("hello");

function initializeGame() {
	word = colors[Math.floor(Math.random()*colors.length)]; 
	guesses = [];
	guessesLeft = 10;

	updateAnswerArray();

	updateGuesesLeft();
}

function updateAnswerArray(){
	answerArray = [];
	for (var i = 0; i < word.length; i++){
		var wordLetter = word[i];
		if (guesses.includes(wordLetter)){
			answerArray.push(wordLetter);
		}
		else {
			answerArray.push("_");
		}
	}
	document.getElementById("answer").innerHTML = answerArray.join(" ");


}

function updateGuesesLeft(){
	document.getElementById("counter").innerHTML = "Guess Left " + guessesLeft;

}

initializeGame();

document.onkeyup = function(event){
	var letterInput = String.fromCharCode(event.which).toLowerCase();
	console.log(letterInput);
	

	console.log(guesses, word, answerArray.join(""))

	if (!guesses.includes(letterInput)){
		guesses.push(letterInput);
		if (!word.includes(letterInput)){
			guessesLeft--;
			updateGuesesLeft();

			console.log(guessesLeft)
		} else {
			updateAnswerArray();

		}
	}
	if (answerArray.join("") === word){
		document.getElementById("congratulations").innerHTML = "Congratulations.  You won.";
		initializeGame();
	}
	else if (guessesLeft == 0){
		document.getElementById("lose").innerHTML = "Sorry.  You lose.  You are out of guesses.";
		initializeGame();
	}	

	


};