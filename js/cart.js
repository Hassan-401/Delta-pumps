/* ============================================
   DELTA PUMP - Shopping Cart Page Logic
   Renders cart.html from window.DeltaPumpCart (defined in script.js)
   and resolves line items against js/data/catalog-products.js.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    const cartLayout = document.getElementById('cart-layout');
    if (!cartLayout) return; // not the cart page

    const WHATSAPP_NUMBER = '201040031792';

    const getLang = () => localStorage.getItem('deltapump_lang') || 'ar';
    const t = (ar, en) => (getLang() === 'en' ? en : ar);

    const findProduct = (id) => (window.CATALOG_PRODUCTS || []).find(p => p.id === id);

    const itemsList = document.getElementById('cart-items-list');
    const emptyState = document.getElementById('cart-empty');
    const summaryDistinct = document.getElementById('summary-distinct');
    const summaryTotal = document.getElementById('summary-total');
    const quoteBtn = document.getElementById('cart-quote-btn');
    const clearBtn = document.getElementById('cart-clear-btn');

    // Return only cart entries that still map to a known product.
    // Silently drop stale ids so the page never renders a broken row.
    const getResolvedItems = () => {
        const resolved = [];
        window.DeltaPumpCart.getItems().forEach(entry => {
            const product = findProduct(entry.id);
            if (product) {
                resolved.push({ product, qty: entry.qty });
            } else {
                window.DeltaPumpCart.removeItem(entry.id);
            }
        });
        return resolved;
    };

    const renderRow = ({ product, qty }) => {
        const row = document.createElement('div');
        row.className = 'cart-item';
        const name = t(product.nameAr, product.nameEn);
        const productUrl = `product.html?id=${encodeURIComponent(product.id)}`;

        row.innerHTML = `
            <a class="cart-item-image" href="${productUrl}">
                <img src="${product.image}" alt="${name}">
            </a>
            <div class="cart-item-info">
                <span class="cart-item-brand">${product.brand}</span>
                <a class="cart-item-name" href="${productUrl}">${name}</a>
                <span class="cart-item-availability ${product.available ? 'in-stock' : 'out-stock'}">
                    ${product.available ? t('متوفر', 'Available') : t('غير متوفر', 'Unavailable')}
                </span>
                <span class="cart-item-price">${t('السعر عند الطلب', 'Price upon request')}</span>
            </div>
            <div class="cart-item-actions">
                <div class="cart-qty-stepper">
                    <button class="cart-qty-btn" data-act="dec" aria-label="Decrease quantity">−</button>
                    <span class="cart-qty-value">${qty}</span>
                    <button class="cart-qty-btn" data-act="inc" aria-label="Increase quantity">+</button>
                </div>
                <button class="cart-item-remove" aria-label="Remove item">
                    <i class="fas fa-trash-alt"></i>
                    <span data-ar="حذف" data-en="Remove">حذف</span>
                </button>
            </div>
        `;

        row.querySelector('[data-act="inc"]').addEventListener('click', () => {
            window.DeltaPumpCart.setQty(product.id, qty + 1);
            render();
        });
        row.querySelector('[data-act="dec"]').addEventListener('click', () => {
            window.DeltaPumpCart.setQty(product.id, qty - 1); // qty 0 removes the line
            render();
        });
        row.querySelector('.cart-item-remove').addEventListener('click', () => {
            window.DeltaPumpCart.removeItem(product.id);
            render();
        });

        return row;
    };

    const buildQuoteLink = (items) => {
        const lines = items.map(({ product, qty }) =>
            `- ${t(product.nameAr, product.nameEn)} (${t('الكمية', 'Qty')}: ${qty})`
        );
        const intro = t(
            'مرحباً، أرغب في طلب عرض سعر للمنتجات التالية:',
            'Hello, I would like to request a quote for the following products:'
        );
        const outro = t('شكراً.', 'Thank you.');
        const message = `${intro}\n${lines.join('\n')}\n\n${outro}`;
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    };

    const render = () => {
        const items = getResolvedItems();

        if (items.length === 0) {
            cartLayout.hidden = true;
            emptyState.hidden = false;
            return;
        }

        cartLayout.hidden = false;
        emptyState.hidden = true;

        itemsList.innerHTML = '';
        items.forEach(item => itemsList.appendChild(renderRow(item)));

        const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
        summaryDistinct.textContent = items.length;
        summaryTotal.textContent = totalQty;

        quoteBtn.href = buildQuoteLink(items);
    };

    clearBtn.addEventListener('click', () => {
        window.DeltaPumpCart.clear();
        render();
    });

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        // script.js updates static [data-ar]/[data-en] text; re-render the
        // dynamic rows and quote link so they follow the language too.
        langToggle.addEventListener('click', render);
    }

    render();
});
