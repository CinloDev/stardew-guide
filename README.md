# 🌾 Stardew Guide | Interactive Companion

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://stardewguide.vercel.app)
[![Tech Stack](https://img.shields.io/badge/stack-Next.js%20|%20TS%20|%20Zustand-blue)](https://nextjs.org)

**Stardew Guide** is a high-performance, mobile-first companion application designed to optimize the gaming experience for Stardew Valley players.

Designed as a **scalable frontend architecture project**, it centralizes seasonal planning, NPC interaction data, and museum collection progress within a premium interface.

---

## ✨ Features

*   📅 **Dynamic Seasonal Dashboard**: Real-time highlights for festivals, birthdays, and vendor availability based on manual game-date synchronization.
*   👥 **Villager Intelligence**: Deep-dive into NPC gift preferences and birthday alerts.
*   🏛️ **Interactive Museum Tracker**: Log donations and track geoda-only minerals.
*   🍳 **Cooking Database**: Complete recipe guide with acquisition methods.
*   💾 **Persistent State**: Progress is saved using a client-side strategy, ensuring a seamless experience without a backend.
*   📱 **Premium UI**: Adaptive design for desktop and mobile with smooth micro-animations.

---

## 🛠️ Technical Showcase

This project serves as a demonstration of modern web engineering patterns:

### 🏗️ Feature-Based Architecture
The codebase follows a modular structure where each functional unit (Calendar, Museum, Villagers) isolates its own components, logic, and types. This prevents "prop drilling" and ensures effortless scalability.

```text
src/
├── features/        # Isolated functional modules
│   ├── calendar/    # Logic, utils & components for game-time
│   ├── museum/      # Tracking logic
│   └── villagers/   # NPC data and gift preference UI
├── store/           # Global state (Zustand)
└── components/      # Shared UI primitives
```

### ⚡ State Management & Persistence
Using **Zustand**, I implemented a "Game Date Sync" system. Users manually set their in-game season and day, and the entire app adapts instantly. This state is persisted to `localStorage`, mimicking a backend-like persistence with zero latency.

### 🎨 Design System
Built with **TailwindCSS 4**, the UI uses a custom color palette that shifts dynamically with the game's current season (Spring, Summer, Fall, Winter), enhancing immersion through visual feedback.

---

## 🚀 Getting Started

1.  **Clone & Install**:
    ```bash
    git clone https://github.com/yourusername/stardew-guide.git
    cd stardew-guide
    npm install
    ```

2.  **Run Development**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

---

## 📑 Portfolio Integration

If you are a recruiter or developer looking at this code, you can find more about the architectural decisions by clicking the **"About the Code"** button in the application footer.

Developed by [CinloDev](https://www.cinlodev.com) 🚀

---

## 📜 License

MIT © [CinloDev]
