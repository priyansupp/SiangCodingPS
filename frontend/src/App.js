import Homepage from "./pages/Homepage";
import {Routes, Route} from "react-router-dom";
import Itemspage from "./pages/Itemspage";
import Errorpage from "./pages/error";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/items" element={<Itemspage />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/items/:id" element={<Itempage />} /> */}
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
