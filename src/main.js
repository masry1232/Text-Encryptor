import { encrypt } from './core/encryptor.js';
import { decrypt } from './core/decryptor.js';
import { setupCanvas } from './canvas/canvas-init.js';
import { getInputValues, setOutput } from './ui/dom-handler.js';
import { observeSections } from './ui/observer-section.js';
import { attachButtonHover } from './ui/button-effects.js';

window.addEventListener('DOMContentLoaded', () => {
  setupCanvas();
  observeSections();
  attachButtonHover();

  document.getElementById('encryptBtn').addEventListener('click', () => {
    const { message, key } = getInputValues();
    const encrypted = encrypt(message, key);
    setOutput(encrypted);
  });

  document.getElementById('decryptBtn').addEventListener('click', () => {
    const { message, key } = getInputValues();
    const decrypted = decrypt(message, key);
    setOutput(decrypted);
  });
});
