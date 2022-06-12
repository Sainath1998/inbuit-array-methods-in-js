let mulbyten = (num)=>{
    return num *10
}

let graterThanThree = (num)=>{
    if(num>3){
        return true
    }
    return false
}

let anArray = [1,1,2,2,3,3,4,4,5,5,6,6]

let mappedArray = anArray.map(mulbyten)  // create a new array , calls function once for each element in array , does not change original array

let filteredArray = anArray.filter(graterThanThree) // creates new array , caontaining elements that passes the test or function.

console.log(anArray.fill(7,10)) // on the 10th index onwards it will fill 7 untill array.length 

console.log(anArray.find(element => element > 3 )) // returns the first element that passes the test or a function

console.log(anArray.findIndex(graterThanThree)) // return index of the element form array that passes the test or a function

console.log(anArray.some(graterThanThree)) // if there are any element that passes the test or function return true

console.log(anArray.every(graterThanThree)) // if every element passes the test returns true else returns false


