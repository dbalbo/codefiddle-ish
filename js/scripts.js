// here is where I use jquery to toggle the buttons and have the active and selective ones be yellow

$(".toggleButton").hover(function() {

	$(this).addClass('highlightedButton');

}, function() {

	$(this).removeClass("highlightedButton");
});

// setting up toggle and select buttons. found toggleclass in jquery docs

$(".toggleButton").click(function() {
	$(this).toggleClass("active");
// makes sure that I can toggle the active and selected buttons
	$(this).removeClass("highlightedButton");

})


// trying to get the textarea to cover height of page, and the css isnt responding at the moemnt--the -25 is to take away
// any padding on the page so it will stay the entire height and not more--im still playing with those numbers
$(".panel").height($(window).height() - $("#topbar").height() - 25);

// getting the width of the iframe set up--same logic as above
$('.panel').width($(window).width() / 2 - 15);


// setting up iframe to display the html--thank god for Stack Overflow!
// trying to bind it so it will update in real time



$("textarea").on('change keyup paste', function() {

	$("iframe").contents().find("html").html($("#htmlPanel").val());

});