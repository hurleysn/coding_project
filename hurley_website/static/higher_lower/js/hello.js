let valid_input = false;
let input_num, input;
let guesses = [];

while(!valid_input){
	input = window.prompt("What should the maximum number be?");
	input_num = Math.round(Number(input));
	if(input_num != NaN && input_num > 0){
		valid_input = true;
	}
}

let num = Math.floor(Math.random() * input_num) + 1;
console.log(num);
let guessHeader = document.getElementById("h2");
guessHeader.innerHTML = `Guess a number between 1 and ${input_num}`;


function guess(){
	let guess = document.getElementById('guess').value;
	
	console.log(guess);
	let guessresult = document.getElementById("guessres");
	if(guess > input_num){
		guessresult.innerHTML = `Guess is out of range, guess must be at most ${input_num}`;
	}
	else if(guess < 1){
		guessresult.innerHTML = `Guess is out of range, guess must be at least 1`;
	}
	else if(isNaN(guess)){
		guessresult.innerHTML = `That is not a number!`
	}
	else if(guesses.includes(guess)){
		guessresult.innerHTML = `You already tried that, pick another number.`
	}
	else{
		if(num == guess){
			guesses.push(guess);
			guessresult.innerHTML = `<p>You got it! The number was ${num}. It took you ${guesses.length} guess(es).</p>
			<p>List of guesses: ${guesses}</p>`;
		}
		else if (num > guess){
			guesses.push(guess);
			guessresult.innerHTML = `No, try a higher number. Your guess was ${guess}.<br>`;
		}
		else if (num < guess){
			guesses.push(guess);
			guessresult.innerHTML = `No, try a lower number. Your guess was ${guess}.<br>`;
		}
		
	}
	console.log(guesses)
}

