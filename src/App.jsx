import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route path="/" element={<Body/>}/>
      <Route path="/restaurantmenu/:id" element={<RestaurantMenu/>}/>
    </Route>
    
   </Routes>
  );
}

export default App
 