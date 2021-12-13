// function for returning an array that contains digit from key
const digitalDecipher = (eMessage, key) => {
	const Alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","m","o","p","q","r","s","t","u","v","w","x","y","z"]
	const keyToArray = (key) => {
		let a = 0;
		let b = 0;
		const arr = [];
		const str = key.toString();
		while (b < eMessage.length) {
		  if (a >= str.length) a = 0;
		  arr.push(str[a]);
		  a++;
		  b++;
		}
		return arr;
	  };
	  const keys = keyToArray(key);
	  const printMessage = [];
	  for (let a = 0; a < eMessage.length; a++) {
		printMessage.push(eMessage[a] - keys[a]);
	  }
	  return printMessage.map((x) => Alphabet[x - 1]).join(""); 
	};

// driver for testing your code
console.log(digitalDecipher([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939)); // ex 1, it will print "masterpiece"