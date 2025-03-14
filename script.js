const buttonOpen = document.querySelector(".open");
const buttonClose = document.querySelector(".close");
const triangleTop = document.querySelector(".triangulo-2");
const cart = document.querySelector(".carta");

console.log(triangleTop)

console.log(buttonOpen);

buttonOpen.addEventListener("click", () => {
    triangleTop.classList.add("open");
    cart.classList.add("on");
})

buttonClose.addEventListener("click", () => {
    setTimeout(() => {
        triangleTop.classList.remove("open");
    }, 900);
    cart.classList.remove("on");
})