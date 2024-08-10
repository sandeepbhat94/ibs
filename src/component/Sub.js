import React from 'react';
import './Sub.css';

const services = [        
  {
    title: "Digital Strategy & Consulting",
    items: [{ title: "Digital Transformation" }, { title: "CX Strategy" }, { title: "Content Strategy" }],
  },
  {
    title: "Experience Design",
    items: [{ title: "UX Consultancy" }, { title: "Design System" }, { title: "UI/UX Design" }],
  },
  {
    title: "Technology & Engineering",
    items: [{ title: "Web Development" }, { title: "CMS Solutions" }, { title: "Commerce" }, { title: "Mobile Apps" }, { title: "Cloud & DevSecOps" }],
  },
  {
    title: "Digital Marketing",
    items: ["Brand Digital Strategy", "Campaign Communication", "Digital Films & Shorts", "Social Media Management", "Content Marketing"],
  },
  {
    title: "AI/ML & Emerging Tech",
    items: ["AI/ML Solutions", "Immersive Technologies: AR, VR, & MR"],
  },
];

const Servicesection = () => {
  return (
    <div className="wrapper">  
      <div className="column">  
        <p>OUR SERVICES</p>
        <section className="scrollspy-example">
            <h4 className="title-scroll">Digital Strategy & Consulting</h4>  
            <h4 className="title-scroll">Experience Design</h4>            
            <h4 className="title-scroll">Technology & Engineering</h4>            
            <h4 className="title-scroll">Digital Marketing</h4>       
            <h4 className="title-scroll">AI/ML & Emerging Tech</h4>            
        </section>
        {services.map((content, index) =>
          <section key={index} className="scrollspy-example" tabIndex="0">
            <h4 className="title-scroll">{content.title}</h4>
            {content.items.map((v, i) =>
              <p key={i} className='sub_title'>{v.title || v}</p>      
            )}
          </section>
        )}
      </div>
      <div className="image">
        <img src="https://fulcro-prod-website-assets.fulcroworld.com/assets/media/our_expertise_d21c16add0.webp" alt="Expertise" />
      </div>
    </div>
  );
};

export default Servicesection;
