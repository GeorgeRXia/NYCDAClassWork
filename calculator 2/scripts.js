var numbers = document.getElementsByClassName("num");
var operators = document.getElementsByClassName("operator");

var calcInput = document.getElementsByClassName("calc-input")[0];
var equalOperator = document.getElementsByClassName("equal-operator")[0];

var operator;

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function(event) {
		calcInput.innerHTML += event.target.innerHTML;
	});
}

for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener("click", function(event) {
		calcInput.innerHTML += event.target.innerHTML;
		operator = event.target.innerHTML;
		// console.log(operator);
	});
}

equalOperator.addEventListener("click", function() {
	var nums = calcInput.innerHTML.split(operator);
	calculate(parseInt(nums[0]), parseInt(nums[1]), operator);
});

function calculate(x, y, operator) {
	if (operator === "+") {
		calcInput.innerHTML = x + y;
	}
}








// calcInput.innerHTML = eval(x + operator + y);
