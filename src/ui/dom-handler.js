export function getInputValues() {
  const message = document.getElementById('message').value;
  const key = document.getElementById('key').value;
  return { message, key };
}

export function setOutput(text) {
  document.getElementById('output').textContent = text;
}
