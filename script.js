const darkBtn = document.getElementById("darkBtn")
const lightBtn = document.getElementById("lightBtn")
const msg = document.getElementById("msg")

const goDark = () => {
  document.body.style.background = "black"
  document.body.style.color = "chartreuse"
  msg.innerText = "This is DARK mode"
}

const goLight = () => {
  document.body.style.background = "white"
  document.body.style.color = "black"
  msg.innerText = "This is LIGHT mode"
}

darkBtn.addEventListener("click", goDark)

lightBtn.addEventListener("click", goLight)