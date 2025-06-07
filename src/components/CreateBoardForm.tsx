import { useBoardStore } from "@/stores";
import { useState } from "react";
import { useNavigate } from "react-router";

const CreateBoardForm = () => {
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

    navigate(`/home`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 p-4 shadow-xl rounded-xl bg-zinc-100 dark:bg-zinc-800">
      <h2 className="text-xl font-semibold">Create New Board</h2>

      <div>
        <label className="block text-sm m-1">Board Title</label>
        <input
          type="text"
          className="input input-primary"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Columns</label>
        <div className="space-y-2">
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
        </div>

        {columns.length < 6 && (
          <button type="button" onClick={handleAddColumn} className="btn btn-primary mt-2">
            + Add another column
          </button>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Create Board
      </button>

    </form>
  );
};

export default CreateBoardForm;
