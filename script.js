// VARIAVEIS DA APLICAÇÃO
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnCookie1 = document.querySelector("#btnCookie1")
const btnReset = document.querySelector("#btnReset")

// EVENTOS
btnCookie1.addEventListener('click', getMessageClick)
btnReset.addEventListener('click', handleResetClick)

// FUNÇÕES
const messages = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de amaldiçoar a esscuridão",
  "Não importa por onde você comece. Só que você comece."
]

function getMessageClick() {
  const randomMessage = Math.floor(Math.random() * messages.length) 
  const drawnMessage = (messages[randomMessage]);
  console.log(drawnMessage)

  toggleScreen()
  screen2.querySelector("p").innerText = drawnMessage
}

function handleResetClick() {
toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
