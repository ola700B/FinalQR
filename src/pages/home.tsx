import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useTranslation } from "react-i18next";
import "../i18n.tsx";
export default function Home() {
  const { i18n } = useTranslation();
  const handleLangClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setEffect({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });

    setTimeout(() => setEffect(null), 900);
  };

  const navigate = useNavigate();
  const [, setEffect] = useState<{
    x: number;
    y: number;
  } | null>(null);

  return (
    <div
      className="
        flex flex-col
        items-center
        min-h-screen
"
    >
      <div
        className="
          flex flex-col
          items-center justify-center
          px-4 py-20
          text-center
"
      >
        <img
          className="
            z-10
            w-55 h-auto
            mb-2
            sm:w-70
            md:w-95
            lg:w-125
            xl:w-150
"
          src={logo}
          alt="logo"
        ></img>
        <div
          className="
            z-10
            text-center
"
        >
          <h1
            className="
              text-[#1F4A3A] text-2xl font-extrabold leading-tight
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
"
            style={{ fontFamily: "Cairo, sans-serif" }}
          >
            حديقة القرآن النباتية
          </h1>

          <p
            className="
              mt-2
              text-[#1F4A3A] tracking-widest
              sm:text-base
              md:text-lg
              lg:text-xl
"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            QUR'ANIC BOTANIC GARDEN
          </p>
          <p
            className="
              mt-2
              text-[#1F4A3A] text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
"
            style={{ fontFamily: "Cairo, sans-serif" }}
          >
            عضو في مؤسسة قطر
          </p>

          <p
            className="
              text-[#1F4A3A] text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              tracking-wide
              mt-1
"
          >
            Member of Qatar Foundation
          </p>
        </div>
        <div
          className="
            flex flex-col
            items-center
            gap-2
"
        >
          <div
            className="
              z-10
              flex flex-col
              items-center
              gap-4
              mt-30
"
          >
            <button
              onClick={(e) => {
                handleLangClick(e);

                i18n.changeLanguage("ar");

                setTimeout(() => {
                  navigate("/plants");
                }, 600);
              }}
              className="
                w-40 h-16
                rounded-xl
                text-xl text-white font-bold
                bg-black/60
                hover:scale-105
                transition cursor-pointer
                sm:w-60 sm:h-20 sm:text-2xl
                md:w-72 md:h-24 md:text-3xl
                lg:w-80 lg:h-32 lg:text-4xl
"
            >
              العربية
            </button>

            <button
              onClick={(e) => {
                handleLangClick(e);

                i18n.changeLanguage("en");

                setTimeout(() => {
                  navigate("/plants");
                }, 600);
              }}
              className="
                w-40 h-16
                rounded-xl
                text-xl text-white font-bold
                bg-black/60
                hover:scale-105
                transition cursor-pointer
                sm:w-60 sm:h-20 sm:text-2xl
                md:w-72 md:h-24 md:text-3xl
                lg:w-80 lg:h-32 lg:text-4xl
"
            >
              ENGLISH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
