import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import Blogpost from "./blog-platform/components/Blogpost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="blog" element={<Blogpost />} />
      <Route path="help">
        <Route path="faq" element={<FAQ />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
