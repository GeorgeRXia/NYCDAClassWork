
function reverseTheArray(number){
	var toString = number.toString(); //String(number). after reverse .map(Number) can change it to. .shift() removes the first item in an array and then saves into a variable if you equaled it to a variable example: var r = array.shift();
	// is the first array index and the array has the first one removed
	var newArray = toString.split("");

	return newArray.reverse();

}


function anotherWay(number){
	var toString = number.toString();
	var newArray = toString.split("");
	var holder = "";

	for(var i = newArray.length - 1; i >= 0; i--){
	holder += newArray[i]


	}

var newArray2 = holder.split("");
	return newArray2;

// }