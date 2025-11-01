const circle = document.getElementById("circle");
const scoreDisplay = document.getElementById("score");
let score = 0;

circle.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  // Move circle to a random position
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 200);
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  // Random color for fun
  circle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
});
