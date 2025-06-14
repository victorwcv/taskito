import { GlobalModal } from "./components/GlobalModal";
import AppRoutes from "./router/AppRoutes";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <GlobalModal/>
      <AppRoutes />
    </>
  );
}

export default App;
