// Enable slider swipe for mobile
const slider = document.getElementById('slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

// Add payment functionality (example using alert)
const buttons = document.querySelectorAll('.get-started');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.getAttribute('data-plan');
    const amount = button.getAttribute('data-amount');
    alert(`Redirecting to payment for plan: ${plan} with amount: ₹${amount}`);
    // You can replace this with Razorpay, Stripe, or Firebase function
  });
});
