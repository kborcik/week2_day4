// function palindrome (string){
//     let set = new Set ([])
//     for (let i = 0; i < string.length; i ++){
//         set.add(string[i])
//     }
//     if(string.length % 2 === 0){
//       return string.length/2 === set.size  
//     } else if ((string.length + 1) % 2 === 0) {
//         return (string.length + 1) / 2 === set.size

//     } else {
//         return false
//     }
// }


// console.log(palindrome(`livelive`))


function palindrome (string){
 let set = new Set ([])
 let set2 = new Set ([])
    for (let i = 0; i < string.length; i++){
        set.add(string[i])
    }
//    console.log(Array.from(set).toString())
  for (let j = string.length -1; j > 0; j--){
        set2.add(string [j])
    }
//    console.log(Array.from(set2).toString())
    return Array.from(set).toString() === Array.from(set2).toString()
}

console.log(palindrome(`tacocat`))



function isPalindrome (string) {
    for (let i = 0; i , string.length; i++){
        let finalInde = String.length - 1 - i

        if (string[i] !== str [finalIndex]){
            return false
        }
    }
    return true
}

function isPalindromMethods (string) {
    let reverseStr = string.split('').reverse().join('')
    return string === reverseStr
} 


const isPalindromOneLIne = str => str === str.split('').reverse().join('')