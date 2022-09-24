//Prime number
function isPrime(num){
    if(num%2===Number || num%2!==0){
        console.log(`${num} is a prime number`)

    }else if(num===2){
        console.log(`${num} is a prime number`)
        
    }else{
        console.log(`${num} is NOT a prime number`)
    }
    
}
isPrime(6)