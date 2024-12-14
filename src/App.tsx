import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/Layout";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: routes,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
