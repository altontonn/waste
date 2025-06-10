### 🛠️ Wewantwaste - Skip Selection Page Redesign\

## 📋 Challenge Summary
The goal of this challenge was to redesign the 'Choose Your Skip Size' page from wewantwaste.co.uk, while keeping its functionality int

API - https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

🎯 Objectives
✅ Redesign the skip selection page with a modern, clean UI.

✅ Ensure full responsiveness across mobile, tablet, and desktop.

✅ Use React best practices (components, hooks, reusability).

✅ Maintain original page functionality (select skip, view price, etc.).

✅ Deliver clear, clean, and maintainable code with documentation.


🚀 My Approach
🧱 Project Structure

components/SkipList.jsx – Fetches data and renders skip cards.

components/Header.jsx – Navigation between steps (Postcode, Waste Type, etc.).

contexts/SkipContext.jsx – Context API for managing skip state (optional but used for extensibility).

App.jsx – Sets up routing and renders main content.


🎨 UI/UX Enhancements
Redesigned layout using Tailwind CSS for styling.

Skip cards are modernized with hover effects, responsive layout, and improved readability.

Added icons and a navigation menu to simulate the multi-step process.

Highlighted selected skip with dynamic border and visual feedback.

“Not allowed on road” warning is visually separated for clarity.

📱 Responsiveness
Used Tailwind responsive classes (md:, lg:, etc.) to adapt layout:

Grid layout changes columns based on screen size.

Menu collapses into a hamburger on small screens (mobile).

Font sizes and spacing adjust for legibility across devices.

🔌 Data Handling
Fetched skips using fetch from the provided API endpoint.

Used useEffect and useState to handle loading, error, and render states.

Allowed selection of skip card and maintained state with useState.


🧪 How to Run
bash
Copy
Edit
# Clone repo and navigate in
npm install
npm run dev

📦 Tech Stack
⚛️ React

💨 Tailwind CSS

📡 Fetch API

🧠 React Hooks (useState, useEffect)

🧭 React Router (for navigation steps)

