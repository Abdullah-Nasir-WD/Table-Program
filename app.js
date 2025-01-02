console.log("Hello World..!");

let input = document.querySelector("#input")
let output = document.querySelector("#output")

function table() {
    console.log(input.value);
    output.innerHTML = "<h2>Here's your Table</h2>"

    for (let i = 0; i <=10; i++) {;
       output.innerHTML += `${input.value} x ${i} = ${input.value * i} <br/>`
    }
}

