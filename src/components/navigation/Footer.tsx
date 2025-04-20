import { FC } from "react";
import { Mail } from "lucide-react";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

const Footer: FC = () => {
  return (
    <footer className='bg-dark text-light py-12 border-t border-white/10'>
      <div className='container-width px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold gradient-text text-center md:text-left'>Daniel Wilkey</h2>
            <p className='text-white mt-2 text-center md:text-left'>UX/UI Designer & Web Developer</p>
          </div>

          <div className='flex space-x-4'>
            <a
              href='https://github.com/Vader1970'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-highlight transition-colors duration-300'
              aria-label='GitHub'
            >
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href='https://www.linkedin.com/in/danielwilkey/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-highlight transition-colors duration-300'
              aria-label='LinkedIn'
            >
              <LinkedinIcon width={20} height={20} />
            </a>
            <a
              href='mailto:daniel.wilkey@gmail.com'
              className='text-white hover:text-highlight transition-colors duration-300'
              aria-label='Email'
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-white/10 text-center text-white text-sm'>
          <p>© {new Date().getFullYear()} Daniel Wilkey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
