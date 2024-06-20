import React from 'react'
import Admissiondata from './Admissiondata'
import Admission1 from './Admission1'

const Admission = () => {
  return (
    <div>
         <div className="row">
        <div className="col-3">
          <img
            src="./images/admission1.jpeg"
            class="rounded float-start"
            alt="Image"
            height="100%"
            width="80%"
          />
        </div>
        <div className='col-5'>
        <div class="wrapper">
  <span class="letter letter1">ADMISSIONS   </span>
  <span class="letter letter2">OPEN</span>
  {/* <span class="letter letter3">FILL</span>
  <span class="letter letter4">IN</span>
  <span class="letter letter5">THE</span>
  <span class="letter letter6">FORMS</span> */}

</div>
        </div>
      </div>

<Admissiondata/>
      <Admission1/>
    </div>
  )
}

export default Admission
