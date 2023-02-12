import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Slide from './Component/Home/Slide';
import Skill from './Component/Skills/Skill';
import Experience from './Component/Experience/Experience'
import Education from './Component/Education/Education';
import Contact from './Component/Contact/Contact';


function App() {
  return (

    <div className='App'>
      
      <BrowserRouter>
      <NavBar/> 
        <Routes>
          <Route path='/' element={<Slide/>}></Route>
          <Route path='skill' element={<Skill/>}></Route>
          <Route path='Experience' element={<Experience/>}></Route>
          <Route path='Education' element={<Education/>}></Route>
          <Route path='Contact' element={<Contact/>}></Route>
          {/* <NavBar/>
          <Slide/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
