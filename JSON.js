const person = {name: "John", occupation: "Radio host"}

const stringifiedPerson = JSON.stringify(person)

console.log(stringifiedPerson)

console.log(JSON.parse(stringifiedPerson))

//Exerxise: Union Array

const findUnion = (arr1, arr2) => {
    console.log(arr1, arr2)
    const union = []
    arr1.forEach((num) => {
        if(!union.includes(num))
        union.push(num)
    })
    arr2.forEach((num) => {
        if(!union.includes(num))
        union.push(num)
    })
    return union
}
    console.log(findUnion([1,2,3,1],[2,1,4,2]))
    console.log("=================")
//Exercise: Symmetric Difference Array

// const findDifference = (arr1, arr2) => {
//     console.log(arr1, arr2)
//     const union = arr1.concat(arr2)
//     console.log(union)
//     const filtered = union.filter((number) => {

//     }
// }
// console.log(findDifference([1,2,3,1],[2,1,4,2]))

//Exercise: Sort

const alphabets = [
    {letter: 'a', index: 1},
    {letter: 'm', index: 13},
    {letter: 'e', index: 5},
    {letter: 's', index: 19},
    {letter: 'z', index: 26},
    {letter: 't', index: 20},
    {letter: 'o', index: 15},
    {letter: 'h', index: 8}
]

const sortFunction = (arr) => {
    console.log(arr)
    const sorted = arr.sort((obj1, obj2) => {
        if(obj1.index > obj2.index) return 1
        else return -1
        // console.log("obj1", obj1)
        // console.log("obj2", obj2)
        // console.log("---")
    })
    console.log(sorted)

}
sortFunction(alphabets)


