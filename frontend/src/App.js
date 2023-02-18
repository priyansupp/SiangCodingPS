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
import { TokenContext } from './context/tokenContext';
import { UserContext } from './context/userContext';
import {useContext} from 'react';

function App() {
  const { token, setToken } = useContext(TokenContext);
  const { user, setUser } = useContext(UserContext);
  // console.log(token);
  if(!token || (token && user['is_customer'] == true)) {
    return (
      <div className="App">
      <Routes>
        <Route path="/" element={ <Homepage/> }/>
        <Route path="/items/:cat_name" element={<Productspage/>}/>
        <Route path="/item/:item_id" element={<Productdescriptionpage/>}/>
        <Route path="/services/:cat_name" element={<Productspage/>}/>
        <Route path="/service/:service_id" element={<Servicedescriptionpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/prodes" element={<Productdescriptionpage />} /> */}
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
    )
  } else if((token && user['is_customer'] == false)) {
    return (
      <div className="App">
        <Routes>
          <Route path="/AddItem" element={<RegisterItem/>}/>
          <Route path="/AddService" element={<RegisterService/>}/>
          <Route path="/Requests" element={<SKrequest/>}/>
          <Route path="/Approved" element={<SKapprovedRequests/>}/>
          <Route path="/" element={<ShopkeeperProducts />} />
          <Route path="/AddItem" element={<RegisterItem />} />
          <Route path="/AddService" element={<RegisterService />} />
          {/* <Route path="/prodes" element={<Productdescriptionpage />} /> */}
          <Route path="/profile" element={<ShopkeeperProfilePage />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </div>
    );
  }
  
}

export default App;
