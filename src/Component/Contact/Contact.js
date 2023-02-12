import './contact.css';
const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='Contact-main'>
          <h1>Contact Me</h1>
          <div className='main-blocks'>
            <div className='block-details'>
              <div className='detail'>
                <a><i class="fa-solid fa-location-dot fa-4x"></i></a>
                <div className='para'>
                  <p>3440-B, Sector-E, Sudama Nagar, Indore (M.P), PIN-452009 </p>
                </div>

              </div>
              <div className='detail'>
                <a><i className="fa-solid fa-envelope fa-4x"></i></a>
                <div className='para'>
                  <p>piyushyadav@live.com</p>
                  <p>piyush.yadav5730@gmail.com</p>
                </div>

              </div>
              <div className='detail'>
                <a><i class="fa-solid fa-phone fa-4x"></i></a>

                <p>+91-9993444568</p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact