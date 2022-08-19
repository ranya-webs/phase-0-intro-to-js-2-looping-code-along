/*
This function returns an array of thank you messages for each name provided to the function
*/ 
function writeCards(names) {
    let result = [];
    names.forEach(element => {
        result.push(`Thank you, ${element}, for the wonderful surprise gift!`);
    });
    return result;
}


/*
This function should log each number when counting down, starting from the number provided to zero.

My failed attempt: 
function countDown(number) {
    for(let i = 0; i < number; i--) {
        console.log(i);
    }
}

That created an infinite loop that counted from zero down to negative numbers (The opposite of what I wanted)

 */
function countDown(number) {
    for(let i = number; i >= 0; i--) {
        console.log(i);
    }
}
