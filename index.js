const arr = [12, 23, 32, 11, 14]

const a = arr.filter((element) => {
    return !(element % 2)
})

function cor(arr) {
    for (let i = 0;i < a.length; i++){
        console.log(arr[i] * arr[i])
    }
}

cor(a)

function isUpperCase(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index)
}

console.log(isUpperCase('Kirill', 3));

const a = 1.15
const b = 2.30

function sum(a, b) {
 let rez = a + b 
 return rez
}
console.log(sum(1, b));

const a1 = 1.15
const b1 = 2.30

function sum(a, b) {
    let rez = a - b 
    return rez
   }
   console.log(sum(a1, b1));

   const a2 = 1.15
   const b2 = 2.30

   function sum(a, b) {
    let rez = a / b 
    return rez
   }
   console.log(sum(a2, b2));

