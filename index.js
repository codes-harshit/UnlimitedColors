const hex = "0123456789ABCDEF";
const body = document.querySelector("body");
let intervalId;
let hexCode = ""
const h3 = document.querySelector("h3");


let generateColor = () => {
    hexCode = "#";
    for(let i = 0; i < 6; i++){
        let index = Math.floor((Math.random()*16));
        hexCode += hex.charAt(index);
    }
    // console.log(hexCode);
}

let implementColor = () => {
    generateColor();
    body.style.backgroundColor = hexCode;
}

const Start = document.querySelector("#start");
const Stop = document.querySelector("#stop");

Start.addEventListener("click", (ev) => {
    h3.innerHTML = "Changing colors";
    if(!intervalId){
        intervalId = setInterval(implementColor, 1000);
    }
})

Stop.addEventListener("click", (ev) => {
    clearInterval(intervalId);
    intervalId = null;
    h3.innerHTML = "Stopped!";
    
})


