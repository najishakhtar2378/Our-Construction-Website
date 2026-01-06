import about from "../Assets/about.jpg";
import aboutUs2 from "../Assets/aboutUs2.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="aboutus-section">
        <img src={about} alt="About Us" />
        <div className="aboutus-content">
          <h3>About Najish Construction Solutions</h3>
          <p>
            We are your trusted partner in construction excellence. From conceptualization to execution, our team delivers seamless projects with precision and innovation.
          </p>
          <p>
            Our expertise spans across 3D modeling, BIM, interior design, and consultancy services, ensuring we meet and exceed client expectations.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="aboutus-services">
        <div className="aboutus-heading">
          <h2>What We Do</h2>
        </div>
        <div className="aboutus-service-grid">
          <div className="aboutus-service-card">
            <i className="fas fa-cube"></i>
            <h4>3D Modeling</h4>
            <p>Transforming concepts into accurate 3D models for visualization.</p>
          </div>
          <div className="aboutus-service-card">
            <i className="fas fa-drafting-compass"></i>
            <h4>Construction Drawings</h4>
            <p>Delivering precise blueprints for smooth execution.</p>
          </div>
          <div className="aboutus-service-card">
            <i className="fas fa-calculator"></i>
            <h4>Quantity Take-Off</h4>
            <p>Accurate cost and material estimation for optimized budgets.</p>
          </div>
          <div className="aboutus-service-card">
            <i className="fas fa-building"></i>
            <h4>Scan to BIM</h4>
            <p>Converting point cloud data into intelligent BIM models.</p>
          </div>
          <div className="aboutus-service-card">
            <i className="fas fa-paint-roller"></i>
            <h4>Interior Designing</h4>
            <p>Functional and aesthetically pleasing interior spaces.</p>
          </div>
          <div className="aboutus-service-card">
            <i className="fas fa-video"></i>
            <h4>3D Walkthroughs</h4>
            <p>Immersive visuals and walkthroughs for projects.</p>
          </div>
        </div>

        <div className="src-btn">
            <a href="#services"> Our Services </a>
      </div>

      </section>

      <section class="why-choose-us">
    <div class="container">
      <h2>Why Choose Us?</h2>
      <p class="subtitle">
        At Najish Construction Solutions, we combine 
        cutting-edge technology with a 
        client-centric approach to deliver excellence in every project.
      </p>

      <div class="content">
        
        <div class="image-box fade-in-left">
          <img src={aboutUs2} alt="Modern Building"/>
        </div>

        
        <div class="features fade-in-right">
          <div class="feature-box">
            <i class="fas fa-lightbulb icon red"></i>
            <h3>Innovative Solutions</h3>
            <p>We integrate the latest technology to bring your vision to life.</p>
          </div>

          <div class="feature-box">
            <i class="fas fa-hard-hat icon red"></i>
            <h3>Quality Construction</h3>
            <p>We use premium materials to ensure durability and excellence.</p>
          </div>

          <div class="feature-box">
            <i class="fas fa-clock icon red"></i>
            <h3>On-Time Delivery</h3>
            <p>We value your time and complete projects within deadlines.</p>
          </div>

          <div class="feature-box">
            <i class="fas fa-users icon red"></i>
            <h3>Client-Centric Approach</h3>
            <p>Your satisfaction is our priority. We work closely with you.</p>
          </div>
        </div>
      </div>

      <div class="cta fade-in-up">
        <a href="#" class="btn">GET IN TOUCH</a>
      </div>
    </div>
  </section>

      {/* Founder Message */}
      <section className="aboutus-founder">
        <h2>Message from the Founder</h2>
        <p>
          At Najish Construction Solutions, our journey has been fueled by a passion for transforming construction projects into seamless, innovative, and high-quality experiences. From the very beginning, we envisioned a company that not only delivers exceptional construction consultancy but also embraces cutting-edge technology to help our clients succeed at every stage of their projects.<br/>

As a team, we provide a comprehensive suite of services including 3D modeling, construction drawings, quantity take-offs, Scan to BIM, interior designing, 3D renders, and walkthroughs—all under one roof. Our goal is simple: to be your trusted partner, offering intelligent solutions that ensure your projects are executed with precision, efficiency, and creativity.

We understand that every project is unique, and we take pride in crafting tailored solutions that meet your specific needs. Our commitment to innovation, attention to detail, and dedication to customer satisfaction drive us to go beyond traditional construction methods, creating spaces that inspire and exceed expectations.


        </p>
        <p>
          Thank you for choosing Najish Construction Solutions. Together, let's build your vision into reality.
        </p>
        <p className="aboutus-signature">Sincerely,<br/>
          Mrinal Najish<br/>
          Founder, Najish Construction Solutions</p>
      </section>
    </div>
  );
};

export default About;
