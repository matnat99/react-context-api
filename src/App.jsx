import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Feed from "./pages/Feed";
import Post from "./pages/Post";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
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
  );
}
