import { BrowserRouter as Router } from "react-router-dom";
import BoschRoutes from "./components/BoschRoutes";

function App() {
  return (
    <Router basename="/BOSCH-SLIDER/">
      <BoschRoutes />
    </Router>
  );
}

export default App;
