import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Service.css';

const services = [        
  {
    title: "Digital Strategy & Consulting",
    items: [ "Digital Transformation", "CX Strategy", "Content Strategy" ],
  },
  {
    title: "Experience Design",
    items: ["UX Consultancy", "Design System", "UI/UX Design"],
  },
  {
    title: "Technology & Engineering",
    items: ["Web Development", "CMS Solutions", "Commerce", "Mobile Apps", "Cloud & DevSecOps"],
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
    <div className="wrapper" id="Our-Services">
      <div className="column">
        <p>OUR SERVICES</p>

        {/* First Scroll - Titles */}
        <section className="scrollspy-examples">
          {['Digital Strategy & Consulting', 'Experience Design', 'Technology & Engineering', 'Digital Marketing', 'AI/ML & Emerging Tech'].map((title, i) => (
            <TitleScroll key={i} title={title} index={i} />
          ))}
        </section>

        {/* Second Scroll - Headings and Subheadings */}
        {services.map((content, index) => (
          <SectionWithSubheadings key={index} content={content} index={index} />
        ))}
      </div>
      <div className="image">
        <img src="https://fulcro-prod-website-assets.fulcroworld.com/assets/media/our_expertise_d21c16add0.webp" alt="Expertise" />
      </div>
    </div>
  );
};

const TitleScroll = ({ title, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.3, duration: 0.8, ease: "easeOut" }
      });
    } else {
      controls.start({ opacity: 0, y: 70 });
    }
  }, [controls, inView, index]);

  return (
    <motion.h4
      className="title-scroll"
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={controls}
    >
      {title}
    </motion.h4>
  );
};

const SectionWithSubheadings = ({ content, index }) => {
  const sectionControls = useAnimation();
  const subheadingControls = useAnimation();
  const [sectionRef, sectionInView] = useInView({ triggerOnce: false });
  const [subheadingRefs, subheadingsInView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (sectionInView) {
      sectionControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      });
    } else {
      sectionControls.start({ opacity: 0, y: 70 });
    }
  }, [sectionControls, sectionInView]);

  React.useEffect(() => {
    if (subheadingsInView) {
      subheadingControls.start((i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }
      }));
    } else {
      subheadingControls.start((i) => ({
        opacity: 0,
        x: -50,
        transition: { delay: (content.items.length - i) * 0.2, duration: 0.5, ease: "easeOut" }
      }));
    }
  }, [subheadingControls, subheadingsInView, content.items.length]);

  return (
    <motion.section
      className="scrollspy-section"
      tabIndex="0"
      ref={sectionRef}
      initial={{ opacity: 0, y: 70 }}
      animate={sectionControls}
    >
      <h4 className="title-scroll">{content.title}</h4>
      <span className="border-line"></span>
      {content.items.map((v, i) => (
        <motion.p
          key={i}
          className="sub_title"
          ref={subheadingRefs}
          custom={i}
          initial={{ opacity: 0, x: -50 }}
          animate={subheadingControls}
        >
          {v}
        </motion.p>
      ))}
    </motion.section>
  );
};

export default Servicesection;

