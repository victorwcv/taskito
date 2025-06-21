import { Routes, Route, BrowserRouter } from "react-router";

import MainLayout from "@/layouts/MainLayout";
import Welcome from "@/pages/Welcome";
import ErrorPage from "@/pages/ErrorPage";
import KanbanBoard from "@/pages/KanbanBoard";
import CreateBoard from "@/pages/CreateBoard";
import { NoBoards } from "@/components/NoBoards";

function AppRoutes() {
  return (
    <BrowserRouter basename="/taskito">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/boards" element={<MainLayout />}>
          <Route index element={<NoBoards />} />
          <Route path="new" element={<CreateBoard />} />
          <Route path=":boardId" element={<KanbanBoard />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
