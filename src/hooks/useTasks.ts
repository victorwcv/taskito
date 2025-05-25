import { useState, useEffect } from "react";
import type { Status, Task } from "../types/task";

const TASKS_KEY = "taskito-tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(TASKS_KEY);
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  const saveTasks = (updatedTasks: Task[]) => {
    setTasks(updatedTasks);
    localStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
  };

  const addTask = (title: string, description: string = "") => {
    const task: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      createdAt: new Date().toISOString(),
      status: "backlog",
    };
    const updated = [task, ...tasks];
    saveTasks(updated);
  };

  const removeTask = (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;
    const updated = tasks.filter((task) => task.id !== id);
    saveTasks(updated);
  };

  const clearTasks = () => {
    saveTasks([]);
  };

  const updateStatus = (id: string, status: Status) => {
    const updated = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status };
      }
      return task;
    });
    saveTasks(updated);
  }

  return {
    tasks,
    addTask,
    removeTask,
    clearTasks,
    updateStatus
  };
}
