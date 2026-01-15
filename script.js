let openBtn = document.getElementById("openModal")
let modal = document.querySelector(".modal")
let modalContent = document.querySelector(".modal-content")
let closeBtn = document.querySelector(".close-modal")

openBtn.addEventListener("click", (e) => {
  e.stopPropagation() 
  modalContent.style.display = "block"
})

closeBtn.addEventListener("click", () => {
  modalContent.style.display = "none"
})

window.addEventListener("click", (e) => {
  if (!modalContent.contains(e.target)) {
    modalContent.style.display = "none"
  }
})



