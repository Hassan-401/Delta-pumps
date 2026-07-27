/* ============================================
   DELTA PUMP - Store Catalog Logic
   Drives: category listing page (store-listing.html)
           product detail page (product.html)
   Reads product data from js/data/catalog-products.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    const getLang = () => localStorage.getItem('deltapump_lang') || 'ar';

    const t = (ar, en) => (getLang() === 'en' ? en : ar);

    const PAGE_SIZE = 6;

    const findCategory = (id) => (window.CATALOG_CATEGORIES || []).find(c => c.id === id);
    const findProduct = (id) => (window.CATALOG_PRODUCTS || []).find(p => p.id === id);
    const findSection = (id) => (window.CATALOG_SECTIONS || []).find(s => s.id === id);

    /* ============================================
       LISTING PAGE
       ============================================ */
    const productGrid = document.getElementById('product-grid');

    if (productGrid) {
        const params = new URLSearchParams(window.location.search);
        const categoryId = params.get('category') || 'panels';
        const category = findCategory(categoryId) || { nameAr: 'المنتجات', nameEn: 'Products' };
        const section = findSection(category.section);
        const allProducts = (window.CATALOG_PRODUCTS || []).filter(p => p.category === categoryId);

        const heroTitle = document.getElementById('listing-hero-title');
        const heroSubtitle = document.getElementById('listing-hero-subtitle');
        const breadcrumbSection = document.getElementById('breadcrumb-section');
        const breadcrumbCategory = document.getElementById('breadcrumb-category');
        const pageTitleTag = document.getElementById('page-title');
        const resultsCount = document.getElementById('results-count');
        const searchInput = document.getElementById('product-search');
        const brandFilter = document.getElementById('brand-filter');
        const viewGridBtn = document.getElementById('view-grid-btn');
        const viewListBtn = document.getElementById('view-list-btn');
        const emptyState = document.getElementById('listing-empty');
        const emptyTitle = document.getElementById('listing-empty-title');
        const emptySubtitle = document.getElementById('listing-empty-subtitle');
        const paginationEl = document.getElementById('pagination');

        let currentPage = 1;

        const populateStaticText = () => {
            heroTitle.textContent = t(category.nameAr, category.nameEn);
            heroSubtitle.textContent = t(
                `استكشف أفضل المنتجات ${category.nameAr} من متجر دلتا بامب`,
                `Discover the best ${category.nameEn} products from the Delta Pump Store`
            );
            if (section) {
                breadcrumbSection.textContent = t(section.nameAr, section.nameEn);
                breadcrumbSection.href = section.url;
            }
            breadcrumbCategory.textContent = t(category.nameAr, category.nameEn);
            pageTitleTag.textContent = t(category.nameAr, category.nameEn) + ' | دلتا بامب للمقاولات العامة وحفر الآبار';
            searchInput.placeholder = t('ابحث عن منتج، ماركة...', 'Search for a product, brand...');
        };

        const populateBrandFilter = () => {
            const brands = [...new Set(allProducts.map(p => p.brand))];
            const currentValue = brandFilter.value;
            brandFilter.innerHTML = `<option value="">${t('جميع الخيارات', 'All options')}</option>`;
            brands.forEach(brand => {
                const opt = document.createElement('option');
                opt.value = brand;
                opt.textContent = brand;
                brandFilter.appendChild(opt);
            });
            brandFilter.value = currentValue || '';
        };

        const getFilteredProducts = () => {
            const search = searchInput.value.trim().toLowerCase();
            const brand = brandFilter.value;
            return allProducts.filter(p => {
                const matchesBrand = !brand || p.brand === brand;
                const matchesSearch = !search ||
                    p.nameAr.toLowerCase().includes(search) ||
                    p.nameEn.toLowerCase().includes(search) ||
                    p.brand.toLowerCase().includes(search);
                return matchesBrand && matchesSearch;
            });
        };

        const renderCard = (product) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-card-image">
                    <span class="product-availability-tag">${product.available ? t('متوفر', 'Available') : t('غير متوفر', 'Unavailable')}</span>
                    <img src="${product.image}" alt="${t(product.nameAr, product.nameEn)}">
                </div>
                <div class="product-card-content">
                    <span class="product-card-brand">${product.brand}</span>
                    <h3 class="product-card-name">${t(product.nameAr, product.nameEn)}</h3>
                    <span class="product-card-price">${t('السعر عند الطلب', 'Price upon request')}</span>
                    <button class="product-card-add-btn" type="button">
                        <span>${t('أضف للسلة', 'Add to Cart')}</span>
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            `;
            card.addEventListener('click', () => {
                window.location.href = `product.html?id=${encodeURIComponent(product.id)}`;
            });
            card.querySelector('.product-card-add-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                window.DeltaPumpCart.addItem(product.id, 1);
            });
            return card;
        };

        const renderPagination = (totalItems) => {
            paginationEl.innerHTML = '';
            const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
            if (totalPages <= 1) return;

            const makeBtn = (label, page, opts = {}) => {
                const btn = document.createElement('button');
                btn.className = 'pagination-btn' + (opts.active ? ' active' : '');
                btn.textContent = label;
                btn.disabled = !!opts.disabled;
                btn.addEventListener('click', () => {
                    currentPage = page;
                    render();
                    window.scrollTo({ top: productGrid.offsetTop - 100, behavior: 'smooth' });
                });
                return btn;
            };

            paginationEl.appendChild(makeBtn('«', currentPage - 1, { disabled: currentPage === 1 }));
            for (let i = 1; i <= totalPages; i++) {
                paginationEl.appendChild(makeBtn(String(i), i, { active: i === currentPage }));
            }
            paginationEl.appendChild(makeBtn('»', currentPage + 1, { disabled: currentPage === totalPages }));
        };

        const render = () => {
            const filtered = getFilteredProducts();
            const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
            if (currentPage > totalPages) currentPage = totalPages;

            resultsCount.textContent = t(`${filtered.length} منتج`, `${filtered.length} products`);

            productGrid.innerHTML = '';
            if (filtered.length === 0) {
                emptyState.hidden = false;
                if (allProducts.length === 0) {
                    emptyTitle.textContent = t('لا توجد منتجات في هذا القسم', 'No products in this section');
                    emptySubtitle.textContent = t('لا توجد منتجات في هذا القسم حالياً. حاول مرة أخرى لاحقاً.', 'There are currently no products in this section. Please check back later.');
                } else {
                    emptyTitle.textContent = t('لا توجد منتجات مطابقة لبحثك', 'No products match your search');
                    emptySubtitle.textContent = '';
                }
            } else {
                emptyState.hidden = true;
                const start = (currentPage - 1) * PAGE_SIZE;
                const pageItems = filtered.slice(start, start + PAGE_SIZE);
                pageItems.forEach(p => productGrid.appendChild(renderCard(p)));
            }
            renderPagination(filtered.length);
        };

        const setViewMode = (mode) => {
            productGrid.classList.toggle('view-list', mode === 'list');
            viewGridBtn.classList.toggle('active', mode === 'grid');
            viewListBtn.classList.toggle('active', mode === 'list');
        };

        searchInput.addEventListener('input', () => { currentPage = 1; render(); });
        brandFilter.addEventListener('change', () => { currentPage = 1; render(); });
        viewGridBtn.addEventListener('click', () => setViewMode('grid'));
        viewListBtn.addEventListener('click', () => setViewMode('list'));

        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                populateStaticText();
                populateBrandFilter();
                render();
            });
        }

        populateStaticText();
        populateBrandFilter();
        setViewMode('grid');
        render();
    }

    /* ============================================
       PRODUCT DETAIL PAGE
       ============================================ */
    const productTitleEl = document.getElementById('product-title');

    if (productTitleEl) {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const product = findProduct(productId) || (window.CATALOG_PRODUCTS || [])[0];
        const category = product ? findCategory(product.category) : null;
        const section = category ? findSection(category.section) : null;

        const pageTitleTag = document.getElementById('page-title');
        const breadcrumbSection = document.getElementById('breadcrumb-section');
        const breadcrumbSubcategory = document.getElementById('breadcrumb-subcategory');
        const breadcrumbProduct = document.getElementById('breadcrumb-product');
        const productImage = document.getElementById('product-image');
        const availabilityBadge = document.getElementById('product-availability');
        const brandEl = document.getElementById('product-brand');
        const descriptionEl = document.getElementById('product-description');
        const specsTableEl = document.getElementById('product-specs-table');
        const extraTableEl = document.getElementById('product-extra-table');
        const qtyValueEl = document.getElementById('qty-value');
        const addCartBtn = document.getElementById('add-cart-btn');
        const shareBtn = document.getElementById('share-btn');

        let qty = 1;

        const renderExtraTable = (extra) => {
            extraTableEl.innerHTML = '';
            if (!extra) return;

            const title = document.createElement('h4');
            title.className = 'product-extra-title';
            title.textContent = t(extra.titleAr, extra.titleEn);
            extraTableEl.appendChild(title);

            if (extra.type === 'flow') {
                const table = document.createElement('div');
                table.className = 'flow-table';
                const header = document.createElement('div');
                header.className = 'flow-table-header';
                header.innerHTML = `<span>${t(extra.headerAr[0], extra.headerEn[0])}</span><span>${t(extra.headerAr[1], extra.headerEn[1])}</span>`;
                table.appendChild(header);
                extra.rows.forEach(([flow, head]) => {
                    const row = document.createElement('div');
                    row.className = 'flow-table-row';
                    row.innerHTML = `<span>${flow}</span><span>${head}</span>`;
                    table.appendChild(row);
                });
                extraTableEl.appendChild(table);
            } else if (extra.type === 'operating') {
                extra.groups.forEach(group => {
                    const groupEl = document.createElement('div');
                    groupEl.className = 'operating-group';
                    const groupHeader = document.createElement('div');
                    groupHeader.className = 'operating-group-header';
                    groupHeader.textContent = t(group.labelAr, group.labelEn);
                    groupEl.appendChild(groupHeader);
                    group.rows.forEach(row => {
                        const rowEl = document.createElement('div');
                        rowEl.className = 'spec-row';
                        rowEl.innerHTML = `
                            <span class="spec-value">${row.value}</span>
                            <span class="spec-key">${t(row.labelAr, row.labelEn)}</span>
                        `;
                        groupEl.appendChild(rowEl);
                    });
                    extraTableEl.appendChild(groupEl);
                });
            }
        };

        const renderProduct = () => {
            if (!product) return;

            const name = t(product.nameAr, product.nameEn);
            pageTitleTag.textContent = name + ' | دلتا بامب للمقاولات العامة وحفر الآبار';

            if (section) {
                breadcrumbSection.textContent = t(section.nameAr, section.nameEn);
                breadcrumbSection.href = section.url;
            }
            if (category) {
                breadcrumbSubcategory.textContent = t(category.nameAr, category.nameEn);
                breadcrumbSubcategory.href = `store-listing.html?category=${encodeURIComponent(category.id)}`;
            }
            breadcrumbProduct.textContent = name;

            productImage.src = product.image;
            productImage.alt = name;

            availabilityBadge.textContent = product.available ? t('متوفر', 'Available') : t('غير متوفر', 'Unavailable');
            productTitleEl.textContent = name;
            brandEl.textContent = product.brand;
            descriptionEl.textContent = t(product.descAr, product.descEn);

            specsTableEl.innerHTML = '';
            (product.specs || []).forEach(spec => {
                const row = document.createElement('div');
                row.className = 'spec-row';
                row.innerHTML = `
                    <span class="spec-value">${spec.value}</span>
                    <span class="spec-key">${t(spec.labelAr, spec.labelEn)}</span>
                `;
                specsTableEl.appendChild(row);
            });

            renderExtraTable(product.extraTable);
        };

        // Tabs
        const tabDescription = document.getElementById('tab-description');
        const tabSpecs = document.getElementById('tab-specs');
        const panelDescription = document.getElementById('panel-description');
        const panelSpecs = document.getElementById('panel-specs');

        const activateTab = (tab) => {
            const isSpecs = tab === 'specs';
            tabSpecs.classList.toggle('active', isSpecs);
            tabDescription.classList.toggle('active', !isSpecs);
            panelSpecs.classList.toggle('active', isSpecs);
            panelDescription.classList.toggle('active', !isSpecs);
            panelSpecs.hidden = !isSpecs;
            panelDescription.hidden = isSpecs;
        };

        tabSpecs.addEventListener('click', () => activateTab('specs'));
        tabDescription.addEventListener('click', () => activateTab('description'));

        // Quantity stepper
        document.getElementById('qty-increase').addEventListener('click', () => {
            qty += 1;
            qtyValueEl.textContent = qty;
        });
        document.getElementById('qty-decrease').addEventListener('click', () => {
            qty = Math.max(1, qty - 1);
            qtyValueEl.textContent = qty;
        });

        // Add to cart
        addCartBtn.addEventListener('click', () => {
            window.DeltaPumpCart.addItem(product.id, qty);
            const label = addCartBtn.querySelector('span');
            const original = label.textContent;
            label.textContent = t('تمت الإضافة ✓', 'Added ✓');
            setTimeout(() => { label.textContent = original; }, 1500);
        });

        // Share
        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: product ? t(product.nameAr, product.nameEn) : document.title,
                url: window.location.href
            };
            if (navigator.share) {
                try { await navigator.share(shareData); } catch (err) { /* user cancelled */ }
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(shareData.url);
                const icon = shareBtn.querySelector('i');
                icon.className = 'fas fa-check';
                setTimeout(() => { icon.className = 'fas fa-share-alt'; }, 1500);
            }
        });

        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', renderProduct);
        }

        renderProduct();
    }

});
