import React from 'react';

// Functional React component
const Contact = () => {

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // 🚫 Prevents the default browser behavior (page reload)

    // ✅ Creates a FormData object from the form element (event.target)
    const formData = new FormData(event.target);

    // ✅ Converts the FormData into a plain JS object (key-value pairs)
    const formInputData = Object.fromEntries(formData.entries());

    // ✅ Logs the submitted form data to the console
    console.log(formInputData);

    // ✅ Clears the form fields after submission
    event.target.reset();
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}> {/* 👈 Changed from action to onSubmit */}
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;



// Controlled Form Example (The "Normal Way") -------------IMp -----------

// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form Data:', formData);

//     // Reset form (optional)
//     setFormData({
//       username: '',
//       email: '',
//       message: '',
//     });
//   };

//   return (
//     <section className="section-contact">
//       <h2 className="container-title">Contact Us</h2>

//       <div className="contact-wrapper container">
//         <form onSubmit={handleFormSubmit}>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter your name"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//             autoComplete="off"
//           />

//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter your email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             autoComplete="off"
//           />

//           <textarea
//             className="form-control"
//             rows="10"
//             placeholder="Enter your message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             autoComplete="off"
//           ></textarea>

//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
