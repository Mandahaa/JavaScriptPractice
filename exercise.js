//if/else
function largestNum(num1,num2,num3){

    if(num1>num2 && num1>num3){

        console.log(`${num1} is the largest number among ${num1,num2,num3}`)

    }else if(num2 > num1 && num2 > num3){
        console.log(`${num2} is the largest number among ${num1,num2,num3}`)
    }else
        console.log(`${num3} is the largest number among ${num1,num2,num3}`)
}
largestNum(222,31,4)
console.log("=====================")
//Array and Object
const programming = {}
programming.languages = ["javascript", "java"]
programming.difficulty = 9
programming.usage = "Web"
programming.isRewarding = true
console.log(programming)

delete programming.isRewarding
console.log(programming)

programming.isFun = true
console.log(programming)

programming.languages.push("Python")
console.log(programming)

programming.difficulty = 8
console.log(programming)

for(let i = 0; i<3; i ++){

    console.log(programming.languages[i])
}
console.log("=====================")
//Loop
for(let i = 1; i < 14; i++){
    console.log(i)
}

for(let i = 11; i < 41; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

let sum = 0
for(let i = 3; i <= 22; i++){
    sum = sum + i
    console.log(sum)

}
console.log("=============")
let sum1 = 0
for(let i = 10; i <= 20; i++){
    if(i % 2 == 1){
        sum1 = sum1 + i
        console.log(sum1)
    }
}
console.log("=============")
//loop+Array
let givenArray = [ -2 , 20 , 4 , 5 , -59 , -2 , 3 , -3 , 102 ]
function posNumbers(){

    for(let i = 0; i < givenArray.length; i++)
        if(givenArray.indexOf[i] > -1){
            console.log(givenArray.indexOf[i])
        }//??????????????????????????????
}
console.log("=============")
//trick question 
let randomArray = ["A", 1 , false , "Baagii"]
    randomArray.length = 0
    console.log(randomArray)
        
console.log("=============")
//Loop and If/else
const vowels = ['a','e','i','u','o']
function countVowels(str){
let count = 0
let string = str.toString()
    for(let i = 0; i <= string.length - 1; i++){
        if(string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'u' || string.charAt(i) == 'o'){
            count += 1
        }
    }        
            console.log(`The ${string} has ${count} vowels!`)

}           countVowels("snow")
console.log("================")

//Palindrome
function palindromeChecker(String){
    for(let i = String.length; i > 0; i--){
        if(String[i] = String.charAt(String.length)-1){
            console.log("Word is Palindrome")
        }else {
            console.log("Word is NOT Palindrome")
        }
    }
}
palindromeChecker("snow") //???????????????

//Math object 
function randomPick(){
    
    const students =["Mandahaa","Anar","Huluguu","Dee","Ziggy","Tsatsa","Jaagii","Muugii","Zoe","Meg","Jamia"]
    
    console.log(students[Math.floor(Math.random()*students.length)])

    
}
randomPick()
//binary Number convertion
function binaryNum(input){
    console.log(Number.toString(input))
}
binaryNum(9)// at home

//Closest number thats divisible by 5
const closestNum = (givenNum) => {
    
    console.log(Math.round(givenNum/5)*5)

}
closestNum(12.59)

//GCD
const gCd = (int1, int2) => {

    if(int1,int2 == Number){

        if(int1,int2 > -1 ){

        }
    
    }else {
        console.log("Error, Given Arguements are NOT numbers")
    }
}
gCd(2,4)


