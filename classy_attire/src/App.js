 import AllRoutes from "./Routes/AllRoutes";
import './App.css';
import  Navbar  from "./Components/Navbar";
import Footer from "./Components/Footer/Footer"
import SmallNav from "./Pages/SmallNav";

function App() {
  return (
    <div className="App">
   <SmallNav/>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
