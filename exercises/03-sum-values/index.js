// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = parseInt(document.getElementById("firstNumber").value);
	//Return the value of the input #secondNumber
	var stringB = parseInt(document.getElementById("secondNumber").value);

	//your code goes here
	document.getElementById("resultNumber").value = stringA + stringB;
};
