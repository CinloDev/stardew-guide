# 🌾 Stardew Valley Guide

An interactive companion app for **Stardew Valley** players.

Track museum progress, discover NPC gift preferences, browse cooking recipes and check seasonal events — all in one place.

Designed as a **scalable frontend architecture project**, starting with static datasets and evolving toward a full backend implementation.

---

# 🚀 Live Demo

https://stardewguide.vercel.app

---

# ✨ Features

* 📅 **Seasonal calendar** with festivals and events
* 🎁 **NPC gift guide** and birthday tracker
* 🏛️ **Interactive museum tracker**
* 📖 **Cooking recipes database**
* 💾 Progress saved using **localStorage**
* 📱 Fully **responsive UI**

---

# 🧰 Tech Stack

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **TailwindCSS**
* **Zustand** – global state management
* **Biome** – linting and formatting
* **Prisma** – database layer preparation
* **Vercel** – deployment

---

# 🧱 Project Architecture

The project follows a **feature-based architecture**, separating UI components, domain logic and datasets.

src/
│
├── app/              → Next.js routes and pages
├── components/       → reusable UI components
├── features/         → domain logic and feature modules
├── data/             → game datasets (JSON)
├── store/            → global state (Zustand)
├── types/            → TypeScript models
│
└── prisma/           → database schema for future backend

This structure allows the application to **start simple with static data and scale to a full backend** without major refactoring.

---

# 📊 Data Strategy

Current data sources:

* Static **JSON datasets** located in `src/data`
* User progress stored in **localStorage**

The repository already includes:

* an API route for progress handling
* a Prisma schema

This prepares the project for **future migration to PostgreSQL**.

---

# 🧪 Future Backend Integration

Planned architecture evolution:

Frontend (Next.js)
⬇
API Routes
⬇
Prisma ORM
⬇
PostgreSQL

This ensures the current architecture remains compatible with a **full stack upgrade**.

---

# 🖥️ Local Development

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

# ⚙️ Available Scripts

Development

```
npm run dev
npm run build
npm run start
```

Code quality

```
npm run lint
npm run format
npm run check
```

Database

```
npm run prisma:generate
npm run prisma:migrate
```

Data generation

```
npm run generate:data
```

---

# 🗺️ Roadmap

Planned improvements:

* Connect progress persistence to **PostgreSQL**
* Complete **Stardew Valley datasets**
* Add **user authentication**
* Improve search and filtering
* Add **unit and integration tests**
* Crop planner tool
* Mobile UX improvements
* Mod compatibility

---

# 🎯 Project Goals

This project was created to practice:

* scalable frontend architecture
* feature-based project structure
* state management patterns
* progressive backend integration
* production-ready deployment

---

# 📷 Screenshots

*(To be added)*

Recommended structure:

docs/
calendar.png
museum.png
recipes.png

---

# 📜 License

MIT

---

⭐ If you like the project, consider starring the repository.
