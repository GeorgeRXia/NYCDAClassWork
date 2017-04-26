$(document).ready(function(){


SC.initialize({
	client_id: 'f665fc458615b821cdf1a26b6d1657f6'
})

// SC.get("/tracks/216847995").then(function(response){
// 	audio.src = response.stream_url;
// });

// SC.get("/tracks", {
// q: "awesome"


// }).then(function(response){

// console.log(response);

// });

SC.stream("/tracks/239777850").then(function(player){

player.play();

})

})

