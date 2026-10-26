# 🌌 Nathesh Portfolio — Next-Gen Interactive Developer Portfolio

[![Next.js 16](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A high-performance, dark/light theme, modern personal portfolio website built with **Next.js 16 (App Router & Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Featuring smooth **Framer Motion** animations, an **interactive AI voice & text chatbot facility**, particle background effects, and comprehensive showcases for engineering projects, industrial internships, academic research, and certifications.

---

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
- [🔮 Future Enhancements & Roadmap](#-future-enhancements--roadmap)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Architecture & Structure](#-project-architecture--structure)
- [⚙️ How to Install, Run & Build](#️-how-to-install-run--build)
  - [Prerequisites](#prerequisites)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Configure Environment Variables](#3-configure-environment-variables)
  - [4. Run Development Server](#4-run-development-server)
  - [5. Build for Production](#5-build-for-production)
  - [6. Run Production Server](#6-run-production-server)
  - [7. Code Quality & Linting](#7-code-quality--linting)
- [🚀 Deployment](#-deployment)
- [👨‍💻 Author & Connect](#-author--connect)
- [📜 License](#-license)

---

## ✨ Key Features

- **🤖 Interactive AI Chatbot Facility & Floating Assistant**:
  - In-page prompt showcase allowing visitors to ask instant questions regarding skills, education, projects, and contact info.
  - Floating chatbot widget with **Speech-to-Text (Voice Recognition)** input and **Text-to-Speech (Audio Synthesis)** output.
  - Instant pre-configured Q&A engine with quick filter chips and contextual responses.
- **🎨 Glassmorphic & Modern Aesthetics**:
  - Built with Tailwind CSS v4 using sleek dark-mode-first gradients, subtle borders, ambient glow lighting, and glassmorphic cards.
  - Dynamic **Particle Canvas Background** (`particles-background.tsx`) providing an immersive sci-fi atmosphere.
- **🌓 Seamless Theme Switching**:
  - Full Dark and Light theme toggle powered by `next-themes` with zero flicker.
- **📱 Fully Responsive & Mobile-First**:
  - Adaptive layout for mobile phones, tablets, laptops, and ultra-wide screens.
  - Smooth slide-out mobile drawer menu with touch-friendly navigation.
- **💼 Comprehensive Portfolio Showcases**:
  - **Hero Section**: Animated greeting, dynamic role highlights, and direct CTAs for Resume & Contact.
  - **About Section**: Professional summary, key career metrics, and technical domain highlights.
  - **Education Timeline**: Detailed academic milestones (B.Tech, Diploma, SSLC) with CGPA/percentages and academic highlights.
  - **Skills Matrix**: Categorized tech stacks (Frontend, Backend, Machine Learning, Database, Tools) with interactive cards and level bars.
  - **Projects Showcase**: Interactive cards featuring tech badges, detailed overviews, and direct GitHub/Live Demo links.
  - **Internship Experience**: Industrial experience details (e.g., Grandtwin Technology), responsibilities, and delivered ML/software outcomes.
  - **Research & Publications**: Academic conference presentations (e.g., CIETM-2026), paper insights, and domain focus.
  - **Certificates & Honors**: Verified certifications grid with credential modal view and verification links.
- **📩 Working Contact System**:
  - Client-side validated form integrated with **EmailJS** for instant email forwarding without requiring an external backend server.
  - Live visual feedback and interactive status toasts.

---

## 🔮 Future Enhancements & Roadmap

We are constantly improving and expanding the portfolio. Here are the planned features and enhancements:

- [ ] **🧠 Advanced RAG-Powered Chatbot**: Integrate a Retrieval-Augmented Generation (RAG) backend utilizing a vector database (Pinecone/Chroma) and OpenAI/Gemini API for deep semantic resume queries.
- [ ] **🧪 Live Interactive Project Demos**: Embed client-side WebAssembly / ONNX ML model inference directly in the browser to test machine learning models live on the site.
- [ ] **📝 Tech Blog & Technical Articles**: Add an MDX-driven technical blog section for publishing articles on full-stack web development, machine learning, and cybersecurity.
- [ ] **🌐 Internationalization (i18n)**: Multi-language support (English, Tamil, Hindi) via `next-intl`.
- [ ] **📊 Visitor Analytics Dashboard**: Privacy-friendly analytics to track visitor engagement, popular projects, and chatbot query patterns.
- [ ] **🔊 Audio Sound Effects**: Subtle, toggleable sci-fi UI micro-interaction sound effects for button clicks and modal openings.
- [ ] **🎯 3D WebGL Canvas Enhancements**: Further integrate Three.js / React Three Fiber interactive 3D models for an even more futuristic user experience.

---

## 🛠️ Tech Stack

### Core Technologies
| Category | Technology | Description |
|---|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Modern React framework with Turbopack, SSR, and static site optimization |
| **Library** | [React 19](https://react.dev/) | Latest React features and concurrency support |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Type-safe development with strict validation |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS framework with native CSS engine |
| **UI Components** | [Radix UI](https://www.radix-ui.com/) / [shadcn/ui](https://ui.shadcn.com/) | Accessible, unstyled UI primitives tailored for custom styling |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) | Production-ready motion library for fluid React animations |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent, and lightweight icon library |
| **Theming** | [Next-Themes](https://github.com/pacocoursey/next-themes) | Dark & light mode theme manager |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) | Performant form state handling and schema-based validation |
| **Email Service** | [EmailJS](https://www.emailjs.com/) | Direct client-side email delivery system |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) | Sleek, customizable toast notifications |

---

## 📁 Project Architecture & Structure

```plaintext
Nathesh-portfolio/
├── app/
│   ├── globals.css              # Global styles, Tailwind variables & theme tokens
│   ├── layout.tsx               # Root layout, font definitions & ThemeProvider
│   └── page.tsx                 # Main single-page portfolio layout assembling all sections
├── components/
│   ├── back-to-top.tsx          # Floating button to smoothly scroll to top
│   ├── navigation.tsx           # Responsive navbar with desktop & mobile drawer links
│   ├── particles-background.tsx # Interactive background particle network
│   ├── project-card.tsx         # Reusable animated card component for projects
│   ├── scene-3d.tsx             # 3D canvas interaction element
│   ├── skill-card.tsx           # Interactive skill showcase card with progress indicator
│   ├── theme-provider.tsx       # Next-Themes provider wrapper
│   ├── theme-toggle.tsx         # Dark / Light theme toggle switch
│   ├── chatbot/
│   │   ├── chatbot-data.ts      # Profile knowledge base & Q&A prompt database
│   │   └── chatbot-widget.tsx   # Floating AI chatbot with Voice Recognition & TTS
│   ├── sections/
│   │   ├── hero.tsx             # Hero section with headline & direct action CTAs
│   │   ├── about.tsx            # Personal background, summary & journey
│   │   ├── education.tsx        # Academic timeline (B.Tech, Diploma, SSLC)
│   │   ├── skills.tsx           # Categorized skill matrix & tools
│   │   ├── projects.tsx         # Showcase of full-stack & ML projects
│   │   ├── chatbot-services.tsx # Interactive AI Chatbot facility showcase
│   │   ├── internship.tsx       # Industrial experience & role breakdown
│   │   ├── research.tsx         # Academic publications & conference presentations
│   │   ├── certificates.tsx     # Verified credentials & honors
│   │   └── contact.tsx          # Contact form integrated with EmailJS
│   └── ui/                      # shadcn/ui accessible component primitives (Button, Input, etc.)
├── public/                      # Static assets, icons, and media files
├── next.config.mjs              # Next.js build and optimization configuration
├── package.json                 # Project dependencies, scripts, and engine specifications
├── postcss.config.mjs           # PostCSS plugins configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

---

## ⚙️ How to Install, Run & Build

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.x`, `v20.x`, `v22.x`, or higher ([Download Node.js](https://nodejs.org/))
- **Package Manager**: `npm` (comes with Node), `pnpm`, or `yarn`
- **Git**: ([Download Git](https://git-scm.com/))

Verify your installation:
```bash
node -v
npm -v
git --version
```

---

### 1. Clone the Repository

```bash
git clone https://github.com/NATHESH6/Nathesh-portfolio.git
cd Nathesh-portfolio
```

---

### 2. Install Dependencies

Install all project dependencies using npm:

```bash
npm install
```

*(Alternatively, if using `pnpm`: `pnpm install`)*

---

### 3. Configure Environment Variables (Optional)

The contact form is pre-configured with EmailJS. If you wish to use your own EmailJS account or credentials, create a `.env.local` file in the root directory:

```env
# EmailJS Configuration (optional / custom setup)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

### 4. Run Development Server

Launch the development server with Turbopack for ultra-fast HMR (Hot Module Replacement):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application live. Any changes made to the source files will update instantly.

---

### 5. Build for Production

Compile and optimize the entire application for production deployment:

```bash
npm run build
```

This command runs Next.js production build, validates code, minifies CSS/JavaScript bundles, and generates optimized static pages.

---

### 6. Run Production Server

To preview the generated production build locally:

```bash
npm run start
```

This starts a high-performance local production server at [http://localhost:3000](http://localhost:3000).

---

### 7. Code Quality & Linting

Run ESLint to inspect and maintain code quality:

```bash
npm run lint
```

---

## 🚀 Deployment

The easiest and recommended way to deploy this Next.js portfolio is with the [Vercel Platform](https://vercel.com/new):

1. Push your repository to **GitHub**.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Keep the default settings (Next.js preset is detected automatically).
5. Click **Deploy**.

Your portfolio will be built and live with free HTTPS and global edge CDN distribution in less than 2 minutes.

---

## 👨‍💻 Author & Connect

**Nathesh**  
*Web Developer & Machine Learning Enthusiast*

- 🌐 **Portfolio**: [Live Website](https://nathesh-portfolio.vercel.app) *(or your deployed URL)*
- 🐙 **GitHub**: [@NATHESH6](https://github.com/NATHESH6/)
- 💼 **LinkedIn**: [Nathesh Venkateswaran](https://www.linkedin.com/in/nathesh-venkateswaran-0b7679324/)
- 📧 **Email**: [megaladevi2084@gmail.com](mailto:megaladevi2084@gmail.com)
- 📱 **Phone**: [+91 93612 55171](tel:+919361255171)
- 📍 **Location**: Tamil Nadu, India

---

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) — feel free to fork, study, and customize it for your personal portfolio. Attribution to the original author is appreciated!

⭐ *If you find this portfolio helpful or inspiring, please consider giving it a star on GitHub!*
