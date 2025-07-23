const progressBar = document.getElementById('progressBar');
const loader = document.getElementById('loader');
const cmdBody = document.getElementById('cmdBody');
const typeTarget = document.getElementById('typeTarget');

const fullText = `
Microsoft Windows XP [Version 5.1.2600]
(C) Copyright 1985-2001 Microsoft Corp.

C:\\> type intro.txt
Hello! My name is Emma!
Welcome to my Windows XP-inspired website!`;

let progress = 0;
const progressInterval = setInterval(() => {
  progress += 5;
  progressBar.value = progress;
  if (progress >= 100) {
    clearInterval(progressInterval);
    loader.style.display = 'none';
    cmdBody.style.display = 'block';
    typeLine(fullText, 0);
  }
}, 100);

function typeLine(text, index) {
  if (index <= text.length) {
    // Replace newlines with <br> for HTML display
    typeTarget.innerHTML = text
      .slice(0, index)
      .replace(/\n/g, '<br>') + '<span class="blinking-cursor"></span>';
    setTimeout(() => typeLine(text, index + 1), 50); // slower typing speed
  }
}