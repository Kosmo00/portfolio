import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const traslation = 90;

const children = [
  <FaGithub className="cursor-pointer hover:text-4xl rotating-element-counter-clockwise" />,
  <FaInstagram className="cursor-pointer hover:text-4xl rotating-element-counter-clockwise" />,
  <FaFacebook className="cursor-pointer hover:text-4xl rotating-element-counter-clockwise" />,
];


const elements: React.ReactNode[] = [];

let actualDegree = 0;
const plusDegree = 360 / children.length;

for(const child of children){
  elements.push(
    <div 
      className="rounded-full absolute z-10 bg-main w-10 h-10 flex items-center justify-center"
      style={{
        transform: `translate(${Math.cos((actualDegree * Math.PI) / 180) * traslation}px, ${Math.sin((actualDegree * Math.PI) / 180) * traslation}px)`,
      }}
    >{child}</div>
  );
  actualDegree += plusDegree;
}

const i18nPreffix = 'pages.home.social.';

function Social() {
  const { t } = useTranslation();
  return (
    <div id="social" className="flex flex-col items-center justify-center py-[10vh]">
      <div>
        <h3 className="sm:text-6xl text-5xl underline mb-5">
          {t(i18nPreffix + 'intro')}
        </h3>
        <p className="text-lg text-center">{t(i18nPreffix + 'legal')}</p>
      </div>
      <div className=" flex justify-center items-center h-1 w-1 mt-35 mb-15 relative text-5xl rotating-element-clockwise">
        {...elements}
        <div className="rounded-full absolute bg-main w-10 h-10 flex items-center justify-center z-10">
          <FaLinkedin className="cursor-pointer hover:text-4xl rotating-element-counter-clockwise" />
        </div>
        <div className="absolute border border-primary w-[180px] h-[180px] rounded-full z-0"></div>
      </div>
    </div>
  );
}

export default Social;
