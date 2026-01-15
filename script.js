let openBtn = document.getElementById("openModal")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-modal")

openBtn.addEventListener("click", () => {
  modal.classList.add("active")
})

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active")
})

modal.addEventListener("click", (e) => {
	if(e.target === modal){
		modal.classList.remove("active")
	}
})



