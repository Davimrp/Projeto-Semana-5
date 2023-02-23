let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const menuLinks = menuSection.querySelectorAll("a")

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial"
  menuSection.classList.toggle("on", show)
  show = !show;
})

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    show = false;
    document.body.style.overflow = "initial"
    menuSection.classList.remove("on")
  })
})

// Solução para dispositivos móveis
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  menuToggle.addEventListener('touchstart', () => {
    document.body.style.overflow = show ? "hidden" : "initial";
    menuSection.classList.toggle("on", show);
    show = !show;
  });
}



