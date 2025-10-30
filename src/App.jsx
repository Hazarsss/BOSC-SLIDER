import { BrowserRouter as Router } from "react-router-dom";
import BoschRoutes from "./components/BoschRoutes";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <BoschRoutes />
    </Router>
  );
}

export default App;
