import styles from './styles/Home.module.scss';
import { Link } from 'react-router-dom';
import { Footer } from './components/index';
import avatar from './assets/avatar.JPG';
import { Header } from './components/index';
import { skills, links } from './texts';
import cv from './assets/LauraDiazCV.pdf';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Hey! I'm Laura Diaz</h1>
        <h2> Frontend Developer</h2>
        <div className={styles.content}>
          <img src={avatar} alt='avatar' className={styles.avatar} />

          <div className={styles.textContent}>
            <h3>Here's my story</h3>
            <p className={styles.text}>
              After spending 4 years in the clouds, literally, while working as
              a cabin crew, I started missing the thrills of learning and the
              challenges and excitement of putting new skills into action.
              Hence, I decided to study something that always attracted me,
              front-end development.
            </p>
            <p className={styles.text}>
              I instantly fell in love with it since it is a field that is
              constantly evolving which gives me the opportunity of learning new
              things every day.
            </p>
            <p className={styles.text}>
              I enjoy creating useful and beautiful products that help people
              live a better and happier life.
            </p>
          </div>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a href={cv} download>
                Resume
              </a>
            </li>
            {links.map((item) => {
              return (
                <li>
                  <a href={item.href} target='_blank' rel='noreferrer'>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.skillsContainer}>
          <div className={styles.experienceContainer}>
            <h4>My Experience So Far</h4>

            <div className={styles.education}>
              <h5>Education</h5>
              <p>Frontend Development Coding Bootcamp</p>

              <p>March 2020 - June 2020 | CourseIt, Buenos Aires.</p>
            </div>
            <div className={styles.experience}>
              <h5>Experience</h5>
              <div>
                <p>
                  <span>Frontend Developer</span> | Dorothy
                </p>
                <p>Jun 2021 - Present</p>
              </div>
              <div>
                <p>
                  <span>Frontend Developer</span> | Freelance
                </p>
                <a
                  target='_blank'
                  href='https://ferminguerrero.com/'
                  rel='noreferrer'
                  className={styles.ferminLink}
                >
                  Fermin Guerrero Design{' '}
                </a>
                <p>Jun 2020 - May 2021</p>
              </div>
            </div>
            <a className={styles.resume} href={cv} download>
              Resume
            </a>
          </div>
          <div className={styles.skills}>
            <h5>Skills & Interests</h5>
            <ul className={styles.ul}>
              {skills.map((item) => (
                <li key={item.id} className={styles.item}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.contact}>
          <h4>Say Hi!</h4>
          <p>
            Get In Touch, my inbox is always open. Whether you have a question
            or just want to say hi, I’ll try my best to get back to you!
          </p>
          <p className={styles.mail}>lauradiaz1586@gmail.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
