// let novoParagrafo = document.createElement("p");
let body = document.querySelector("body");
// let div = document.createElement("div");
// novoParagrafo.innerText = "olá";
// div.innerText = "essa é uma div";
// //comando para adicionar uma nova tag filho
// body.appendChild(novoParagrafo);
// //troca o elemento filho de uma tag
// body.replaceChild(div,novoParagrafo);
// //remove o elemento filho de uma tag
// body.removeChild(div)


 document.querySelector("#texto1").innerHTML = "morango";
 document.querySelector("#texto2").innerHTML = "uva";
 document.querySelector("#texto3").innerHTML = "pera";

document.querySelector("#titulo").innerHTML = "harry potter";

let Removido = document.querySelector("#remover");

body.removeChild(Removido);

