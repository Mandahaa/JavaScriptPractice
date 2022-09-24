//Fibonacci Sequence
function fibSequence(number){
    const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    fib[number] = fib[number - 1]
    console.log(fib[number]);

}
fibSequence(8)