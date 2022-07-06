import { experiences, media } from "./texts";
import Header from "./components/Header";
import AnimatedCursor from "react-animated-cursor";
import { GoLink } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { TbCode } from "react-icons/tb";

function App() {
  const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "Reactjs",
    "Redux",
    "Nextjs",
    "Git",
    "Browser dev tools",
  ];

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

            <div className="text">
              <h3>Hi! </h3>
              <h1>I'm Laura,</h1>
              <p className="frontend">Frontend Developer</p>
              <div className="frontend-icons">
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
              </div>
            </div>
          </div>

          <div className="right">
            <img src="/avatar.JPG" alt="avatar" className="avatar" />
            <p className="about-me">About me</p>
            <p className="about-me-text">
              I'm a Frontend Developer with two years of experience in blending the art of design
              with the skill of programming to deliver an immersive and engaging user experience
              through efficient website development and proactive feature optimization.
            </p>
          </div>
        </div>

        <div className="experience">
          <h4>Experience</h4>

          {experiences.map((item) => (
            <div key={item.id} className="experience-card">
              <p className="experience-title">{item.title}</p>
              <p className="experience-dates">{item.dates}</p>
              <p className="experience-description">{item.description}</p>
              {item.techStack && (
                <p className="experience-description-techstack">{item.techStack}</p>
              )}
              {item.link && (
                <p className="experince-link">
                  <GoLink size={15} /> See the link{" "}
                  <a
                    href={item.dateslinkUrl}
                    className="experince-link-a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here.
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="skills">
          <h4 className="skills-title">Skills</h4>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li className="skills-list-item" key={index}>
                <TbCode /> {skill}
              </li>
            ))}
      
          </ul>
        </div>

        <div className="education">
          <h4 className="education-title">Education</h4>
          <p className="education-name">Frontend Development Coding Bootcamp - 2020</p>
          <p className="education-description">
            {" "}
            Frontend development coding bootcamp with an extension of +200 hours.
          </p>
          <p className="education-skills">
            Skills: HTML5, CSS, Javascript (ES6), ReactJs, Redux, NextJs, Git, Responsive Design,
            Testing and Debugging, Browser developer tools.
          </p>
        </div>

        <div className="blog">
          <h4 className="blog-title">Some posts & study notes</h4>
          <div className="blog-wrapper">
            {media.map((m) => (
              <div key={m.key} className="blog-item">
                {m.isBlog ? (
                  <a
                    href={m.href}
                    alt={m.title}
                    className="blog-item-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GoLink size={15} /> {m.title}
                  </a>
                ) : (
                  <a href={m.href} alt={m.title} download className="blog-item-link">
                    <GoLink size={15} /> {m.title}
                  </a>
                )}

                <p className="blog-item-lang">Lang: {m.lang}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="email-wrapper">
          <p className="email-text">
            Get in touch, my inbox is always open. Whether you have a question or just want to say
            hi, I'll try my best to get back to you! 🙂
          </p>
          <p className="email-mail">lauradiaz1586@gmail.com</p>
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
