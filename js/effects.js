/* ==========================================================================
   ReederDevelopments — Interactive Futuristic Engine (effects.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initCustomCursor();
    initParticleNetwork();
    initSpotlightAndTilt();
    initScrollReveal();
    initHeroCommandCenter();
    initMobileMenu();
    initCounters();
    initInteractiveArchitect();
});

/* 1. Top Scroll Progress Bar */
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = `${pct}%`;
    }, { passive: true });
}

/* 2. Custom Glowing Cursor */
function initCustomCursor() {
    const glow = document.getElementById('cursor-glow');
    const dot = document.getElementById('cursor-dot');
    if (!glow || !dot || window.matchMedia('(pointer: coarse)').matches) {
        if (glow) glow.style.display = 'none';
        if (dot) dot.style.display = 'none';
        return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    }, { passive: true });

    function renderCursor() {
        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;
        glow.style.left = `${glowX}px`;
        glow.style.top = `${glowY}px`;
        requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    document.querySelectorAll('a, button, .interactive-el').forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.style.transform = 'translate(-50%, -50%) scale(2.4)';
            dot.style.background = '#10b981';
        });
        el.addEventListener('mouseleave', () => {
            dot.style.transform = 'translate(-50%, -50%) scale(1)';
            dot.style.background = '#38bdf8';
        });
    });
}

/* 3. Interactive Data Constellation Canvas */
function initParticleNetwork() {
    const canvas = document.getElementById('cyber-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const count = Math.min(65, Math.floor((width * height) / 22000));
    const mouse = { x: null, y: null, radius: 160 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const colors = ['#38bdf8', '#1e6be6', '#10b981', '#8b5cf6'];

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.55,
            vy: (Math.random() - 0.5) * 0.55,
            size: Math.random() * 2 + 1,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            // Draw node
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.65;
            ctx.fill();

            // Connect nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 135) {
                    ctx.beginPath();
                    ctx.strokeStyle = '#38bdf8';
                    ctx.globalAlpha = (1 - dist / 135) * 0.16;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }

            // Connect to mouse
            if (mouse.x !== null && mouse.y !== null) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    ctx.beginPath();
                    ctx.strokeStyle = '#00f2fe';
                    ctx.globalAlpha = (1 - dist / mouse.radius) * 0.45;
                    ctx.lineWidth = 1.2;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

/* 4. 3D Tilt & Spotlight Hover Effect */
function initSpotlightAndTilt() {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            if (card.classList.contains('tilt-card') && window.innerWidth >= 768) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            if (card.classList.contains('tilt-card')) {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            }
        });
    });
}

/* 5. Scroll Reveal Animations */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
}

/* 6. Interactive Hero Command Center */
function initHeroCommandCenter() {
    const tabs = document.querySelectorAll('.cmd-tab');
    const panels = document.querySelectorAll('.cmd-panel');
    if (!tabs.length) return;

    let currentIndex = 0;
    let autoTimer = null;

    function activateTab(idx) {
        currentIndex = idx;
        tabs.forEach((t, i) => {
            if (i === idx) {
                t.classList.add('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/50', 'shadow-lg');
                t.classList.remove('text-slate-400', 'border-slate-800');
            } else {
                t.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/50', 'shadow-lg');
                t.classList.add('text-slate-400', 'border-slate-800');
            }
        });

        panels.forEach((p, i) => {
            if (i === idx) {
                p.classList.remove('hidden');
                p.classList.add('animate-fadeIn');
            } else {
                p.classList.add('hidden');
            }
        });
    }

    tabs.forEach((tab, idx) => {
        tab.addEventListener('click', () => {
            activateTab(idx);
            clearInterval(autoTimer);
            startAutoCycle();
        });
    });

    function startAutoCycle() {
        autoTimer = setInterval(() => {
            const next = (currentIndex + 1) % tabs.length;
            activateTab(next);
        }, 5500);
    }

    startAutoCycle();
}

/* 7. Mobile Menu Toggle */
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileBtn || !mobileMenu || mobileBtn.dataset.bound === 'true') return;
    mobileBtn.dataset.bound = 'true';

    mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
}

/* 8. Animated Metric Counters */
function initCounters() {
    const counters = document.querySelectorAll('.counter-val');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                let count = 0;
                const step = Math.max(1, Math.ceil(target / 45));
                const timer = setInterval(() => {
                    count += step;
                    if (count >= target) {
                        el.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        el.textContent = count + suffix;
                    }
                }, 28);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));
}

/* 9. Interactive Solution Architect / Quote Configurator */
function initInteractiveArchitect() {
    const chips = document.querySelectorAll('.arch-chip');
    const summaryEl = document.getElementById('arch-summary');
    const stackEl = document.getElementById('arch-stack');
    const waLink = document.getElementById('arch-wa-btn');
    const mailLink = document.getElementById('arch-mail-btn');

    if (!chips.length || !summaryEl) return;

    const selected = new Set(['Web & UI Design']);

    function updateArchitect() {
        const items = Array.from(selected);
        if (items.length === 0) {
            summaryEl.textContent = 'Select one or more modules above to generate a tailored technical blueprint & direct inquiry.';
            stackEl.innerHTML = '<span class="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-400">Awaiting selection...</span>';
            return;
        }

        summaryEl.textContent = `Custom ${items.join(' + ')} architecture engineered directly 1-on-1 with ReederDevelopments.`;

        const stackMap = {
            'Data Engineering & BI': ['SQL', 'Google Cloud (GCP)', 'Jasper Reports', 'BI Dashboards'],
            'Web & UI Design': ['HTML5 / Tailwind', 'Futuristic Motion UI', 'Cloud Hosting', 'SEO Ready'],
            'Flutter Android App': ['Flutter', 'Dart', 'Google Play Release', 'Firebase / REST'],
            'PC Software (Go/Wails)': ['Golang', 'Wails Native UI', 'Cross-Platform EXE', 'Low Memory Footprint'],
            'Tech & Process Consulting': ['Process Automation', 'Database Architecture', 'System Audits']
        };

        const techSet = new Set();
        items.forEach(item => {
            (stackMap[item] || []).forEach(t => techSet.add(t));
        });

        stackEl.innerHTML = Array.from(techSet)
            .map(t => `<span class="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium">${t}</span>`)
            .join('');

        const msg = encodeURIComponent(`Hi ReederDevelopments! I'd like to discuss a project involving: ${items.join(', ')}.`);
        if (waLink) waLink.href = `https://wa.me/27742625644?text=${msg}`;
        if (mailLink) mailLink.href = `mailto:reederdevelopments@gmail.com?subject=${encodeURIComponent('Project Inquiry: ' + items.join(', '))}&body=${msg}`;
    }

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const val = chip.getAttribute('data-service');
            if (selected.has(val)) {
                selected.delete(val);
                chip.classList.remove('bg-cyan-500/20', 'border-cyan-400', 'text-white', 'shadow-[0_0_20px_rgba(14,165,233,0.3)]');
                chip.classList.add('bg-slate-900/80', 'border-slate-800', 'text-slate-400');
            } else {
                selected.add(val);
                chip.classList.add('bg-cyan-500/20', 'border-cyan-400', 'text-white', 'shadow-[0_0_20px_rgba(14,165,233,0.3)]');
                chip.classList.remove('bg-slate-900/80', 'border-slate-800', 'text-slate-400');
            }
            updateArchitect();
        });
    });

    updateArchitect();
}
