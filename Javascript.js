
const navzinha = document.querySelector("ul");
console.log(navzinha);
function navBar() {
  if (navzinha.classList.contains('menu-hidden')) {
    navzinha.classList.remove('menu-hidden');
    console.log("teste")
  }
  else {
    navzinha.classList.add('menu-hidden');
  }
}


const contentCarrossel = document.getElementById("img");
const imagens = document.querySelectorAll("#img img")

let valorAtual = 0;

function Carrossel() {
  valorAtual++;

  if (valorAtual > imagens.length - 1) {
    valorAtual = 0;
  }
  contentCarrossel.style.transform = `translateX(${-valorAtual * 100}%)`;

}
setInterval(Carrossel, 3500);
