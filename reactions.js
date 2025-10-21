const likeBtn = document.getElementById("like");
const coolBtn = document.getElementById("cool");
const thinkBtn = document.getElementById("thinking");

const likeCount = document.getElementById("like-count");
const coolCount = document.getElementById("cool-count");
const thinkCount = document.getElementById("think-count");

// Charger les anciens scores depuis la mémoire locale
likeCount.textContent = localStorage.getItem("likeCount") || 0;
coolCount.textContent = localStorage.getItem("coolCount") || 0;
thinkCount.textContent = localStorage.getItem("thinkCount") || 0;

// Fonctions de réaction
likeBtn.addEventListener("click", () => {
  let count = parseInt(likeCount.textContent) + 1;
  likeCount.textContent = count;
  localStorage.setItem("likeCount", count);
});

coolBtn.addEventListener("click", () => {
  let count = parseInt(coolCount.textContent) + 1;
  coolCount.textContent = count;
  localStorage.setItem("coolCount", count);
});

thinkBtn.addEventListener("click", () => {
  let count = parseInt(thinkCount.textContent) + 1;
  thinkCount.textContent = count;
  localStorage.setItem("thinkCount", count);
});