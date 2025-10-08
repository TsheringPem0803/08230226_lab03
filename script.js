// === Dynamic Greeting ===
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
if (hour < 12) {
  greeting.textContent = "Good Morning, Tshering Pem";
} else if (hour < 18) {
  greeting.textContent = "Good Afternoon, Tshering Pem";
} else {
  greeting.textContent = "Good Evening, Tshering Pem";
}

// === Theme Toggle ===
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// === Contact Form Handling ===
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name && email && message) {
    formStatus.textContent = "✅ Thank you for reaching out, " + name + "!";
    formStatus.style.color = "green";
    form.reset();
  } else {
    formStatus.textContent = "❌ Please fill out all fields.";
    formStatus.style.color = "red";
  }
});

// === Smooth Scroll Highlight Navigation ===
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
