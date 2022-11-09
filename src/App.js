import logo from './logo.svg';
import './App.css';
import background from '../src/assets/brown-bg.jpg'
import Header from './pages/shared/Header';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Footer from './pages/shared/Footer';
import Register from './pages/Login/Register';
import Menu from './pages/Menu/Menu';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div  style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }} className="font-mono max-w-7xl mx-auto hero-overlay bg-opacity-60">
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='menu' element={<Menu></Menu>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='register' element={<Register></Register>}></Route>
      <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
     </Routes>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
