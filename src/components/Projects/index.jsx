import { projects } from '../../texts';
import { BsCodeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function Projects() {
  return (
    <div className='projects-container'>
      <div className='projects-header'>
        <h1>Projects</h1>
        <Link to='/'>
          <AiOutlineArrowLeft />
          Back
        </Link>
      </div>

      {projects.map((item) => {
        return (
          <div className='project-card'>
            <BsCodeSlash size={30} />
            <p className='project-name'>
              <span>{item.name}</span>
            </p>
            <p> {item.desciption}</p>

            {item.link && (
              <p>
                See the website here{' '}
                <a href={item.link} target='_blank' rel='noreferrer'>
                  {item.link}
                </a>
              </p>
            )}
            <p>
              <a href={item.code}>Github</a>
            </p>
          </div>
        );
      })}
    </div>
  );
}
