import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginView from "./views/LoginView";
import MetersView from "./views/MetersView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/meters" element={<MetersView />} />
      </Routes>
    </Router>
  );
}

export default App;
