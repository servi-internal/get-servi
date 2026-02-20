# 🍽️ Ser.vi - Restaurant Management Platform

> Transform your restaurant with zero monthly fees. All-in-one POS, online ordering, and marketing automation platform.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Latest-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

## 🚀 About

**Ser.vi** is a comprehensive restaurant management solution that helps restaurants:

- 💳 **Zero Monthly Fees** - Pay only per transaction, no hidden costs
- 🖥️ **Integrated POS System** - Works on any device (iPad, Android, PC)
- 🛒 **Online Ordering** - Commission-free direct ordering platform
- 📱 **QR Code Ordering** - Self-service table ordering
- 📊 **Marketing Automation** - Automated customer acquisition and retention
- 🔗 **All-in-One Platform** - Everything connected in one hub

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router, React Server Components)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React, Bootstrap Icons
- **Linting:** ESLint 9 + eslint-config-next

### Integrations
- **Form Submissions:** Stracker API (server-side proxy at `/api/stracker`)
- **Analytics:** Vercel Analytics + Vercel Speed Insights + Google Analytics (gtag)
- **Deployment:** Vercel

### Features
- ⚡ Server-side rendering (SSR) + React Server Components
- 🎨 Modern, responsive design
- 🔍 SEO optimized
- 📱 Mobile-first approach
- ♿ Accessible components (Radix UI)
- 🎭 Smooth animations

## 📍 Main Pages

- **/** – Home (hero, features, testimonials, CTA)
- **/pricing** – Pricing tiers, savings calculator, comparison
- **/integrated-pos** – POS (hero, features grid, order types, connected hub, table-side payments, gift cards)
- **/online-ordering** – Online ordering, comparison, why choose us, scale features
- **/self-service** – QR ordering, how it works, perfect setup, video demo
- **/marketing-services** – Marketing services
- **/about** – Company, mission, values
- **/schedule-demo** – Demo request form
- **/privacy**, **/terms** – Legal

## 🌐 Live Site

Visit [get.ser.vi](https://get.ser.vi) to see the platform in action.

## 🔗 Form Integration (Stracker)

The `/schedule-demo` page (Book a Meeting form) submits to the **Stracker** API for lead tracking and management.

### How it works
1. Client-side form with validation (`lib/validation/formValidation.ts`)
2. `useStrackerForm` hook (`lib/hooks/useStrackerForm.ts`) handles submission with retry logic (exponential backoff), client-side rate limiting, and Google Analytics event tracking
3. Submissions are proxied through a Next.js API route (`app/api/stracker/route.ts`) to keep the API key server-side
4. The server route applies IP-based rate limiting (5 req/min) before forwarding to the Stracker API

### Environment Variables
| Variable | Scope | Description |
|---|---|---|
| `STRACKER_API_URL` | Server | Stracker API endpoint |
| `STRACKER_API_KEY` | Server | Stracker API key (never exposed to client) |

## 📄 License

© 2026 Ser.vi. All rights reserved.

---

<div align="center">
  <strong>Built with ❤️ for restaurants worldwide</strong>
</div>
