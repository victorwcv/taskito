# Taskito

A simple, personal Kanban-style task manager built with React and Tailwind CSS. Perfect for organizing ideas, tracking project tasks, and showcasing frontend engineering skills.

---

## 🚀 Features

* Create tasks with title, description, status, and tags
* Drag and drop tasks between columns (`Backlog`, `In Progress`, `Done`)
* Real-time UI updates using localStorage or Firebase
* Responsive design with Tailwind CSS
* Clean and modular React components

---

## 🛠 Tech Stack

* **React + Vite**
* **Tailwind CSS**
* **@hello-pangea/dnd** for drag and drop
* **Zustand** or **React Context API** for state management
* **LocalStorage** (default) or Firebase (optional)

---

## 🗂 Folder Structure

```
src/
│
├── components/           # Reusable UI components
│   ├── Board.jsx         # Main Kanban board
│   ├── Column.jsx        # Column (Backlog, In Progress, Done)
│   ├── TaskCard.jsx      # Individual task
│   └── NewTaskModal.jsx  # Modal to create/edit tasks
│
├── store/                # Zustand or Context for global state
│   └── taskStore.js
│
├── utils/                # Utility functions
│   └── generateId.js
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🧪 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/taskito.git
   cd taskito
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

---

## 🧠 Future Improvements

* Authentication with Firebase Auth
* Task comments & activity log
* Labels and due dates
* Dark mode
* User management for team collaboration

---

## 📄 License

MIT License
