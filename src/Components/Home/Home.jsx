import { useEffect, useState } from "react";
import aboutHome from "../Assets/aboutHome.jpg";
import vision from "../Assets/vision.jpg";
import "./Home.css";


const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      
      <section
        id="home"
        className="hero-section"
        
      >
        <div className="hero-content">
          <h1><i>Where Ideas Take Shape – Complete Construction Consultancy Under One Roof!</i></h1>
        </div>
      </section>

     
      <section class="about-section">
  <div class="about-container">
  
            <div class="about-image">
                <img src={aboutHome} alt="Construction Office" />
            </div>
    <div class="about-content">
      <p class="about-intro">
        <p className="welcome">
            Welcome to <br/><span class="brand1">Najish Construction Solutions</span>
        </p>
        At <span class="brand">Najish Construction Solutions</span>, we bring your
        construction vision to life with precision, innovation, and expertise.
        We are your trusted partner in comprehensive construction consultancy,
        offering a wide range of specialized services tailored to meet every
        project requirement. Our expertise spans various domains, ensuring
        seamless execution to the highest standards.
      </p>

      <ul class="services-list">
        <li><strong>3D Modeling Services:</strong> Transforming concepts into detailed 3D models for accurate project visualization.</li>
        <li><strong>Construction Drawings:</strong> Delivering precise and efficient construction blueprints for seamless execution.</li>
        <li><strong>Quantity Take-Off:</strong> Providing accurate material and cost estimations to optimize your project budget.</li>
        <li><strong>Scan to BIM (Point Cloud):</strong> Converting point cloud data into intelligent BIM models for renovations or as-built projects.</li>
        <li><strong>Interior Designing:</strong> Creating functional and aesthetically pleasing interior spaces that reflect your vision.</li>
        <li><strong>3D Renders and Walkthroughs:</strong> Immersive visuals and virtual walkthroughs to bring your ideas to life before construction begins.</li>
      </ul>

      <div className="src-btn">
            <a href="#services"> Our Services </a>
      </div>
      

    </div>
  </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="vision-section">
        <div className="vision-container">
          <div className="vision-content">
            <h2>
              <span className="highlight"> Our Vision</span>
            </h2>
            <h3>
              REVOLUTIONIZING CONSTRUCTION WITH INNOVATION & TECHNOLOGY
            </h3>
            <p>
              At <span className="brand">Najish Construction Solutions</span>, our
              vision is to revolutionize the construction industry by
              providing innovative, technology-driven solutions{" "}
              that bridge the gap between design and execution.
            </p>

            <p>
              We aim to be a one-stop consultancy partner,
              empowering architects, contractors, and developers with:
            </p>

            <div className="vision-list">
              <ul>
                <li>
                  <i className="fa-solid fa-cube"></i> Precise 3D Modeling
                </li>
                <li>
                  <i className="fa-solid fa-calendar-check"></i> Accurate
                  Planning
                </li>
                <li>
                  <i className="fa-solid fa-eye"></i> Immersive Visualizations
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fa-solid fa-pencil-ruler"></i> Construction
                  Drawings
                </li>
                <li>
                  <i className="fa-solid fa-gears"></i> BIM Modeling
                </li>
                <li>
                  <i className="fa-solid fa-pen-nib"></i> Advanced Rendering
                </li>
              </ul>
            </div>

            <p>
              We envision a future where every project is executed
              efficiently, clearly, and creatively
              transforming ideas into reality with
              precision and excellence.
            </p>

            <p>
              Our commitment is to innovation, quality, and client satisfaction. We
              ensure every project benefits from
              smarter designs, optimized resources, and seamless execution.
            </p>
          </div>

          <div className="vision-image">
            <img src={vision} alt="Construction Consultancy" />
          </div>
        </div>
      </section>


      <section class="services">
    <h2>OUR  EXPERT  SERVICES</h2>
    <div class="services-container">

     
      <div class="service-card card1 ">
        <div class="icon"><i class="fas fa-cube"></i></div>
        <h3>BIM 3D MODELING</h3>
        <p>Enhance project accuracy with intelligent 3D models integrating architectural, structural, and MEP components for seamless planning and execution.</p>
        <a href="#services"> Read More →</a>
      </div>

      <div class="service-card card2">
        <div class="icon"><i class="fas fa-file-alt"></i></div>
        <h3>CONSTRUCTION DOCUMENTS</h3>
        <p>Comprehensive architectural, structural, and MEP plans ensuring compliance, minimizing errors, and improving project execution.</p>
        <a href="#services">Read More →</a>
      </div>

      <div class="service-card card3">
        <div class="icon"><i class="fas fa-camera"></i></div>
        <h3>SCAN TO BIM</h3>
        <p>Convert laser scan data into accurate BIM models for renovation, retrofits, and as-built documentation, improving precision and efficiency.</p>
        <a href="#services">Read More →</a>
      </div>


      <div class="service-card card4 ">
        <div class="icon"><i class="fas fa-video"></i></div>
        <h3>RENDERS & WALKTHROUGHS</h3>
        <p>Experience projects before construction with high-quality 3D renders and interactive walkthroughs for better visualization and decision-making.</p>
        <a href="#services">Read More →</a>
      </div>  

      <div class="service-card card5">
        <div class="icon"><i class="fas fa-palette"></i></div>
        <h3>INTERIOR DESIGNING</h3>
        <p>Transform spaces with creative designs, functional layouts, and aesthetic enhancements tailored to residential and commercial needs.</p>
        <a href="#services">Read More →</a>
      </div>

      <div class="service-card card6">
        <div class="icon"><i class="fas fa-calculator"></i></div>
        <h3>QUANTITY TAKE-OFF</h3>
        <p>Accurate estimation of materials and costs using BIM and detailed drawings, ensuring optimized resource allocation and cost efficiency.</p>
        <a href="#services">Read More →</a>
      </div>

    </div>
      </section>

     <section class="services">
    <h2>Some Of Our Popular Dream Projects</h2>
    <div class="services-container">


      <div class="service-card1 card7">
        <div class="icon"><i class="fas fa-file-alt"></i></div>
        <h3>CONSTRUCTION DOCUMENTS</h3>
        <p>Comprehensive architectural, structural, and MEP plans ensuring compliance, minimizing errors, and improving project execution.</p>
        <a href="#services">Read More →</a>
      </div>

      <div class="service-card1 card8">
        <div class="icon"><i class="fas fa-camera"></i></div>
        <h3>SCAN TO BIM</h3>
        <p>Convert laser scan data into accurate BIM models for renovation, retrofits, and as-built documentation, improving precision and efficiency.</p>
        <a href="#services">Read More →</a>
      </div>


      <div class="service-card1 card9 ">
        <div class="icon"><i class="fas fa-video"></i></div>
        <h3>RENDERS & WALKTHROUGHS</h3>
        <p>Experience projects before construction with high-quality 3D renders and interactive walkthroughs for better visualization and decision-making.</p>
        <a href="#services">Read More →</a>
      </div>  

      <div class="service-card1 card10">
        <div class="icon"><i class="fas fa-palette"></i></div>
        <h3>INTERIOR DESIGNING</h3>
        <p>Transform spaces with creative designs, functional layouts, and aesthetic enhancements tailored to residential and commercial needs.</p>
        <a href="#services">Read More →</a>
      </div>

      <div class="service-card1 card11">
        <div class="icon"><i class="fas fa-calculator"></i></div>
        <h3>QUANTITY TAKE-OFF</h3>
        <p>Accurate estimation of materials and costs using BIM and detailed drawings, ensuring optimized resource allocation and cost efficiency.</p>
        <a href="#services">Read More →</a>
      </div>

      <div class="service-card1 card12">
        <div class="icon"><i class="fas fa-cube"></i></div>
        <h3>BIM 3D MODELING</h3>
        <p>Enhance project accuracy with intelligent 3D models integrating architectural, structural, and MEP components for seamless planning and execution.</p>
        <a href="#services"> Read More →</a>
      </div>

    </div>
    </section>

        <section class="testimonials">
  <h2>WHAT OUR HAPPY CLIENTS SAY!!!</h2>
  <div class="testimonial-container">
    <div class="testimonial-card">
      <p><span class="quote">❝</span> Najish Construction Solutions turned our dream home into reality! From the initial 3D modeling to the final execution, their team ensured every detail was perfect. The stunning renders helped us visualize everything in advance, making the entire process seamless. Highly professional and creative!</p>
      <h4>- Tarique Anwer</h4>
    </div>
    <div class="testimonial-card">
      <p><span class="quote">❝</span>We needed a modern yet functional design for our townhouse project, and Najish Construction Solutions delivered beyond our expectations. Their quantity take-off services ensured we stayed within budget while their 3D walkthroughs helped us make informed decisions. Highly recommended!</p>
      <h4>-Prof Danish Akhtar</h4>
    </div>
    <div class="testimonial-card">
      <p><span class="quote">❝</span>  The expertise and attention to detail shown by Najish Construction Solutions are unmatched. Their architectural planning, BIM services, and interior design suggestions were exceptional. Tranquil Crest wouldn’t have been the same without their innovative approach!</p>
      <h4>-Er Imam Manjar</h4>
    </div>
    <div class="testimonial-card">
      <p><span class="quote">❝</span> What sets Najish Construction Solutions apart is their ability to blend creativity with technical precision. Their Scan to BIM services saved us a lot of time in renovation, and their consultancy ensured smooth execution. A fantastic experience overall!</p>
      <h4>- Sahid Zafar</h4>
    </div>
  </div>
    
    </section>

    <section class="blog">
  <h2>LATEST ARTICLES FROM OUR BLOG POST</h2>
  <div class="blog-container">
    
    <div class="blog-card ">
      <div class="blog-image card11">
      </div>
      <div class="blog-content">
        <h3>The Impact of 3D Modeling in Construction</h3>
        <p>3D modeling is reshaping the construction industry by improving visualization, collaboration, and cost estimation...</p>
        <a href="#">Read More →</a>
      </div>
    </div>

    <div class="blog-card ">
      <div class="blog-image card22">
      </div>
      <div class="blog-content">
        <h3>The Impact of Scan to BIM</h3>
        <p>Scan to BIM enhances accuracy and efficiency in construction and renovation...</p>
        <a href="#">Read More →</a>
      </div>
    </div>

    <div class="blog-card ">
      <div class="blog-image card33 ">
      </div>
      <div class="blog-content">
        <h3>Luxury on a Budget: Interior Design Tips</h3>
        <p>Achieve luxury on a budget by investing in statement pieces, upgrading lighting...</p>
        <a href="#">Read More →</a>
      </div>
    </div>

  </div>
    </section>   

    </>
  );
};

export default Home;
