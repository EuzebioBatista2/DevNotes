import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import { UserProvider } from "./components/context/UserContext.jsx";
import Message from "./components/layouts/Message";
import Dashboard from "./components/pages/Dashboard";
import NewFolder from "./components/pages/NewFolder";
import EditFolder from "./components/pages/EditFolder";

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
            <Route path="/dashboard/folders" element={<Dashboard />} />
            <Route
              path="/dashboard/folders/newfolder"
              element={<NewFolder />}
            />
            <Route
              path="/dashboard/folders/edit/:id"
              element={<EditFolder />}
            />
          </Routes>
        </MainLayout>
      </UserProvider>
    </Router>
  );
}

export default App;
