import { Routes, Route, BrowserRouter } from "react-router";

import Home from "@/pages/Home";
import MainLayout from "@/layouts/MainLayout";
import Welcome from "@/pages/Welcome";
import ErrorPage from "@/pages/ErrorPage";
import KanbanBoard from "@/components/KanbanBoard";

function AppRoutes() {
  return (
    <BrowserRouter basename="/taskito">
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/boards" element={<Home />}>
          <Route path=":boardId" element={<KanbanBoard />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes></BrowserRouter>
  );
}

export default AppRoutes;
