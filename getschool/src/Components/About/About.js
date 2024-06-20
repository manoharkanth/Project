import React from 'react';
import '../Main.css'; 

const About = () => {
    return (
        <div className='Container-fluid about'>
            <h3 style={{fontFamily:'sans-serif', fontSize:"40px" }}>ABOUT US</h3>
            <div className='container-fluid'>
            <img src="./Images/boys.jpeg" className="img-fluid about-image" alt="boys image" />
            </div>
            <div className='container-fluid'>
                <div className="section">
                    <h2>About GET Convent School</h2>
                    <p>
                        GET Convent School was established in 2005 with the vision to provide quality education and holistic development to our students. Our faculty members are highly experienced and dedicated to nurturing the intellectual, social, and emotional growth of each student.
                    </p>
                </div>

                <div className="section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to create a stimulating learning environment where students are encouraged to excel academically, socially, and personally. We strive to foster a culture of respect, responsibility, and lifelong learning.
                    </p>
                </div>

                <div className="section">
                    <h2>Our Vision</h2>
                    <p>
                        To be a leading educational institution recognized for academic excellence, innovative teaching methods, and a commitment to developing well-rounded individuals who contribute positively to society.
                    </p>
                </div>

                <div className="section">
                    <h2>Our Values</h2>
                    <p>
                        Integrity, Respect, Excellence, Innovation, and Collaboration are the core values that drive our school community. We believe in creating a supportive and inclusive environment for all our students and staff.
                    </p>
                </div>

                <div className="section">
                    <h2>OUR FOUNDERS</h2>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <img src="./Images/Found1.jpeg" className="card-img-top" alt="Faculty 1" />
                                <div className="card-body">
                                    <p className="card-text">Ms. Jane Doe - Science Teacher</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="./Images/Found2.jpeg" className="card-img-top" alt="Faculty 2" />
                                <div className="card-body">
                                    <p className="card-text">Mr. John Smith - Mathematics Teacher</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="./Images/Found3.jpeg" className="card-img-top" alt="Faculty 3" />
                                <div className="card-body">
                                    <p className="card-text">Mrs. Emily Johnson - English Teacher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    );
}

export default About;
