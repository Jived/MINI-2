const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");

let score = 0;
let size = 80;
let moveSpeed = 1000;

function moveTarget() {
  const maxX = window.innerWidth - size;
  const maxY = window.innerHeight - size;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}

target.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;

  size = Math.max(30, size - 3);
  target.style.width = `${size}px`;
  target.style.height = `${size}px`;
  moveSpeed = Math.max(300, moveSpeed - 20);

  moveTarget();
});

setInterval(moveTarget, moveSpeed);

moveTarget();