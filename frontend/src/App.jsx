import Header from "./components/Header";
import Login from "./pages/Login";
import  AuthProvider from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";



function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<PrivateRoute />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
