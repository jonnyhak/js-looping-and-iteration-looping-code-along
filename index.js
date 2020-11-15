// Code your solutions in this file


function writeCards(names) {    
    let thanks = []
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        thanks.push(`Thank you, ${name}, for the wonderful surprise gift!`)
    }
    return thanks 
}

function countDown(num){

    let i = num
    while (i >= 0) {
        console.log(i)
        i--
    }
}
 