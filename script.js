import { kimiNoNaWa } from "./name.js"


const  yourName = () => {
  console.log(kimiNoNaWa.name);
  console.log(`${object} selam`);
};

const buttonAdam = document.querySelector(".js-button");
buttonAdam.addEventListener("click",()=>{yourName();})