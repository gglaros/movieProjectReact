// import { useState } from 'react'
// import './App.css'

// {/* <> griname parapano apo ena component am den ta eixame 
//   tha girnagame mono ena div kai xoris thn function </> */}

// function App() {
 
 
//   return (
//     <>                         
//   <div>
//     <p>Hello world</p>
//   </div>
//   <Text />
//   <Text2 text="hello bro from prop"/>
//   </>

//   )
// }



// function Text() {
//   return (
//     <div>
//       <p>hello from function</p>
//     </div>
//   );

// }

// function Text2({text}) {
//   return (
//     <div>
//       <p>{text}</p>
//     </div>
//   )
// }


// export default App

import { useState } from 'react'
import "./css/App.css"
import MovieCard from './components/MovieCard'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar'
import { MovieProvider } from "./contexts/MovieContext";
// function App() {
  
//   return (
//   <>
//   {/* <MovieCard movie={{title:"goerge's film",release_date:"2024"}}/> */}
//   <Home />
//   </>
//   )
// }

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;