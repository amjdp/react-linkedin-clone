import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <h2>Lets build the LinkedIn-clone 🚀 ! </h2>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}> </Route>
          <Route path="/home" element={<Dashboard/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
