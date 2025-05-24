import { useState } from "react";
import type { Task } from "../types/task";

type Props = {
  onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<Props> = ({ onAddTask }) => {
  const [title, setTitle] = useState<{ value: string; error?: string }>({
    value: "",
  });
  const [description, setDescription] = useState<{ value: string; error?: string }>({ value: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.value.trim()) {
      setTitle({ ...title, error: "Title is required" });
      return;
    } else {
      setTitle({ ...title, error: undefined });
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.value.trim(),
      description: description.value.trim(),
      createdAt: new Date().toISOString(),
    };

    onAddTask(newTask);
    setTitle({ value: "" });
    setDescription({ value: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-4 w-full max-w-md space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Add New Task</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border rounded"
        value={title.value}
        onChange={(e) => setTitle({ value: e.target.value })}
      />
      {title.error && <p className="text-red-500">{title.error}</p>}
      <textarea
        placeholder="Description (optional)"
        className="w-full p-2 border rounded resize-none"
        value={description.value}
        onChange={(e) => setDescription({ value: e.target.value })}
        rows={3}
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
