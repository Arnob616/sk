export default function Portfolio() {
  const headerRef = useRef(null);

  useEffect(() => {
    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      const particleCount = 30;
  
    // Header scroll effect
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add('scrolled');
      } else {
        headerRef.current.classList.remove('scrolled');
      }
    };
    
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Update active nav link
          document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
          });
          e.target.classList.add('active');
        }
      }
    };
    
    createParticles();
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>MD Tanvir Hasan Jewel - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@700;800&display=swap" rel="stylesheet" />
      </Head>
    
        
        .profile-img {
          width: 350px;
          height: 350px;
          border-radius: 50%;
          object-fit: cover;
          border: 8px solid rgba(37, 99, 235, 0.2);
          box-shadow: 0 0 50px rgba(6, 182, 212, 0.3);
          position: relative;
          animation: float 6s ease-in-out infinite;
        }
        
        .profile-img::before {
          content: '';
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          animation: pulse 3s infinite;
          z-index: -1;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
        }
        
        .tagline {
          font-size: 1.25rem;
          color: var(--accent);
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .tagline::before {
          content: '';
          width: 40px;
          height: 2px;
          background: var(--accent);
        }
        
        h1 {
          font-family: 'Raleway', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        
        h1 span {
          color: var(--accent);
        }
        
        .hero-desc {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 30px;
          color: var(--gray);
          max-width: 600px;
        }
        
        .btn {
          display: inline-block;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          padding: 12px 30px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(135deg, var(--secondary), var(--primary));
          transition: width 0.5s ease;
          z-index: -1;
        }
        
        .btn:hover::before {
          width: 100%;
        }
        
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }
        
        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: var(--light);
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .social-icons a:hover {
          background: var(--primary);
          transform: translateY(-5px);
        }
        
        /* Section Common Styles */
        section {
          padding: 100px 0;
          position: relative;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }
        
        .section-title h2 {
          font-family: 'Raleway', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          display: inline-block;
          position: relative;
          padding-bottom: 15px;
        }
        
        .section-title h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(to right, var(--primary), var(--accent));
          border-radius: 2px;
        }
        
        .section-title p {
          color: var(--gray);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 15px auto 0;
        }
        
        /* About Section */
        #about {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(10px);
        }
        
        .about-content {
          display: flex;
          gap: 50px;
          align-items: center;
        }
        
        .about-text {
          flex: 1;
        }
        
        .about-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 30px 0;
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .detail-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: var(--accent);
        }
        
        .detail-text h4 {
          font-size: 1.1rem;
          margin-bottom: 5px;
        }
        
        .detail-text p {
          color: var(--gray);
        }
        
        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 30px;
        }
        
        .stat-card {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(37, 99, 235, 0.1);
          border-radius: 10px;
          padding: 25px;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-10px);
          border-color: rgba(6, 182, 212, 0.3);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 10px;
        }
        
        .stat-text {
          font-size: 1.1rem;
          color: var(--gray);
        }
        
        /* Skills Section */
        #skills {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(10px);
        }
        
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .skill-category {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(37, 99, 235, 0.1);
          border-radius: 15px;
          padding: 30px;
          transition: all 0.3s ease;
        }
        
        .skill-category:hover {
          transform: translateY(-10px);
          border-color: rgba(6, 182, 212, 0.3);
        }
        
        .skill-category h3 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .skill-category h3 i {
          color: var(--primary);
        }
        
        .skill-list {
          list-style: none;
        }
        
        .skill-list li {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .skill-list li:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        
        .skill-icon {
          width: 40px;
          height: 40px;
          background: rgba(37, 99, 235, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          color: var(--accent);
        }
        
        .skill-name {
          flex: 1;
          font-weight: 500;
        }
        
        /* Experience Section */
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, var(--primary), var(--accent));
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        
        .timeline-item {
          position: relative;
          width: 50%;
          padding: 20px 40px;
          margin-bottom: 50px;
        }
        
        .timeline-item:nth-child(odd) {
          left: 0;
        }
        
        .timeline-item:nth-child(even) {
          left: 50%;
        }
        
        .timeline-content {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(37, 99, 235, 0.1);
          border-radius: 15px;
          padding: 30px;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          border-color: rgba(6, 182, 212, 0.3);
        }
        
        .timeline-content::before {
          content: '';
          position: absolute;
          top: 30px;
          width: 20px;
          height: 20px;
          background: var(--primary);
          border-radius: 50%;
        }
        
        .timeline-item:nth-child(odd) .timeline-content::before {
          right: -50px;
        }
        
        .timeline-item:nth-child(even) .timeline-content::before {
          left: -50px;
        }
        
        .timeline-date {
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 10px;
        }
        
        .timeline-company {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: var(--light);
        }
        
        .timeline-position {
          color: var(--gray);
          margin-bottom: 15px;
        }
        
        .timeline-achievements li {
          margin-bottom: 8px;
          position: relative;
          padding-left: 20px;
        }
        
        .timeline-achievements li::before {
          content: '▹';
          color: var(--accent);
          position: absolute;
          left: 0;
        }
        
        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }
        
        .project-card {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(37, 99, 235, 0.1);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(6, 182, 212, 0.3);
        }
        
        .project-img {
          height: 200px;
          width: 100%;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
        }
        
        .project-content {
          padding: 25px;
        }
        
        .project-title {
          font-size: 1.4rem;
          margin-bottom: 10px;
          color: var(--light);
        }
        
        .project-desc {
          color: var(--gray);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .tech-tag {
          background: rgba(37, 99, 235, 0.1);
          color: var(--accent);
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
        }
        
        .project-links {
          display: flex;
          gap: 15px;
        }
        
        .project-links a {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--light);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .project-links a:hover {
          color: var(--accent);
        }
        
        /* Contact Section */
        #contact {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(10px);
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 50px;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        
        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--accent);
          flex-shrink: 0;
        }
        
        .contact-text h4 {
          font-size: 1.3rem;
          margin-bottom: 5px;
        }
        
        .contact-text p, 
        .contact-text a {
          color: var(--gray);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .contact-text a:hover {
          color: var(--accent);
        }
        
        .contact-form .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(37, 99, 235, 0.1);
          border-radius: 10px;
          color: var(--light);
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
        }
        
        .form-group textarea {
          min-height: 150px;
          resize: vertical;
        }
        
        .submit-btn {
          width: 100%;
          padding: 15px;
          font-size: 1.1rem;
        }
        
        /* Footer */
        footer {
          background: var(--darker);
          padding: 40px 0 20px;
          text-align: center;
        }
        
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        
        .footer-logo {
          font-family: 'Raleway', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--light);
        }
        
        .footer-logo span {
          color: var(--accent);
        }
        
        .footer-social {
          display: flex;
          gap: 20px;
        }
        
        .footer-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: var(--light);
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .footer-social a:hover {
          background: var(--primary);
          transform: translateY(-5px);
        }
        
        .footer-nav ul {
          list-style: none;
          display: flex;
          gap: 25px;
          margin: 20px 0;
        }
        
        .footer-nav ul li a {
          color: var(--gray);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-nav ul li a:hover {
          color: var(--accent);
        }
        
        .copyright {
          color: var(--gray);
          font-size: 0.9rem;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          width: 100%;
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
          }
          
          .tagline {
            justify-content: center;
          }
          
          .social-icons {
            justify-content: center;
          }
          
          .about-content {
            flex-direction: column;
          }
          
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          nav ul {
            display: none;
          }
          
          .mobile-toggle {
            display: block;
          }
          
          .timeline::before {
            left: 31px;
          }
          
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 20px;
            left: 0 !important;
          }
          
          .timeline-item:nth-child(even) .timeline-content::before {
            left: 18px;
          }
          
          .timeline-item:nth-child(odd) .timeline-content::before {
            left: 18px;
          }
        }
        
        @media (max-width: 576px) {
          h1 {
            font-size: 2.5rem;
          }
          
          .detail-item {
            flex-direction: column;
            text-align: center;
          }
          
          .about-details,
          .about-stats {
            grid-template-columns: 1fr;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* Animated Background Particles */}
      <div className="particles" id="particles"></div>
      
      <header id="header" ref={headerRef}>
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">
              <i className="fas fa-code"></i>Tanvir<span>Dev</span>
            </a>
            
            <nav>
              <ul>
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            
            <button className="mobile-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
      
      <section id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="tagline">
                <span>Full Stack Developer</span>
              </div>
              <h1>MD Tanvir Hasan <span>Jewel</span></h1>
              <p className="hero-desc">
                Dedicated web developer with over 1 year of industry experience creating innovative, 
                user-flexible solutions by leveraging a comprehensive skill set in web technologies.
              </p>
              <a href="#contact" className="btn">Get In Touch</a>
              
              <div className="social-icons">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-dribbble"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <p>Get to know more about my background and expertise</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                A dedicated and result-driven web developer with exceptional full-stack development proficiency. 
                Committed to delivering innovative, user-flexible solutions by leveraging a comprehensive skill 
                set in web technologies and a passion for staying at the forefront of industry trends.
              </p>
              
              <div className="about-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="detail-text">
                    <h4>Location</h4>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="detail-text">
                    <h4>Email</h4>
                    <p>tanvirhasanjewel@gmail.com</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="detail-text">
                    <h4>Phone</h4>
                    <p>+880 1700 568682</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div className="detail-text">
                    <h4>Website</h4>
                    <p>www.tanvirhasanjewel.com</p>
                  </div>
                </div>
              </div>
              
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-number">1+</div>
                  <div className="stat-text">Years Experience</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-number">15+</div>
                  <div className="stat-text">Projects Completed</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-number">99%</div>
                  <div className="stat-text">Client Satisfaction</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-number">24/7</div>
                  <div className="stat-text">Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="skills">
        <div className="container">
          <div className="section-title">
            <h2>Technical Skills</h2>
            <p>Technologies I work with on a daily basis</p>
          </div>
          
          <div className="skills-container">
            <div className="skill-category">
              <h3><i className="fas fa-laptop-code"></i> Frontend</h3>
              <ul className="skill-list">
                <li>
                  <div className="skill-icon">
                    <i className="fab fa-html5"></i>
                  </div>
                  <div className="skill-name">HTML5</div>
                </li>
                <li>
                  <div className="skill-icon">
                    <i className="fab fa-css3-alt"></i>
                  </div>
                  <div className="skill-name">CSS3</div>
                </li>
                <li>
                  <div className="skill-icon">
                    <i className="fab fa-js"></i>
                  </div>
                  <div className="skill-name">JavaScript</div>
                </li>
                <li>
                  <div className="skill-icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <div className="skill-name">React</div>
                </li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3><i className="fas fa-server"></i> Backend</h3>
              <ul className="skill-list">
                <li>
                  <div className="skill-icon">
                    <i className="fab fa-node-js"></i>
                  </div>
                  <div className="skill-name">Node.js</div>
                </li>
                <li>
                  <div className="skill-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <div className="skill-name">MongoDB</div>
                </li>
                <li>
                  <div className="skill-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <div className="skill-name">MySQL</div>
                </li>
                <li>
                  <div className="skill-icon">
                    <i className="fab fa-php"></i>
                  </div>
                  <div className="skill-name">PHP</div>
                </li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3><i className="fas fa-mobile-alt"></i> Mobile</h3>
              <ul className="skill-list">
                <li>
                  <div className="skill-icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <div className="skill-name">React Native</div>
                </li>
                <li>
                  <div className="skill-icon">
                    <i className="fas fa-feather-alt"></i>
                  </div>
                  <div className="skill-name">Flutter</div>
                </li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3><i className="fas fa-tools"></i> Tools & Frameworks</h3>
              <ul className="skill-list">
                <li>
                  <div className="skill-icon">
                    <i className="fab fa-bootstrap"></i>
                  </div>
                  <div className="skill-name">Bootstrap</div>
                </li>
                <li>
                  <div className="skill-icon">
                    <i className="fab fa-git-alt"></i>
                  </div>
                  <div className="skill-name">Git</div>
                </li>
                <li>
                  <div className="skill-icon">
                    <i className="fab fa-figma"></i>
                  </div>
                  <div className="skill-name">Figma</div>
                </li>
                <li>
                  <div className="skill-icon">
                    <i className="fab fa-npm"></i>
                  </div>
                  <div className="skill-name">npm</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section id="experience">
        <div className="container">
          <div className="section-title">
            <h2>Work Experience</h2>
            <p>My professional journey as a developer</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Jan 2021 - Apr 2021</div>
                <h3 className="timeline-company">Magnessa Bangladesh Ltd</h3>
                <div className="timeline-position">Frontend Developer</div>
                <ul className="timeline-achievements">
                  <li>API integration and collaboration with the backend team</li>
                  <li>Optimized site initial loading speed from 7+s to less than 1.5s</li>
                  <li>Designed and developed overall application system</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Jul 2020 - Nov 2020</div>
                <h3 className="timeline-company">Japan Tobacco International</h3>
                <div className="timeline-position">Frontend Developer</div>
                <ul className="timeline-achievements">
                  <li>Designed and developed the overall application system</li>
                  <li>Increased application performance by 37%</li>
                  <li>Developed a unique and optimized user-experience-based feature with QR code scanning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects">
        <div className="container">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <p>Some of my recent work</p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-img">
                <i className="fas fa-tint"></i>
              </div>
              <div className="project-content">
                <h3 className="project-title">Blood Management System</h3>
                <p className="project-desc">
                  Online Blood Donation Platform where users can find blood donors by entering their blood group 
                  and location. The system displays available donors in the area with contact information.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">PHP</span>
                  <span className="tech-tag">MySQL</span>
                </div>
                <div className="project-links">
                  <a href="#"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                  <a href="#"><i className="fab fa-github"></i> Source Code</a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-img">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Platform</h3>
                <p className="project-desc">
                  Full-featured e-commerce solution with product management, shopping cart, 
                  secure payment processing, and order tracking system.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Stripe API</span>
                </div>
                <div className="project-links">
                  <a href="#"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                  <a href="#"><i className="fab fa-github"></i> Source Code</a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-img">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="project-content">
                <h3 className="project-title">Fitness Tracker App</h3>
                <p className="project-desc">
                  Mobile application for tracking workouts, nutrition, and fitness progress 
                  with personalized recommendations and progress charts.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">Redux</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">Chart.js</span>
                </div>
                <div className="project-links">
                  <a href="#"><i className="fab fa-app-store"></i> App Store</a>
                  <a href="#"><i className="fab fa-google-play"></i> Play Store</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>Feel free to reach out for collaboration or inquiries</p>
          </div>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>1143 Somali Dreams, Queen's Garden, Nurer Chala, Vatara, Dhaka 1212, Bangladesh</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+880 1700 568682</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:tanvirhasanjewel@gmail.com">tanvirhasanjewel@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="contact-text">
                  <h4>Website</h4>
                  <a href="http://www.tanvirhasanjewel.com">www.tanvirhasanjewel.com</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Enter subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Enter your message" required></textarea>
                </div>
                
                <button type="submit" className="btn submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Jewel<span>Dev</span></div>
            
            <div className="footer-social">
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-dribbble"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            
            <nav className="footer-nav">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            
            <div className="copyright">
              &copy; 2025 MD Tanvir Hasan Jewel. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}