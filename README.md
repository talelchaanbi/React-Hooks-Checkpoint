# Movie Night Planner Dashboard

React Hooks checkpoint project by **Talel Chaanbi** (GOMYCODE student).

This dashboard showcases how to manage a personal movie library with modern React patterns. Users can browse seeded favourites, filter the list by title or rating, and add new entries through a controlled form — all within a clean, responsive interface.

---

## 🚀 Objectives
- Demonstrate mastery of functional components and hooks (`useState`, `useEffect`, `useMemo`)
- Build reusable UI modules (`MovieCard`, `MovieList`, `Filter`, `AddMovie`)
- Deliver an intuitive dashboard experience for managing movies or TV shows

---

## 🖥️ Dashboard Walkthrough
- **Profile Header**: highlights the learner, checkpoint title, deadline, and quick link back to the project list.
- **Control Panel** (left column on desktop):
	- `Filter` keeps the movie list in sync with title keywords and minimum rating.
	- `AddMovie` uses controlled inputs to capture title, description, poster URL, and rating, then resets after submission.
- **Movie Gallery** (right column):
	- `MovieList` lays out responsive `MovieCard` components.
	- `MovieCard` renders the poster, synopsis, and rating with a built-in fallback image.

---

## ✅ Feature Checklist
- [x] Default movies loaded via `useEffect`
- [x] Case-insensitive title filtering
- [x] Minimum rating filter
- [x] Add new movie with validation and unique IDs
- [x] Responsive layout that keeps the gallery visible while using the form

---

## 🧩 Component Responsibilities
- `App`: central state holder, handles filtering logic with `useMemo`
- `Filter`: controlled text and number inputs for live filtering
- `AddMovie`: controlled form that calls `onAdd` with validated data
- `MovieList`: outputs a grid of cards and handles the empty state
- `MovieCard`: displays movie details and swaps in a fallback poster on errors

---

## 🛠️ Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm start

# run tests
npm test

# build for production
npm run build
```

Open `http://localhost:3000` to interact with the dashboard.

---

## 📊 Evaluation Criteria
- Respect of checkpoint guidelines and hook usage
- Filtering logic works as expected
- Adding new movies updates the gallery instantly
- Layout remains accessible on both desktop and mobile widths

---

## 📤 Submission Notes
Push the project to a GitHub repository named after the checkpoint, then submit the link through the GOMYCODE platform. After instructor approval the submission link becomes read-only, so verify everything beforehand.

---

## 🤝 Community Reminder
Stay engaged with the GOMYCODE community — share progress, ask questions, and keep levelling up together.
