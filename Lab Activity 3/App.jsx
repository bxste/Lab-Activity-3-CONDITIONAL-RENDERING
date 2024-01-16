//Almario Guzman III - WD-401
import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import React from 'react'
import ParentComponent from './components/ParentComponent'
import ToDoList from './components/componentsAct/TodoList'
import MovieList from './components/componentsAct/MovieList'
import BookList from './components/componentsAct/bookList'
import ShinyButton from './components/Conditional Rendering/Conditional-Demo-1'
import RainApp from './components/Conditional Rendering/Conditional-Demo-2'
import RainApp2 from './components/Conditional Rendering/Conditional-Demo-3'
import RainApp3 from './components/Conditional Rendering/Conditional-Demo-4'

// function App() {

//   return (
//     // <>
//     //   <div>
//     //     <Hello/>
//     //     <Welcome/>
//     //   </div>
//     // </>
//     // <div>
//     //   <h1>Almario Guzman III - WD-401</h1>
//     //   <div>
//     //     <Hello/>
//     //     <Welcome/>
//     //   </div>
//     //   <h1>React Props Example</h1>
//     //   <ParentComponent/>
//     // </div>
//     <div>
      
//     </div>
//   )
// }
const App = () =>{
  return(
    <div>
      {/* <div>
      <ToDoList/>
      </div>
      <div>
      <MovieList/>
      </div>
      <div>
      <BookList/>
      </div> */}
      <div>
        <ShinyButton/>
      </div>
      <div>
        <RainApp/>
      </div>
      <div>
        <RainApp2/>
      </div>
      <div>
        <RainApp3/>
      </div>
    </div>
  )
}

export default App;
