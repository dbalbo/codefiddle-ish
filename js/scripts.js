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