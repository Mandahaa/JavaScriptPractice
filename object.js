const person =  {};
person.firstName = "Mandahaa"
person.lastName = "Munkhbat"
person.occupation = "Student"
person.hobby

console.log(person.firstName)
console.log(person[`lastName`])
console.log(person[`occupation`])

person.hobby = "Playing"
console.log(person.hobby)

delete person.occupation
console.log(person.occupation)




