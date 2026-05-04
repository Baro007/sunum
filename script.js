const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  if (index < 0 || index >= slides.length || index === current) return;
  slides[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  updateProgress();
  animateCounters();
  updateNotes();
}

function nextSlide() { showSlide(current + 1); }
function prevSlide() { showSlide(current - 1); }

function updateProgress() {
  const pct = (current / (slides.length - 1)) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('slide-counter').textContent = (current + 1) + ' / ' + slides.length;
}

function updateNotes() {
  const body = document.getElementById('notes-body');
  if (!body) return;
  const notes = slides[current].dataset.notes || '';
  body.textContent = notes || 'Bu slayt için not eklenmemiş.';
}

function toggleNotes() {
  const panel = document.getElementById('notes-panel');
  if (!panel) return;
  panel.classList.toggle('open');
  panel.setAttribute('aria-hidden', panel.classList.contains('open') ? 'false' : 'true');
}

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); nextSlide(); }
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prevSlide(); }
  if (e.key === 'n' || e.key === 'N') { e.preventDefault(); toggleNotes(); }
  if (e.key === 'Home') { e.preventDefault(); showSlide(0); }
  if (e.key === 'End') { e.preventDefault(); showSlide(slides.length - 1); }
});

let touchX = 0;
document.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].screenX; });
document.addEventListener('touchend', (e) => {
  const d = touchX - e.changedTouches[0].screenX;
  if (Math.abs(d) > 50) d > 0 ? nextSlide() : prevSlide();
});

function animateCounters() {
  slides[current].querySelectorAll('[data-count]').forEach(el => {
    const t = parseInt(el.dataset.count);
    let v = 0;
    const s = Math.max(1, Math.floor(t / 25));
    const i = setInterval(() => { v += s; if (v >= t) { v = t; clearInterval(i); } el.textContent = v; }, 40);
  });
}

function createParticles(id) {
  const c = document.getElementById(id);
  if (!c) return;
  const colors = ['#3b82f6','#06b6d4','#ec4899','#8b5cf6'];
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = 'left:' + Math.random()*100 + '%;top:' + Math.random()*100 + '%;background:' + colors[i%4] + ';animation-delay:' + Math.random()*8 + 's;animation-duration:' + (6+Math.random()*6) + 's;width:' + (2+Math.random()*3) + 'px;height:' + (2+Math.random()*3) + 'px';
    c.appendChild(p);
  }
}

createParticles('particles');
createParticles('particles2');
updateProgress();
updateNotes();
animateCounters();
