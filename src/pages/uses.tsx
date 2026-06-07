import { useParams } from "react-router-dom";
import { plants } from "./plantsData";
import { useTranslation } from "react-i18next";
/*dfsdfds*/
function Uses() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { id } = useParams();

  const plant = plants.find((p) => p.id === Number(id));

  if (!plant) {
    return <div className="p-4"> {t("plantNotFound")}</div>;
  }

  return (
    <div className="min-h-screen bg-emerald-500 p-4 md:p-8 pb-28  flex justify-center">
      <div className="w-full mt-10 ">
        {/* TITLE */}
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-green-950 mb-6">
          {t("uses")}
        </h1>

        {/* HEADER CARD */}
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

          <div className={i18n.language === "ar" ? "text-center" : "text-center"}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              {t(plant.nameKey)}
            </h2>

            <p className="mt-2 text-sm md:text-lg lg:text-xl">
              <i>{plant.scientificName.italic}</i> {plant.scientificName.author}
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="bg-green-950 text-white rounded-2xl p-6 md:p-8 mt-6">
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
            {t("uses")}
          </h3>
          <div className="w-full h-px bg-white/30 my-6" />
          <p className="text-sm md:text-base lg:text-lg leading-7 md:leading-8 whitespace-pre-line">
            {t("plant_silq_uses")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Uses;
