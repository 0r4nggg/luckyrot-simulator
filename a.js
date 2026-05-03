let currentMode = "mythic";

function setMode(mode, e) {
  currentMode = mode;

  const banner = document.getElementById("banner");
  if (mode === "mythic") banner.src = "LuckyRot_Mythic.png";
  if (mode === "god") banner.src = "LuckyRot_God.png";
  if (mode === "secret") banner.src = "LuckyRot_Secret.png";

  document.querySelectorAll(".mode-card").forEach(el => el.classList.remove("active"));
  e.currentTarget.classList.add("active");
}

const ratesData = {
  mythic: [/* omit */],
  god: [/* omit */],
  secret: [/* omit */]
};

function draw() {
  const rates = ratesData[currentMode];
  const total = rates.reduce((s, r) => s + r.weight, 0);
  const rand = Math.random() * total;

  let sum = 0;
  for (let item of rates) {
    sum += item.weight;
    if (rand < sum) return item.name;
  }
}

function singleDraw() {
  showPopup(draw());
}

/* Pop-Up */
function showPopup(name) {
  const img = document.getElementById("popup-img");
  const text = document.getElementById("popup-name");

  img.src = "images/" + name.replace(/ /g, "_") + ".webp";
  text.textContent = name;

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}}
