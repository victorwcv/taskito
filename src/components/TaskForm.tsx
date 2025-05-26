import { useEffect, useRef, useState } from "react";

type Props = {
  onAddTask: (title: string, description: string) => void;
};

const TaskForm: React.FC<Props> = ({ onAddTask }) => {
  const [title, setTitle] = useState<{ value: string; error?: string }>({
    value: "",
  });
  const [description, setDescription] = useState<{ value: string; error?: string }>({ value: "" });
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.value.trim()) {
      setTitle({ ...title, error: "Title is required" });
      return;
    } else {
      setTitle({ ...title, error: undefined });
    }

    onAddTask(title.value, description.value);
    setTitle({ value: "" });
    setDescription({ value: "" });

    if (ref.current) {
      ref.current.focus();
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full h-full max-w-md mx-auto">
      <div className="pt-8 space-y-4">
        <h2 className="text-2xl font-bold">New Task</h2>
        <input
          ref={ref}
          id="title"
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
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mt-auto"
      >
        Add to Board
      </button>
    </form>
  );
};

export default TaskForm;
