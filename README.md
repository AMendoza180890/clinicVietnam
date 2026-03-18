# MediCare Clinic — Multilingual Astro Website

A fully multilingual medical clinic website built with **Astro** and **Tailwind CSS**, supporting:
- 🇺🇸 English (`/en/`)
- 🇻🇳 Tiếng Việt (`/vi/`)
- 🇰🇷 한국어 (`/ko/`)

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Visit `http://localhost:4321` — it will redirect to `/en/` automatically.

### 3. Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── HomePage.astro       # Home page component
│   ├── ServicesPage.astro   # Services page component
│   ├── DoctorsPage.astro    # Doctors page component
│   └── ContactPage.astro    # Contact page component
├── layouts/
│   └── Layout.astro         # Base layout (navbar, footer, WhatsApp btn)
├── i18n/
│   └── translations.js      # All UI strings for EN/VI/KO
└── pages/
    ├── index.astro           # Root → redirects to /en/
    ├── en/                   # English pages
    ├── vi/                   # Vietnamese pages
    └── ko/                   # Korean pages
```

---

## 🌐 Features

- **Multi-language**: Full UI translations for English, Vietnamese, Korean
- **Language Switcher**: Navbar dropdown to switch languages seamlessly
- **Responsive**: Mobile-first design with hamburger menu
- **Pages**: Home, Services, Doctors (with filter), Dental Clinic, Contact (with form + map)
- **Footer**: Social icons (Facebook, Instagram, X, YouTube), location, phone, address, copyright
- **Zalo Button**: Floating button linked to WhatsApp with pulsing animation
- **Section Gaps**: 15px separation between all sections
- **Smooth Scroll**: Scroll-triggered navbar style changes

---

## ⚙️ Customization

### Change WhatsApp number
In `src/layouts/Layout.astro`, update:
```html
<a href="https://wa.me/YOUR_NUMBER_HERE" ...>
```

### Update contact info
In `src/i18n/translations.js`, update these keys:
- `footer.phone`
- `footer.address`
- `footer.location`

### Add new language
1. Add to `languages` object in `translations.js`
2. Add translations under new language code
3. Create `src/pages/[newlang]/` directory with page files

---
