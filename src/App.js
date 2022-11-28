import logo from "./logo.svg";
import "./App.css";
import background from "../src/assets/brown-bg.jpg";
import Header from "./pages/shared/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Footer from "./pages/shared/Footer";
import Register from "./pages/Login/Register";
import Menu from "./pages/Menu/Menu";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard/Dashboard";
import OrderedItems from "./pages/Dashboard/OrderedItems";
import RequireAdmin from "./pages/shared/RequireAdmin";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import FullOrderList from "./pages/Dashboard/FullOrderList";
import Payment from "./pages/Dashboard/Payment";
import AddService from "./pages/Dashboard/AddService";
import Review from "./pages/Dashboard/Review";
import Video from "./pages/Home/About/Video";
import CustomOrder from "./pages/Dashboard/CustomOrder";

function App() {

  return (
    <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
      className="font-mono max-w-7xl mx-auto "
    >
      <div className="hero-overlay">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="menu" element={<Menu></Menu>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        {/* <Route path="video" element={<Video></Video>}></Route> */}
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<OrderedItems></OrderedItems>}>
          </Route>
          <Route path="bookinglist" element={<OrderedItems></OrderedItems>}>
            {" "}
          </Route>
          <Route path="payment/:id" element={<Payment></Payment>}>
            {" "}
          </Route>

          <Route path="review" element={<Review></Review>}>
            {" "}
          </Route>
          <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}>
            {" "}
          </Route>
          <Route path="fillOrderList" element={<RequireAdmin><FullOrderList></FullOrderList></RequireAdmin>}>
            {" "}
          </Route>
          <Route path="addItem" element={<RequireAdmin><AddService></AddService></RequireAdmin>}>
            {" "}
          </Route>
          <Route path="customOrder" element={<RequireAdmin><CustomOrder></CustomOrder></RequireAdmin>}>
            {" "}
          </Route>
        </Route>
      </Routes>

      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
