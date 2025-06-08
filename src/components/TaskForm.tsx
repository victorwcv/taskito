import type { Task } from "@/stores";
import { useEffect, useRef, useState } from "react";
import { useBoardStore } from "@/stores";
import { toast } from 'sonner';

type Props = {
  boardId: string;
  columnId: string;
  closeForm: () => void;
};

const TaskForm: React.FC<Props> = ({ boardId, columnId, closeForm }) => {
  const [title, setTitle] = useState<{ value: string; error?: string }>({
    value: "",
  });
  const [description, setDescription] = useState<{ value: string; error?: string }>({ value: "" });
  const ref = useRef<HTMLInputElement>(null);

  const { addTask } = useBoardStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.value.trim()) {
      setTitle({ ...title, error: "Title is required" });
      return;
    } else {
      setTitle({ ...title, error: undefined });
    }

    const task: Task = {
      id: "",
      title: title.value,
      description: description.value,
      createdAt: new Date().toISOString(),
    };

    addTask(boardId, columnId, task);
    setTitle({ value: "" });
    setDescription({ value: "" });

    if (ref.current) {
      ref.current.focus();
    }
    
    toast.success('Task created successfully');
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col bg-white shadow-md p-8 gap-4 w-full max-w-md mx-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="absolute text-white top-4 right-4 btn btn-error" onClick={closeForm}>
        X
      </button>
      <div className="pt-8 space-y-4">
        <h2 className="text-2xl font-bold">New Task</h2>
        <input
          ref={ref}
          id="title"
          type="text"
          placeholder="Title"
          className="input input-primary w-full"
          value={title.value}
          onChange={(e) => setTitle({ value: e.target.value })}
        />
        {title.error && <p className="text-red-500">{title.error}</p>}
        <textarea
          placeholder="Description (optional)"
          className="textarea textarea-primary w-full"
          value={description.value}
          onChange={(e) => setDescription({ value: e.target.value })}
          rows={3}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary w-full mt-4">
        Add to Board
      </button>
    </form>
  );
};

export default TaskForm;
