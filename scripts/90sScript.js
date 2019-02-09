/*KERMIT*/
var playerVar;
$(document).ready(function() {
<<<<<<< HEAD
		$(".title").lettering();
		$(".text").lettering();
		$(".start").lettering();
		});

		$(document).ready(function() {
		animation();
		}, 1000);

		$('.start').click(function() {
		removeElement("beginning");
		addElement("bulk", "span", "text", new paragraph(0).text);
		$(".text").lettering();
		animationText();
		});
=======
$(".title").lettering();
$(".button").lettering();
});

$(document).ready(function() {
animation();
}, 1000);
>>>>>>> 11e1901a10505cd88f7f845b0b72f5c6a3600a13

$('.button').click(function() {
animation();
playerVar = document.getElementById("playerName").value;
localStorage.setItem("player", playerVar);
});

function animation() {
	var title1 = new TimelineMax();
	title1.to(".start", 0, {visibility: 'hidden', opacity: 0});
	title1.staggerFromTo(".title span", 0.5, 
	{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
	{ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
	title1.to(".start", 0.2, {visibility: 'visible' ,opacity: 1});
	title1.staggerFromTo(".text span", 0.5, 
	{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
	{ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
}

function animationText() {
	var body = new TimelineMax();
	body.staggerFromTo(".text span", 0.5, 
	{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
	{ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
	console.log("hello");
}
<<<<<<< HEAD

      //# sourceURL=pen.js
=======
//# sourceURL=pen.js
>>>>>>> 11e1901a10505cd88f7f845b0b72f5c6a3600a13
