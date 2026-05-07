// Contagem regressiva para 21 de maio
function updateCountdown() {
  const now = new Date();
  const currentYear = now.getFullYear();

  let birthday = new Date(currentYear, 4, 21, 0, 0, 0); // mês 4 = maio (0-indexed)

  // Se já passou este ano, conta para o próximo
  if (now >= birthday) {
    // Verifica se é exatamente hoje
    const isToday =
      now.getDate() === 21 &&
      now.getMonth() === 4 &&
      now.getFullYear() === currentYear;

    if (isToday) {
      document.getElementById('countdown').style.display = 'none';
      document.getElementById('birthday-msg').style.display = 'block';
      launchConfetti();
      return;
    }

    birthday = new Date(currentYear + 1, 4, 21, 0, 0, 0);
  }

  const diff = birthday - now;

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent    = String(days).padStart(2, '0');
  document.getElementById('hours').textContent   = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Partículas flutuantes
const emojis = ['🌸', '💗', '✨', '🌷', '💕', '🌺', '💖'];
const container = document.getElementById('particles');

function createParticle() {
  const el = document.createElement('div');
  el.classList.add('particle');
  el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (0.7 + Math.random() * 1.2) + 'rem';
  const duration = 8 + Math.random() * 10;
  el.style.animationDuration = duration + 's';
  el.style.animationDelay = Math.random() * 5 + 's';
  container.appendChild(el);

  setTimeout(() => el.remove(), (duration + 5) * 1000);
}

// Cria partículas periodicamente
for (let i = 0; i < 15; i++) createParticle();
setInterval(createParticle, 1200);

// Estrelas caindo
function createStar() {
  const el = document.createElement('div');
  el.classList.add('star');
  el.textContent = '⭐';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.top = '-5vh';
  el.style.fontSize = (0.6 + Math.random() * 0.9) + 'rem';
  const duration = 4 + Math.random() * 5;
  el.style.animationDuration = duration + 's';
  container.appendChild(el);

  setTimeout(() => el.remove(), duration * 1000 + 200);
}

// Cria estrelas periodicamente
for (let i = 0; i < 25; i++) {
  setTimeout(createStar, Math.random() * 3000);
}
setInterval(createStar, 600);

// Confetti simples para o dia do aniversário
function launchConfetti() {
  const colors = ['#e8a0b0', '#f5d0da', '#fde8ee', '#f9d6e3', '#ffffff'];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed;
      width: ${4 + Math.random() * 6}px;
      height: ${4 + Math.random() * 6}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      left: ${Math.random() * 100}vw;
      top: -10px;
      z-index: 9999;
      animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes confettiFall {
      to { transform: translateY(110vh) rotate(720deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}
