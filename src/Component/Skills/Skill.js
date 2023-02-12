import './skills.css';
const Skill = () => {
  return (
    <>
    <div className='main'>  
    <div className='skills'>
        <h1>My Technical Skills</h1>
        <div className='Sklll-Cont'>
          <div className="p-bar">
            <label for="file">HTML</label>
            <progress value="75" max="100"> 75% </progress>
          </div>
          <div className="p-bar">
            <label for="file">CSS</label>
            <progress value="65" max="100"> 65% </progress>
          </div>
          <div className="p-bar">
            <label for="file">JavaScript</label>
            <progress className='p-js' value="70" max="100"> 65% </progress>
            </div>
          <div className="p-bar">
            <label for="file">React</label>
            <progress value="50" max="100"> 50% </progress>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Skill
