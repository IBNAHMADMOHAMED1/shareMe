import './App.css';
import Home from './container/Home'
import Login from './components/Login';
import { Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
