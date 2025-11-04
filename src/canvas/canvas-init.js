import { initParticles, animateParticles } from './particles.js';

export function setupCanvas() {
  const canvas = document.getElementById('bg-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  initParticles();
  animateParticles(ctx);
}
