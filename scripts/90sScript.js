var playerVar;
var paragraphindex =0;
$(document).ready(function() {
	$(".title").lettering();
	$(".text").lettering();
	$(".start").lettering();
});

$(document).ready(function() {
	animation();
}, 1000);

$('.start').click(function() {
	 $('body').css('background-image','url(../Kermit/resources/images/calm_tree.gif)');
	 $('body').css('background-repeat', 'no-repeat');
	 $('body').css('background-size', '100%');
	
	sfx.currentTime = 0;
	sfx.play();
	playerVar= document.getElementById("playerName").value;
	localStorage.setItem("player", playerVar);

	var para =new paragraph(paragraphindex);

	removeElement("beginning");
	addElement("bulk", "span", "text", para.text);
	addElement("lefts", "div", "left", para.left);
	addElement("rights", "div", "right", para.right);
	$(".text").lettering();
	$(".left").lettering();
	$(".right").lettering();
	animationText();
});

$("#lefts").on("click", ".left", function(){
	$(".text").remove();
	$(".left").remove();
	$(".right").remove();
	paragraphindex = paragraphindex + 1;
	var para = new paragraph(paragraphindex);
	addElement("bulk", "span", "text", para.text);
	addElement("lefts", "div", "left", para.left);
	addElement("rights", "div", "right", para.right);
	console.log("left");
	console.log(paragraphindex);
});

$("#rights").on("click", ".right", function(){
	$(".text").remove();
	$(".left").remove();
	$(".right").remove();
	paragraphindex = paragraphindex + 2;
	var para = new paragraph(paragraphindex);
	addElement("bulk", "span", "text", para.text);
	addElement("lefts", "div", "left", para.left);
	addElement("rights", "div", "right", para.right);
	console.log("right");
	console.log(paragraphindex);
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
	body.to(".left", 0, {visibility: 'hidden', opacity: 0});
	body.to(".right", 0, {visibility: 'hidden', opacity: 0});
	body.staggerFromTo(".text span", 0.5, 
	{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
	{ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
	body.to(".left", 0, {visibility: 'visible', opacity: 1});
	body.to(".right", 0, {visibility: 'visible', opacity: 1});
}
