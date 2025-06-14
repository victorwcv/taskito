type Props = {
  label: string;
  children: React.ReactNode;
};

const KanbanColumn: React.FC<Props> = ({ label, children }) => {
  return (
    <div className={"flex flex-col h-full w-80 bg-gray-100 rounded shadow p-4"}>
      <h2 className="text-lg text-center font-bold mb-2 border-b border-gray-300 pb-2">{label}</h2>
      <div className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-2">{children}</ul>
      </div>
    </div>
  );
};

export default KanbanColumn;
