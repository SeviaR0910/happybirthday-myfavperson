/* ======================================================================
   EDIT ME: the passcode to unlock the site.
   - SECRET_CODE   -> the actual 4-character code visitors must type.
   - STRICT_CODE_CHECK:
       true (default)  = REAL MODE. only the exact SECRET_CODE works —
                          wrong codes show "Password salah" and, after
                          MAX_ATTEMPTS wrong tries, the gate locks for good.
       false           = DEMO MODE. any 4 characters unlocks the site,
                          handy while you're still previewing it yourself.
   - MAX_ATTEMPTS  -> how many wrong tries are allowed before the gate
                       locks permanently (only matters in REAL MODE).
   ====================================================================== */
const SECRET_CODE = "0916"; // change to any 4 characters, e.g. "1207" or "ABCD"
const STRICT_CODE_CHECK = true;
const MAX_ATTEMPTS = 3;

/* ======================================================================
   EDIT ME: the song shown next to the play button.
   The actual audio file is set on the <audio id="bgMusic"> tag in
   index.html — change its src="music/..." to point at your own mp3.
   ====================================================================== */
const SONG_TITLE = "masa kini, nanti, dan masa indah lainnya - Nuca";

/* ======================================================================
   EDIT ME: your Spotify playlist (or album/track) link, shown in the
   "Hold on tight" section after the heart is held to 100%.
   Paste a normal share link, e.g.:
   "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
   Leave it as "" (empty) to show a placeholder instead.
   ====================================================================== */
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/7eKTzlBPSZCJhrzh3fsbdu?si=df2a9d30bf274efb";

/* ======================================================================
   EDIT ME: the big closing message, typed out once the dove has flown
   past at the very end (after all candles are blown out).
   ====================================================================== */
const FINALE_MESSAGE = "All done, i hope you like, and ur wish terkabulkan.";

/* ======================================================================
   EDIT ME: the letter paragraphs (typed out automatically on scroll).
   Add/remove lines here — just make sure the number of <p data-p></p>
   placeholders in index.html's #letterBody matches the number of items here.
   ====================================================================== */
const LETTER_PARAGRAPHS = [
  "first.. i wanna say.. dari sekian banyaknya aku kenal orang, aku beruntung banget bisa kenal kamu, bisa deket sama kamu, n im so0o happyy bisa kenal kamu lebih jauhh, dan ngejalanin hubungan sama kamu sampai sekarang, makasiii yaaa kamu selalu adaa buat aku, mau dengerin cerita cerita akuu, tysm!!",
  "semoga dihari yang spesial ini, banyak wish n hope kamu yang terkabulkann, Amiin. semoga semakin bertambahnya usia kamu, kamu bisa jadi pribadi yang lebih baik dari sebelumnya, dipermudah segala urusan kamu, baik kuliah, ataupun diluar ituu, semoga kamu bisa lulus kuliah dengan nilai terbaik kamu, Amiin, pokoknya aku selalu doain yang terbaik buat kamuu.",
  "thank you for being into my life, hunn. ngl, im soooo veryy veryyy happyy semenjak kenal kamu, like kehadiran kamu tuh kayaa punya caraa sendiri buat bikin yang tadinya hari-hari aku biasa ajaa jadi kerasa lebih seneng, spesial (kaya martabak), walaupun kamu aga plenger, ngeselin, rusuh, gajelas, asbun TAPII ITUUU YANGG BIKINN HIDUPP AKUUU JADI ASIKKK, intinyaaa im so0o veryy luckyy to0oo meet yo0uu, i loveee youu, ever, ever, n everr, babe.",
  "and the last onee, jangan lupaa buat berterima kasih sama diri kamu sendiri yang udah bertahan sejauh inii, yang uda ngelewatin berbagai cobaan yang susah, yang bikin kamu mau nyerah sama dunia, tapi kamu tetep kuat buat lewatin semua ituu, im so proud of youu sayangg. makasii jugaa yaa, di tengah tengah kesibukan kamu yang ngerjain laprak sampai malam, tugas kuliah, banyaknya materi kuliah, ini itu, kamu masi sempet buat chattan sama aku, ngabarin aku, pokoknya ngga ngebiarin aku feeling lonely, emang dulu aku salah.. aku selalu berpikir negatif ke kamu... aku kaya egois... aku yang pengannya selalu chattan terus sama kamu... aku yang engga ngertiin kamu kalau kamu juga sibuk... im soo sorry for that... :( , and however you spend today, i just hopee ur surrounded by people who love u just as much as i do, if not more. semogaa hari inii penuh sama orang-orang yang tulus sayang sama kamu dan bikin kamu ngerasa dicintai. HAPPYYYY BIRTHDAYYY, MYYY FAVORITEE PERSONNN, i loo00oveee youuu, stayy with mee foreverr n everr n everr n everrrrr."
];

/* ============ Ambient background: stars + bubbles + shooting stars ============ */
(function () {
  const bg = document.getElementById('bg');
  const starCount = 110;
  for (let i = 0; i < starCount; i++) {
    const s = document.createElement('div');
    const isSparkle = Math.random() < 0.16; // ~16% render as little 4-point sparkles
    s.className = isSparkle ? 'star star-sparkle' : 'star';
    const size = isSparkle ? (2.4 + Math.random() * 1.8) : (Math.random() * 2 + 0.6);
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top = Math.random() * 100 + 'vh';
    s.style.animationDuration = (2 + Math.random() * 3.5) + 's';
    s.style.animationDelay = (Math.random() * 4) + 's';
    bg.appendChild(s);
  }
  const bubbleCount = 22;
  for (let i = 0; i < bubbleCount; i++) {
    const b = document.createElement('div');
    b.className = 'bubble';
    const size = 4 + Math.random() * 14;
    b.style.width = size + 'px';
    b.style.height = size + 'px';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.animationDuration = (10 + Math.random() * 14) + 's';
    b.style.animationDelay = (Math.random() * 14) + 's';
    bg.appendChild(b);
  }
  const shootingStarCount = 6;
  for (let i = 0; i < shootingStarCount; i++) {
    const sh = document.createElement('div');
    sh.className = 'shooting-star';
    sh.style.top = (Math.random() * 45) + 'vh';
    sh.style.left = (Math.random() * 65) + 'vw';
    sh.style.animationDuration = (7 + Math.random() * 9) + 's';
    sh.style.animationDelay = (Math.random() * 18) + 's';
    bg.appendChild(sh);
  }
})();

/* ============ Passcode gate ============ */
(function () {
  const boxes = Array.from(document.querySelectorAll('.code-box'));
  const row = document.getElementById('codeRow');
  const gate = document.getElementById('gate');
  const submitBtn = document.getElementById('submitCode');
  const gateError = document.getElementById('gateError');
  const gateHint = document.getElementById('gateHint');

  let wrongAttempts = 0;
  let lockedOut = false;

  boxes.forEach((box, idx) => {
    box.addEventListener('input', () => {
      box.value = box.value.replace(/[^0-9a-zA-Z]/g, '');
      if (box.value && idx < boxes.length - 1) {
        boxes[idx + 1].focus();
      } else if (box.value && idx === boxes.length - 1) {
        // last digit just typed in — auto-check the code, no button press needed
        setTimeout(tryUnlock, 120);
      }
    });
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !box.value && idx > 0) boxes[idx - 1].focus();
      if (e.key === 'Enter') tryUnlock();
    });
  });

  function tryUnlock() {
    if (lockedOut) return;
    const code = boxes.map(b => b.value).join('');
    if (code.length < 4) return;
    const isCorrect = STRICT_CODE_CHECK ? (code === SECRET_CODE) : (code.length === 4);
    if (isCorrect) {
      unlock();
    } else {
      wrongAttempts++;
      row.classList.remove('shake'); void row.offsetWidth; row.classList.add('shake');

      if (wrongAttempts >= MAX_ATTEMPTS) {
        lockOut();
      } else {
        const left = MAX_ATTEMPTS - wrongAttempts;
        gateError.textContent = `Password salah. Sisa percobaan: ${left}.`;
        setTimeout(() => {
          boxes.forEach(b => b.value = '');
          boxes[0].focus();
        }, 350);
      }
    }
  }
  submitBtn.addEventListener('click', tryUnlock);

  function lockOut() {
    lockedOut = true;
    boxes.forEach(b => { b.value = ''; b.disabled = true; });
    submitBtn.disabled = true;
    gateError.classList.add('locked');
    gateError.textContent = 'Kehabisan percobaan. Coba tanya ke orang yang bikin ini ya.';
    if (gateHint) gateHint.style.display = 'none';
  }

  function unlock() {
    gate.classList.add('hidden');
    document.body.classList.remove('locked');
    document.getElementById('depth').classList.add('show');
    document.getElementById('rail').classList.add('show');
    startMusicOnUnlock();
  }
})();

/* ============ Music player ============ */
let startMusicOnUnlock = function () {}; // reassigned below, called from the gate on unlock
(function () {
  const audio = document.getElementById('bgMusic');
  const player = document.getElementById('player');
  const btn = document.getElementById('playerBtn');
  const titleEl = document.getElementById('songTitle');
  titleEl.textContent = SONG_TITLE;

  function setPlaying(isPlaying) {
    player.classList.toggle('playing', isPlaying);
    btn.setAttribute('aria-label', isPlaying ? 'Pause music' : 'Play music');
  }

  btn.addEventListener('click', () => {
    player.classList.remove('show-hint');
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  });

  audio.addEventListener('ended', () => setPlaying(!audio.loop && false));

  startMusicOnUnlock = function () {
    // the player only appears once the site is unlocked
    player.classList.add('ready');
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };
})();

/* ============ Nav active state + scroll progress ============ */
(function () {
  const sections = Array.from(document.querySelectorAll('main section'));
  const navLinks = Array.from(document.querySelectorAll('nav a'));
  const railFill = document.getElementById('rail-fill');
  const railNum = document.getElementById('rail-num');
  const depthEl = document.getElementById('depth');

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const pct = Math.min(1, Math.max(0, scrollTop / docHeight));
    railFill.style.height = (pct * 100) + '%';
    railNum.textContent = String(Math.round(pct * 100)).padStart(2, '0');
    depthEl.textContent = Math.round(pct * 180) + ' M BELOW SURFACE';

    let current = sections[0];
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4) current = sec;
    }
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current.id);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ============ Scroll reveal (chapters, gallery cards, wish cards) ============ */
(function () {
  const targets = document.querySelectorAll('[data-chapter], .g-card, [data-wish]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); }
    });
  }, { threshold: 0.2 });
  targets.forEach(t => io.observe(t));
})();

/* ============ Gallery lightbox (tap a photo to view it full-screen) ============ */
(function () {
  const cards = Array.from(document.querySelectorAll('#galleryGrid .g-card'));
  const lightbox = document.getElementById('lightbox');
  const imgEl = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const countEl = document.getElementById('lightboxCount');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  let index = 0;

  const photos = cards.map(card => ({
    src: card.querySelector('.g-photo').src,
    caption: card.querySelector('.g-caption').textContent
  }));

  function render() {
    const p = photos[index];
    imgEl.src = p.src;
    captionEl.textContent = p.caption;
    countEl.textContent = `${index + 1} / ${photos.length}`;
  }
  function open(i) {
    index = i;
    render();
    lightbox.classList.add('open');
    document.body.classList.add('locked');
  }
  function close() {
    lightbox.classList.remove('open');
    document.body.classList.remove('locked');
  }
  function go(delta) {
    index = (index + delta + photos.length) % photos.length;
    render();
  }

  cards.forEach((card, i) => card.addEventListener('click', () => open(i)));
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  });
})();

/* ============ Letter: tap the bottle to reveal it, then type it out ============ */
(function () {
  const bottleStage = document.getElementById('bottleStage');
  const letterCard = document.getElementById('letterCard');
  const container = document.getElementById('letterBody');
  const pEls = Array.from(container.querySelectorAll('[data-p]'));
  let opened = false;

  function typeParagraph(el, text, onDone) {
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'type-cursor';
    el.appendChild(document.createTextNode(''));
    el.appendChild(cursor);
    const interval = setInterval(() => {
      if (i < text.length) {
        cursor.insertAdjacentText('beforebegin', text[i]);
        i++;
      } else {
        clearInterval(interval);
        cursor.remove();
        if (onDone) onDone();
      }
    }, 14);
  }

  function runSequence(idx) {
    if (idx >= pEls.length || idx >= LETTER_PARAGRAPHS.length) return;
    typeParagraph(pEls[idx], LETTER_PARAGRAPHS[idx], () => runSequence(idx + 1));
  }

  bottleStage.addEventListener('click', () => {
    if (opened) return;
    opened = true;
    bottleStage.classList.add('hidden-away');
    letterCard.classList.add('open');
    runSequence(0);
  });
})();

/* ============ Love: hold the heart to 100% to reveal the playlist ============ */
(function () {
  const loveStage = document.getElementById('loveStage');
  const heartHold = document.getElementById('heartHold');
  const ringFill = document.getElementById('heartRingFill');
  const clipRect = document.getElementById('heartClipRect');
  const percentEl = document.getElementById('heartPercent');
  const spotifyCard = document.getElementById('spotifyCard');

  const HOLD_MS = 1800;   // how long you must hold to reach 100%
  const DECAY_MS = 900;   // how fast it drops back to 0 if released early
  const RADIUS = 62;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  ringFill.style.strokeDasharray = String(CIRCUMFERENCE);
  ringFill.style.strokeDashoffset = String(CIRCUMFERENCE);

  let progress = 0;
  let holding = false;
  let opened = false;
  let loopRunning = false;
  let lastTs = null;

  function render() {
    ringFill.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - progress / 100));
    const h = 90 * (progress / 100);
    clipRect.setAttribute('y', String(90 - h));
    clipRect.setAttribute('height', String(h));
    percentEl.textContent = Math.round(progress) + '%';
  }

  function tick(ts) {
    if (opened) { loopRunning = false; return; }
    if (lastTs == null) lastTs = ts;
    const dt = ts - lastTs;
    lastTs = ts;

    if (holding) {
      progress = Math.min(100, progress + (dt / HOLD_MS) * 100);
    } else if (progress > 0) {
      progress = Math.max(0, progress - (dt / DECAY_MS) * 100);
    }
    render();

    if (progress >= 100) {
      opened = true;
      heartHold.classList.add('complete');
      loopRunning = false;
      setTimeout(openLove, 300);
      return;
    }
    if (holding || progress > 0) {
      requestAnimationFrame(tick);
    } else {
      loopRunning = false;
      lastTs = null;
    }
  }

  function startLoop() {
    if (!loopRunning) {
      loopRunning = true;
      lastTs = null;
      requestAnimationFrame(tick);
    }
  }

  function openLove() {
    loveStage.classList.add('hidden-away');
    spotifyCard.classList.add('open');
  }

  function start(e) {
    if (opened) return;
    e.preventDefault();
    holding = true;
    heartHold.classList.add('holding');
    startLoop();
  }
  function stop() {
    holding = false;
    heartHold.classList.remove('holding');
  }

  heartHold.addEventListener('pointerdown', start);
  heartHold.addEventListener('pointerup', stop);
  heartHold.addEventListener('pointerleave', stop);
  heartHold.addEventListener('pointercancel', stop);
})();

/* ============ Spotify embed wiring ============ */
(function () {
  const iframe = document.getElementById('spotifyIframe');
  const openLink = document.getElementById('spotifyOpenLink');
  const placeholder = document.getElementById('spotifyPlaceholder');

  if (SPOTIFY_PLAYLIST_URL) {
    try {
      const url = new URL(SPOTIFY_PLAYLIST_URL);
      iframe.src = 'https://open.spotify.com/embed' + url.pathname + '?utm_source=generator';
      openLink.href = SPOTIFY_PLAYLIST_URL;
      iframe.style.display = 'block';
      placeholder.style.display = 'none';
    } catch (e) {
      iframe.style.display = 'none';
      placeholder.style.display = 'block';
    }
  } else {
    iframe.style.display = 'none';
    placeholder.style.display = 'block';
    openLink.style.pointerEvents = 'none';
    openLink.style.opacity = '0.4';
  }
})();

/* ============ Candles: blow to reveal wish, then the finale ============ */
(function () {
  const candles = Array.from(document.querySelectorAll('[data-candle]'));
  const wishGranted = document.getElementById('wishGranted');
  const birds = Array.from(document.querySelectorAll('.bird'));
  const finaleMessage = document.getElementById('finaleMessage');
  const finaleText = document.getElementById('finaleText');
  let blownCount = 0;

  // the dove's wing-flap is a pure-CSS sprite animation (see .bird-sprite /
  // @keyframes bird-flap in style.css) — nothing to drive from JS here,
  // we just wait for the flight path animation ("fly-1") to finish.

  function typeFinaleMessage() {
    finaleMessage.classList.add('show');
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'type-cursor';
    finaleText.appendChild(cursor);
    const interval = setInterval(() => {
      if (i < FINALE_MESSAGE.length) {
        cursor.insertAdjacentText('beforebegin', FINALE_MESSAGE[i]);
        i++;
      } else {
        clearInterval(interval);
        cursor.remove();
      }
    }, 45);
  }

  candles.forEach(c => {
    c.addEventListener('click', () => {
      if (c.classList.contains('out')) return;
      c.classList.add('out');
      blownCount++;
      if (blownCount === candles.length) {
        setTimeout(() => wishGranted.classList.add('show'), 400);
        setTimeout(() => {
          const dove = birds[0];
          if (dove) {
            dove.addEventListener('animationend', (e) => {
              if (e.animationName !== 'bird-fly-1') return; // ignore the wing-flap sprite's own animation events
              typeFinaleMessage();
            }, { once: true });
          }
          birds.forEach(b => b.classList.add(b.dataset.flyClass));
          document.body.classList.add('closing-blur');
        }, 1400);
      }
    });
  });
})();
