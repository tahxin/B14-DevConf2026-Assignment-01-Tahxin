const menuButton = document.querySelector('.menu-toggle');
const navPanel = document.querySelector('.nav-panel');
menuButton?.addEventListener('click', () => {
  const isOpen = navPanel.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('.sr-only').textContent = isOpen ? 'Close menu' : 'Open menu';
});
document.querySelectorAll('.nav-panel a').forEach((link) => link.addEventListener('click', () => {
  navPanel.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('.subscribe-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email;
  const message = form.querySelector('.form-message');
  if (!email.validity.valid) { message.textContent = 'Enter a valid email address to subscribe.'; email.focus(); return; }
  message.textContent = `You’re on the list — updates will go to ${email.value}.`;
  form.reset();
});
