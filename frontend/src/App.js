import Homepage from "./pages/Homepage";
import Productdescriptionpage from "./pages/Productdescriptionpage";
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Servicedescriptionpage from "./pages/Servicedescriptionpage";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />}>
               
            </Route>
            <Route exact path="/prodes" element={<Productdescriptionpage />}>
              
            </Route>
            <Route exact path="/service" element={<Servicedescriptionpage/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
