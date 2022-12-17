 import AllRoutes from "./Routes/AllRoutes";
import './App.css';
import  Navbar  from "./Components/Navbar";
import Footer from "./Components/Footer/Footer"
import SmallNav from "./Pages/SmallNav";
import Nav2 from "./Components/Navbar2";

function App() {
  return (
    <div className="App">
   <SmallNav/>
    {/* <Navbar/> */}
    <Nav2/>
    <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
