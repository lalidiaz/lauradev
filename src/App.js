import styles from './styles/Home.module.scss';

import profilePic from '../src/assets/avatar.png';
import { Section, Footer, Contact } from '../src/components/index';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.presentation}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            className={styles.imageContainer}
          >
            <img
              src={profilePic}
              alt='laura-diaz-dev'
              className={styles.image}
            />
          </motion.div>

          <div className={styles.dev}>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
              className={styles.myname}
            >
              Hi, I am Laura.
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 2 }}
              className={styles.title}
            >
              Front-end developer
            </motion.h1>
          </div>
        </div>
        <div className={styles.content}>
          <Section title='About me:'>
            After spending 4 years in the clouds, literally, while working as a
            cabin crew, I started missing the thrills of learning and the
            challenges and excitement of putting new skills into action. Hence,
            I decided to study something that always attracted me, front-end
            development. I instantly fell in love with it since it is a field
            that is constantly evolving which gives me the opportunity of
            learning new things every day.
            <br />I enjoy creating useful and beautiful products that help
            people live a better and happier life.
          </Section>

          <Section title='Skills:'>
            HTML5, Javascript (ES6), Reactjs, Nextjs, Redux, React Native, CSS3,
            Scss, Material UI, Styled Components, Typescript, Git, Browser
            developer tools, Responsive Design.
          </Section>

          <Section title='Projects:'>
            <a
              target='_blank'
              href='https://ferminguerrero.com/'
              rel='noreferrer'
              className={styles.ferminLink}
            >
              Fermin Guerrero Design{' '}
            </a>{' '}
            is a freelance Nextjs project. You can check some of my projects{' '}
            <a
              target='_blank'
              href='https://github.com/lalidiaz?tab=repositories'
              rel='noreferrer'
            >
              here.
            </a>
          </Section>

          <Section title='Contact me!'>
            <Contact />
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
