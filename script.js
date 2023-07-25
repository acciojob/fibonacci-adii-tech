function fibonacci(num) {
// your code here
if (num <= 0) {
	    throw new Error("Input must be a positive integer");
	} 
	else if (num === 1) {
	    return 0;
  } 
	else if (num === 2) {
	    return 1;
  }
	
    let a = 0; b = 1;
    for(let i=1;i<=num-2;i++){
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

module.exports = fibonacci;
