import { RouterProvider } from "react-router-dom";
import "./App.css";
import routers from "./UserRoutes";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <div>
      <CookiesProvider>
        {/* Import routers in which routes been define and used here in RouterProvider */}
        <RouterProvider router={routers} />
      </CookiesProvider>
    </div>
  );
}

export default App;
