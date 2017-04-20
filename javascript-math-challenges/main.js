

var questionOne = new Question("Find the class average of the following grades: 94, 64, 72, 89, 65, 84, 92, 84, 82.", "average");

var questionTwo = new Question("Create a function that takes in a set of grades and finds the average of them.", "average");

var questionThree = new Question("Create a function that takes in a set of grades and finds the maximum of them.", "maximum");

var questionFour = new Question("Create a function that takes in a set of grades and finds the minimum of them.", "minimum");


// HARD MODE!!
var questionFive = new Question("Create a function that takes in a set of grades and finds the mode of them.", "mode");

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

function Question(questionText, emphasis) {
	this.questionText = questionText;
	this.emphasis = emphasis;
}

var questionsIndex = 0;

function nextQuestion(questions) {
	if (questionsIndex === questions.length) {
		document.getElementById("question").innerHTML = "Youre done! Woo!!!";
		document.getElementById("nextQuestion").innerHTML = "Start Over?"
		questionsIndex = 0;
		return;
	} else if (questionsIndex === 0) {
		document.getElementById("nextQuestion").innerHTML = "Next Question"
	}
	var question = questions[questionsIndex];
	var splitQuestion = question.questionText.split(" ");
	var printedQuestion = "";
	for (var i = 0; i < splitQuestion.length; i++) {
		if (splitQuestion[i] === question.emphasis) {
			printedQuestion += " <span>" + question.emphasis + "</span> ";
		} else {
			printedQuestion += " " + splitQuestion[i];
		}
	}

	document.getElementById("question").innerHTML = printedQuestion;
	questionsIndex++;
}

nextQuestion(questions);
document.getElementById("nextQuestion").addEventListener("click", function() {
	nextQuestion(questions);
})
