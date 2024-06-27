import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import { UserProvider } from "./components/context/UserConext";

function App() {
  return (
    <Router>
      <UserProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </MainLayout>
      </UserProvider>
    </Router>
  );
}

export default App;
