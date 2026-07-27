/* ============================================
   DELTA PUMP - Service Detail Page
   Renders a service from SERVICES_DATA based
   on the ?service=<slug> query parameter.
   All rendered text carries data-ar / data-en
   so the global language toggle keeps working.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('service');
    const service = slug ? SERVICES_DATA[slug] : null;

    // Unknown or missing service -> back to the services list
    if (!service) {
        window.location.replace('services.html');
        return;
    }

    const lang = localStorage.getItem('deltapump_lang') || 'ar';
    const t = (obj) => (lang === 'en' ? obj.en : obj.ar);

    // Helper: create an element carrying both translations
    const el = (tag, className, textObj) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (textObj) {
            node.dataset.ar = textObj.ar;
            node.dataset.en = textObj.en;
            node.textContent = t(textObj);
        }
        return node;
    };

    // ============ TITLE / IMAGE / PAGE META ============
    document.getElementById('page-title').textContent =
        lang === 'en'
            ? `${service.title.en} | Delta Pump General Contracting & Well Drilling`
            : `${service.title.ar} | دلتا بامب للمقاولات العامة وحفر الآبار`;

    const img = document.getElementById('service-image');
    img.src = service.image;
    img.alt = t(service.title);

    const titleEl = document.getElementById('service-title');
    titleEl.dataset.ar = service.title.ar;
    titleEl.dataset.en = service.title.en;
    titleEl.textContent = t(service.title);

    // ============ CONTENT ============
    const content = document.getElementById('service-content');

    // Intro paragraph
    content.appendChild(el('p', 'service-intro', service.intro));

    // Expert tip / highlighted quote
    if (service.tip) {
        const tip = el('div', 'service-tip', null);
        tip.appendChild(el('i', 'far fa-lightbulb', null));
        tip.appendChild(el('p', null, service.tip));
        content.appendChild(tip);
    }

    // Sections
    (service.sections || []).forEach(section => {
        const heading = el('h2', 'service-section-title', null);
        if (section.icon) heading.appendChild(el('i', section.icon, null));
        heading.appendChild(el('span', null, section.title));
        content.appendChild(heading);

        if (section.text) {
            content.appendChild(el('p', 'service-section-text', section.text));
        }

        if (section.bullets && section.bullets.length) {
            const list = el(section.ordered ? 'ol' : 'ul', 'service-list', null);
            section.bullets.forEach(bullet => {
                list.appendChild(el('li', null, bullet));
            });
            content.appendChild(list);
        }
    });

    // Store / shop block
    if (service.shop) {
        content.appendChild(el('div', 'service-shop-divider', null));

        const shopHeading = el('h2', 'service-section-title', null);
        shopHeading.appendChild(el('i', 'fas fa-cart-shopping', null));
        shopHeading.appendChild(el('span', null, service.shop.title));
        content.appendChild(shopHeading);

        if (service.shop.text) {
            content.appendChild(el('p', 'service-section-text', service.shop.text));
        }

        (service.shop.links || []).forEach(link => {
            const a = el('a', 'service-shop-link', null);
            a.href = link.href;
            a.appendChild(el('i', link.icon || 'fas fa-link', null));
            a.appendChild(el('span', null, { ar: link.ar, en: link.en }));
            content.appendChild(a);
        });
    }
});
