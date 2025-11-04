export function attachButtonHover() {
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('pulse');
    });
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('pulse');
    });
  });
}
