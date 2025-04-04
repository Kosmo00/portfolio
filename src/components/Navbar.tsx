import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiMenu } from 'react-icons/bi';
import { Link } from "react-scroll";

const i18nPreffix = 'components.navbar.sections.';

interface NavPropTypes {
  children: ReactNode;
  scrollTo: string;
  paddingTop?: number;
  paddingBottom?: number;
  borderBottom?: boolean;
}

function Nav({ children, scrollTo, paddingTop, paddingBottom, borderBottom }: NavPropTypes){

  return (
    <Link smooth duration={500} to={scrollTo} 
      className='md:px-2 pl-4 hover:cursor-pointer hover:bg-accent transition duration-200 rounded-sm'
      style={{
        paddingTop,
        paddingBottom,
        borderBottom: borderBottom ? 1 : undefined,
        borderColor: borderBottom ? 'var(--main-secondary)' : undefined,
        borderBottomStyle: 'solid'
      }}
    >
      {children}
    </Link>
  );
}

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isAtTop, setIsAtTop] = useState(true);
  const [dropdownExpanded, setDropdownExpanded] = useState<boolean>(false);
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
    <div className={`z-50 h-18 md:max-h-18 bg-main flex justify-between items-center fixed w-full opacity-95 transition ease-in-out duration-500 ${isAtTop ? '' : 'shadow-xl'}`}>
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
      <div className='relative md:hidden'>
        <div className='mr-5 mt-2 text-4xl' onClick={() => setDropdownExpanded(d => !d)}>
          <BiMenu />
        </div>
        {
          dropdownExpanded &&
          <div className={`absolute shadow-2xl w-[100px] right-2 top-11 flex flex-col bg-main overflow-hidden ${dropdownExpanded ? 'border border-main-secondary' : ''}`}
          style={{
            maxHeight: dropdownExpanded ? undefined : 0
          }}>
            <Nav borderBottom paddingBottom={5} paddingTop={5} scrollTo='hero-section'>{t(`${i18nPreffix}header`)}</Nav>
            <Nav borderBottom paddingBottom={5} paddingTop={5} scrollTo='about'>{t(`${i18nPreffix}about`)}</Nav>
            <Nav borderBottom paddingBottom={5} paddingTop={5} scrollTo='projects'>{t(`${i18nPreffix}projects`)}</Nav>
            <Nav borderBottom paddingBottom={5} paddingTop={5} scrollTo='contact'>{t(`${i18nPreffix}contact`)}</Nav>
            <Nav borderBottom paddingBottom={5} paddingTop={5} scrollTo='social'>Social</Nav>
            {/* <div className='bg-main-secondary w-full h-[1px]' /> */}
            <div>
              <div className='text-center flex justify-start mt-1 mb-2 ml-4'>
                <div className='hover:cursor-pointer hover:bg-accent pr-2 transition duration-200 rounded-sm' 
                onClick={() => changeLanguage('en')}>EN</div>
                |
                <div className='hover:cursor-pointer hover:bg-accent pl-2 transition duration-200 rounded-sm' 
                onClick={() => changeLanguage('es')}>ES</div>
              </div>
            </div>
          </div>
        }
      </div>
      
    </div>
  );
}

export default Navbar;