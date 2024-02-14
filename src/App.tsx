import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header";
import { Profiles } from "./pages/profiles";
import { Home } from "./pages/home";
import { useEffect } from "react";
import { useUsers } from "./hooks/useUsers";
import LateralMenu from "./components/lateralMenu";

function App() {
  const { getInitialUsers } = useUsers();

  useEffect(() => {
    getInitialUsers();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div>
          <LateralMenu />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profiles />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
