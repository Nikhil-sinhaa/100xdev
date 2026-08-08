const arr = [1,23,4];
arr.push(5);
console.log(arr);
arr.pop()
console.log(arr);
//to pop from first
arr.shift( )
console.log(arr);
//to insert from top
arr.unshift(0);
console.log(arr);

//to join 2 arr
const arr2 = [3,4,5];
console.log(arr.concat(arr2));

//to call function for every element in array 
function loggthing(str){
    console.log(str)
}

arr2.forEach(loggthing);