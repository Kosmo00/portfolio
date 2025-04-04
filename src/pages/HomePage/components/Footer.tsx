import { useTranslation } from "react-i18next";

const i18nPreffix = 'pages.home.footer.';

function Footer() {

  const { t } = useTranslation();
  return (
    <div id="footer" className="pt-[10vh] pb-10 flex justify-center text-center flex-col">
      <p>
        {t(i18nPreffix + 'first-text')}
      </p>
      <p className="text-sm">
        {t(i18nPreffix + 'second-text')}
      </p>
    </div>
  )
}

export default Footer;