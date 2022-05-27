const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Hello User, please enter your password ", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
    const num3 = Number(tokens[3]);



	if (mathSymbol === "+") {
	console.log(num1 + num2 + num3);
	} else if (mathSymbol === "-") {
	console.log(num1 - num2 - num3);
	  } else if (mathSymbol === "*") {
		console.log(num1 * num2 * num3);
	 	 } else if (mathSymbol === "/") {
			console.log(num1 / num2 / num3); 
			} else if (mathSymbol === "s") { 
				console.log(Math.sqrt(num1) )
				} else if (mathSymbol === "c") {
				 console.log(Math.cbrt(num1) )
					} else if (mathSymbol === "p") {
					console.log(Math.pow(num1, num1) )
						} else if (mathSymbol === "r") {
							console.log(num1 % num2 % num3)
						}



			else {console.log ("try again")
		  }
	// This line closes the connection to the command line interface.
	reader.close()

});

