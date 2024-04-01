import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Siginup } from "./pages/Signup";
import { Signin } from "./pages/Sigin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Siginup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
