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
          <Route path ='/' element={<Home />} />
          <Route path ='SignIn' element={<SignIn />} />
          <Route path ='User' element={<User />} />
          {/* <Route path ="*" element={<Error />} /> */}
        </Routes> 
        <Footer/>
      </div>
    </BrowserRouter>
   
  )
}

export default App

// import { Counter } from "./features/counter/Counter"
// import { Quotes } from "./features/quotes/Quotes"
// import logo from "./logo.svg"
// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <Quotes />
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://reselect.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Reselect
//           </a>
//         </span>
//       </header>