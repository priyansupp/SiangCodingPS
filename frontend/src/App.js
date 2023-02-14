import Homepage from "./pages/Homepage";
import Productdescriptionpage from "./pages/Productdescriptionpage";
import {Routes,Route} from "react-router-dom";
import Servicedescriptionpage from "./pages/Servicedescriptionpage";
import Itemspage from "./pages/Itemspage";
import Errorpage from "./pages/error";
import ShopkeeperItems from "./pages/ShopkeeperItems";
import RegisterItem from "./pages/RegisterItem";
import RegisterService from "./pages/RegisterService";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/items" element={<Itemspage />} />
        <Route path="/ShopkeeperItems" element={<ShopkeeperItems/>}/>
        <Route path="/AddItem" element={<RegisterItem/>}/>
        <Route path="/AddService" element={<RegisterService/>}/>
        <Route path="/prodes" element={<Productdescriptionpage />}/>
        <Route path="/service" element={<Servicedescriptionpage/>}/>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
