let btn1 = document.querySelector("#btn1");

function mousedown(event) {
    event.stopPropagation()
    console.log("Clicou no botão");
}

function mouseup(event) {
    event.stopPropagation()
    console.log("Soltou no botão");
}

btn1.addEventListener("mousedown", mousedown);
btn1.addEventListener("mouseup", mouseup);

btn1.addEventListener("dblclick", ()=> {
    console.log("Double click");
});

btn1.addEventListener("contextmenu", (e)=> {
    e.preventDefault();
    console.log("clicou o botão direito");
})

const clicouEmMim = () => console.log("Clicou para remover");

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  clicouEmMim()
  btn1.removeEventListener("click", Teste2)
})

let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", function (event) {
  console.log("🚀 ~ O que tem no event?", event);
});

let p = document.getElementById('paragrafo-da-propagacao');

function msg(event) {
    event.stopPropagation()
    console.log("Cliquei no button da propagação");
}

let quartoBtn = document.createElement("button");

quartoBtn.addEventListener('click', msg)
quartoBtn.innerText = "botão da propagação"
p.appendChild(quartoBtn)

p.addEventListener("click", (event) => {
    event.stopPropagation()
    console.log("clicaram no parágrafo");
})

let link = document.querySelector("a");

link.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("Não vai fazer nada");
})

window.addEventListener("mousedown", (e) => {
    console.log("clicou com o botão do mouse");
})

window.addEventListener("mouseup", (e) => {
    console.log("soltou com o botão do mouse");
})

window.addEventListener("keydown", (e) => {
    if(e.key == 'Enter'){
        console.log("Pressionou o Enter");
    } else if (e.key == 'q'){
        console.log('Pressionou o q');
    }
})
window.addEventListener("keyup", (e) => {
    if(e.key == 'Enter'){
        console.log("Soltou o Enter");
    } else if (e.key == 'q'){
        console.log('Soltou o q');
    }
})

// window.addEventListener("mousemove", (e)=> {
//     console.log("Horizontal:", e.x);
//     console.log("Vertical:", e.y);
// })

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 1000)
    console.log("Scroll Vertical", window.scrollY);
})

window.addEventListener("scroll", ()=> {
    if(window.scrollX > 1000)
    console.log("Scroll Horizontal", window.scrollX);
})

let input = document.querySelector("input");
input.addEventListener('focus', ()=>{
    console.log("FUI FOCADO");
})

input.addEventListener('blur', ()=>{
    console.log("FUI DESFOCADO");
})

window.addEventListener("load", ()=> {
    alert("A página foi carregada com sucesso.")
})
window.addEventListener("beforeunload", (e)=> {
    e.returnValue = null;
})