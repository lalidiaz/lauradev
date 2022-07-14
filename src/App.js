import { experiences, media } from "./texts";
import Header from "./components/Header";
import AnimatedCursor from "react-animated-cursor";
import { GoLink } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { TbCode } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  const greetingAnimation = useAnimation();
  const experienceAnimation = useAnimation();
  const skillsAnimation = useAnimation();
  const blogAnimation = useAnimation();
  const contactAnimation = useAnimation();
  const educationAnimation = useAnimation();

  const [greetingRef, greetingInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-50px" : "-100px",
  });
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-75px" : "-100px",
  });
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-75px" : "-100px",
  });
  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-75px" : "-100px",
  });
  const [blogRef, blogInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-100px" : "-300px",
  });
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (greetingInView) {
      greetingAnimation.start("visible");
    }
  }, [greetingAnimation, greetingInView]);

  useEffect(() => {
    if (experienceInView) {
      experienceAnimation.start("visible");
    }
  }, [experienceAnimation, experienceInView]);

  useEffect(() => {
    if (blogInView) {
      blogAnimation.start("visible");
    }
  }, [blogAnimation, blogInView]);

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
    if (educationInView) {
      educationAnimation.start("visible");
    }
  }, [educationAnimation, educationInView]);

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
        color="159, 168, 218"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #9fa8da",
        }}
      />
      <main className="main">
        <div className="container">
          <div className="left">
            <Header />

            <div className="text" ref={greetingRef}>
              <motion.h3
                animate={greetingAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.45,
                }}
              >
                Hi!{" "}
              </motion.h3>
              <motion.h1
                animate={greetingAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.5,
                }}
              >
                I'm Laura,
              </motion.h1>
              <motion.p
                className="frontend"
                animate={greetingAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.6,
                }}
              >
                Frontend Developer
              </motion.p>
              <motion.div
                className="frontend-icons"
                animate={greetingAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.6,
                }}
              >
                <a href="mailto:lauradiaz1586@gmail.com">
                  <img src="/icons/email.svg" alt="email-icon" className="icon" />
                </a>
                <a href="https://github.com/lalidiaz" target="_blank" rel="noreferrer">
                  <img src="/icons/u_github.svg" alt="github-icon" className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/lauradiaz91/" target="_blank" rel="noreferrer">
                  <img src="/icons/u_linkedin.svg" alt="linkedin-icon" className="icon" />
                </a>
                <a href="/LauraDiazCV.pdf" download>
                  <span className="icon">
                    <FiFileText size={40} />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>

          <div className="right">
            <motion.img
              src="/avatar.JPG"
              alt="avatar"
              className="avatar"
              animate={greetingAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.45,
              }}
            />
            <motion.p
              className="about-me"
              animate={greetingAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.5,
              }}
            >
              About me
            </motion.p>
            <motion.p
              className="about-me-text"
              animate={greetingAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.6,
              }}
            >
              I'm a Frontend Developer with two years of experience in blending the art of design
              with the skill of programming to deliver an immersive and engaging user experience
              through efficient website development and proactive feature optimization.
            </motion.p>
          </div>
        </div>

        <div className="experience" ref={experienceRef}>
          <motion.h4
            animate={experienceAnimation}
            initial="hidden"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.45,
            }}
          >
            Experience
          </motion.h4>

          {experiences.map(({ id, title, dates, tasks, techStack, link, dateslinkUrl }) => (
            <motion.div
              key={id}
              className="experience-card"
              animate={experienceAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.5,
              }}
            >
              <motion.p
                className="experience-title"
                animate={experienceAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.6,
                }}
              >
                {title}
              </motion.p>
              <motion.p
                animate={experienceAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.6,
                }}
                className="experience-dates"
              >
                {dates}
              </motion.p>
              <motion.ul
                animate={experienceAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.6,
                }}
              >
                {Object.values(tasks).map((task) => {
                  return (
                    <li className="experience-description" key={task}>
                      {task}
                    </li>
                  );
                })}
              </motion.ul>

              {techStack && (
                <motion.p
                  animate={experienceAnimation}
                  initial="hidden"
                  variants={variants}
                  transition={{
                    duration: 0.8,
                    ease: [0.6, 0.05, -0.01, 0.9],
                    delay: 0.7,
                  }}
                  className="experience-description-techstack"
                >
                  {techStack}
                </motion.p>
              )}
              {link && (
                <motion.p
                  className="experince-link"
                  animate={experienceAnimation}
                  initial="hidden"
                  variants={variants}
                  transition={{
                    duration: 0.8,
                    ease: [0.6, 0.05, -0.01, 0.9],
                    delay: 0.7,
                  }}
                >
                  <GoLink size={15} /> See the link{" "}
                  <a
                    href={dateslinkUrl}
                    className="experince-link-a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here.
                  </a>
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="skills" ref={skillsRef}>
          <motion.h4
            className="skills-title"
            animate={skillsAnimation}
            initial="hidden"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.45,
            }}
          >
            Skills
          </motion.h4>
          <motion.ul
            className="skills-list"
            initial="hidden"
            animate={skillsAnimation}
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.6,
            }}
          >
            {skills.map((skill, index) => (
              <li className="skills-list-item" key={index}>
                <TbCode /> {skill}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="education" ref={educationRef}>
          <motion.h4
            className="education-title"
            initial="hidden"
            animate={educationAnimation}
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.45,
            }}
          >
            Education
          </motion.h4>
          <motion.p
            className="education-name"
            initial="hidden"
            animate={educationAnimation}
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.5,
            }}
          >
            Frontend Development Coding Bootcamp - 2020
          </motion.p>
          <motion.p
            className="education-description"
            animate={educationAnimation}
            initial="hidden"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.6,
            }}
          >
            Frontend development coding bootcamp with an extension of +200 hours.
          </motion.p>
          <motion.div
            className="education-skills"
            animate={educationAnimation}
            initial="hidden"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.6,
            }}
          >
            <p>Skills:</p>
            <p>HTML5, CSS, Javascript (ES6), ReactJs, Git.</p>
          </motion.div>
        </div>

        <div className="blog" ref={blogRef}>
          <motion.h4
            className="blog-title"
            initial="hidden"
            variants={variants}
            animate={blogAnimation}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.45,
            }}
          >
            Some posts & study notes
          </motion.h4>
          <div className="blog-wrapper">
            {media.map(({ id, title, lang, href, isBlog, isLink }) => (
              <motion.div
                animate={blogAnimation}
                key={id}
                className="blog-item"
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.6,
                }}
              >
                {isBlog && isLink && (
                  <a
                    href={href}
                    alt={title}
                    className="blog-item-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GoLink size={15} /> {title}
                  </a>
                )}

                {!isBlog && isLink && (
                  <a href={href} alt={title} download className="blog-item-link">
                    <GoLink size={15} /> {title}
                  </a>
                )}

                {!isLink && (
                  <div>
                    <GoLink size={15} className="blog-item-link" /> {title}
                  </div>
                )}

                <p className="blog-item-lang">Lang: {lang}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="email-wrapper" ref={contactRef}>
          <motion.p
            className="email-text"
            initial="hidden"
            animate={blogAnimation}
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.45,
            }}
          >
            Get in touch, my inbox is always open. Whether you have a question or just want to say
            hi, I'll try my best to get back to you! 🙂
          </motion.p>
          <motion.p
            className="email-mail"
            initial="hidden"
            variants={variants}
            animate={blogAnimation}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.5,
            }}
          >
            lauradiaz1586@gmail.com
          </motion.p>
        </div>

        <footer>
          <p>Made with ♥️ by me. </p>
          <p>Laura © 2022</p>
        </footer>
      </main>
    </>
  );
}

export default App;
