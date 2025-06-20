import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-dvh bg-cover bg-center bg-no-repeat bg-[url('/welcome-bg.webp')]">
      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/80 z-0" />

      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50 bg-white rounded-md p-2">
        <LanguageSwitcher />
      </div>

      {/* Contenido */}
      <div className="relative z-10 min-h-dvh flex flex-col-reverse md:flex-row items-center justify-center px-6 py-16 gap-12">
        {/* Texto */}
        <div className="max-w-md text-center md:text-left text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
            {t("welcome.title")} <span className="text-primary">{t("welcome.title2")}</span>
          </h1>
          <p className="text-lg font-light text-slate-300 drop-shadow-sm">
            {t("welcome.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/boards/new" className="btn btn-primary text-lg shadow-md gap-2">
              {t("welcome.getStarted")}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/boards/demo"
              className="btn btn-outline text-white hover:bg-white hover:text-black transition text-lg"
            >
              {t("welcome.demo")}
            </Link>
          </div>
        </div>

        {/* Imagen decorativa */}
        <div className="w-64 md:w-80 bg-white/80 rounded shadow-lg p-10">
          <img src="./kanban-2.svg" alt="Organize tasks" className="w-full h-auto drop-shadow-lg" />
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-sm text-slate-400 z-10">
        © {new Date().getFullYear()} {t("welcome.footer")}
      </footer>
    </section>
  );
};

export default Welcome;
