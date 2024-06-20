import React, { useState } from "react";
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../Main.css"

const Admissiondata = () => {
  const notify = () => toast.success("Values Submitted");

  const [name, setName] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");

  const [submittedName, setSubmittedname] = useState("");

  const Data = (e) => {
    e.preventDefault();
    setSubmittedname
    ({ 
      name:name,
      Lname:Lname,
      email:email,
      number:number,
      comment:comment
      
    });
          notify();

  };

  return (
    <div className="container-fluid py-5">
      <h5 >
        Our school holds number #1 in studies and is among the top 10 ranks in
        Bangalore
      </h5><br/>

      <div className="row mb-5">
        
        <div className="col-md-8">
          <img
            src="../Images/admission.jpeg"
            alt="admission"
            style={{height:"80vh"}}
            className="img-fluid fade-in-left" 
          />
        </div>
        <div className="col-md-4 ">
          <form className="p-3 border rounded shadow-sm bg-light"  onSubmit={Data}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputFName" className="form-label">
                First Name 
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFName"
                required
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputLName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputLName"
                required
                onChange={(e)=>setLname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPhone" className="form-label">
                Phone Number
              </label>
              <input
            
                type="tel"
                className="form-control"
                id="exampleInputPhone"
                required 
                onChange={(e)=>setNumber(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Comment:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e)=>setComment(e.target.value)}
                
              ></textarea>
            </div>
           
           
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Submit
            </button>
          </form>
        </div>
        <ToastContainer position="top-right"  />
      </div>

      { submittedName &&(
        <div
          className="container forms p-3 border rounded shadow-sm bg-light mt-3"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="text-center mb-3" style={{ color: "green" }}>
            Your Submitted Values
          </h5>
          <div className="row">
            <div className="col-sm-6 mb-2">
              <strong>First Name:{submittedName.name}</strong>
            </div>
            <div className="col-sm-6 mb-2">
              <strong>Last Name:{submittedName.Lname}</strong>
            </div>
            <div className="col-sm-6 mb-2">
              <strong>Email:{submittedName.email}</strong>
            </div>
            <div className="col-sm-6 mb-2">
              <strong>Phone Number:{submittedName.number}</strong>
            </div>
            <div className="col-12 mb-2">
              <strong>Comment:{submittedName.comment}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admissiondata;

// import React, { useState } from "react";
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Admissiondata = () => {
//   const notify = () => toast("Values Submitted");

//   const [name, setName] = useState("");
//   const [Lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [comment, setComment] = useState("");

//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({});

//   const Data = async (e) => {
//     e.preventDefault();

//     const data = { name, Lname, email, number, comment };

//     try {
//       await axios.post("http://localhost:5000/submit", data);
//       notify();
//       setFormData(data);
//       setSubmitted(true);
//     } catch (error) {
//       console.error("There was an error submitting the form!", error);
//     }
//   };

//   return (
//     <div className="container-fluid py-5">
//       <a className="d-block mb-4 text-primary">
//         Our school holds number #1 in studies and is among the top 10 ranks in Bangalore
//       </a>

//       <div className="row mb-5">
//         <div className="col-md-8">
//           <img src="../Images/admission.jpeg" alt="admission" className="img-fluid" />
//         </div>
//         <div className="col-md-4">
//           <form onSubmit={Data} className="p-3 border rounded shadow-sm bg-light">
//             <div className="mb-3">
//               <label htmlFor="exampleInputFName" className="form-label">First Name</label>
//               <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputFName" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputLName" className="form-label">Last Name</label>
//               <input type="text" onChange={(e) => setLname(e.target.value)} className="form-control" id="exampleInputLName" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
//               <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
//               <input type="tel" onChange={(e) => setNumber(e.target.value)} className="form-control" id="exampleInputPhone" required />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
//               <textarea className="form-control" onChange={(e) => setComment(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary w-100">Submit</button>
//           </form>
//         </div>
//         <ToastContainer position="top-right" />
//       </div>

//       {submitted && (
//         <div className="container forms p-3 border rounded shadow-sm bg-light mt-3" style={{ maxWidth: "600px" }}>
//           <h5 className="text-center mb-3" style={{ color: "green" }}>Your Submitted Values</h5>
//           <div className="row">
//             <div className="col-sm-6 mb-2"><strong>First Name:</strong> {formData.name}</div>
//             <div className="col-sm-6 mb-2"><strong>Last Name:</strong> {formData.Lname}</div>
//             <div className="col-sm-6 mb-2"><strong>Email:</strong> {formData.email}</div>
//             <div className="col-sm-6 mb-2"><strong>Phone Number:</strong> {formData.number}</div>
//             <div className="col-12 mb-2"><strong>Comment:</strong> {formData.comment}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Admissiondata;
