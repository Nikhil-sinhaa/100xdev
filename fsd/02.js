

const form = document.querySelector("#Formpage");
const input = document.querySelector("#taskInput");


document.querySelector("button").addEventListener("click", () => {
    console.log("Button clicked");
});


form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const text = input.value.trim();

    if (text === "") {
        console.log(" input is empty");
        return;
    }

   
    addTask(text);
});

function addTask(text) {
    console.log("Task added:", text);
}
