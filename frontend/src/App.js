import Homepage from "./pages/Homepage";
import Productdescriptionpage from "./pages/Productdescriptionpage";
import { Routes, Route } from "react-router-dom";
import Productspage from "./pages/Productspage";
import Errorpage from "./pages/error";
import ShopkeeperProducts from "./pages/ShopkeeperProducts";
import RegisterItem from "./pages/RegisterItem";
import RegisterService from "./pages/RegisterService";
import SKrequest from "./pages/SKrequest";
import SKapprovedRequests from "./pages/SKapprovedRequests";
import Login from "./pages/auth/login.js";
import Register from "./pages/auth/register.js";
import Servicedescriptionpage from "./pages/Servicedescriptionpage";
import ShopkeeperProfilePage from "./pages/ShopkeeperProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SK/Products" element={<ShopkeeperProducts/>}/>
        <Route path="/SK/AddItem" element={<RegisterItem/>}/>
        <Route path="/SK/AddService" element={<RegisterService/>}/>
        {/* <Route path="/prodes" element={<Productdescriptionpage />}/> */}
        <Route path="/items/:cat_name" element={<Productspage/>}/>
        <Route path="/item/:item_id" element={<Productdescriptionpage/>}/>
        <Route path="/services/:cat_name" element={<Productspage/>}/>
        <Route path="/service/:service_id" element={<Servicedescriptionpage/>}/>
        <Route path="/SK/Requests" element={<SKrequest/>}/>
        <Route path="/SK/Approved" element={<SKapprovedRequests/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/SK/Products" element={<ShopkeeperProducts />} />
        <Route path="/SK/AddItem" element={<RegisterItem />} />
        <Route path="/SK/AddService" element={<RegisterService />} />
        {/* <Route path="/prodes" element={<Productdescriptionpage />} /> */}
        <Route path="/items/:cat_name" element={<Productspage />} />
        <Route path="/item/:item_id" element={<Productdescriptionpage />} />
        <Route path="/services/:cat_name" element={<Productspage />} />
        <Route
          path="/service/:service_id"
          element={<Productdescriptionpage />}
        />
        <Route path="/ShopkeeperProfile" element={<ShopkeeperProfilePage />} />
        <Route path="/SK/Requests" element={<SKrequest />} />
        <Route path="/SK/Approved" element={<SKapprovedRequests />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
