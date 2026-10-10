# Narges Beauty — Demo Storefront

A Persian, RTL, single-page storefront prototype for a beauty shop. It includes product cards, search, category/brand filters, product details, a local cart, a wishlist, and browser-local persistence.

## Run locally

Open `لوازم آرایشی.html` in a modern browser. The UI uses Font Awesome and Vazirmatn from CDNs; product photos are remote Unsplash URLs, so those assets need internet access.

## Important demo limitations

- This is a **portfolio/demo interface**, not a live shop. Product names, brand associations, ratings, descriptions, and prices are illustrative sample data and must be verified/replaced before any commercial use.
- Cart and wishlist are stored only in the current browser using `localStorage`.
- Checkout deliberately does not create an order, clear the cart, charge money, or contact a backend. No payment gateway, inventory, customer accounts, or order-management backend exists.
- Contact details shown in the template are placeholders and must be replaced before publication.
- The project is a single HTML file to preserve the original working structure; styles and JavaScript can be separated in a future refactor.

## Suggested next steps

1. Replace sample products and verify product-image licensing.
2. Add a backend and server-side validation only if a real store is intended.
3. Configure real contact details and privacy/returns/shipping policies before public launch.
