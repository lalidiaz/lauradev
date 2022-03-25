import cv from '../../assets/LauraDiazCV.pdf';
import { Link } from 'react-router-dom';

export default function header() {
  return (
    <header className='header'>
      <ul>
        <li>
          <a href={cv} download>
            Resume
          </a>
        </li>
        <li>
          <Link to='/projects' className='link'>
            My Pojects
          </Link>
        </li>
      </ul>
    </header>
  );
}
