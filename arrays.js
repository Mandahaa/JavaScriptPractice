const students = ['A', 'B']

students[0]='C'
console.log(students[0])
console.log(students.length)
console.log(students.indexOf('B'))
console.log(students[2])
console.log(students[students.length-1])
console.log("==========================")

const randomArray = ['A', 20, 'B', 23, 'C']
randomArray.pop()
console.log(randomArray)
randomArray.shift()
console.log(randomArray)
randomArray.unshift(["A1","A2"])
console.log(randomArray)
randomArray.push(true)
console.log(randomArray)
randomArray[2]= 'U'

console.log(randomArray)

