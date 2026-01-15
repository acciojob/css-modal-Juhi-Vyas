let openBtn = document.getElementById("openModal")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-modal")

openBtn.addEventListener("click", () => {
  modal.style.display = "block"
})

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

modal.addEventListener("click", (e) => {
	if(e.target === modal){
		modal.style.display = "none"
	}
})



