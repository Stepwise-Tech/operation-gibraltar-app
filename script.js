// Roman-inspired rank names
const romanRanks = ["Miles", "Centurio", "Tribunus", "Legatus", "Imperator"];

// Sample data for U20 and O20
const u20Data = [
  {
    name: "Bn De Su",
    age: 23,
    coins: 35,
    rank: 1,
    level: "Imperator",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Da Da",
    age: 23,
    coins: 30,
    rank: 2,
    level: "Legatus",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Aa Na",
    age: 24,
    coins: 25,
    rank: 3,
    level: "Tribunus",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ai Ma",
    age: 25,
    coins: 20,
    rank: 4,
    level: "Centurio",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ge Lu Sc",
    age: 25,
    coins: 18,
    rank: 5,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Gl Ni",
    age: 25,
    coins: 17,
    rank: 6,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Li Cs",
    age: 25,
    coins: 15,
    rank: 7,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Mi Su",
    age: 26,
    coins: 14,
    rank: 8,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Oi Dn",
    age: 26,
    coins: 13,
    rank: 9,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "An Ml",
    age: 26,
    coins: 12,
    rank: 10,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Pe Ia Sc",
    age: 27,
    coins: 10,
    rank: 11,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "To Mi",
    age: 27,
    coins: 9,
    rank: 12,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ko Na",
    age: 27,
    coins: 8,
    rank: 13,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Mi Al Sa",
    age: 28,
    coins: 7,
    rank: 14,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Da Ro",
    age: 28,
    coins: 6,
    rank: 15,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ed Ni",
    age: 28,
    coins: 5,
    rank: 16,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "An Co",
    age: 28,
    coins: 4,
    rank: 17,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "An Tu",
    age: 28,
    coins: 3,
    rank: 18,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Vi An Sa",
    age: 29,
    coins: 2,
    rank: 19,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ma Di",
    age: 29,
    coins: 1,
    rank: 20,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
];

const o20Data = [
  {
    name: "Di Oa",
    age: 11,
    coins: 48,
    rank: 1,
    level: "Imperator",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Adelin Nu",
    age: 11,
    coins: 42,
    rank: 2,
    level: "Legatus",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "El At",
    age: 12,
    coins: 32,
    rank: 4,
    level: "Centurio",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Li Oa",
    age: 12,
    coins: 28,
    rank: 5,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Sa Vi",
    age: 14,
    coins: 26,
    rank: 6,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ru Mu",
    age: 14,
    coins: 24,
    rank: 7,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ai Da",
    age: 14,
    coins: 23,
    rank: 8,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Al Ot",
    age: 14,
    coins: 20,
    rank: 9,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "La Ca",
    age: 14,
    coins: 19,
    rank: 10,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Dr La",
    age: 14,
    coins: 18,
    rank: 11,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Al Ce",
    age: 15,
    coins: 16,
    rank: 12,
    level: "Miles",
    gender: "Male",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "El Et Ma",
    age: 15,
    coins: 15,
    rank: 13,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Dn Dn",
    age: 15,
    coins: 14,
    rank: 14,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ho Nu",
    age: 15,
    coins: 13,
    rank: 15,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Br La",
    age: 16,
    coins: 12,
    rank: 16,
    level: "Miles",
    gender: "Female",
    image: "https://via.placeholder.com/100",
  },
];

// Function to display ranking data
function displayRanking(data, elementId) {
  const listElement = document.getElementById(elementId);
  data.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.className = "rank-item";
    listItem.innerHTML = `
          <span class="rank-name" onclick="showModal('${person.name}', '${person.image}', ${person.rank}, '${person.level}', ${person.coins})">${person.name}</span>
          <span class="rank-coins">${person.coins} <img src="coin.png" class="coin-icon" alt="Coins"></span>
        `;
    listElement.appendChild(listItem);
  });
}

// Function to show modal
function showModal(name, image, rank, level, coins) {
  document.getElementById("modal-name").innerText = name;
  document.getElementById("modal-img").src = image;
  document.getElementById("modal-rank").innerText = rank;
  document.getElementById("modal-level").innerText = level;
  document.getElementById("modal-coins").innerText = coins;
  document.getElementById("profileModal").style.display = "block";
}

// Function to close modal
function closeModal() {
  document.getElementById("profileModal").style.display = "none";
}

// Initializing the display
displayRanking(u20Data, "u20-rank-list");
displayRanking(o20Data, "o20-rank-list");
