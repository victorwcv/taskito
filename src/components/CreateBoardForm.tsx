import { useBoardStore } from "@/stores";
import { useState } from "react";
import { useNavigate } from "react-router";
import { MessageCircleWarning, Minus } from "lucide-react";
import { toast } from "sonner";

const CreateBoardForm: React.FC = () => {
  const navigate = useNavigate();
  const { addBoard } = useBoardStore();

  const [boardTitle, setBoardTitle] = useState("");
  const [columns, setColumns] = useState(["", "", ""]);

  const handleColumnChange = (index: number, value: string) => {
    const updated = [...columns];
    updated[index] = value;
    setColumns(updated);
  };

  const handleAddColumn = () => {
    if (columns.length < 6) {
      setColumns([...columns, ""]);
    }
  };

  const handleRemoveColumn = (index: number) => {
    if (columns.length > 3) {
      const updated = [...columns];
      updated.splice(index, 1);
      setColumns(updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanTitle = boardTitle.trim();
    const cleanColumns = columns.map((c) => c.trim()).filter(Boolean);

    if (!cleanTitle || cleanColumns.length < 3) return;

    const boardId = addBoard(cleanTitle);

    // Agregar las columnas
    cleanColumns.forEach((col) => {
      useBoardStore.getState().addColumn(boardId, col);
    });

    // Reset
    setBoardTitle("");
    setColumns(["", "", ""]);

    toast.success("Board created successfully");

    navigate(`/boards/${boardId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-xl m-1 font-semibold">Board Title</label>
        <input
          type="text"
          className="input input-primary"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <label className="block m-1 text-lg">Columns</label>
        <div className="flex gap-2 flex-1/5">
          {columns.map((col, index) => (
            <input
              key={index}
              type="text"
              className="input input-primary"
              placeholder={`Column ${index + 1}`}
              value={col}
              onChange={(e) => handleColumnChange(index, e.target.value)}
              required={index < 3} // los primeros 3 son requeridos
            />
          ))}
          <button
            type="button"
            className="btn btn-primary btn-dash"
            onClick={() => handleRemoveColumn(columns.length - 1)}
            disabled={columns.length <= 3}
          >
            <span className="sr-only">Remove Column</span>
            <Minus className="w-5 h-5" />
          </button>
        </div>

        <div className="text-sm text-gray-500 mt-2 flex items-center gap-1">
          <MessageCircleWarning size={16} />
          <p>You can add up to 6 columns. The first 3 are required.</p>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          onClick={handleAddColumn}
          className="btn btn-dash btn-primary w-52"
          disabled={columns.length >= 6}
        >
          + Add another column
        </button>

        <button type="submit" className="btn btn-primary w-52">
          Create Board
        </button>
      </div>
    </form>
  );
};

export default CreateBoardForm;
