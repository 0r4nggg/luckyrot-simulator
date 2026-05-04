let currentMode = "mythic"; 
let currentLot = "normal"; 
let currentType = "normal"; 
// normal / grande / special

function setMode(mode, e) {
  currentMode = mode;

  const banner = document.getElementById("banner");

  if (currentLot === "normal") {
    if (mode === "mythic") banner.src = "LuckyRot_Mythic.png";
    if (mode === "god") banner.src = "LuckyRot_God.png";
    if (mode === "secret") banner.src = "LuckyRot_Secret.png";
  }

  if (currentLot === "grande") {
    if (mode === "mythic") banner.src = "Grande_Mythic.png";
    if (mode === "god") banner.src = "Grande_God.png";
    if (mode === "secret") banner.src = "Grande_Secret.png";
  }

  document.querySelectorAll(".mode-card").forEach(el => el.classList.remove("active"));
  e.currentTarget.classList.add("active");
} 

function setSpecial(lot, e) {
  currentType = "special";
  currentLot = lot;

  document.querySelectorAll(".lot-card").forEach(el => el.classList.remove("active"));
  e.currentTarget.classList.add("active");

  const banner = document.getElementById("banner");

  if (lot === "pumpkin") banner.src = "Pumpkin_Rot.jpg";
  if (lot === "love") banner.src = "Love_Rot.jpg";
  if (lot === "easter") banner.src = "Easter_Rot.jpg";
}

function setLot(lot, e) {
  currentType = "normal"; 
  currentLot = lot;

  document.querySelectorAll(".lot-card").forEach(el => el.classList.remove("active"));
  e.currentTarget.classList.add("active");
}


const ratesData = {
  normal: {
      mythic: [
      { name: "Gorillo Watermellondrillo", weight: 15 },
      { name: "Bombombini Gusini", weight: 14.8 },
      { name: "Matteo", weight: 14 },
      { name: "Sigma Boy", weight: 14 },
      { name: "Los Spijuniritos", weight: 13 },
      { name: "Ganganzelli Trulala", weight: 12 },
      { name: "Strawberrelli Flamingelli", weight: 7 },
      { name: "To To To Sahur", weight: 5 },
      { name: "Girafa Celeste", weight: 2 },
      { name: "Antoniooo", weight: 2 },
      { name: "Tirilikalika Tirilikaliko", weight: 1 },
      { name: "Los Sigma Boys", weight: 0.2 }
    ],

      god: [
      { name: "Tralalero Tralala", weight: 12 },
      { name: "Odin Din Din Dun", weight: 11 },
      { name: "La Vaca Saturno Saturnita", weight: 11 },
      { name: "Bulbito Bandito Traktorito", weight: 10 },
      { name: "Brri Bicus Dicus", weight: 9 },
      { name: "Bananananito Bandito", weight: 9 },
      { name: "Brr Es Teh Patipum", weight: 8 },
      { name: "Espressona Signora", weight: 8 },
      { name: "Torrtuginni Dragonfrutinni", weight: 6 },
      { name: "Bambini Tankini", weight: 4 },
      { name: "Los Crocodillitos", weight: 3 },
      { name: "Bim Bim Bim Sadim", weight: 3 },
      { name: "Karkerkar Kurkur", weight: 2 },
      { name: "Il Mastodontico Telepiedone", weight: 2 },
      { name: "Malame Amarale", weight: 1 },
      { name: "Belugelo Beluga", weight: 1 }
    ],

      secret: [
      { name: "Piccione Macchina", weight: 28 },
      { name: "Anpali Babel", weight: 25 },
      { name: "Orcalero Orcala", weight: 11.6 },
      { name: "Frogino Assassino", weight: 10 },
      { name: "Ketchuru and Musturu", weight: 7 },
      { name: "Il Sacro Cabrospaghetti", weight: 5 },
      { name: "La Grande Combinacion", weight: 4 },
      { name: "Nooo My Hotspot", weight: 3 },
      { name: "67", weight: 2 },
      { name: "Los Esok Sekolitos", weight: 2 },
      { name: "Ketupat Kepat Prekupat", weight: 1 },
      { name: "Los Garamadungcitos", weight: 1 },
      { name: "W or L", weight: 0.3 },
      { name: "Jisaoba Dashi", weight: 0.1 }
    ]
  },
  
  grande: {
    mythic: [
      { name: "Rhino Toasterino", weight: 50 },
      { name: "Elefantino Frigorifero", weight: 30 },
      { name: "Perochello Lemonchello", weight: 15 },
      { name: "Los Matteos", weight: 5 }
    ],

    god: [
      { name: "Chachechicha", weight: 39 },
      { name: "Trippi Troppi Troppa Trippa", weight: 25 },
      { name: "Agarrini La Palini", weight: 20 },
      { name: "Las Sis", weight: 13 },
      { name: "Missilpython Turbozzo", weight: 2 },
      { name: "Auglurini Arbuzini", weight: 1 }
    ],

    secret: [
      { name: "TrenoStruzzo Turbo 4000", weight: 37.5 },
      { name: "Pirulitoita Bicicleteira", weight: 30 },
      { name: "Pingus Kingus", weight: 18 },
      { name: "Lirili Ralilu", weight: 10 },
      { name: "Shtekerito el Bulbonito", weight: 3.5 },
      { name: "La Crazy Combinacion", weight: 0.8 },
      { name: "Bearini Plammini Guardini", weight: 0.2 }
    ]
  },

  special: {
    pumpkin: [
      { name: "Nooo My Hotspot", weight: 50 },
      { name: "Garamaramadungdung", weight: 25 },
      { name: "La Grande Combinacion", weight: 12 },
      { name: "67", weight: 7 },
      { name: "Ketupat Kepat Prekupat", weight: 5 },
      { name: "Spaghetti Tualetti", weight: 1 }
    ],
  
    love: [
      { name: "Fourteen", weight: 54 },
      { name: "Rosalero", weight: 25 },
      { name: "Lovey Lovey Bear", weight: 12 },
      { name: "Lovelypat", weight: 6 },
      { name: "La Royals", weight: 2.5 },
      { name: "Chocone Dragone", weight: 0.5 }
    ],
  
    easter: [
      { name: "Bun Din Din Dun", weight: 49 },
      { name: "Noo My Eggs", weight: 33 },
      { name: "Carrot Carrot Sahur", weight: 15 },
      { name: "Baskuru and Egguru", weight: 2.5 },
      { name: "La Easter Eggolah", weight: 0.5 }
   ]
  }
};

function draw() {
  let rates;

  if (currentType === "special") {
    rates = ratesData.special[currentLot];
  } else {
    rates = ratesData[currentLot]?.[currentMode];
  }

  if (!rates) return "ERROR";

  const total = rates.reduce((s, r) => s + r.weight, 0);
  const rand = Math.random() * total;

  let sum = 0;
  for (let item of rates) {
    sum += item.weight;
    if (rand < sum) return item.name;
  }
}

function getMutation() {
  if (currentType !== "special") return null;

  if (currentLot === "pumpkin") {
    if (Math.random() < 0.10) return { text: "Halloween", color: "orange" };
  }

  if (currentLot === "love") {
    if (Math.random() < 0.10) return { text: "Love", color: "pink" };
  }

  if (currentLot === "easter") {
    if (Math.random() < 0.15) {
      const variants = [
        { text: "Dreamy", color: "#d8a0ff" },
        { text: "Chocolate", color: "#8B4513" },
        { text: "Love", color: "pink" },
        { text: "Void", color: "#4b0082" },
        { text: "Heaven", color: "#fff4a3" }
      ];
      return variants[Math.floor(Math.random() * variants.length)];
    }
  }

  return null;
}

function singleDraw() {
  showPopup(draw());
}

/* Pop-Up */
function showPopup(name) {
  const img = document.getElementById("popup-img");
  const text = document.getElementById("popup-name");

  img.src = "images/" + name.replace(/ /g, "_") + ".webp";

  const mutation = getMutation();

  if (mutation) {
    text.innerHTML = `
      <span style="color:${mutation.color}; font-weight:bold;">
        ${mutation.text}
      </span><br>
      ${name}
    `;
  } else {
    text.textContent = name;
  }

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
