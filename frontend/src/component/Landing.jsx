import React from 'react'
import img1 from "../assets/dbvmk0tsk0o0hd59fi64z3own.png";
const Landing = () => {
  return (
   <>
  <section>
    <div className='head'>
      <div>
        <h1>Get Trained. Get Certified. Get Placed.</h1>
        <p>Unlock certified courses in emerging technologies to enhance proficiency, secure placements, and pave your path to success at the Best Software Training Institute In Bangalore.</p>
      </div>
      <div>

      </div>
    </div>


    <div className="container">
      <div className="row">
      <h1 className='let1'>Let the right people know you’re open to work</h1>
      <h3 className='let2'>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.</h3>
    </div>
    <div ><img className='img2' src={img1} alt="" /></div>
    </div>

    <div className='container1'>
      <h1 style={{color:"red" , marginTop:"80px",marginRight:"20px"}}>Find the right Courses or <br/> internship for you</h1>
      <ul>
        <div style={{marginTop:"10px"}}>SUGGESTED SEARCHES</div><br/>
        <ul>
        <li>Engineering</li>
        <li>Coching</li>
        <li>Techno technical</li>
        </ul>
        
        <br />
        <ul>
        <li>LNCT</li>
        <li>Cybrom</li>
        <li>Technology</li>
        </ul>
        <br />
       <ul>
       <li>Privite</li>
        <li>Coding</li>
        <li>Thinker</li>
       </ul>
      </ul>
    </div>
    <p></p> 
  </section>
   </>
  )
}

export default Landing