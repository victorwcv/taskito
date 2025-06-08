import KanbanCard from "./KanbanCard";
import KanbanColumn from "./KanbanColumn";
import { useParams } from "react-router";
import { useBoardStore} from "@/stores";


const KanbanBoard: React.FC = () => {
  const { boardId = "" } = useParams<{ boardId: string }>();
  const boardData = useBoardStore(state => state.getBoardbyId(boardId));


  
  console.log("boardData", boardData);
  
  if (!boardData) {
    return <div className="p-4 text-center text-gray-500">Board not found</div>;
  }

  return (
    <div className="h-full flex w-fit gap-4 p-8 mx-auto">
      {boardData.columns.map((column) => (
        <KanbanColumn key={column.id} label={column.title}>
          {column.tasks
            .map((task) => (
              <KanbanCard
                key={task.id}
                task={task}
              />
            ))}
        </KanbanColumn>
      ))}
    </div>
  );
};

export default KanbanBoard;
