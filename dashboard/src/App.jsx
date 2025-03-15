import { RouterProvider } from "react-router-dom";
import "./App.css";
import routers from "./UserRoutes";

// Routes is Defined in Dashboard component

function App() {
  return (
    <div>
      {/* Import routers in which routes been define and used here in RouterProvider */}
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
