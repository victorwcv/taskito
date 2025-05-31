type Props = {
  label: string;
  children: React.ReactNode;
};

const KanbanColumn: React.FC<Props> = ({ label, children }) => {
  return (
    <div className={`bg-zinc-300 rounded-md p-2 flex-shrink-0 grow basis-0 min-w-[clamp(300px,25%,400px)]`}>
      <h2 className="text-lg font-bold mb-2 border-b border-gray-300 pb-2">{label}</h2>
      <div className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-2">{children}</ul>
      </div>
    </div>
  );
};

export default KanbanColumn;
