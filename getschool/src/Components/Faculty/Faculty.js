import React from 'react';
import '../Main.css';

const Faculty = () => {
  return (
    <div className="container-fluid py-2">
      <div className="bg-primary text-white text-center py-5 mb-4">
        <h1 className="display-4 font-weight-bold">Manohar Faculty</h1>
      </div>

      <div className="row mb-4">
        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <div className="card shadow-sm unique-card">
            <img className="card-img-top unique-img" src="../Images/T1.jpeg" alt="Faculty 1" />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <div className="card shadow-sm unique-card">
            <img className="card-img-top unique-img" src="../Images/T2.jpeg" alt="Faculty 2" />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <div className="card shadow-sm unique-card">
            <img className="card-img-top unique-img" src="../Images/T3.jpeg" alt="Faculty 3" />
          </div>
        </div>
      </div>
      
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <div className="card mb-3 shadow-sm unique-card" style={{ backgroundColor: '#ecf' }}>
            <div className="card-body">
              <h2 className="card-title font-weight-bold">About Our Faculty</h2>
              <p className="card-text">
                Our faculty members are dedicated to providing high-quality education and fostering a supportive and enriching learning environment. With years of experience and a passion for teaching, they are committed to helping each student achieve their full potential.
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card mb-4 shadow-sm unique-card" style={{ backgroundColor: '#eef' }}>
            <div className="card-body">
              <h2 className="card-title font-weight-bold">School History</h2>
              <p className="card-text">
                Established in 2005, our school has a rich history of academic excellence and community involvement. Over the years, we have grown and evolved, continuously adapting to the needs of our students and the demands of the modern educational landscape.
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card mb-4 shadow-sm unique-card" style={{ backgroundColor: '#fdfd96' }}>
            <div className="card-body">
              <h2 className="card-title font-weight-bold">Our Mission</h2>
              <p className="card-text">
                Our mission is to provide a comprehensive education that promotes intellectual, social, and emotional growth. We strive to cultivate a nurturing environment where students can thrive and become lifelong learners.
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card mb-4 shadow-sm unique-card" style={{ backgroundColor: '#c0ffc0' }}>
            <div className="card-body">
              <h2 className="card-title font-weight-bold">Facilities</h2>
              <p className="card-text">
                Our school boasts state-of-the-art facilities, including modern classrooms, science and computer labs, a well-equipped library, and extensive sports facilities. These resources support our commitment to delivering a well-rounded education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Faculty;
