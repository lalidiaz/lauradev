/* eslint-disable jsx-a11y/anchor-has-content */
import { media, practiceExercises, projects } from "./texts";
import Wrapper from "./components/Wrapper";
import AnimatedCursor from "react-animated-cursor";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  const greetingAnimation = useAnimation();
  const skillsAnimation = useAnimation();
  const blogAnimation = useAnimation();
  const contactAnimation = useAnimation();
  const educationAnimation = useAnimation();
  const projectsAnimation = useAnimation();

  const [greetingRef, greetingInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-50px" : "-100px",
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
        color="0,0,0"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "1px solid black",
        }}
      />
      <main className="main">
        <Wrapper>
          <div className="text" ref={greetingRef}>
            <div className="text-with-img">
              <div>
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
                </motion.h1>{" "}
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
              </div>
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
            </div>

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
              I'm a Front End Engineer with two years of experience, learning strong fundamentals in
              Front End technologies. I like building scalable web infrastructure and making
              websites fast. Passionate about tech, javascript, curious about UX and I love learning
              new things.
            </motion.p>
          </div>
        </Wrapper>

        <Wrapper>
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
                  {skill}
                </li>
              ))}
            </motion.ul>
          </div>
        </Wrapper>

        <div className="projects" ref={projectsRef}>
          <Wrapper>
            <motion.h4
              className="projects-title"
              initial="hidden"
              variants={variants}
              animate={projectsAnimation}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.45,
              }}
            >
              Projects
            </motion.h4>

            {projects.map(({ id, name, url, type, description, stack, code }) => (
              <motion.div
                className="projects-card"
                key={id}
                animate={projectsAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.6,
                }}
              >
                <p className="project-card-subtitle">{type}</p>
                <p className="project-card-title">{name}</p>
                <p className="project-card-description">{description}</p>
                <div className="project-card-stack">
                  {stack.map((s) => (
                    <p key={s} className="project-card-stack">
                      {s}
                    </p>
                  ))}
                </div>
                <div className="project-card-button-container">
                  <a href={code} target="_blank" rel="noreferrer">
                    See the code here
                  </a>
                  <a href={url} target="_blank" rel="noreferrer">
                    See the demo here
                  </a>
                </div>
              </motion.div>
            ))}
          </Wrapper>

          <Wrapper>
            <motion.h4
              className="projects-title"
              initial="hidden"
              variants={variants}
              animate={projectsAnimation}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.45,
              }}
            >
              Practice exercises
            </motion.h4>
          </Wrapper>
          <Wrapper>
            <div className="practice-cards-wrapper">
              {practiceExercises.map(({ id, repos, topic }) => (
                <motion.div
                  key={id}
                  animate={projectsAnimation}
                  initial="hidden"
                  className="practice-cards"
                  variants={variants}
                  transition={{
                    duration: 0.8,
                    ease: [0.6, 0.05, -0.01, 0.9],
                    delay: 0.6,
                  }}
                >
                  <h4>{topic}</h4>
                  <div className="practice-cards-repos">
                    {repos.map(({ name, url, id }) => (
                      <div className="repos" key={id}>
                        <a className="repos-link" target="_blank" rel="noreferrer" href={url}>
                          {name}
                        </a>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Wrapper>
        </div>

        <Wrapper>
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
        </Wrapper>

        <Wrapper>
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
                      <InsertLinkIcon /> {title}
                    </a>
                  )}

                  {!isBlog && isLink && (
                    <a href={href} alt={title} download className="blog-item-link">
                      <InsertLinkIcon /> {title}
                    </a>
                  )}

                  {!isLink && (
                    <div>
                      <InsertLinkIcon  className="blog-item-link" /> {title}
                    </div>
                  )}

                  <p className="blog-item-lang">Lang: {lang}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Wrapper>

        <Wrapper>
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
        </Wrapper>

        <footer>
          <a href="mailto:lauradiaz1586@gmail.com">lauradiaz1586@gmail.com</a>

          <a href="https://github.com/lalidiaz" target="_blank" rel="noreferrer">
            Github
          </a>

          <a href="https://www.linkedin.com/in/lauradiaz91/" target="_blank" rel="noreferrer">
            Linkedin
          </a>

          <a href="/LauraDiazCV.pdf" download>
            My CV
          </a>

          <div className="footer-text-one">
            <p>Made with ♥️ by me. </p>
          </div>
          <div className="footer-text-two">
            <p>Laura © 2022</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
