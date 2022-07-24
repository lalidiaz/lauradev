/* eslint-disable jsx-a11y/anchor-has-content */
import { projects } from "./texts";
import AnimatedCursor from "react-animated-cursor";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Typewriter from "typewriter-effect";

function App() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  const greetingAnimation = useAnimation();
  const skillsAnimation = useAnimation();
  const contactAnimation = useAnimation();
  const projectsAnimation = useAnimation();
  const aboutAnimation = useAnimation();

  const [greetingRef, greetingInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-50px" : "-100px",
  });
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-50px" : "-100px",
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-75px" : "-100px",
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (greetingInView) {
      greetingAnimation.start("visible");
    }
  }, [greetingAnimation, greetingInView]);

  useEffect(() => {
    if (aboutInView) {
      aboutAnimation.start("visible");
    }
  }, [aboutAnimation, aboutInView]);

  useEffect(() => {
    if (contactInView) {
      contactAnimation.start("visible");
    }
  }, [contactAnimation, contactInView]);

  useEffect(() => {
    if (skillsInView) {
      skillsAnimation.start("visible");
    }
  }, [skillsAnimation, skillsInView]);

  useEffect(() => {
    if (projectsInView) {
      projectsAnimation.start("visible");
    }
  }, [projectsAnimation, projectsInView]);

  const skills = [
    "HTML5",
    "CSS",
    "Javascript (ES6)",
    "Redux",
    "Nextjs",
    "Reactjs",
    "Testing and Debugging",
    "Browser developer tools",
    "Responsive Design",
    "Git & Github",
  ];

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 72 },
  };

  return (
    <>
      {" "}
      <AnimatedCursor
        color="255, 235, 59"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "1px solid rgb(255, 235, 59)",
        }}
      />
      <main className="main">
        <section className="upper-content" ref={greetingRef}>
          <motion.h1
            className="title"
            animate={greetingAnimation}
            initial="hidden"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.45,
            }}
          >
            Hi, I'm Laura. <br />
            Frontend developer.
          </motion.h1>
          <motion.div
            className="grid"
            animate={greetingAnimation}
            initial="hidden"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.5,
            }}
          >
            <div className="grid-row">
              <div className="grid-row-elem">Currently in</div>
              <div className="grid-row-elem">Dubai, UAE </div>
            </div>

            <div className="grid-row">
              <div className="grid-row-elem">Working with</div>
              <div className="grid-row-elem">Reactjs | Nextjs | Typescript | Redux </div>
            </div>
            <div className="grid-row">
              <div className="grid-row-elem">I enjoy</div>
              <div className="grid-row-elem">
                {" "}
                <Typewriter
                  options={{
                    strings: [
                      "working in a collaborative environment",
                      "Learning new things",
                      "Share what I learn",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </section>
        <section className="about-section" ref={aboutRef}>
          <motion.h2
            animate={aboutAnimation}
            initial="hidden"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.45,
            }}
          >
            About me <span>&#8212;</span>
          </motion.h2>
          <motion.p
            animate={aboutAnimation}
            initial="hidden"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.5,
            }}
          >
            I'm a Front End Engineer with two years of experience, learning strong fundamentals in
            Front End technologies. I like building scalable web infrastructure and making websites
            fast. Passionate about tech, javascript, currently learning about UX.
          </motion.p>
        </section>
        <ul className="skills-section" ref={skillsRef}>
          {skills.map((skill, index) => (
            <motion.li
              className="skill"
              key={index}
              animate={skillsAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.45,
              }}
            >
              <div className="skill-circle"></div> {skill}
            </motion.li>
          ))}
        </ul>
        <section className="projects-section" ref={projectsRef}>
          <motion.h2
            initial="hidden"
            variants={variants}
            animate={projectsAnimation}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.45,
            }}
          >
            Projects <span>&#8212;</span>
          </motion.h2>
          <motion.div
            className="projects-container"
            animate={projectsAnimation}
            initial="hidden"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.6,
            }}
          >
            {projects.map(({ id, name, url, type, stack, code, client }) => (
              <div className="projects-card" key={id}>
                <div className="projects-card-inner-title">
                  <p>Project</p>
                  <div className="projects-card-inner-title-circle"></div>
                </div>
                <div className="projects-card-inner-top">
                  <p>Name</p>
                  <p>{name}</p>
                </div>
                <div className="projects-card-inner">
                  <p>Type</p>
                  <p>{type}</p>
                </div>
                {client && (
                  <div className="projects-card-inner">
                    <p>Client</p>
                    <p>{client}</p>
                  </div>
                )}

                <div className="projects-card-inner">
                  <p>Tech-stack</p>
                  <div className="projects-card-stack">
                    {stack.map((s) => (
                      <p key={s}>{s}</p>
                    ))}
                  </div>
                </div>
                {url && (
                  <div className="projects-card-inner">
                    <p>Url</p>
                    <a href={url} target="_blank" rel="noreferrer">
                      {url}
                    </a>
                  </div>
                )}
                {code && (
                  <div className="projects-card-inner">
                    <p>Code</p>
                    <a href={code} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </section>

        <section className="email-section" ref={contactRef}>
          <motion.p
            initial="hidden"
            animate={contactAnimation}
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.45,
            }}
          >
            {" "}
            Get in touch! My inbox is always open.
          </motion.p>
          <motion.p
            initial="hidden"
            animate={contactAnimation}
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.5,
            }}
          >
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
            🙂
          </motion.p>
          <motion.p
            initial="hidden"
            animate={contactAnimation}
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.6,
            }}
          >
            <a href="mailto:lauradiaz1586@gmail.com"> lauradiaz1586@gmail.com</a>
          </motion.p>
        </section>
        <section className="contact-section">
          <motion.div
            className="grid"
            initial="hidden"
            animate={contactAnimation}
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.6,
            }}
          >
            <div className="grid-row">
              <div className="grid-row-elem">email</div>
              <div className="grid-row-elem">
                <a href="mailto:lauradiaz1586@gmail.com">lauradiaz1586@gmail</a>
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-row-elem">My CV</div>
              <div className="grid-row-elem">
                <a href="/LauraDiazCV.pdf">Download</a>
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-row-elem">Linkedin</div>
              <div className="grid-row-elem">
                <a href="https://www.linkedin.com/in/lauradiaz91/" rel="noreferrer" target="_blank">
                  https://www.linkedin.com/in/lauradiaz91/
                </a>
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-row-elem">Github</div>
              <div className="grid-row-elem">
                <a href="https://github.com/lalidiaz" rel="noreferrer" target="_blank">
                  https://github.com/lalidiaz
                </a>
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-row-elem">Medium articles</div>
              <div className="grid-row-elem">
                <a href="https://github.com/lalidiaz" rel="noreferrer" target="_blank">
                  https://lalidiaz.medium.com/
                </a>
              </div>
            </div>
          </motion.div>
        </section>
        </main>
        <footer>
          <div className="footer-text">
            <p>Made with ♥️ by me. </p>
            <p>Laura © 2022</p>
          </div>
        </footer>

    </>
  );
}

export default App;
