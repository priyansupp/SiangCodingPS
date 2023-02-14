import Homepage from "./pages/Homepage";
import {Routes, Route} from "react-router-dom";
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
        {/* <Route path="/items/:id" element={<Itempage />} /> */}
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
