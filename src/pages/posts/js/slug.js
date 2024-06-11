const readMoreBtn = document.getElementById("read-more-btn");
const hiddenContent = document.getElementById("hidden-content");

readMoreBtn.addEventListener("click", () => {
  hiddenContent.classList.toggle("hidden");
  readMoreBtn.style.display = "none";
});
