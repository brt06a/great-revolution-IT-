// Home canvas animation (simple bouncing ball or icon)
const canvas = document.getElementById('home-icon');
const ctx = canvas.getContext('2d');

let x = 50, y = 50;
let dx = 2, dy = 2;
const radius = 20;

function drawIcon() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Circle icon
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#ff9800';
  ctx.fill();
  ctx.closePath();

  // Animate
  if (x + radius > canvas.width || x - radius < 0) dx = -dx;
  if (y + radius > canvas.height || y - radius < 0) dy = -dy;
  x += dx;
  y += dy;

  requestAnimationFrame(drawIcon);
}

drawIcon();

// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Add sound effect when skill tag is clicked
// Create Audio
const clickSound = new Audio('sound.mp3'); // Add sound.mp3 to your directory

document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('click', () => {
    clickSound.play().catch(() => {}); // Ignore errors if autoplay is blocked
  });
});
