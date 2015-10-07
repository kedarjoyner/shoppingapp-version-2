

$(function() {
    $( ".list-items" ).sortable();
    $( ".list-items" ).disableSelection();
  });

function updateParagraph() { 
	var itemCount = $('ul.list-items li').length;
	$(".update-paragraph").text("You have " + itemCount + " items left.");
		if (itemCount === 1) {
			$(".update-paragraph").text("You have " + itemCount + " item left.");
		}
}

$(document).ready(function() {

	updateParagraph();

	$(".submit-button").click(function(event) {
		//alert('test!');
		var input = $(".input-box").val(); //grabs value of current item user inputs //why some of paranthenses and others not?
		var icons = '<span class="icons"><i class="fa fa-square-o"></i></i><i class="fa fa-minus-circle"></i></span>';	
		event.preventDefault(); // prevents page reload after submission. Why does this happen? Why do I need "event"
		if (input === '') { //if user enters nothing
			alert("Oops! You forgot to enter an item.");
		}
			else { //submit
				$(".list-items").prepend("<li>" + input + icons + "</li>");
				$(".input-box").val(''); //removes text within input box
				updateParagraph();
			}	
	});

    $('.list-items').on('click', '.fa-minus-circle', function() { //why can't this be $(trash).click.etc...?
        $(this).closest('li').remove();
        updateParagraph();
    });


    $('.list-items').on('click', '.fa-square-o', function() { //click on square and change to checked
        $(this).toggleClass('fa-check-square-o fa-square-o'); 
        	$(this).closest('li').css('opacity', 0.2).css('background-color', '#cd5b45').css('text-decoration', 'line-through').appendTo('ul');
        	if ($(this).hasClass('fa-check-square-o')) {
				$(".update-paragraph").text("You have " + itemCount + " items left.");
        	}
  	
    });

    $('.list-items').on('click', '.fa-check-square-o', function() { //click on check and change back to unchecked
        $(this).toggleClass('fa-check-square-o fa-square-o');
        $(this).closest('li').css('opacity', "").css('background-color', "").css('text-decoration', 'none').prependTo('ul');

    });    
});

/*var userName = prompt("Welcome! What's your name?");
var greeting = "Welcome, " + userName + "!";
alert(greeting);

var defaultAnswer = "no"
var testQuestion = prompt("Are you a robot?", defaultAnswer);
	if (testQuestion === "no") {
		var mathTest = prompt("Good, but I just want to make sure. What's 2 + 2?");
			alert("Wohoo!");
	}
	else if (testQuestion === "maybe") {
		alert("Go home! You're drunk");
	}	
	else {
		prompt("Sorry, no robots allowed.");
}

var question = prompt("Do you like pizza?");
var response = " I like pizza";
alert(question + response + " and you're the most amazing person in the world!");

/*var newQuestion = prompt("What's 12 * 40?");
if (parseInt(newQuestion) === 480) {
	alert("Great job!");
}
else if (parseInt(newQuestion) < 480) {
	alert("Close! It's not right, though.");
}
else {
	alert("Why you no respond?");
}*/