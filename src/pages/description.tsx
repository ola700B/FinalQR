import { useParams } from "react-router-dom";
import { plants } from "./plantsData";
import { useTranslation } from "react-i18next";

function Description() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

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
    <div
      className="
        min-h-screen
        p-4
        pb-28
        bg-emerald-500
        md:p-8
"
    >
      <div
        className="
          w-full
          mt-10
"
      >
        {/* TITLE */}
        <h1
          className="
            mb-6
            text-2xl text-green-950 font-bold
            md:text-3xl
            lg:text-4xl
"
        >
          {t("description")}
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

          <div
            className={i18n.language === "ar" ? "text-center" : "text-center"}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              {t(plant.nameKey)}
            </h2>

            <p className="mt-2 text-sm md:text-xl lg:text-2xl">
              <i>{plant.scientificName.italic}</i> {plant.scientificName.author}
            </p>
          </div>
        </div>

        {/* DESCRIPTION CARD */}
        <div
          className="
            w-full
            p-6
            mt-6
            rounded-2xl
            text-white
            bg-green-950
            md:p-8
"
        >
          <h3
            className="
              mb-4
              text-xl font-bold
              md:text-2xl
              lg:text-3xl
"
          >
            {t("description")}
          </h3>

          <div
            className="
              w-full h-px
              my-6
              bg-white/30
"
          />

          <div
            className="
              space-y-3
              text-sm leading-7
              md:text-base md:leading-8
              lg:text-lg
"
          >
            {t(plant.descriptionKey)
              .split("\n")
              .map((line, i) => {
                const [label, ...rest] = line.split(":");

                if (rest.length) {
                  return (
                    <p key={i}>
                      <span
                        className="
                          font-bold
"
                      >
                        {label}:
                      </span>{" "}
                      {rest.join(":")}
                    </p>
                  );
                }

                return <p key={i}>{line}</p>;
              })}
          </div>
        </div>
        <div className="bg-green-950 text-white rounded-2xl p-6 md:p-8 mt-6">
            <span className="font-bold text-lg md:text-xl lg:text-2xl">
    {t("synonyms")}:
  </span>

  <span className="text-sm md:text-lg lg:text-xl">
    {plant.Synonyms.map((name, index) => (
      <span key={index}>
        <i>{name.italic}</i> {name.author}
        {index < plant.Synonyms.length - 1 ? "; " : ""}
      </span>
    ))}
  </span>

          <div
            className="
              w-full h-px
              my-4
              bg-white/30
"
          />
          <p className="text-sm md:text-base lg:text-lg leading-7 md:leading-8">
            <span className="font-bold text-lg md:text-xl lg:text-2xl">
              {t("family")}:
            </span>{" "}
            {t("plant_silq_family")}
          </p>
          <div
            className="
              w-full h-px
              my-4
              bg-white/30
"
          />
           <p className="text-sm md:text-base lg:text-lg leading-7 md:leading-8">
            <span className="font-bold text-lg md:text-xl lg:text-2xl">
              {t("order")}:
            </span>{" "}
            {t("plant_silq_order")}
          </p>
          <div
            className="
              w-full h-px
              my-4
              bg-white/30
"
          />
          <p className="text-sm md:text-base lg:text-lg leading-7 md:leading-8">
            <span className="font-bold text-lg md:text-xl lg:text-2xl">
              {t("uses")}:
            </span>{" "}
            {t("plant_silq_uses")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;
