import { useParams } from "react-router-dom";
import { plants } from "./plantsData";


import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";



function PlantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  

  const plant = plants.find((p) => p.id === Number(id));

  if (!plant) {
    return (
      <div
        className="
          relative
          flex
          items-center justify-center
          min-h-screen
          pb-20
          sm:pb-24
          md:pb-28
"
      >
        {t("plantNotFound")}
      </div>
    );
  }

  return (
    <div
      className="
        flex
        items-center justify-center
        min-h-screenbg-emerald-500
        p-4
        pb-24
"
    >
      <div
        className="
          flex flex-col
          w-full max-w-sm
          mx-auto mt-6
          sm:max-w-md sm:mt-10
          md:max-w-2xl
          lg:max-w-4xl
"
      >
        {/* Plant Card */}
        <div
          className="
            overflow-hidden
            rounded-xl
            bg-white
            shadow-xl
"
        >
          <img
            src={plant.image}
            alt= {t(plant.nameKey)}
            className="
              object-contain
              w-full h-[40vh]
              sm:h-[50vh]
              lg:h-[65vh]
"
          />

          <div
            className="
              p-4
              text-white
              bg-linear-to-r
              from-green-950 via-green-900 to-green-950
"
          >
            <h1
              className="
                text-xl font-bold
                text-center
                sm:text-2xl
                md:text-3xl
"
            >
               {t(plant.nameKey)}
            </h1>
             <p className="mt-2 text-base md:text-lg lg:text-xl text-center">
  <i>{plant.scientificName.italic}</i>{" "}
  {plant.scientificName.author}
</p>
          </div>
        </div>

        {/* Buttons */}
        <div
          className="
            grid grid-cols-2
            gap-3
            mt-6
"
        >
          <button
            onClick={() => navigate(`/quran/${id}`)}
            className="
              py-6
              rounded-xl
              text-white text-lg font-semibold
              bg-linear-to-r
              from-green-950 via-green-900 to-green-950
              hover:scale-105
              transition
              md:text-xl
              lg:text-2xl
"
          >
            {t("quran")}
          </button>
          

          <button
            onClick={() => navigate(`/description/${id}`)}
            className="
              py-6
              rounded-xl
              text-white text-lg font-semibold
              bg-linear-to-r
              from-green-950 via-green-900 to-green-950
              hover:scale-105
              transition
              md:text-xl
              lg:text-2xl
"
          >
            {t("description")}

          </button>

          <button
            onClick={() => navigate(`/propagation/${id}`)}
            className="
              py-6
              rounded-xl
              text-white text-lg font-semibold
              bg-linear-to-r
              from-green-950 via-green-900 to-green-950
              hover:scale-105
              transition
              md:text-xl
              lg:text-2xl
"
          >
            {t("propagation")}
          </button>

          <button
            onClick={() => navigate(`/habitat/${id}`)}
            className="
              py-6
              rounded-xl
              text-white text-lg font-semibold
              bg-linear-to-r
              from-green-950 via-green-900 to-green-950
              hover:scale-105
              transition
              md:text-xl
              lg:text-2xl
"
          >
            {t("habitat")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlantDetails;
