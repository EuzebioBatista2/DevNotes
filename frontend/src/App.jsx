import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import { UserProvider } from "./components/context/UserConext";
import Message from "./components/layouts/Message";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <Router>
      <UserProvider>
        <MainLayout>
          <Message />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </MainLayout>
      </UserProvider>
    </Router>
  );
}

export default App;
