import { Routes, Route, BrowserRouter} from 'react-router-dom';
import "./App.css";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home";
import { SignIn } from "./Pages/SignIn";
import { User } from "./Pages/User";


const App = () => {
  return (
    <BrowserRouter>
       <div className="App">
        <Header/>
        <Routes>
          <Route path ='/' element={<Home/>} />
          <Route path ='SignIn' element={<SignIn/>} />
          <Route path ='User' element={<User/>} />
          {/* <Route path ="*" element={<Error/>} /> */}
        </Routes> 
        <Footer/>
      </div>
    </BrowserRouter>
   
  )
}

export default App
