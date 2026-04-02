import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import * as yup from 'yup';
import { useFormik } from "formik";

const formSchema = yup.object({
  name: yup.string().matches(/^[a-zA-Z0-9_ ]+$/).required(),
  message: yup.string().required(),
  email: yup.string().email().required(),
});

const i18nPreffix = 'pages.home.contact.';


function Contact() {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: '',
      message: '',
      email: '',
    },
    validationSchema: formSchema,
    onSubmit: (values, {resetForm}) => {
      console.log('asd')
      emailjs.send('service_bg5przh', 'template_sqjlpmm', values, {
        publicKey: 'v5OpMSdjSK5majxc6'
      }).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (err) {
        console.log('FAILED...', err);
      },
    );
      resetForm();
    },
  });

  return (
    <div id="contact" className="flex lg:justify-end items-center pr-[10vw] pl-[10vw] py-[10vh]">
      <form onSubmit={formik.handleSubmit} className="bg-main-secondary text-dark font-semibold rounded-md px-10">
        <h3 className="text-2xl sm:text-4xl text-center mt-4">
          {t(i18nPreffix + 'intro')}
        </h3>
        <div className="sm:w-[500px] w-[60vw] py-5 font-bold">
          <input
            type="text" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            placeholder={t(i18nPreffix + 'name-placeholder')} 
            className="mb-3 border border-dark pl-1 rounded-md w-full focus:border-2 outline-none" 
          />
          <input 
            type="email" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            placeholder={t(i18nPreffix + 'email-placeholder')} 
            className="mb-3 border border-dark pl-1 rounded-md w-full focus:border-2 outline-none" 
          />
          <textarea 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            name="message"
            placeholder={t(i18nPreffix + 'content-placeholder')} 
            rows={5} 
            className="border border-dark pl-1 rounded-md w-full focus:border-2 outline-none" 
          />
        </div>
        <div className="flex justify-end">
        <button type="submit" className="font-normal bg-cta text-lg mb-5 ml-20 text-dark hover:cursor-pointer hover:bg-amber-400 rounded px-4 py-2 transition duration-200">
          {t(i18nPreffix + 'send-button')}
        </button>
        </div>
      </form>
    </div>
  )
}

export default Contact;