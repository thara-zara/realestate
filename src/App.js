import './App.css';
import { Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Single from './components/Single/Single';
import Footer from './components/Footer/Footer';
import Fav from './components/Fav/Fav';
import {AddProvider} from "./Context/MyContext";

function App() {
  return (
    <div className="App">
        <AddProvider>
            <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="/Single/:sid" element={<Single/>}/> 
                <Route path="/Favourite" element={<Fav/>}/>
            </Routes>
        </AddProvider>
        <Footer/>
    </div>
  );
}

export default App;
