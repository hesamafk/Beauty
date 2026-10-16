// ============================================================
    //  DATA with REAL product images
    // ============================================================
    const PRODUCTS = [{
        id: 1,
        name: 'کرم پودر مایع لومیر',
        brand: 'CHANEL',
        category: 'آرایش صورت',
        price: 1890000,
        rating: 4.5,
        reviews: 124,
        badge: 'پرفروش',
        badgeType: 'red',
        desc: 'کرم پودری سبک با پوشش کامل و درخشندگی طبیعی، مناسب پوست‌های معمولی تا خشک. دارای SPF 25 و بافت ابریشمی.',
        img: 'assets/product-1.svg'
    }, {
        id: 2,
        name: 'رژ لب مایع ماتیس',
        brand: 'DIOR',
        category: 'آرایش لب',
        price: 1450000,
        rating: 5,
        reviews: 89,
        badge: 'جدید',
        badgeType: 'green',
        desc: 'رژ لب مایع با ماندگاری ۱۲ ساعته و بافت مخملی مات، بدون ایجاد حس چسبندگی. دارای ۸ سایه طبیعی.',
        img: 'assets/product-2.svg'
    }, {
        id: 3,
        name: 'پالت سایه چشم نود',
        brand: 'HUDA BEAUTY',
        category: 'آرایش چشم',
        price: 2200000,
        rating: 5,
        reviews: 203,
        badge: 'تخفیف',
        badgeType: 'gold',
        desc: 'پالت ۱۸ رنگ با ترکیبی از سایه‌های مات و براق با درخشندگی بالا، ایده‌آل برای آرایش روز و شب.',
        img: 'assets/product-3.svg'
    }, {
        id: 4,
        name: 'پاک‌کننده آرایشی حساس',
        brand: 'BIODERMA',
        category: 'مراقبت پوست',
        price: 680000,
        rating: 5,
        reviews: 356,
        badge: null,
        badgeType: null,
        desc: 'محلول میسلار بدون بو و الکل، مناسب پوست‌های حساس و چشم‌های تحریک‌پذیر. حجم ۲۵۰ میلی‌لیتر.',
        img: 'assets/product-4.svg'
    }, {
        id: 5,
        name: 'برس کانتور ۱۵۹',
        brand: 'MAC',
        category: 'ابزار حرفه‌ای',
        price: 750000,
        rating: 5,
        reviews: 92,
        badge: 'ویژه',
        badgeType: 'purple',
        desc: 'برس با الیاف مصنوعی با کیفیت بالا برای کانتورینگ و سایه‌زنی دقیق. دسته ارگونومیک.',
        img: 'assets/product-5.svg'
    }, {
        id: 6,
        name: 'کرم برنز کننده',
        brand: 'NARS',
        category: 'آرایش صورت',
        price: 1230000,
        rating: 4.5,
        reviews: 78,
        badge: 'پرفروش',
        badgeType: 'red',
        desc: 'کرم برنز با بافت سبک و درخشندگی ملایم، مناسب برای پوست‌های روشن تا متوسط. با رایحه دلپذیر.',
        img: 'assets/product-6.svg'
    }, {
        id: 7,
        name: 'ماسک ورقه‌ای طلا',
        brand: 'SK-II',
        category: 'مراقبت پوست',
        price: 950000,
        rating: 4.5,
        reviews: 144,
        badge: 'لوکس',
        badgeType: 'gold',
        desc: 'ماسک ورقه‌ای آغشته به عصاره طلا و ویتامین‌ها برای روشن و سفت شدن پوست. مناسب پوست‌های خسته.',
        img: 'assets/product-7.svg'
    }, {
        id: 8,
        name: 'ریمل حجم‌دهنده',
        brand: 'BENEFIT',
        category: 'آرایش چشم',
        price: 890000,
        rating: 4,
        reviews: 210,
        badge: null,
        badgeType: null,
        desc: 'ریمل با فرمول ضد آب و برس ارگونومیک برای ایجاد حجم و جداسازی مژه‌ها. ماندگاری ۲۴ ساعته.',
        img: 'assets/product-8.svg'
    }, {
        id: 9,
        name: 'کرم پودر معدنی',
        brand: 'BARE MINERALS',
        category: 'آرایش صورت',
        price: 1650000,
        rating: 4.5,
        reviews: 67,
        badge: 'طبیعی',
        badgeType: 'green',
        desc: 'کرم پودر معدنی با پوشش قابل تنظیم و فاقد مواد شیمیایی مضر. مناسب پوست‌های حساس و مستعد جوش.',
        img: 'assets/product-9.svg'
    }, {
        id: 10,
        name: 'برس سایه ۲۲۴',
        brand: 'SEPHORA',
        category: 'ابزار حرفه‌ای',
        price: 420000,
        rating: 4,
        reviews: 53,
        badge: null,
        badgeType: null,
        desc: 'برس سایه با الیاف نرم برای ترکیب و پخش یکنواخت سایه چشم. دسته چوبی با کیفیت بالا.',
        img: 'assets/product-10.svg'
    }, {
        id: 11,
        name: 'گلاس لب براق',
        brand: 'FENTY BEAUTY',
        category: 'آرایش لب',
        price: 780000,
        rating: 4.5,
        reviews: 98,
        badge: 'محبوب',
        badgeType: 'gold',
        desc: 'گلاس لب با براقیت بالا و رایحه مطبوع وانیلی، مناسب برای هر روز. حجم ۱۵ میلی‌لیتر.',
        img: 'assets/product-11.svg'
    }, {
        id: 12,
        name: 'تونر آبرسان',
        brand: 'LA ROCHE-POSAY',
        category: 'مراقبت پوست',
        price: 580000,
        rating: 4.5,
        reviews: 176,
        badge: null,
        badgeType: null,
        desc: 'تونر بدون الکل با خواص آبرسانی و تسکین‌دهنده برای پوست‌های حساس. مناسب روزانه.',
        img: 'assets/product-12.svg'
    }, {
        id: 13,
        name: 'پنکک مات کننده',
        brand: 'MAYBELLINE',
        category: 'آرایش صورت',
        price: 490000,
        rating: 4,
        reviews: 312,
        badge: 'اقتصادی',
        badgeType: 'green',
        desc: 'پنکک با بافت سبک و مات کننده، مناسب پوست‌های چرب. با SPF 15.',
        img: 'assets/product-13.svg'
    }, {
        id: 14,
        name: 'خط چشم مایع',
        brand: 'STILA',
        category: 'آرایش چشم',
        price: 680000,
        rating: 4.5,
        reviews: 145,
        badge: null,
        badgeType: null,
        desc: 'خط چشم مایع با نوک فیبری دقیق برای کشیدن خطوط نازک و ضخیم. ضد آب و ماندگار.',
        img: 'assets/product-14.svg'
    }, {
        id: 15,
        name: 'کرم شب روشن‌کننده',
        brand: "KIEHL'S",
        category: 'مراقبت پوست',
        price: 1250000,
        rating: 4.5,
        reviews: 89,
        badge: 'پرفروش',
        badgeType: 'red',
        desc: 'کرم شب با ویتامین C و عصاره گل رز برای روشن و یکدست کردن پوست. مناسب تیرگی‌ها.',
        img: 'assets/product-15.svg'
    }];

    const CATEGORIES = ['همه', 'آرایش صورت', 'آرایش چشم', 'آرایش لب', 'مراقبت پوست', 'ابزار حرفه‌ای'];

    // ============================================================
    //  STATE
    // ============================================================
    let cart = [];
    let wishlist = [];
    let currentPage = 'home';
    let selectedProductId = null;
    let pendingConfirmAction = null;

    // ============================================================
    //  UTILITY
    // ============================================================
    function formatPrice(p) {
        return p.toLocaleString('fa-IR') + ' تومان';
    }

    function getProduct(id) {
        return PRODUCTS.find(p => p.id === id);
    }

    function getCartTotal() {
        return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    function getCartCount() {
        return cart.reduce((sum, item) => sum + item.qty, 0);
    }

    function saveState() {
        try {
            localStorage.setItem('narges_cart', JSON.stringify(cart));
            localStorage.setItem('narges_wishlist', JSON.stringify(wishlist));
        } catch { showToast('تغییرات فقط تا بسته‌شدن این صفحه باقی می‌ماند؛ ذخیره‌سازی مرورگر در دسترس نیست.', { danger: true }); }
        updateBadges();
    }

    function loadState() {
        try {
            const savedCart = JSON.parse(localStorage.getItem('narges_cart') || '[]');
            const savedWishlist = JSON.parse(localStorage.getItem('narges_wishlist') || '[]');
            const quantities = new Map();
            if (Array.isArray(savedCart)) savedCart.forEach(item => {
                const product = item && getProduct(Number(item.id));
                if (product && Number.isInteger(item.qty) && item.qty > 0) {
                    quantities.set(product.id, Math.min(99, (quantities.get(product.id) || 0) + item.qty));
                }
            });
            cart = [...quantities].map(([id, qty]) => ({ ...getProduct(id), qty }));
            wishlist = Array.isArray(savedWishlist)
                ? [...new Set(savedWishlist.map(Number).filter(id => getProduct(id)))] : [];
        } catch {
            cart = []; wishlist = [];
        }
    }

    function updateBadges() {
        document.getElementById('cartCount').textContent = getCartCount();
        document.getElementById('wishlistCount').textContent = wishlist.length;
        document.getElementById('wishlistIcon').classList.toggle('wish-active', wishlist.length > 0);
        const statCart = document.getElementById('statCart');
        const statWish = document.getElementById('statWish');
        if (statCart) statCart.textContent = getCartCount();
        if (statWish) statWish.textContent = wishlist.length;
    }

    // ============================================================
    //  TOAST NOTIFICATIONS
    // ============================================================
    function showToast(message, opts = {}) {
        const stack = document.getElementById('toastStack');
        const el = document.createElement('div');
        el.className = 'toast' + (opts.danger ? ' toast-danger' : '');
        el.setAttribute('role', 'status');
        const icon = document.createElement('i');
        icon.className = 'fas ' + (opts.icon || 'fa-check-circle');
        const text = document.createElement('span');
        text.textContent = message;
        el.replaceChildren(icon, text);
        stack.appendChild(el);
        requestAnimationFrame(() => el.classList.add('show'));
        setTimeout(() => {
            el.classList.remove('show');
            setTimeout(() => el.remove(), 350);
        }, opts.duration || 2400);
    }

    // ============================================================
    //  CONFIRM DIALOG
    // ============================================================
    function askConfirm(title, text, onYes) {
        document.getElementById('confirmTitle').textContent = title;
        document.getElementById('confirmText').textContent = text;
        pendingConfirmAction = onYes;
        document.getElementById('confirmOverlay').classList.add('open');
    }

    function closeConfirm() {
        document.getElementById('confirmOverlay').classList.remove('open');
        pendingConfirmAction = null;
    }

    // ============================================================
    //  RENDER: Categories
    // ============================================================
    function renderCategories(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const icons = {
            'همه': 'fa-th',
            'آرایش صورت': 'fa-smile',
            'آرایش چشم': 'fa-eye',
            'آرایش لب': 'fa-kiss-wink-heart',
            'مراقبت پوست': 'fa-hand-sparkles',
            'ابزار حرفه‌ای': 'fa-brush'
        };
        container.innerHTML = CATEGORIES.map(cat =>
            `<div class="category-card ${cat === 'همه' ? 'active-cat' : ''}" data-cat="${cat}">
                    <i class="fas ${icons[cat] || 'fa-box'}"></i>
                    <h4>${cat}</h4>
                </div>`
        ).join('');
        container.querySelectorAll('.category-card').forEach(el => {
            el.addEventListener('click', function() {
                const cat = this.dataset.cat;
                container.querySelectorAll('.category-card').forEach(c => c.classList.remove('active-cat'));
                this.classList.add('active-cat');
                document.getElementById('filterCategory').value = cat === 'همه' ? 'all' : cat;
                renderAllProducts();
                navigateTo('products');
            });
        });
    }

    // ============================================================
    //  RENDER: Products with REAL images
    // ============================================================
    function renderProductCards(productList, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        if (!productList.length) {
            container.innerHTML =
                `<div class="empty-state"><i class="fas fa-box-open"></i><h3>محصولی یافت نشد</h3><p>سعی کنید فیلترهای خود را تغییر دهید.</p></div>`;
            return;
        }
        container.innerHTML = productList.map(p => {
            const inCart = cart.some(item => item.id === p.id);
            const inWish = wishlist.includes(p.id);
            const badgeClass = p.badgeType === 'green' ? 'green' : p.badgeType === 'gold' ? 'gold' : p.badgeType ===
            'purple' ? 'purple' : '';
            const badgeHtml = p.badge ? `<div class="product-badge ${badgeClass}">${p.badge}</div>` : '';
            const imgSrc = p.img || 'assets/product-1.svg';
            return `
                    <div class="product-card" data-id="${p.id}">
                        ${badgeHtml}
                        <button class="wish-btn ${inWish ? 'active' : ''}" data-id="${p.id}" title="افزودن به علاقه‌مندی‌ها">
                            <i class="${inWish ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                        <div class="product-img">
                            <div class="img-bg"></div>
                            <img src="${imgSrc}" alt="${p.name}" loading="lazy" />
                        </div>
                        <div class="product-info">
                            <div class="product-brand">${p.brand}</div>
                            <div class="product-name">${p.name}</div>
                            <div class="product-rating"><i class="fas fa-star"></i> ${p.rating} <span>(${p.reviews})</span></div>
                            <div class="product-price">${formatPrice(p.price)}</div>
                            <button class="btn-add ${inCart ? 'in-cart' : ''}" data-id="${p.id}">
                                ${inCart ? '<i class="fas fa-check"></i> در سبد' : '<i class="fas fa-plus"></i> افزودن به سبد'}
                            </button>
                        </div>
                    </div>
                `;
        }).join('');

        container.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target.closest('.btn-add') || e.target.closest('.wish-btn')) return;
                const id = parseInt(this.dataset.id);
                openModal(id);
            });
        });

        container.querySelectorAll('.btn-add').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const id = parseInt(this.dataset.id);
                toggleCart(id);
            });
        });

        container.querySelectorAll('.wish-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const id = parseInt(this.dataset.id);
                toggleWishlist(id, this);
            });
        });
    }

    // ============================================================
    //  FILTER / SORT / SEARCH
    // ============================================================
    function getFilteredProducts() {
        const cat = document.getElementById('filterCategory').value;
        const brand = document.getElementById('filterBrand').value;
        const sort = document.getElementById('filterSort').value;
        const maxPrice = parseInt(document.getElementById('priceMax').value) || Infinity;

        let list = [...PRODUCTS];
        if (cat !== 'all') list = list.filter(p => p.category === cat);
        if (brand !== 'all') list = list.filter(p => p.brand === brand);
        list = list.filter(p => p.price <= maxPrice);

        if (sort === 'popular') list.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
        else if (sort === 'price-low') list.sort((a, b) => a.price - b.price);
        else if (sort === 'price-high') list.sort((a, b) => b.price - a.price);

        return list;
    }

    function renderAllProducts() {
        const list = getFilteredProducts();
        renderProductCards(list, 'allProducts');
    }

    function performSearch() {
        const q = document.getElementById('searchInput').value.trim().toLowerCase();
        if (!q) { renderAllProducts(); return; }
        const filtered = PRODUCTS.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
        renderProductCards(filtered, 'allProducts');
        navigateTo('products');
    }

    // ============================================================
    //  HOME Products
    // ============================================================
    function renderHomeProducts() {
        const list = PRODUCTS.filter(p => p.badge === 'پرفروش' || p.badge === 'محبوب').slice(0, 8);
        if (list.length < 6) {
            const rest = PRODUCTS.filter(p => p.badge !== 'پرفروش' && p.badge !== 'محبوب').slice(0, 6 - list.length);
            list.push(...rest);
        }
        renderProductCards(list, 'homeProducts');
    }

    // ============================================================
    //  WISHLIST
    // ============================================================
    function toggleWishlist(productId, btnEl) {
        const idx = wishlist.indexOf(productId);
        const wasActive = idx > -1;
        if (wasActive) {
            wishlist.splice(idx, 1);
            showToast('از علاقه‌مندی‌ها حذف شد', { icon: 'fa-heart-broken', danger: true });
        } else {
            wishlist.push(productId);
            showToast('به علاقه‌مندی‌ها اضافه شد ♥');
        }
        saveState();
        if (btnEl) {
            btnEl.classList.toggle('active', !wasActive);
            btnEl.querySelector('i').className = (!wasActive ? 'fas' : 'far') + ' fa-heart';
            btnEl.classList.add('pulse');
            setTimeout(() => btnEl.classList.remove('pulse'), 400);
        }
        refreshAllViews();
    }

    function renderWishlistPage() {
        const container = document.getElementById('wishlistProducts');
        if (!container) return;
        const items = PRODUCTS.filter(p => wishlist.includes(p.id));
        if (!items.length) {
            container.innerHTML =
                `<div class="empty-state"><i class="fas fa-heart"></i><h3>لیست علاقه‌مندی خالی است</h3><p>محصولات مورد علاقه‌تان را با ضربه روی آیکون قلب ذخیره کنید.</p><a href="#" class="btn" style="margin-top:16px;display:inline-block;" data-page="products">مشاهده محصولات</a></div>`;
            container.querySelectorAll('[data-page]').forEach(el => {
                el.addEventListener('click', function(e) {
                    e.preventDefault();
                    navigateTo(this.dataset.page);
                });
            });
            return;
        }
        renderProductCards(items, 'wishlistProducts');
    }

    // ============================================================
    //  CART
    // ============================================================
    function toggleCart(productId) {
        const idx = cart.findIndex(item => item.id === productId);
        if (idx > -1) {
            cart.splice(idx, 1);
            showToast('از سبد خرید حذف شد', { icon: 'fa-trash-alt', danger: true });
        } else {
            const p = getProduct(productId);
            cart.push({ id: p.id, name: p.name, brand: p.brand, price: p.price, qty: 1 });
            showToast('به سبد خرید اضافه شد', { icon: 'fa-shopping-bag' });
            document.getElementById('cartCount').classList.add('bump');
            setTimeout(() => document.getElementById('cartCount').classList.remove('bump'), 400);
        }
        saveState();
        refreshAllViews();
    }

    function refreshAllViews() {
        renderHomeProducts();
        renderAllProducts();
        renderCartPage();
        renderWishlistPage();
    }

    function renderCartPage() {
        const container = document.getElementById('cartContainer');
        if (!container) return;
        if (!cart.length) {
            container.innerHTML =
                `<div class="empty-state"><i class="fas fa-shopping-bag"></i><h3>سبد خرید خالی است</h3><p>محصولات مورد نظر خود را اضافه کنید.</p><a href="#" class="btn" style="margin-top:16px;display:inline-block;" data-page="products">مشاهده محصولات</a></div>`;
            container.querySelectorAll('[data-page]').forEach(el => {
                el.addEventListener('click', function(e) {
                    e.preventDefault();
                    navigateTo(this.dataset.page);
                });
            });
            return;
        }
        let html = '';
        cart.forEach((item, index) => {
            html += `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <small>${item.brand}</small>
                            <div class="cart-item-price">${formatPrice(item.price)}</div>
                        </div>
                        <div class="cart-item-qty">
                            <button aria-label="کاهش تعداد" data-index="${index}" data-action="dec">−</button>
                            <span>${item.qty}</span>
                            <button aria-label="افزایش تعداد" data-index="${index}" data-action="inc">+</button>
                        </div>
                        <button aria-label="حذف کالا" class="cart-item-remove" data-index="${index}"><i class="fas fa-trash-alt"></i></button>
                    </div>
                `;
        });
        html += `<div class="cart-total">🧾 جمع کل: ${formatPrice(getCartTotal())}</div>`;
        html += `<div class="cart-actions">
                        <button class="btn" id="checkoutBtn"><i class="fas fa-check"></i> تکمیل خرید</button>
                        <button class="btn btn-outline" id="clearCartBtn"><i class="fas fa-trash"></i> خالی کردن سبد</button>
                    </div>`;
        container.innerHTML = html;

        container.querySelectorAll('.cart-item-qty button').forEach(btn => {
            btn.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                const action = this.dataset.action;
                if (action === 'inc') cart[idx].qty = Math.min(99, cart[idx].qty + 1);
                else if (action === 'dec') {
                    if (cart[idx].qty > 1) cart[idx].qty -= 1;
                    else cart.splice(idx, 1);
                }
                saveState();
                refreshAllViews();
            });
        });

        container.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                cart.splice(idx, 1);
                saveState();
                refreshAllViews();
                showToast('کالا از سبد حذف شد', { icon: 'fa-trash-alt', danger: true });
            });
        });

        document.getElementById('clearCartBtn')?.addEventListener('click', function() {
            askConfirm('خالی کردن سبد خرید', 'آیا از خالی کردن سبد خرید اطمینان دارید؟ این عمل قابل بازگشت نیست.', function() {
                cart = [];
                saveState();
                refreshAllViews();
                showToast('سبد خرید خالی شد', { icon: 'fa-trash-alt', danger: true });
            });
        });

        document.getElementById('checkoutBtn')?.addEventListener('click', function() {
            if (cart.length === 0) {
                showToast('سبد خرید شما خالی است.', { icon: 'fa-exclamation-circle', danger: true });
                return;
            }
            askConfirm('نمایش آزمایشی خرید', `مبلغ نمایشی سبد: ${formatPrice(getCartTotal())}. در این نسخه پرداخت یا ثبت سفارش واقعی انجام نمی‌شود.`, function() {
                showToast('این فقط پیش‌نمایش است؛ برای خرید واقعی، درگاه پرداخت و سامانه سفارش باید پیاده‌سازی شوند.', {
                    icon: 'fa-info-circle', duration: 4200
                });
            });
        });
    }

    // ============================================================
    //  MODAL
    // ============================================================
    function openModal(id) {
        const p = getProduct(id);
        if (!p) return;
        selectedProductId = id;
        const imgSrc = p.img ||
            'assets/product-1.svg';
        document.getElementById('modalImg').innerHTML =
            `<img src="${imgSrc}" alt="${p.name}" style="max-width:100%;max-height:280px;object-fit:contain;" />`;
        document.getElementById('modalName').textContent = p.name;
        document.getElementById('modalBrand').textContent = p.brand;
        document.getElementById('modalDesc').textContent = p.desc || 'توضیحاتی برای این محصول ثبت نشده است.';
        document.getElementById('modalPrice').textContent = formatPrice(p.price);
        document.getElementById('modalRating').innerHTML =
            `<i class="fas fa-star"></i> ${p.rating} <span style="color:var(--text-muted);font-weight:400;">(${p.reviews} نظر)</span>`;
        const inCart = cart.some(item => item.id === p.id);
        const inWish = wishlist.includes(p.id);
        const btn = document.getElementById('modalAddCart');
        btn.innerHTML = inCart ? '<i class="fas fa-check"></i> حذف از سبد' : '<i class="fas fa-plus"></i> افزودن به سبد';
        const wishBtn = document.getElementById('modalWish');
        wishBtn.innerHTML = `<i class="${inWish ? 'fas' : 'far'} fa-heart" style="${inWish ? 'color:var(--primary);' : ''}"></i>`;
        document.getElementById('productModal').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.getElementById('productModal').classList.remove('open');
        document.body.style.overflow = '';
    }

    // ============================================================
    //  NAVIGATION
    // ============================================================
    function navigateTo(page) {
        const target = document.getElementById(`page-${page}`);
        if (!target) return;

        document.querySelectorAll('.page').forEach(el => el.classList.add('hidden'));
        target.classList.remove('hidden');

        document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
        const navLink = document.querySelector(`.nav-links a[data-page="${page}"]`);
        if (navLink) navLink.classList.add('active');

        currentPage = page;

        if (page === 'cart') renderCartPage();
        if (page === 'products') renderAllProducts();
        if (page === 'wishlist') renderWishlistPage();
        if (page === 'profile') updateBadges();
        if (page === 'home') { renderHomeProducts();
            renderCategories('categoryGrid'); }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ============================================================
    //  POPULATE FILTERS
    // ============================================================
    function populateFilters() {
        const catSel = document.getElementById('filterCategory');
        const brandSel = document.getElementById('filterBrand');
        const brands = [...new Set(PRODUCTS.map(p => p.brand))];

        catSel.innerHTML = `<option value="all">همه</option>` +
            CATEGORIES.filter(c => c !== 'همه').map(c => `<option value="${c}">${c}</option>`).join('');
        brandSel.innerHTML = `<option value="all">همه</option>` +
            brands.map(b => `<option value="${b}">${b}</option>`).join('');

        catSel.addEventListener('change', renderAllProducts);
        brandSel.addEventListener('change', renderAllProducts);
        document.getElementById('filterSort').addEventListener('change', renderAllProducts);
        document.getElementById('priceMax').addEventListener('input', renderAllProducts);
    }

    // ============================================================
    //  INIT
    // ============================================================
    function init() {
        loadState();
        renderHomeProducts();
        renderCategories('categoryGrid');
        populateFilters();
        renderAllProducts();
        updateBadges();

        document.querySelectorAll('[data-page]').forEach(el => {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                const page = this.dataset.page;
                if (page) navigateTo(page);
            });
        });

        document.getElementById('searchBtn').addEventListener('click', performSearch);
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') performSearch();
        });

        document.getElementById('modalClose').addEventListener('click', closeModal);
        document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
        document.getElementById('productModal').addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });

        document.getElementById('modalAddCart').addEventListener('click', function() {
            if (selectedProductId) {
                toggleCart(selectedProductId);
                const inCart = cart.some(item => item.id === selectedProductId);
                this.innerHTML = inCart ? '<i class="fas fa-check"></i> حذف از سبد' :
                    '<i class="fas fa-plus"></i> افزودن به سبد';
            }
        });

        document.getElementById('modalWish').addEventListener('click', function() {
            if (selectedProductId) {
                toggleWishlist(selectedProductId, null);
                const inWish = wishlist.includes(selectedProductId);
                this.innerHTML =
                    `<i class="${inWish ? 'fas' : 'far'} fa-heart" style="${inWish ? 'color:var(--primary);' : ''}"></i>`;
            }
        });

        document.getElementById('confirmYes').addEventListener('click', function() {
            const action = pendingConfirmAction;
            closeConfirm();
            if (action) action();
        });
        document.getElementById('confirmNo').addEventListener('click', closeConfirm);
        document.getElementById('confirmOverlay').addEventListener('click', function(e) {
            if (e.target === this) closeConfirm();
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') { closeModal();
                closeConfirm(); }
        });

        navigateTo('home');
    }

    document.addEventListener('DOMContentLoaded', init);

