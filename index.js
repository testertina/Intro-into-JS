///DOM content loaded listener (waits for the html file to be fully loaded before executing the js)
//callback function

document.addEventListener("DOMContentLoaded", function () {
	//All js code goes in here
	var myButton = document.getElementById("myButton");

	myButton.addEventListener("click", clickHandler);

	function clickHandler () {
		console.log("Button has been clicked");
	}

	var myForm = document.getElementById("myForm");
	myForm.addEventListener("submit", function (event) {

		event.preventDefault(); //prevents the default action of submit.
		var inputBox = document.getElementById("firstname");

		if (inputBox.value) {
			console.log(inputBox.value);
			inputBox.value = "";
		};

	});

	var buttons = document.getElementsByClassName("myButtons");

	for (var i = 0; i < buttons.length; i++) {
		var button = buttons[i];

		button.addEventListener("click", function(event) {
			console.log(this); //current elements being clicked
			console.log(this.value);
		})
	};

	var div1 = document.getElementById("div1"); //all the divs are nested in another so all the eventslisteners are tripped simultanously. therefore there needs to be a .stopPropagation
	var div2 = document.getElementById("div2");
	var div3 = document.getElementById("div3");

	div1.addEventListener("click", function (event) {
		console.log("div1 was clicked");
	})


	div2.addEventListener("click", function (event) {
		event.stopPropagation(); //stops bubbling.
		console.log("div2 was clicked");
	})


	div3.addEventListener("click", function (event) {
		event.stopPropagation();
		console.log("div3 was clicked");
	})


});


 
