let namesArr = [`biLly boB`, `jOe Mama`, `boBby Brown`, `lUKas Nessi`, ]
let numsArr = [5,4,2,36,7,9,10]

 

function copyAndChange (arr, callback){
        let newArr = []
        for (let i = 0; i < arr.length; i++){
                let newValue = callback(arr[i])
        newArr.push(newValue)
    }
    return newArr
}

function strToCamelCase (str) {
        let splitStr = str.split(` `)
        for ( i = 0; i < splitStr.length; i++){
                splitStr[i] = splitStr[i].toLowerCase()
                if(i !== 0){
                       splitStr[i] = splitStr[i].charAt(0).toUpperCase() +splitStr[i].slice(1)
                    }
                }
                return splitStr.join('')
            }
            
let mappedArray = numsArr.map(strToCamelCase)
console.log(mappedArray)
            const addFive = num => {
                    return num += 5
                }
                console.log(copyAndChange(namesArr,strToCamelCase))
                console.log(copyAndChange(numsArr, addFive))
                

// class Users {
//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     greeting(){
//         console.log(`hello, my name is ${this.firstName}`)
//     }
// }


// let nameObj = []

// namesArr.forEach(element => {
//     let name = element.split(` `)
//     let newUser = new Users(name[0],name[1])
//     nameObj.push(newUser)

// })

// console.log(nameObj)

// let firstNameArr = nameObj.map(user =>{
//     return user.firstName
// })

// console.log(firstNameArr)

// let greet = (user) =>{
//     user.greeting()
// }

// nameObj.forEach(greet)