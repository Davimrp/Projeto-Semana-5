
/*
// Variável para controlar se o menu está aberto ou fechado
let show = true;

// Seleciona a seção do menu e o botão de toggle
const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

// Seleciona todos os links dentro do menu
const menuLinks = menuSection.querySelectorAll("a")

// Adiciona um event listener para o botão de toggle, para o evento de click e de touchstart
menuToggle.addEventListener("click", toggleMenu)
menuToggle.addEventListener("touchstart", toggleMenu)

// Adiciona um event listener para cada link do menu, para o evento de click e de touchstart
menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu)
  link.addEventListener("touchstart", closeMenu)
})

// Função para abrir ou fechar o menu
function toggleMenu() {
  // Altera o overflow do body para impedir a rolagem da página enquanto o menu estiver aberto
  document.body.style.overflow = show ? "hidden" : "initial"
  // Adiciona ou remove a classe "on" da seção do menu, para mostrar ou esconder o menu
  menuSection.classList.toggle("on", show)
  // Altera a variável show para o valor oposto, para controlar o estado do menu
  show = !show;
}

// Função para fechar o menu
function closeMenu() {
  // Altera a variável show para false, para fechar o menu
  show = false;
  // Retorna o overflow do body ao seu valor inicial, permitindo a rolagem da página novamente
  document.body.style.overflow = "initial"
  // Remove a classe "on" da seção do menu, para escondê-lo
  menuSection.classList.remove("on")
}
*/

let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");
const menuLinks = menuSection.querySelectorAll("a");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  menuSection.classList.toggle("on", show);
  show = !show;
});

menuToggle.addEventListener("touchstart", () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  menuSection.classList.toggle("on", show);
  show = !show;
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    show = false;
    document.body.style.overflow = "initial";
    menuSection.classList.remove("on");
  });
});


