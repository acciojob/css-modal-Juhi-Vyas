let openBtn = document.getElementById("openModal")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-modal")
let innerModal = document.querySelector(".modal-content")

openBtn.addEventListener("click", () => {
	innerModal.style.display = "block"
})

closeBtn.addEventListener("click", () => {
	innerModal.style.display = "none"
})

window.addEventListener('click', (e) => {   
  if (!modal.contains(e.target)){
	  innerModal.style.display = "none"
  } 
});


