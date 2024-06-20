import React from 'react'
import '../Main.css'
const Carousel = () => {
  return (
    <div className='Container Carousel'>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./Images/bg2.jpeg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/Images/BG1.jpeg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/Images/BG3.jpeg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



      <br />
      <div className='container-fluid schoolinfo'>
        
          <br />
          <h3 style={{ color: "Red", fontFamily:"serif", fontWeight:"bold"}}>WELCOME TO GET SCHOOL</h3><br />
          <div class="row">
            <div class="col">
              <p style={{ marginTop: "15px", textAlign: "justify" }}>“Education is to respect the child’. Education has to be a child – centred approach to teaching; curiosity and ambition are great motivators.”</p>
            </div>
            <div class="col">
              <p style={{ textAlign: "justify" }}>The new millennium is witnessing radical changes which could be deep and pervasive to schooling. Now lets break all the walls of inhibition, come out with fresh innovations to the cause of education and make education a living with us. Education with us means searching and exploring for many and not just one correct answer.

              </p>
            </div>

          
        </div>


      </div>
      <br />
      <div className='Container-fluid ' >
        <div className="Container schoolbutton">
          <div class="row">

            <div class="col-7 wow fadeInLeft" data-wow-delay="0.5s">
              <img src="./Images/bus.jpeg" class="img-fluid fade-in-left" alt="BUS Image" />
            </div>
            <div class="col-4">
              <h2 style={{fontWeight:'bold'}} >WE PROVIDE THE BUS FACUILITY</h2>
              <p style={{ color: "steelblue", textAlign:"justify"}}> provides safe and reliable air-conditioned bus transportation to students who wish to avail this facility. The school has a luxury & air-conditioned fleet of buses with the best of safety arrangements available for the neighbouring areas. The students in school buses are accompanied by well-trained attendants/ escorts to ensure their safety.</p>
              <center><button class="button">
                ENQUIRY
              </button></center>
            </div>


          </div>
        </div>
      </div>
      <br /><br />
      <hr/>

      <div class="container overflow-hidden">
        <h1>Our Top Teacher who are achived great students transform and made them the number #1</h1>
        <div class="row gy-5">
          <div class="col-4 text">
            <div class="p-3 border bg-light">
              <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <img src='./Images/T2.jpeg' height={"100%"} width={"108%"} />
                  </div>
                  <div class="card-back">
                    <img src='./Images/T1.jpeg' height={"100%"} width={"107%"} />

                  </div>
                </div>
              </div>
            </div>

            <h5>LEELA VATHI AND SEEMA</h5>
              <p>The social sciences encompass diverse concerns of society, and include a wide range of content drawn from the disciplines of History, Geography, Political Science, Economics, Sociology and Anthropology. Social Science perspectives are indispensable to the understanding of the conditions and mechanisms of a just and peaceful society.</p>
          </div>
          <div class="col-4 text">
            <div class="p-3 border bg-light"><div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <img src='./Images/T1.jpeg' height={"100%"} width={"108%"} />
                  </div>
                  <div class="card-back">
                    <img src='./Images/T4.jpeg' height={"100%"} width={"107%"} />

                  </div>
                </div>
              </div>
              </div>
              <h5>LEELA VATHI AND SEEMA</h5>
              <p>The social sciences encompass diverse concerns of society, and include a wide range of content drawn from the disciplines of History, Geography, Political Science, Economics, Sociology and Anthropology. Social Science perspectives are indispensable to the understanding of the conditions and mechanisms of a just and peaceful society.</p>
         
          </div>
          
          <div class="col-4 text">
            <div class="p-3 border bg-light"><div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <img src='./Images/T3.jpeg' height={"100%"} width={"108%"} />
                  </div>
                  <div class="card-back">
                    <img src='./Images/T1.jpeg' height={"100%"} width={"107%"} />

                  </div>
                </div>
              </div></div>
              <h5>LEELA VATHI AND SEEMA</h5>
              <p>The social sciences encompass diverse concerns of society, and include a wide range of content drawn from the disciplines of History, Geography, Political Science, Economics, Sociology and Anthropology. Social Science perspectives are indispensable to the understanding of the conditions and mechanisms of a just and peaceful society.</p>
         
          </div>
               </div>
      </div>


      
  
    <div className='container-fluid' style={{ backgroundColor: 'purple' }}>
      <h1 style={{ color: 'white'}}>OUR BEST PERFORMERS STUDENTS IN SCHOOL</h1><br />
      <div className='row' style={{marginTop:"50px"}}>
        <div className='col-12 col-md-3 offset-md-1 mb-4'>
          <div className="card1">
            <div className="sub-card category">
              <span className="text_span">State Topper 1st</span>
              <svg className="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path></path>
              </svg>
            </div>
            <div className="card_container1">
              <img className="image1" src="./Images/head2.jpeg" alt="State Topper 1st" />
            </div>
            <div className="sub-card named">
              <span className="text_span">Percentage-99.7%</span>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-3 mb-4'>
          <div className="card1">
            <div className="sub-card category">
              <span className="text_span">State-Topper 2nd</span>
              <svg className="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"></svg>
            </div>
            <div className="card_container1">
              <img className="image1" src="./Images/head1.jpeg" alt="State Topper 2nd" />
            </div>
            <div className="sub-card named">
              <span className="text_span">Percentage-99.2%</span>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-3 mb-12'>
          <div className="card1">
            <div className="sub-card category">
              <span className="text_span">Basketball sport</span>
              <svg className="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"></path>
              </svg>
            </div>
            <div className="card_container1">
              <img className="image1" src="./Images/head3.jpeg" alt="Basketball Sport" />
            </div>
            <div className="sub-card named">
              <span className="text_span">Golden state warriors</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
 

      <div className='small'>

      <p>Your are visitor 112854</p>

      </div>

    </div>












  )
}

export default Carousel
