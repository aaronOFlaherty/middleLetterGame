const letters = {
	a:'Ayy', b:'Bee', c:'Cee',  d:'Dee',  e:'Eey',  f:'efF', 
 	g:'Gee', h:'acH', i:'Iey',  j:'Jay',  k:'Kay',  l:'elL', 
 	m:'emM', n:'enN', o:'Ohh',  p:'Pee',  q:'Que',  r:'arR', 
 	s:'esS', t:'Tee', u:'yoU',  v:'Vee',  w:'yuW',  x:'ehX', 
 	y:'whY', z:'Zed',
}

const lettersLeft =  ['a','b','c','d','e','g','i','j','k','o','p','q','t','v','z'] 	//when visualised, this letter is on the left
const lettersRight = ['f','h','l','m','n','r','s','u','w','x','y']					//when visualised, this letter is on the right

function play(){
	var userInput = prompt("Give me a word / sentence and I will give you the middle letter.");
	var input = userInput.toLowerCase();

	var onlyLetters = /^[a-zA-Z]+$/; //Reqular expression used to validate input

	if (input.match(onlyLetters)) { //The first if else statement ensures that the input only contains letters

		console.log(`Chosen word = ${input}`);

		// EVEN INPUT
		if (Number.isInteger(input.length/2)){ // if the input is even, the standoff commences
			console.log(`Round 1`);
			var L1 = (input.length/2)-1;
			var R1 = (input.length/2);
			console.log(`  ${input[L1]} vs ${input[R1]}`);
			console.log(`${letters[input[L1]]} vs ${letters[input[R1]]}`); //accessing the input phonetically
			
		//FIRST STANDOFF
			if ((lettersLeft.includes(input[L1])) && (lettersLeft.includes(input[R1]))){
				console.log(`After 1 standoff, The middle letter of "${input}" is ${(input[R1]).toUpperCase()}`);
				alert(`The middle letter of "${input}" is ${input[R1]}`);

			} else if (((lettersRight.includes(input[L1])) && (lettersRight.includes(input[R1])))) {
				console.log(`After 1 standoff, The middle letter of "${input}" is ${(input[L1]).toUpperCase()}`);
				alert(`The middle letter of "${input}" is ${input[L1]}`);
			
		//WIN CONDITIONS HAVE FAILED - SECOND STANDOFF
			} else {
				console.log('Round 2');
				if ((letters[input[L1]][2]) === input[L1].toUpperCase()) { // THE VALUES HAVE TO BE SWAPPED FROM THE LAST ROUND
					var L2 = letters[input[L1]][0];
					var R2 = letters[input[R1]][2];
				} else {
					var L2 = letters[input[L1]][2];
					var R2 = letters[input[R1]][0];
				}
				console.log(`  ${L2} vs ${R2}`);
				console.log(`${letters[L2]} vs ${letters[R2]}`);
				
				if ((lettersLeft.includes(L2)) && (lettersLeft.includes(R2))){
					console.log(`After 2 standoffs, The middle letter of "${input}" is ${(input[R1]).toUpperCase()}`);
					alert(`The middle letter of "${input}" is ${input[R1]}`);
				} else if (((lettersRight.includes(L2)) && (lettersRight.includes(R2)))) {
					console.log(`After 2 standoffs, The middle letter of "${input}" is ${(input[L1]).toUpperCase()}`);
					alert(`The middle letter of "${input}" is ${input[L1]}`);

		//WIN CONDITIONS HAVE FAILED - THIRD STANDOFF
				} else {
					console.log('Round 3');
					if (L2.toUpperCase() === letters[L2][0]) {
						var L3 = letters[[L2]][2];
						var R3 = letters[[R2]][0];
					} else {
						var L3 = letters[[L2]][0];
						var R3 = letters[[R2]][2];
					}
					console.log(`  ${L3} vs ${R3}`);
					console.log(`${letters[L3]} vs ${letters[R3]}`);

					if ((lettersLeft.includes(L3)) && (lettersLeft.includes(R3))) {
						console.log(`After 3 standoffs, The middle letter of "${input}" is ${(input[R1]).toUpperCase()}`); 
						alert(`The middle letter of "${input}" is ${input[R1]}`);
					} else if (((lettersRight.includes(L3)) && (lettersRight.includes(R3)))) {
						console.log(`After 3 standoffs, The middle letter of "${input}" is ${(input[L1]).toUpperCase()}`); 
						alert(`The middle letter of "${input}" is ${input[L1]}`);
					
		//WIN CONDITIONS HAVE FAILED - FOURTH STANDOFF	
					} else {
						console.log('Round 4');
						if (L3.toUpperCase() === letters[L3][0]) {
							var L4 = letters[[L3]][2];
							var R4 = letters[[R3]][0];
						} else {
							var L4 = letters[[L3]][0];
							var R4 = letters[[R3]][2];
						}
						console.log(`  ${L4} vs ${R4}`);
						console.log(`${letters[L4]} vs ${letters[R4]}`);

						if ((lettersLeft.includes(L4)) && (lettersLeft.includes(R4))){
							console.log(`After 4 standoffs, The middle letter of "${input}" is ${(input[R1]).toUpperCase()}`);
							alert(`The middle letter of "${input}" is ${input[R1]}`);
						} else if (((lettersRight.includes(L4)) && (lettersRight.includes(R4)))) {
							console.log(`After 4 standoffs, The middle letter of "${input}" is ${(input[L1]).toUpperCase()}`);
							alert(`The middle letter of "${input}" is ${input[L1]}`);
						}
					}
				}
			}

		// ODD INPUT
		} else {
			answer = Math.floor(input.length / 2); // if the input is odd, the middle letter is simply calculated and printed
			console.log(input[answer].toUpperCase()); // The array works off a 0 point index. If we have 7, we get 3.5 rounded down to 3 but 3 is what we want as it will actually be the 4th item.
			alert(`The middle letter of "${input}" is ${input[answer].toUpperCase()}`);
		}

		// Invalid input
	} else {
		alert("Please enter only letters. I cannot accept spaces, numbers or symbols.");
		play()
	}

}