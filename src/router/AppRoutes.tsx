import { Routes, Route } from "react-router";

import Home from "@/pages/Home";
import MainLayout from "@/layouts/MainLayout";
import Welcome from "@/pages/Welcome";
import ErrorPage from "@/pages/ErrorPage";
import KanbanBoard from "@/components/KanbanBoard";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />}>
          <Route
            path=":boardId"
            element={<KanbanBoard tasks={[]} onRemove={() => {}} onStatusChange={() => {}} />}
          />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRoutes;
