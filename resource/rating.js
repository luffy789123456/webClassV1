const slider = document.getElementById("rating-slider");
const ratingValue = document.getElementById("rating-value");
const ratingImg = document.getElementById("rating-img");

const ratingImages = [
  "/src/angry.svg",
  "/src/frown.svg",
  "/src/meh.svg",
  "/src/suprise.svg",
  "/src/grin-star.svg",
];

// Load from localStorage if exists
const savedRating = localStorage.getItem("lastRating");
if (savedRating) {
  slider.value = savedRating;
  ratingValue.textContent = parseFloat(savedRating).toFixed(1);
  const index = Math.min(Math.floor(savedRating / 2), ratingImages.length - 1);
  ratingImg.src = ratingImages[index];
}

slider.addEventListener("input", () => {
  const value = parseFloat(slider.value).toFixed(1);
  ratingValue.textContent = value;
  const index = Math.min(Math.floor(value / 2), ratingImages.length - 1);
  ratingImg.src = ratingImages[index];
});

slider.addEventListener("change", () => {
  localStorage.setItem("lastRating", slider.value);
});
