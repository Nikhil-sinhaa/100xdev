//find the index where the first occurence appear

function findIndexof(str,target){
    console.log("orignal string: ",str);
    console.log("Index", str.indexOf(target));
    return ; 
 }
var ans = findIndexof("Hello Nikhil","Nikhil")
console.log(ans);

//find the index where the last occurence appear

function findLIndexof(str,target){
    console.log("orignal string: ",str);
    console.log("Index", str.lastIndexOf(target));
    return ; 
 }

 var ans = findLIndexof("Hello Nikhil Nikhil","Nikhil")
console.log(ans);

//to find length
var str = "Alphana"
console.log(str.length)

//slicing
console.log(str.slice(0,5))
//slice(fromindex,toindex)
//substr(fromindex,length)
console.log(str.substr(2,5))

// to replace
console.log(str.replace("Al","kal"));
 

//split the words with delimiter 
//stringname.split(separator in "")
//output is array
const val = "My Name Is Nikhil Sinha";
console.log(val.split(" "))


//To trim the unwanted space at end and start
const Name = "            Nikhil          ";
console.log(Name.trim())

//toUpperCase toLowerCase
console.log(Name.toUpperCase())
console.log(Name.toLowerCase())

//parseInt it extract the number in string and give in int form
//If the first character is a digit (0-9), it keeps reading digits until it finds a non-digit.
//If the first character is not a digit, it immediately returns NaN.
console.log(parseInt("112aaaaaaaad"))