import { useState } from "react";

type Props = {
  position?: "right" | "left";
  children: React.ReactNode;
}

const CustomDrawer: React.FC<Props> = ({ position = "right", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const drawerPositionClass = position === "right" ? "right-0" : "left-0";

  const drawerTranslateClass = position === "right" ? "translate-x-0" : "translate-x-0";

  return (
    <>
      <button
        onClick={onOpen}
        className="fixed bottom-4 right-4 z-50 cursor-pointer bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
      >
        Add Task
      </button>
      { isOpen && <div
        onClick={onClose}
        className="fixed inset-0 bg-transparent z-50 flex justify-end"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
          fixed top-0 bottom-0
          ${drawerPositionClass}
          ${drawerTranslateClass}
          sm:w-1/5 sm:min-w-96 w-full  h-full p-6
          bg-white shadow-2xl
          transform
          transition-transform
          duration-300
          ease-in-out
          flex flex-col
          overflow-y-auto
        `}
        >
          <button
            onClick={onClose}
            aria-label="Close drawer"
            className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-900 text-3xl font-bold focus:outline-none"
          >
            &times;
          </button>
          {children}
        </div>
      </div>}
    </>
  );
};

export default CustomDrawer;
