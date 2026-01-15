const openBtn = document.getElementById("openModal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

// Close via button
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Close on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
