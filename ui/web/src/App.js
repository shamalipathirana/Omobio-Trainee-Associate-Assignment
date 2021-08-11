
import { useEffect ,useState} from 'react';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserDetails from './components/UserDetails';

function App() {

  

    const isLogin =sessionStorage.getItem("isLoggin");

 
  return (
    <div className="App">

      <BrowserRouter>      
      {
        isLogin !== null ? (<Route  path="/home"><UserDetails/></Route> ):
         ( <Route exact path="/"><LoginPage/></Route>)
      }
      </BrowserRouter>

     
    </div>
  );
}

export default App;



