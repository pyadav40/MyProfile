import './slide.css';
import Resume from './Resume';
import { useState } from 'react';
const Slide = () => {
  let [page, setPage]=useState(false)
 let update=()=>  
 {
  setPage(true)
 }
 let back=()=>
 {
  setPage(false)
 }
 
  return (
    <>{!page && (
   <div className="Home">
      <div className="section1">
        <section>
          <p>Hello, I am</p>
          <h1>Piyush Yadav</h1>   
          <div className='link'>
          <a href="https://www.linkedin.com/in/piyushyadav40"><i className="fa-brands fa-linkedin fa-2x"></i></a>
          <a href='#'><i className="fa-brands fa-facebook fa-2x"></i></a>
          <a href='mailto:piyushyadav@live.com'><i className="fa-solid fa-envelope fa-2x"></i></a>
          </div>
          
        </section>
      </div>
      <div className="section2">  
        <button className="button" onClick={update}><h4>SEE RESUME</h4></button>
      
        </div>
   </div>)} 

   {page && (<div className="Home">
   <button className="button" style={{"margin":"30px", "width":"100px"}} onClick={back}><i class="fa-solid fa-arrow-left"></i></button>
    <Resume/></div>)}
   </>
  )
}

export default Slide
