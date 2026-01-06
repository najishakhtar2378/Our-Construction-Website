// import map from "../Assets/map.jpeg";
// import "./Contact.css";
// const Contact = () => {
//   return (
//     <>
//       <div className="contact-container">
//         {/* LEFT SIDE */}
//         <div className="contact-left">
//           <h2>Get in Touch</h2>
//           <p>
//             We're here to help you turn your construction dreams into reality.
//             Reach out to us through any of the channels below.
//           </p>

//           <div className="info-box">
//             <i className="fa-solid fa-location-dot"></i>Motihari,Bihar, India
//           </div>
//           <div className="info-box">
//             <i className="fa-solid fa-phone"></i> +91 7079308040
//           </div>
//           <div className="info-box">
//             <i className="fa-solid fa-envelope"></i> info@najishconstruction.com
//           </div>
//           <div className="info-box">
//             <i className="fa-solid fa-clock"></i> Monday - Saturday: 9:00 AM -
//             6:00 PM <br /> Sunday: Closed
//           </div>

//           {/* OPTION 1: Clickable Map */}
//           <div className="map-box">
//             <a
//               href="https://maps.app.goo.gl/ZXRenSS7bxerGZ3s9"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={map} alt="Map" />
//               <p>
//                 <i className="fa-solid fa-map-pin"></i> Interactive Map <br />
//                 <small>Visit our office location</small>
//               </p>
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE - CONTACT FORM */}
//         <div className="contact-form">
//           <h3>Send us a Message</h3>
//           <form>
//             <div className="form-group">
//               <input type="text" placeholder="Full Name *" required />
//               <input type="email" placeholder="Email Address *" required />
//             </div>
//             <div className="form-group">
//               <input type="text" placeholder="Phone Number" />
//               <input type="text" placeholder="Company/Organization" />
//             </div>
//             <div className="form-group">
//               <select>
//                 <option>Select service</option>
//                 <option>BIM 3D Modeling</option>
//                 <option>Interior Design</option>
//                 <option>Consultation</option>
//               </select>
//               <select>
//                 <option>Select project type</option>
//                 <option>Residential</option>
//                 <option>Commercial</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <textarea
//                 placeholder="Tell us about your project requirements..."
//                 required
//               ></textarea>
//             </div>
//             <button className="btn" type="submit">
//               Submit <i className="fa-solid fa-paper-plane"></i>
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
import emailjs from "@emailjs/browser";
import map from "../Assets/map.jpeg";
import "./Contact.css";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ehg9szs",
        "template_2mk1rgr",
        e.target,
        "2zOwgp3OYCGFDj87n"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p>
            We're here to help you turn your construction dreams into reality.
            Reach out to us through any of the channels below.
          </p>

          <div className="info-box">
            <i className="fa-solid fa-location-dot"></i> Motihari, Bihar, India
          </div>
          <div className="info-box">
            <i className="fa-solid fa-phone"></i> +91 7079308040
          </div>
          <div className="info-box">
            <i className="fa-solid fa-envelope"></i> info@najishconstruction.com
          </div>
          <div className="info-box">
            <i className="fa-solid fa-clock"></i>
            Monday - Saturday: 9:00 AM - 6:00 PM <br /> Sunday: Closed
          </div>

          <div className="map-box">
            <a
              href="https://maps.app.goo.gl/ZXRenSS7bxerGZ3s9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={map} alt="Map" />
              <p>
                <i className="fa-solid fa-map-pin"></i> Interactive Map <br />
                <small>Visit our office location</small>
              </p>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">
          <h3>Send us a Message</h3>

          <form onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
              />
            </div>

            <div className="form-group">
              <input type="text" name="phone" placeholder="Phone Number" />
              <input
                type="text"
                name="company"
                placeholder="Company/Organization"
              />
            </div>

            <div className="form-group">
              <select name="service">
                <option>Select service</option>
                <option>BIM 3D Modeling</option>
                <option>Interior Design</option>
                <option>Consultation</option>
              </select>

              <select name="project_type">
                <option>Select project type</option>
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your project requirements..."
                required
              ></textarea>
            </div>

            <button className="btn" type="submit">
              Submit <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
