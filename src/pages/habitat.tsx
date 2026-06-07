import { useParams } from "react-router-dom";
import { plants } from "./plantsData";
import { useTranslation } from "react-i18next";

function Habitat() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { id } = useParams();

  const plant = plants.find((p) => p.id === Number(id));

  if (!plant) {
    return (
      <div
        className="
        p-4
"
      >
         {t("plantNotFound")}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-500 p-4 md:p-8 pb-28 ">
      <div className="w-full mt-10">
        {/* TITLE */}
        <h1 className="mb-6 text-2xl md:text-3xl lg:text-4xl text-green-950 font-bold">
          {t("habitat")}
        </h1>

        {/* HEADER CARD - FULL WIDTH */}
        <div
          className="
        w-full
    bg-green-950
    text-white
    rounded-2xl
    p-4 md:p-8
    flex flex-col 
    items-center
    gap-6
      "
        >
         <img
  src={plant.image}
  alt={t(plant.nameKey)}
  className="
     w-full
    max-w-md
    h-auto
    object-contain
    rounded-xl
    shadow-lg
    mx-auto
  "
/>

          <div className={i18n.language === "ar" ? "text-center" : "text-left"}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              {t(plant.nameKey)}
            </h2>

            <p className="mt-2 text-sm md:text-lg lg:text-xl">
              <i>{plant.scientificName.italic}</i> {plant.scientificName.author}
            </p>
          </div>
        </div>

        {/* HABITAT CARD - FULL WIDTH */}
        <div
          className="
        w-full
        bg-green-950
        text-white
        rounded-2xl
        p-6 md:p-8
        mt-6
        shadow-xl
      "
        >
          <h3 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold">
            {t("habitat")}
          </h3>
          <div className="w-full h-px bg-white/30 my-6" />
          <p className="text-base md:text-lg lg:text-xl leading-8">
            <p>{t("plant_silq_habitat")}</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Habitat;
