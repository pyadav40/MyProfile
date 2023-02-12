import './education.css';
const Education = () => {
  return (
    <>
    <div className='main'>
        <div className='main-cont'>
          <h1>Education and Certifications</h1>
          <div className='cont-three'>
            <div className='Grduation'>
              <h1>Graduation</h1>
              <hr></hr>
              <div className='box1'>
                <i class="fa-solid fa-graduation-cap fa-2x"/><strong>70.44%</strong><br></br>
                <strong>Bachelor of Engineering</strong><br></br><br></br>
                <i class="fa-solid fa-landmark fa-2x"/><strong>RGPV, Bhopal</strong>
              </div>
            </div>
            <div className='PG-Graduation'>
            <h1>PG</h1>
              <hr></hr>
              <div className='box1'>
                <i class="fa-solid fa-graduation-cap fa-2x"/><strong>79.60%</strong><br></br>
                <strong>M.Tech</strong><br></br><br></br>
                <i class="fa-solid fa-landmark fa-2x"/><strong>Medicaps Institute, Indore</strong>
              </div>
            </div>
            <div className='certi'>
            <h1>Certifications</h1>
              <hr></hr>
              <div className='box1'>
                <i class="fa-solid fa-certificate fa-2x"/><strong>LOMA 280</strong>
                <br></br><strong>Princeiple of Insurance</strong><br></br><br></br>
                <i class="fa-solid fa-certificate fa-2x"/><strong>AWS</strong><br></br> 
                <strong>Coud Practitioner</strong>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Education