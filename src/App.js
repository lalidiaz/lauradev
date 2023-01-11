/* eslint-disable jsx-a11y/anchor-has-content */
import { projects } from "./texts";
import AnimatedCursor from "react-animated-cursor";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Typewriter from "typewriter-effect";
import Text from "./components/Text";
import Title from "./components/Title";
import { skills } from "./conventions";
import Card from "./components/Card";
import AnimateContent from "./components/AnimateContent";
import {
  Hero,
  UpperContent,
  Grid,
  GridRow,
  GridRowElem,
  SkillSection,
  Skill,
  SkillCircle,
  ProjectsContainer,
  ProjectCard,
  ProjectCardTitle,
  ProjectCardTitleCircle,
  TechStack,
  EmailSection,
  ContactSection,
  Footer,
  AboutSection,
  AboutTextContainer,
  ProjectsSection,
  CardPracticeWrapper,
  CardLink,
} from "./styles/Home";

const App = () => {
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

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 72 },
  };

  const website = projects.filter((project) => project.app === "website");

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
      <Hero>
        <UpperContent ref={greetingRef}>
          <Title
            title="Hi, I'm Laura."
            delay={0.45}
            animate={greetingAnimation}
            variants={variants}
          />
          <Title
            title="Frontend developer."
            delay={0.5}
            animate={greetingAnimation}
            variants={variants}
          />

          <Grid
            animate={greetingAnimation}
            initial="hidden"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.5,
            }}
          >
            <GridRow>
              <GridRowElem>Currently in</GridRowElem>
              <GridRowElem>Dubai, UAE </GridRowElem>
            </GridRow>

            <GridRow>
              <GridRowElem>Working with</GridRowElem>
              <GridRowElem>Reactjs | Nextjs | Typescript | Redux </GridRowElem>
            </GridRow>
            <GridRow>
              <GridRowElem>I enjoy</GridRowElem>
              <GridRowElem>
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
              </GridRowElem>
            </GridRow>
          </Grid>
        </UpperContent>
        <AboutSection ref={aboutRef}>
          <Title animate={aboutAnimation} variants={variants} delay={0.45} title="About me" />

          <AboutTextContainer>
            <Text
              animate={aboutAnimation}
              variants={variants}
              delay={0.4}
              text="Frontend Engineer since 2020. A self-motivated individual, learning strong fundamentals in web development and passionate about tech."
            />
            <Text
              animate={aboutAnimation}
              variants={variants}
              delay={0.5}
              text="I am currently working in a dynamic team where I am the principal Frontend engineer responsible for developing new user-facing features and products, determining the project structure on the Frontend, and choosing the right technology."
            />
            <Text
              animate={aboutAnimation}
              variants={variants}
              delay={0.6}
              text="I’ve been learning Nodejs and worked on fullstack projects where I implemented my new skills."
            />

          </AboutTextContainer>
        </AboutSection>
        <SkillSection ref={skillsRef}>
          {skills.map((skill, index) => (
            <Skill
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
              <SkillCircle /> {skill}
            </Skill>
          ))}
        </SkillSection>
        <ProjectsSection ref={projectsRef}>
          <Title title="Projects" variants={variants} animate={projectsAnimation} delay={0.4} />

          <ProjectsContainer
            animate={projectsAnimation}
            initial="hidden"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.6,
            }}
          >
            {website.map(({ id, name, url, type, stack, code, client }) => (
              <ProjectCard key={id}>
                <ProjectCardTitle>
                  <p>Project</p>
                  <ProjectCardTitleCircle />
                </ProjectCardTitle>
                <Card label="Name">
                  <p>{name}</p>
                </Card>

                {client && (
                  <Card label="Client">
                    <p>{client}</p>
                  </Card>
                )}

                <Card label="Tech Stack">
                  <TechStack>
                    {stack.map((s) => (
                      <p key={s}>{s} </p>
                    ))}
                  </TechStack>
                </Card>
                {url && (
                  <Card label="URL">
                    <CardLink href={url} target="_blank" rel="noreferrer">
                      {url}
                    </CardLink>
                  </Card>
                )}
                {code && (
                  <Card label="Code">
                    <CardLink href={code} target="_blank" rel="noreferrer">
                      Link
                    </CardLink>
                  </Card>
                )}
              </ProjectCard>
            ))}

            {/* <CardPracticeWrapper>
              <Title title="Small examples to practice" />

              {smallApp.map(({ id, name, stack, code }) => (
                <CardPractice key={id} name={name} code={code} stack={stack} />
              ))}
            </CardPracticeWrapper> */}
          </ProjectsContainer>
        </ProjectsSection>

        <EmailSection ref={contactRef}>
          <Text
            animate={contactAnimation}
            variants={variants}
            delay={0.45}
            text="Get in touch! My inbox is always open."
          />
          <Text
            animate={contactAnimation}
            variants={variants}
            delay={0.5}
            text="Whether you have a question or just want to say hi, I'll try my best to get back to you!
            🙂"
          />

          <AnimateContent animate={contactAnimation} variants={variants} delay={0.5}>
            <a href="mailto:lauradiaz1586@gmail.com"> lauradiaz1586@gmail.com</a>
          </AnimateContent>
        </EmailSection>
        <ContactSection>
          <Grid
            initial="hidden"
            animate={contactAnimation}
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.6,
            }}
          >
            <GridRow>
              <GridRowElem>Email</GridRowElem>
              <GridRowElem>
                <a href="mailto:lauradiaz1586@gmail.com">lauradiaz1586@gmail.com</a>
              </GridRowElem>
            </GridRow>
            <GridRow>
              <GridRowElem>My CV</GridRowElem>
              <GridRowElem>
                <a href="/LauraDiazCV.pdf">Download</a>
              </GridRowElem>
            </GridRow>
            <GridRow>
              <GridRowElem>Linkedin</GridRowElem>
              <GridRowElem>
                <a href="https://www.linkedin.com/in/lauradiaz91/" rel="noreferrer" target="_blank">
                  https://www.linkedin.com/in/lauradiaz91/
                </a>
              </GridRowElem>
            </GridRow>
            <GridRow>
              <GridRowElem>Github</GridRowElem>
              <GridRowElem>
                <a href="https://github.com/lalidiaz" rel="noreferrer" target="_blank">
                  https://github.com/lalidiaz
                </a>
              </GridRowElem>
            </GridRow>
            <GridRow>
              <GridRowElem>Medium articles</GridRowElem>
              <GridRowElem>
                <a href="https://github.com/lalidiaz" rel="noreferrer" target="_blank">
                  https://lalidiaz.medium.com/
                </a>
              </GridRowElem>
            </GridRow>
          </Grid>
        </ContactSection>
      </Hero>
      <Footer>
        <p>Made with ♥️ by me. </p>
        <p>Laura © 2022</p>
      </Footer>
    </>
  );
};

export default App;
