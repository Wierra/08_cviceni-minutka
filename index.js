const budik = document.querySelector(".alarm")
const pocetSekund = prompt("Zadejte počet sekund:")
const stop = document.querySelector("#stop")

stop.addEventListener("click", () => {
    clearTimeout(odpocet)
})

const odpocet = setTimeout(() => {
    budik.classList.add("alarm--ring")
}, pocetSekund * 1000)

//clearTimeout - zrušení časovače