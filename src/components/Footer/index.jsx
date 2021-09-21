import styles from './Footer.module.scss';
import { TiHeartOutline, TiPencil } from 'react-icons/ti';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made with{' '}
        <span>
          <TiHeartOutline />
        </span>{' '}
        by me.
      </p>
      <p>
        <TiPencil /> Illustration made by{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/chiarailustra'
        >
          Chiara Ilustra
        </a>
      </p>
    </footer>
  );
}
