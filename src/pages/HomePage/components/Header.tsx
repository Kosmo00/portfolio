import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const i18nPreffix = 'pages.home.header.';

function Header() {
  const { t } = useTranslation();
  return (
    <section id='hero-section' className='h-[100vh] flex items-center pb-[10vh] pt-[10vh]'>
      <div className='max-w-[80vw] md:max-w-[40vw] ml-[10vw]'>
        <div className='text-5xl text-primary'>
          Vladimir Otero Mariño
        </div>
        <div className='text-lg mt-6 text-justify'>
          {t(`${i18nPreffix}presentation`)}
        </div>
        <div className="mt-12">
          <Link smooth duration={500} to="contact" className="bg-primary text-lg text-dark hover:cursor-pointer hover:bg-accent hover:text-emerald-100 rounded px-4 py-2 transition duration-200">
            {t(`${i18nPreffix}contact-me`)}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Header;