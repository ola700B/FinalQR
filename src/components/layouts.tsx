import { Outlet, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { useTranslation } from "react-i18next";

function Layout() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <div className="min-h-screen flex flex-col">

      {/* CONTENT */}
      <div className="flex-1 ">
        <Outlet />
      </div>

      {/* BACK BUTTON (LEFT) */}
    {/* BACK BUTTON */}
<button
  onClick={() => navigate(-1)}
  className={`
    fixed bottom-5
    ${isArabic ? "right-5" : "left-5"}
    w-16 h-16
    bg-black/60 backdrop-blur-xl
    shadow-lg
    rounded-full
    flex items-center justify-center
    text-white font-bold
    hover:scale-110 transition
    cursor-pointer
  `}
  aria-label="Go back"
>
  <ArrowLeft
    size={24}
    className={isArabic ? "rotate-180" : ""}
  />
</button>

{/* HOME BUTTON */}
<button
  onClick={() => navigate("/")}
  className={`
    fixed bottom-5
    ${isArabic ? "left-5" : "right-5"}
    w-16 h-16
    text-white font-bold
    bg-black/60 backdrop-blur-xl
    shadow-lg
    rounded-full
    flex items-center justify-center
    cursor-pointer
    hover:scale-110 transition
  `}
  aria-label="Home"
>
  <Home size={24} />
</button>

    </div>
  );
}

export default Layout;