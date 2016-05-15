// creating a function to have the updates load at the beginning of the page and also be able to be updated in real time
function updateOutput() {

	$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
   	document.getElementById("outputPanel").contentWindow.eval($("#JSPanel").val());

}


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

// getting the id of button that was clicked to hide or show the panel by using the attr and setting it to a var
	 var panelId = $(this).attr("id") + "Panel";


// selecting the panels by their id to hide and show them	 
	$("#" + panelId).toggleClass("hidden");	

// now i create a way to count the number of panels showing at any one time S.O. to the rescue
	var numOfActivePanels = 4 - $('.hidden').length;

// same code to get width but with added var to divide all panels	
	$(".panel").width(($(window).width() / numOfActivePanels ) - 6 );

})


// trying to get the textarea to cover height of page, and the css isnt responding at the moemnt--the -25 is to take away
// any padding on the page so it will stay the entire height and not more--im still playing with those numbers
$(".panel").height($(window).height() - $("#topbar").height());


// getting the width of the iframe set up--same logic as above
$(".panel").width(($(window).width() / 2 )- 7);

// calling the function with the inline html page that updates everything on start of page and when updated in realtime
updateOutput();

// setting up iframe to display the html--thank god for Stack Overflow!
// trying to bind it so it will update in real time



$("textarea").on('change keyup paste', function() {
 // will update in real time in all panels by creating an inline html page with calling up the values and evaluates all of the panels by their specific code
 // replacing long code with calling the function written at top

updateOutput();

                
                
                            

});