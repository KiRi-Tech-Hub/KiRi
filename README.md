# KiRi Tech Hub

High-end technical consultancy and development. We architect, design, and engineer scalable digital ecosystems for founders and scale-stage companies.

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS 4, Vanilla CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, Tabler Icons
- **Deployment**: Vercel

## 🛠️ Project Structure

```text
KiRi/
├── frontend/             # Root of the React application
│   ├── public/           # Static assets (logos, videos, robots.txt, sitemap.xml)
│   ├── src/              # Source code
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page-level components
│   │   ├── data/         # Site content and configuration
│   │   └── App.tsx       # Main routing and layout
│   ├── index.html        # Entry HTML with SEO & Analytics
│   └── package.json      # Dependencies and scripts
└── README.md             # This file
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## ⚙️ Local Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd KiRi
   ```

2. **Navigate to frontend**:
   ```bash
   cd frontend
   ```

3. **Set up environment variables**:
   The contact form requires **EmailJS** credentials.
   - Copy the example file: `cp .env.example .env`
   - Open `.env` and fill in your credentials from the [EmailJS Dashboard](https://dashboard.emailjs.com/).

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Run development server**:
   ```bash
   npm run dev
   ```

6. **Open the browser**:
   Visit `http://localhost:5173` to see the site running.

## 🔐 Environment Variables

The project uses the following variables in the `frontend/` directory:

| Variable | Description |
| :--- | :--- |
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service identifier. |
| `VITE_EMAILJS_TEMPLATE_ID` | The ID of the email template you want to use. |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public API key. |

## 📦 Deployment & Production

- **Domain**: [mykiri.in](https://mykiri.in)
- **Host**: Vercel (Auto-deploys from `main` branch)
- **SEO**: 
  - `sitemap.xml` and `robots.txt` are located in `frontend/public/`.
  - Meta tags, Open Graph, and Twitter Cards are configured in `index.html`.
- **Analytics**: Google Analytics 4 (GA4) is integrated via the tracking script in `index.html`.

## 🤝 Founder

**Kishan Roy** - Founder & CEO of KiRi Tech Hub.

---
Precision Engineered. High-Performance Digital Products.
