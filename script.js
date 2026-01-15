let openBtn = document.getElementById("openModal")
let modal = document.querySelector(".modal")
// let modalContent = document.querySelector(".modal-content")
let closeBtn = document.querySelector(".close-modal")

openBtn.addEventListener("click", (e) => {
  e.stopPropagation() 
  modal.style.display = "block"
})

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

window.addEventListener("click", (e) => {
  if (!modal.contains(e.target)) {
    modal.style.display = "none"
  }
})



