type Props = {
  label: string;
  children: React.ReactNode;
}

const KanbanColumn: React.FC<Props> = ({ label, children }) => {
  return (
    <div className={`p-4 rounded-md bg-gray-50 flex flex-col gap-4`}>
      <h2 className="text-lg font-bold mb-2 border-b border-gray-300 pb-2">{label}</h2>
      <ul className="space-y-2 min-h-[100px]">{children}</ul>
    </div>
  );
};

export default KanbanColumn;
