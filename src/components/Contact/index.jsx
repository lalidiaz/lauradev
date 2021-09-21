import styles from './Contact.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { FaLinkedin, FaFileCode } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const menu = [
  {
    id: 1,
    name: 'Github',
    icon: <VscGithubInverted color='rgba(49, 42, 43, 1)' size={30} />,
    url: 'https://github.com/lalidiaz',
  },
  {
    id: 2,
    name: 'Linkedin',
    icon: <FaLinkedin color='rgba(49, 42, 43, 1)' size={30} />,
    url: 'https://www.linkedin.com/in/lauradiaz91/',
  },

  {
    id: 3,
    name: 'Email',
    icon: <AiOutlineMail color='rgba(49, 42, 43, 1)' size={30} />,
    url: 'mailto:lauradiaz1586@gmail.com',
  },
  {
    id: 4,
    name: 'CV',
    icon: <FaFileCode color='rgba(49, 42, 43, 1)' size={30} />,
    url: '/LauraDiazCV.pdf',
  },
];

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          {menu.map((item) => {
            const { url, icon, id } = item;
            return (
              <a target='_blank' href={url} rel='noreferrer'>
                <li key={id} className={styles.item}>
                  {icon}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
}
