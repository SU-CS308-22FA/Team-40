import './App.css';
import Register from './Register';
import Demo from './Demo';
import Login from './Login';
import Layout from "./Layout";
import NoPage from "./NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="register" element={<Register />} />
            <Route path="demo" element={<Demo />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;