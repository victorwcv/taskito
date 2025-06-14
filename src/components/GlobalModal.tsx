import { useModalStore } from "@/stores";

export const GlobalModal = () => {
  const { isOpen, content, closeModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full relative">
        {/* Cerrar modal */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
        >
          ✕
        </button>

        {/* Contenido inyectado dinámicamente */}
        {content}
      </div>
    </div>
  );
};