/* ============================================
   DELTA PUMP - Gallery Page
   Category filtering, image lightbox, Facebook
   reel player and before/after comparison.
   ============================================ */

(() => {
    'use strict';

    const STEP = 9; // how many photos to reveal per click

    const grid = document.getElementById('gallery-grid');
    const filtersBar = document.getElementById('gallery-filters');
    const moreBtn = document.getElementById('gallery-more');
    if (!grid) return;

    const items = Array.from(grid.querySelectorAll('.gallery-item'));
    const isEn = () => document.body.classList.contains('lang-en');
    const label = (el) => (isEn() ? el.dataset.en : el.dataset.ar) || '';

    let currentFilter = 'all';
    let shown = STEP;

    /* ---------- filtering + progressive reveal ---------- */
    const matching = () =>
        items.filter((el) => currentFilter === 'all' || el.dataset.cat === currentFilter);

    const render = () => {
        const list = matching();
        items.forEach((el) => el.classList.add('is-hidden'));
        list.slice(0, shown).forEach((el) => el.classList.remove('is-hidden'));
        moreBtn.classList.toggle('is-hidden', shown >= list.length);
    };

    filtersBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.gallery-filter');
        if (!btn) return;
        filtersBar.querySelectorAll('.gallery-filter').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        shown = STEP;
        render();
    });

    moreBtn.addEventListener('click', () => {
        shown += STEP;
        render();
    });

    render();

    /* ---------- lightbox ---------- */
    const box = document.getElementById('gallery-lightbox');
    const stage = document.getElementById('lightbox-stage');
    const caption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    let visible = [];     // the photos currently on screen (what we page through)
    let pos = 0;
    let mode = 'image';   // 'image' | 'video'

    const showImage = () => {
        const el = visible[pos];
        if (!el) return;
        const img = el.querySelector('img');
        stage.innerHTML = '';
        const big = document.createElement('img');
        big.src = img.getAttribute('src');
        big.alt = img.getAttribute('alt') || '';
        stage.appendChild(big);
        caption.textContent = ''; // photos carry no visible title
    };

    const openImage = (el) => {
        mode = 'image';
        visible = matching().slice(0, shown);
        pos = Math.max(0, visible.indexOf(el));
        prevBtn.classList.toggle('is-hidden', visible.length < 2);
        nextBtn.classList.toggle('is-hidden', visible.length < 2);
        showImage();
        box.hidden = false;
        document.body.classList.add('lightbox-open');
    };

    const openVideo = (btn) => {
        mode = 'video';
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.add('is-hidden');
        const href = encodeURIComponent(btn.dataset.url);
        stage.innerHTML =
            '<iframe src="https://www.facebook.com/plugins/video.php?href=' + href +
            '&show_text=false&autoplay=true" scrolling="no" frameborder="0" ' +
            'allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ' +
            'allowfullscreen="true"></iframe>';
        const t = btn.closest('.video-card').querySelector('.video-title');
        caption.textContent = t ? label(t) : '';
        box.hidden = false;
        document.body.classList.add('lightbox-open');
    };

    const close = () => {
        box.hidden = true;
        stage.innerHTML = ''; // stops the reel from playing in the background
        caption.textContent = '';
        document.body.classList.remove('lightbox-open');
    };

    const step = (dir) => {
        if (mode !== 'image' || !visible.length) return;
        pos = (pos + dir + visible.length) % visible.length;
        showImage();
    };

    grid.addEventListener('click', (e) => {
        const el = e.target.closest('.gallery-item');
        if (el) openImage(el);
    });

    document.querySelectorAll('.video-thumb').forEach((btn) => {
        btn.addEventListener('click', () => openVideo(btn));
    });

    closeBtn.addEventListener('click', close);
    // in RTL the "prev" chevron points right, so it maps to the previous photo
    prevBtn.addEventListener('click', () => step(-1));
    nextBtn.addEventListener('click', () => step(1));
    box.addEventListener('click', (e) => {
        if (e.target === box) close();
    });

    document.addEventListener('keydown', (e) => {
        if (box.hidden) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowRight') step(-1);
        else if (e.key === 'ArrowLeft') step(1);
    });

    /* ---------- before / after sliders ---------- */
    document.querySelectorAll('.ba-compare').forEach((cmp) => {
        const range = cmp.querySelector('.ba-range');
        const beforeWrap = cmp.querySelector('.ba-before-wrap');
        const handle = cmp.querySelector('.ba-handle');
        if (!range || !beforeWrap) return;

        const apply = () => {
            const v = Number(range.value);
            beforeWrap.style.width = v + '%';
            handle.style.left = v + '%';
        };
        range.addEventListener('input', apply);
        apply();
    });
})();
