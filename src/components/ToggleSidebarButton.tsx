import { AlignJustify } from "lucide-react";
import { useAppConfigStore } from "@/stores";

const ToggleSidebarButton = () => {
  const { toggleSidebar } = useAppConfigStore();
  return (
    <button
      className="p-2 rounded hover:bg-zinc-200 transition-colors border border-zinc-300 cursor-pointer"
      onClick={() => toggleSidebar()}
    >
      <AlignJustify className="w-6 h-6 text-zinc-500" />
    </button>
  );
};

export default ToggleSidebarButton;
