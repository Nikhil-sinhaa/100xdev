function fn(total,done){
    const pending = total-done;
    return pending;
}
console.log(fn(5,2));
const add = (a,b)=>{
return a+b;
}
const isLongTask=(text)=>{
    const sz = text.length;
    return (sz>=10);
}
function labeltask(text,done){
   const label =  done==true?"mark":"dot";
    return `${text}${label}`;
}
// console.log(isLongTask("dskffkjfkfskflkfkj"));
// console.log(labeltask("Cpp",true))
function cleantask(text){
    const cleaned = text.trim();
    if(!cleaned)return null;
    return cleaned;
}
let uid = 1;
function createTask(text){
    return{
        id:uid++,
        text:"done"
    }
}
// console.log(cleanTask("    Nikhil    "))
// console.log(createTask("firsttask"));
// console.log(createTask("2ndtask"));
const d1 = {
    id:1,
    desciption:"   Hello i am from description    "
}
function descibeTask(task){
const cleaned = d1.desciption.trim();
return cleaned;
}
// console.log(descibeTask(d1));

// const item = document.createElement("li");
// item.className = "name-item";
// item.textContent = "Aditi";
// nameList.appendChild(item)

const inputbox = document.getElementById("inputbox");
const btn = document.getElementById("btn");
const listbox = document.getElementById("listbox");

btn.addEventListener("click", function () {
    let insidevalue = inputbox.value;

    const lichild = document.createElement("li");

    lichild.textContent = `Thanks for this ${insidevalue}`;

    
    listbox.appendChild(lichild);

  
    inputbox.value = "";
});