var photos = document.getElementsByClassName("photo");
var modal = document.getElementsByClassName("modal")[0];
var modalImg = document.getElementsByClassName("modal-image")[0];
var overlay = document.getElementsByClassName("overlay")[0];
var modalContent = document.getElementsByClassName("modal-content")[0];

for (var i = 0; i < photos.length; i++) {
	photos[i].addEventListener("click", function(event) {
	modal.style.display = "block";
	overlay.style.display = "block";

console.log(event.target);
console.log(photos[i].classList[1]);
	var photoClass = event.target.classList[1];


	modalImg.classList.add(photoClass);
	// setTimeout(function() {
	modalContent.classList.add("add-opacity");
	// }, 0);
})

}