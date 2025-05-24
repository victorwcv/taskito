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

## Backlog Inicial - Taskito

### User Stories

| Status | ID  | User Story                              |
|--------|-----|---------------------------------------|
| ❌     | HU1 | **Create Tasks:** As a user, I want to create tasks with a title and description so I can keep track of what I need to do. |
| ❌     | HU2 | **View Task List:** As a user, I want to see a list of my tasks ordered by creation date to easily find and manage them. |
| ❌     | HU3 | **Mark Tasks as Completed:** As a user, I want to mark tasks as completed to differentiate between pending and done work. |
| ❌     | HU4 | **Delete Tasks:** As a user, I want to delete tasks that I no longer need to keep my task list clean. |
| ❌     | HU5 | **Edit Tasks:** As a user, I want to edit existing tasks to update their title or description if something changes. |
| ❌     | HU6 | **Filter Tasks by Status:** As a user, I want to filter tasks to show all, only completed, or only pending tasks so I can focus on what matters. |
| ❌     | HU7 | **Persist Tasks:** As a user, I want my tasks saved locally in my browser so I don’t lose them on refresh or page close. |

---

### Legend:

- ✅ Completed
- 🔄 In Progress
- ❌ Pending


## 🧠 Future Improvements

* Authentication with Firebase Auth
* Task comments & activity log
* Labels and due dates
* Dark mode
* User management for team collaboration

---

## 📄 License

MIT License
