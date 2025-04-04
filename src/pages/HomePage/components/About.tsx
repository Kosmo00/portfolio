import { useTranslation } from "react-i18next";

const i18nPreffix = 'pages.home.about.';

function About() {
  const { t } = useTranslation();
  return (
    <div id='about' className='pl-[10vw] lg:pl-[20vw] pr-[10vw] text-lg bg-main-secondary text-dark font-semibold py-[20vh]'>
      <div className="block md:grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex w-auto">
            <h2 className="text-5xl">
            {t(i18nPreffix + 'intro')}
            </h2>
            <div className="bg-main h-[1px] ml-5 mr-5 mt-8 grow"></div>
          </div>
          <div className="mt-10 text-justify">
            {t(i18nPreffix + 'personal-data-1')}
            <br />
            <br />
            {t(i18nPreffix + 'personal-data-2-part-1')} 
            <a className="text-primary hover:underline" target="_blank" href="https://lunageo.com/">Lunageo</a>. 
            {t(i18nPreffix + 'personal-data-2-part-2')} 
            <a className="text-primary hover:underline" target="_blank" href="https://napptilus.com/">Napptilus</a> 
            {t(i18nPreffix + 'personal-data-2-part-3')} 
            <a className="text-primary hover:underline" target="_blank" href="https://nappai.ai/">Nappai</a> 
            {t(i18nPreffix + 'personal-data-2-part-4')} 
            <a className="text-primary hover:underline" target="_blank" href="https://napptilus.com/">HyperGraph</a>.
            <br />
            <br />
            {t(i18nPreffix + 'personal-data-3')}:
            <ul className="grid grid-cols-2 mt-4 text-sm ml-10">
              <div>
                <li><code>HTML</code></li>
                <li><code>CSS</code></li>
                <li><code>JavaScript</code></li>
                <li><code>ReactJs</code></li>
                <li><code>TailwindCSS</code></li>
              </div>
              <div>
                <li><code>NodeJs</code></li>
                <li><code>NextJs</code></li>
                <li><code>C#</code></li>
                <li><code>Python</code></li>
              </div>
            </ul>
          </div>
        </div>
        <div className="sm:mt-22 mt-12 flex justify-center sm:text-left">
          <div 
            className="h-[240px] w-[135px] sm:h-[480px] sm:w-[270px] transition duration-200 bg-[url(./assets/image.jpeg)] bg-cover" 
          >
            <div className="w-full h-full bg-main transition duration-300 hover:opacity-0 mix-blend-color"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;