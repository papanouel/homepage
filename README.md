# Frederic Nouel - Homepage & Portfolio

Professional portfolio and mentorship platform for **Frederic Nouel**, Executive Tech Lead, Game Dev Veteran, and Growth Architect based in Tokyo.

This project showcases a modern, high-performance web experience featuring interactive 3D elements and a comprehensive look into Frederic's career and expertise.

## 🚀 Features

- **Interactive 3D Hero Scene**: Built with Three.js/React Three Fiber for an immersive first impression.
- **Responsive Design**: Fully optimized for mobile and desktop using Tailwind CSS.
- **Dynamic Content**: Data-driven architecture via `src/constants.ts`.
- **Modern Animations**: Smooth transitions and entry animations powered by Framer Motion.
- **Automated Deployment**: Integrated GitHub Actions for seamless CI/CD to GitHub Pages.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **3D Engine**: [Three.js](https://threejs.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [GitHub Actions](https://github.com/features/actions)

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/papanouel/homepage.git
   cd homepage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up environment variables:
   Create a `.env.local` file if you need to override any defaults.
   ```bash
   cp .env.example .env.local
   ```

### Local Development

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

## 📦 Building for Production

To create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

## 🚢 Deployment

This project is configured for automatic deployment to **GitHub Pages** via GitHub Actions.

### Automation
Every push to the `main` branch triggers the `.github/workflows/deploy.yml` workflow, which builds the project and deploys it to the `github-pages` environment.

### GitHub Repository Setup
Ensure your GitHub repository is configured to use GitHub Actions as the source for Pages:
1. Go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.

## 📞 Contact

- **Name**: Frederic Nouel
- **Location**: Tokyo, Japan
- **Mentorship**: [Book a session on Calendly](https://calendly.com/papanouel/30min-call)
- **LinkedIn**: [papanouel](https://www.linkedin.com/in/papanouel/)

---
Built with passion in Tokyo. © 2026 Frederic Nouel
