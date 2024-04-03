//import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home  from './components/Home';
import Login from './components/Login.js';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Home/>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/login" Component={Login}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;