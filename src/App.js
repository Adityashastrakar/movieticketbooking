import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ClientDB from './components/ClientDB';
import OwnerDB from './components/OwnerDB';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Signup</Link>
            </li>
            <li>
              <Link to="/login">Signin</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userdashboard" element={<ClientDB/>}/>
          <Route path="/ownerdashboard" element={<OwnerDB/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
