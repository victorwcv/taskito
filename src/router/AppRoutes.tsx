import { Routes, Route, BrowserRouter } from "react-router";

import MainLayout from "@/layouts/MainLayout";
import Welcome from "@/pages/Welcome";
import ErrorPage from "@/pages/ErrorPage";
import KanbanBoard from "@/components/KanbanBoard";
import CreateBoard from "@/pages/CreateBoard";

function AppRoutes() {
  return (
    <BrowserRouter basename="/taskito">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/boards" element={<MainLayout />}>
          <Route path="new" element={<CreateBoard />} />
          <Route path=":boardId" element={<KanbanBoard />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
