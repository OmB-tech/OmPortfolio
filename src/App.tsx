import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Layout from "./components/Layout";
import type { ReactElement } from 'react';

// Type for route parameters
type AppRouteParams = {
  slug: string;
};

function App(): ReactElement {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <ProjectsPage />
          </Layout>
        }
      />
      <Route
        path="/project/:slug"
        element={
          <Layout>
            <ProjectDetailPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;