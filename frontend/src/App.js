import Homepage from "./pages/Homepage";
import Productdescriptionpage from "./pages/Productdescriptionpage";
import {Routes,Route} from "react-router-dom";
import Servicedescriptionpage from "./pages/Servicedescriptionpage";
import Itemspage from "./pages/Itemspage";
import Errorpage from "./pages/error";
import Shoppage from "./pages/Shoppage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/items" element={<Itemspage />} />
        <Route path="/prodes" element={<Productdescriptionpage />}/>
        <Route path="/service" element={<Servicedescriptionpage/>}/>
        <Route path="*" element={<Errorpage />} />
        <Route path="/shop" element={<Shoppage/>}/>
      </Routes>
    </div>
  );
}

export default App;
