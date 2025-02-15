import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Feed from "./pages/Feed";
import Post from "./pages/Post";
import PageNotFound from "./pages/PageNotFound";

// Components
import Alert from "./components/Alert";

// Contexts
import { AlertProvider } from "./contexts/AlertContext";

export default function App() {
  return (
    <AlertProvider>
      <Alert />
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/feed/:id" element={<Post />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}
