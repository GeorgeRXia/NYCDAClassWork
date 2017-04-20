var modal = document.getElementById('myModal');

var btn = document.getElementById('myBtn');

var span = document.getElementsByClassName('close')[0];


// adjust

btn.addEventListener("click", function(){

modal.style.display = "block";

})

span.addEventListener("click", function(){

modal.style.display = "none";


});


document.addEventListener("click", function(event) {
	if(event.target == modal) {
	modal.style.display = "none";
}

});