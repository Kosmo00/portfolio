import { useTranslation } from "react-i18next";

const i18nPreffix = 'pages.home.contact.';

function Contact() {
  const { t } = useTranslation();
  return (
    <div id="contact" className="flex lg:justify-between items-center pr-[10vw] pl-[10vw] py-[10vh]">
      <div className="hidden lg:grid lg:grid-cols-3 col-span-4">
        {/* <div>asd1</div>
        <div>asd2</div>
        <div>asd3</div> */}
      </div>
      <div className="bg-main-secondary text-dark font-semibold rounded-md px-10">
        <h3 className="text-2xl sm:text-4xl text-center mt-4">
          {t(i18nPreffix + 'intro')}
        </h3>
        <div className="sm:w-[500px] w-[68vw] py-5 font-bold">
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