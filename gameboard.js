function gameDecider(){

	var gameType = document.getElementById("firstElement").value;
	
	if(gameType === "firstGame"){
		alert("This game is fun")
	} else if (gameType === "secondGame") {
		alert("This game sucks")
	}else {
		var this = prompt("I don't have that game.", "Well type in you want?");

	}
};