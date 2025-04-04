import { useTranslation } from "react-i18next";
// import { DiJavascript } from "react-icons/di";
// import { FaCss3, FaDigitalOcean } from "react-icons/fa";
// import { IoLogoHtml5 } from "react-icons/io";

const i18nPreffix = 'pages.home.contact.';

// const elements: React.ReactNode[] = [
//   <FaDigitalOcean />,
//   <DiJavascript />,
//   <FaCss3 />,
//   <IoLogoHtml5 />
// ]

// function Waterfall(){
//   return (
//     <div className="text-4xl flex flex-col items justify-around h-full">
//       {...elements}
//     </div>
//   );
// }

function Contact() {
  const { t } = useTranslation();
  return (
    <div id="contact" className="flex lg:justify-end items-center pr-[10vw] pl-[10vw] py-[10vh]">
      {/* <div className="hidden lg:flex ml-[5vw] border-y-2 border-main-secondary h-50 w-50 justify-around">
        <div>
          <Waterfall />
        </div>
        <div className="mx-5">
          <Waterfall />
        </div>
        <div>
        <Waterfall />
        </div>
      </div> */}
      <div className="bg-main-secondary text-dark font-semibold rounded-md px-10">
        <h3 className="text-2xl sm:text-4xl text-center mt-4">
          {t(i18nPreffix + 'intro')}
        </h3>
        <div className="sm:w-[500px] w-[60vw] py-5 font-bold">
          <input type="text" placeholder={t(i18nPreffix + 'name-placeholder')} className="mb-3 border border-dark pl-1 rounded-md w-full focus:border-2 outline-none" />
          <input type="text" placeholder={t(i18nPreffix + 'email-placeholder')} className="mb-3 border border-dark pl-1 rounded-md w-full focus:border-2 outline-none" />
          <textarea placeholder={t(i18nPreffix + 'content-placeholder')} rows={5} className="border border-dark pl-1 rounded-md w-full focus:border-2 outline-none" />
        </div>
        <div className="flex justify-end">
        <button className="font-normal bg-primary text-lg mb-5 ml-20 text-dark hover:cursor-pointer hover:bg-accent hover:text-emerald-100 rounded px-4 py-2 transition duration-200">
          Send
        </button>
        </div>
      </div>
    </div>
  )
}

export default Contact;