 import AllRoutes from "./Routes/AllRoutes";
import './App.css';
import  Navbar  from "./Components/Navbar";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
