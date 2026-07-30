/* ============================================
   DELTA PUMP - About Page JavaScript
   Stats counter animation + scroll reveal
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ============ ABOUT PAGE STATS COUNTER ============
    const aboutStats = document.querySelectorAll('.about-stat');
    let aboutStatsAnimated = false;

    const animateCounter = (element, target, duration = 2000) => {
        const startTime = performance.now();
        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(easedProgress * target);

            element.textContent = currentValue.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        requestAnimationFrame(update);
    };

    const handleAboutStatsAnimation = () => {
        if (aboutStatsAnimated) return;

        const statsSection = document.querySelector('.about-stats-section');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

        if (isVisible) {
            aboutStatsAnimated = true;
            aboutStats.forEach((stat, index) => {
                const target = parseInt(stat.dataset.target);
                const numberEl = stat.querySelector('.about-stat-number');
                setTimeout(() => {
                    animateCounter(numberEl, target, 2200);
                }, index * 250);
            });
        }
    };

    window.addEventListener('scroll', handleAboutStatsAnimation, { passive: true });
    handleAboutStatsAnimation();


    // ============ TEAM CAROUSEL ============
    const teamTrack = document.getElementById('team-track');
    const teamPrev = document.getElementById('team-prev');
    const teamNext = document.getElementById('team-next');

    if (teamTrack && teamPrev && teamNext) {
        const scrollTeam = (direction) => {
            const card = teamTrack.querySelector('.team-card');
            if (!card) return;
            const gap = parseFloat(getComputedStyle(teamTrack).gap) || 0;
            const step = card.offsetWidth + gap;
            // In RTL, scrolling "forward" means a negative left offset
            const isRTL = document.documentElement.dir === 'rtl';
            teamTrack.scrollBy({
                left: direction * step * (isRTL ? -1 : 1),
                behavior: 'smooth'
            });
        };

        teamNext.addEventListener('click', () => scrollTeam(1));
        teamPrev.addEventListener('click', () => scrollTeam(-1));
    }


    // ============ SCROLL REVEAL FOR ABOUT PAGE ============
    const revealElements = document.querySelectorAll(
        '.about-hero-content, .about-hero-visual, .strip-item, .about-welcome-content, .about-welcome-list, .checklist-item, .licenses-header, .license-card, .distinguish-card, .team-card, .value-card, .about-stat'
    );

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const handleScrollReveal = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.88) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScrollReveal, { passive: true });
    setTimeout(handleScrollReveal, 100);

});
