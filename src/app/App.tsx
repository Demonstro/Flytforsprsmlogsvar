import { RouterProvider } from "react-router";
import { router } from "./routes";

// App root – renders the router
export default function App() {
  return <RouterProvider router={router} fallbackElement={<div className="min-h-screen" />} />;
}