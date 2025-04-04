import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";

const i18nPreffix = 'components.navbar.sections.';

interface NavPropTypes {
  children: ReactNode;
  scrollTo: string;
}

function Nav({ children, scrollTo }: NavPropTypes){

  return (
    <Link smooth duration={500} to={scrollTo} className='ml-3 hover:cursor-pointer hover:bg-accent px-1 transition duration-200 rounded-sm'>
      {children}
    </Link>
  );
}

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isAtTop, setIsAtTop] = useState(true);
  // const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 5;
      setIsAtTop(atTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`h-18 md:max-h-18 bg-main flex justify-between items-center fixed w-full opacity-95 transition ease-in-out duration-500 ${isAtTop ? '' : 'shadow-xl'}`}>
      <div className='ml-5'>Logo</div>
      <div className='mr-10 hidden md:flex text-lg md:items-center'>
        <Nav scrollTo='hero-section'>{t(`${i18nPreffix}header`)}</Nav>
        <Nav scrollTo='about'>{t(`${i18nPreffix}about`)}</Nav>
        <Nav scrollTo='projects'>{t(`${i18nPreffix}projects`)}</Nav>
        <Nav scrollTo='contact'>{t(`${i18nPreffix}contact`)}</Nav>
        <Nav scrollTo='social'>Social</Nav>
        {/* Language and theme selection section */}
        <div className='ml-4 uppercase flex items-center relative'>
          <span className='mr-4'>|</span>
          <div className='text-center'>
            <div className='hover:cursor-pointer hover:bg-accent px-1 transition duration-200 rounded-sm' 
            onClick={() => changeLanguage('en')}>EN</div>
            <hr />
            <div className='hover:cursor-pointer hover:bg-accent px-1 transition duration-200 rounded-sm' 
            onClick={() => changeLanguage('es')}>ES</div>
          </div>
        </div>
      </div>
      <div className='mr-5 mt-2 md:hidden'>dropdown</div>
    </div>
  );
}

export default Navbar;