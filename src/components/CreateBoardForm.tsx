import { useBoardStore } from "@/stores";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

type Props = {
  closeForm: () => void;
  showCloseButton?: boolean;
};

const CreateBoardForm: React.FC<Props> = ({ closeForm, showCloseButton = false }) => {
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

    toast.success("Board created successfully");

    navigate(`/boards/${boardId}`);

    closeForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-md space-y-4 p-8 shadow-xl rounded-xl bg-zinc-100 dark:bg-zinc-800"
    >
      {showCloseButton && (
        <button className="absolute text-white top-4 right-4 btn btn-error" onClick={closeForm}>
          X
        </button>
      )}
      <h2 className="text-xl font-semibold">Create New Board</h2>

      <div>
        <label className="block m-1 text-left">Board Title</label>
        <input
          type="text"
          className="input input-primary w-full"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-left">Columns</label>
        <div className="space-y-2">
          {columns.map((col, index) => (
            <input
              key={index}
              type="text"
              className="input input-primary w-full"
              placeholder={`Column ${index + 1}`}
              value={col}
              onChange={(e) => handleColumnChange(index, e.target.value)}
              required={index < 3} // los primeros 3 son requeridos
            />
          ))}
        </div>

        {columns.length < 6 && (
          <button type="button" onClick={handleAddColumn} className="btn btn-dash btn-primary w-full mt-2">
            + Add another column
          </button>
        )}
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn btn-primary right-0">
          Create Board &gt;
        </button>
      </div>
    </form>
  );
};

export default CreateBoardForm;
