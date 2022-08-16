const image_rock = document.getElementById('rock');
const image_paper = document.getElementById('paper');
const image_scissors = document.getElementById('scissors');
const image_rock_ai = document.getElementById('rock_ai');
const image_paper_ai = document.getElementById('paper_ai');
const image_scissors_ai = document.getElementById('scissors_ai');

image_rock.addEventListener('click', () => player_choice('rock'));
image_paper.addEventListener('click', () => player_choice('paper'));
image_scissors.addEventListener('click', () => player_choice('scissors'));

let options = [image_paper_ai, image_rock_ai, image_scissors_ai];
let p1_score = 0;
let p2_score = 0;
let score_board_p1 = document.getElementById('p1');
let score_board_p2 = document.getElementById('p2');
let rounds = 1;
let player = null;
let opponent = null;

function player_choice(choice) {
	document.querySelector('h1').innerHTML = "Round " + rounds;
	score_board_p2.innerHTML = p2_score;
	score_board_p1.innerHTML = p1_score;
	let game = ['rock', 'paper', 'scissors'];
	player = document.getElementById(choice);
	game.splice(game.indexOf(choice), 1);
	display_off(game);

	image_paper_ai.style.display = 'inline-block';
	image_rock_ai.style.display = 'inline-block';
	image_scissors_ai.style.display = 'inline-block';

	setTimeout(Rock, 1000, 'ROCK!!!');
}

function display_off(choices) {
	choices.forEach(element => {
		document.getElementById(element).style.display = 'none';
	});
}

function Rock(scream) {
	document.querySelector('h1').innerHTML = scream;
	setTimeout(Paper, 1000, 'PAPER!!!');
}

function Paper(scream) {
	document.querySelector('h1').innerHTML = scream;
	setTimeout(Scissors, 1000, 'SCISSORS!!!');
}

function Scissors(scream) {
	document.querySelector('h1').innerHTML = scream;
	setTimeout(Game, 1000);
}

function Game() {
	document.querySelector('h1').innerHTML = '';

	let random_index = Math.floor(Math.random() * 3);

	image_paper_ai.style.display = 'none';
	image_rock_ai.style.display = 'none';
	image_scissors_ai.style.display = 'none';
	opponent = options[random_index];
	options[random_index].style.display = 'inline-block';
	GameCheck()
}

function GameCheck() {
	if (player.dataset.game === 'rock' && (opponent.dataset.game === 'scissors')) {
		Print('Player');
	}
	else if (player.dataset.game === 'paper' && (opponent.dataset.game === 'rock')) {
		Print('Player');
	}
	else if (player.dataset.game === 'scissors' && (opponent.dataset.game === 'paper')) {
		Print('Player');
	}
	else if ((opponent.dataset.game === 'rock') && player.dataset.game === 'scissors') {
		Print('Opponent');
	}
	else if ((opponent.dataset.game === 'paper') && player.dataset.game === 'rock') {
		Print('Opponent');
	}
	else if ((opponent.dataset.game === 'scissors') && player.dataset.game === 'paper') {
		Print('Opponent');
	}
	else {
		Print('Draw');
	}
}

function Print(winner) {
	if (winner === 'Player') {
		document.querySelector('h1').innerHTML = "You Win!!!";
		p1_score++;
	}
	else if (winner === 'Opponent') {
		document.querySelector('h1').innerHTML = "You Lose!!!";
		p2_score++;
	}
	else {
		document.querySelector('h1').innerHTML = "It's a Draw!!!";
	}

	rounds++;

	setTimeout(newround, 5000, rounds);
}

function newround(round) {
	image_paper_ai.style.display = 'none';
	image_rock_ai.style.display = 'none';
	image_scissors_ai.style.display = 'none';
	image_paper.style.display = 'block';
	image_rock.style.display = 'block';
	image_scissors.style.display = 'block';
	document.querySelector('h1').innerHTML = 'Round ' + round;
	score_board_p2.innerHTML = p2_score;
	score_board_p1.innerHTML = p1_score;
}
