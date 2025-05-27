import { useTranslation } from "react-i18next";
import { IconMail } from "@tabler/icons-react";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xldbqdqr");
  const { t } = useTranslation();

  return (
    <div id="contact" className="flex flex-col items-center p-6">
      <h1 className="mx-auto bg-gradient-to-r from-rose-400 to-pink-400 text-transparent bg-clip-text text-center my-5 p-8 font-medium text-5xl lg:text-7xl">
        {t("contact.title")}
      </h1>

      <a
        href="mailto:nowak.artur@zs6sobieski.edu.pl?subject=Seeable"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:brightness-110 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all shadow-lg"
      >
        <IconMail size={24} />
        {t("contact.sendDirectEmail")}
      </a>

      {state.succeeded ? (
        <div className="mt-8 flex flex-col items-center text-center">
          <IconMail size={48} className="text-green-500 mb-4" />
          <p className="text-lg font-semibold text-green-500">
            {t("contact.form.successMessage")}
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full max-w-2xl bg-gradient-to-r from-purple-500 to-purple-600 p-8 rounded-2xl shadow-xl flex flex-col gap-4 text-white"
        >
          <label className="flex flex-col text-lg font-medium">
            {t("contact.form.email")}
            <input
              type="email"
              name="email"
              required
              className="mt-1 p-3 rounded-xl text-black focus:outline-none focus:ring-4 ring-pink-400"
              placeholder="example@email.com"
            />
          </label>
          <label className="flex flex-col text-lg font-medium">
            {t("contact.form.message")}
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 p-3 rounded-xl text-black focus:outline-none focus:ring-4 ring-pink-400"
              placeholder={t("contact.form.placeholder") as string}
            />
          </label>
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl mt-4 transition-all"
          >
            {t("contact.form.send")}
          </button>
        </form>
      )}
    </div>
  );
}
