import { useState, useEffect } from "react";
import type { Task } from "../types/task";

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
  }

  const addTask = (task: Task) => {
    const updated = [task, ...tasks];
    saveTasks(updated);
  }

  const removeTask = (id: string) => {
    const updated = tasks.filter((task) => task.id !== id);
    saveTasks(updated);
  }

  const clearTasks = () => {
    saveTasks([]);
  }


  return {
    tasks,
    addTask,
    removeTask,
    clearTasks
  }
}