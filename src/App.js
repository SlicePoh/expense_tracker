import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom"
import { Home } from "./pages/Home";
import { AddTransaction } from "./pages/AddTransaction";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="w-full bg-[#03B5AA]">
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/AddTransaction" Component={AddTransaction}/>
        </Routes> 
      </div>
      <Footer/>
    </Router>
  );
}


export default App;
