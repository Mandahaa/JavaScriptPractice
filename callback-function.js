//.sort example
const numbers = [10,-1,-4,8,-29,21]
const sorted = numbers.sort((num1, num2) => {
    console.log(num1,num2)
    if(num1 > num2) return 1
    else return -1
})
    console.log(sorted)

// .map example
const nums = [10,1,4,8,29,21]
const squaredArray = nums.map((number) => {
    return Math.pow(number , 2)
})
    console.log(squaredArray)

// .filter example
const numberss = [10,-1,-4,8,-29,21]
const negativeNumbersOnly = numberss.filter((number) => {
    if(number < 0)
    return number
})
console.log(negativeNumbersOnly)
// .forEach example
const numbersss = [10,1,4,8,29,21]
numbersss.forEach((number,index,wholeArray) => {})
