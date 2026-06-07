import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    resources: {
      en: {
        translation: {
          sidr: "Sidr",
          silq: "Beet",
          olive: "Olive",
          wheat: "Wheat",
          datePalm: "Date Palm",
          fig: "Fig",
          pomegranate: "Pomegranate",
          grape: "Grape",
          banana: "Banana",
          mint: "Mint",
          basil: "Basil",
          ginger: "Ginger",
          playGames: "Play Games",
          searchPlant: "Search by plant number...",
          enterPlantNumber: "Enter Plant Number",
          clear: "Clear",
          search: "Search",
          plantNotFound: "Plant not found",
          habitat: "Habitat & Distribution",
          description: "Botanical Description",
          uses: "Uses",
          quran: "Qur'an & Hadith",
          family: "Family",
          synonyms: "Synonyms",
          order: "Order",
          propagation: "Propagation",

          plant_sidr: "Sidr",
          plant_silq: "Beet",
          plant_olive: "Olive",
          plant_wheat: "Wheat",
          plant_silq_habitat:
            "Its native range includes Algeria, the Gulf countries, Kuwait, Egypt, Iraq, Lebanon, Syria, Libya, Morocco, the Azores, the Balearic Islands, Albania, Belgium, Bulgaria, the Canary Islands, Corsica, Cyprus, the Eastern Aegean Islands, France, Germany, Great Britain, Greece, India, Iran, Ireland, and Italy. It is widely cultivated.",

          plant_silq_description: `An erect annual, occasionally a perennial herb, about 0.3–0.5 m tall.
          Stem: furrowed and glabrous.
          Leaves: dark red to green with prominent midrib, slightly fleshy.
          Inflorescences: cymes.
          Flowers: usually greenish.
          Fruits: 5–11 achenes per cluster.
          Roots: red, white or yellow, fibrous or swollen.`,
          plant_silq_uses: "Culinary.",
          plant_silq_quran: `Sahl ibn Saad narrates (via Abu Hazim): “We used to celebrate on Fridays. We knew an elderly woman who would take the roots of chard (silq), put them in her pot, and add a few grains of barley. When we had performed the Friday prayer, we would visit her, and she would offer it to us. We celebrated Fridays for that. We would not have lunch or our midday rest except after the Friday prayers. By Allah, there was neither fat nor oil in it.”
          (Ṣaḥīḥ al-Bukhārī)`,
          plant_silq_family: "Amaranthaceae ",
          plant_silq_order: "Caryophyllales",
          plant_silq_propagation:
            "It is propagated almost exclusively by seeds, with commercial cultivars sown directly in fields. It is a biennial plant, producing seeds in the second year after exposure to cold (vernalization). Vegetative propagation is generally not used; thus, seeds remain the main means of propagation.",
          games: {
            title: "Games",
            memory: "Memory Game",
            sorting: "Sorting Game",
            quiz: "Quiz Game",
            play: "Play",
          },
          memory: {
            moves: "Moves",
            time: "Time",
            best: "Best",
            win: "🎉 You Win!",
            playAgain: "Play Again",
          },
          sorting: {
            seed: "Seed",
            flower: "Flower",
            fruit: "Fruit",

            winTitle: "🎉 You Win!",
            loseTitle: "💔 Game Over",

            score: "Score",
            finalScore: "Final Score",

            playAgain: "Play Again",
            tryAgain: "Try Again",
            back: "Back to Games",
          },
          plantCards: {
            rose: "Rose",
            apple: "Apple",
            seed: "Seed",
          },
        },
      },

      ar: {
        translation: {
          sidr: "السدر",
          silq: "السلق",
          olive: "الزيتون",
          wheat: "القمح",
          datePalm: "النخيل",
          fig: "التين",
          pomegranate: "الرمان",
          grape: "العنب",
          banana: "الموز",
          mint: "النعناع",
          basil: "الريحان",
          ginger: "الزنجبيل",
          playGames: "العب",
          searchPlant: "ابحث برقم النبات...",
          enterPlantNumber: "أدخل رقم النبات",
          clear: "مسح",
          search: "بحث",
          plantNotFound: "النبتة غير موجودة",
          habitat: "التوزيع والموطن",
          description: "الوصف النباتي",
          uses: "الاستخدامات",
          quran: "القرآن والحديث",
          family: "العائلة",
          order: "الرتبة",
          synonyms: "المرادفات",
          propagation: "الإكثار",
          plant_sidr: "السدر",
          plant_silq: "السلق",
          plant_olive: "الزيتون",
          plant_wheat: "القمح",

          plant_silq_habitat:
            "موطنها الأصلي: الجزائر، ودول الخليج، والكويت، ومصر، والعراق، ولبنان وسوريا، وليبيا، والمغرب، وجزر الأزور، وجزر البليار، وألبانيا، وبلجيكا، وبلغاريا، وجزر الكناري، وكورسيكا، وقبرص، وجزر بحر إيجة الشرقي، وفرنسا، وألمانيا، وبريطانيا العظمى، واليونان، والهند، وإيران، وأيرلندا، وإيطاليا. وتزرع على نطاق واسع.",

          plant_silq_description: `عشبة حولية منتصبة، معمرة أحيانًا، ارتفاعها حوالي 0.3 - 0.5 متر، ذات سيقان مجعدة جرداء.

الأوراق: نصل الورقة أحمر داكن إلى أخضر، عادةً ما يكون له عرق وسطي بارز، وسميك بعض الشيء. طول عنق الورقة ½-½/3 أو ما يعادل طول النصل.

النورات: محدودة؛ والأزهار عادةً ما تكون خضراء.

الثمار: أَكِينِيّة تتكون من بذرة جافة أحادية، ويتراوح عددها بين 5 و11 حبة في العنقود.

الجذور: حمراء داكنة أو بيضاء أو صفراء، وقد تكون ليفية أو سميكة أو منتفخة.`,

          plant_silq_uses: "الطهي",

          plant_silq_quran:
            "عَنْ أَبِي حَازِمٍ، عَنْ سَهْلِ بْنِ سَعْدٍ، قَالَ إِنْ كُنَّا لَنَفْرَحُ بِيَوْمِ الْجُمُعَةِ، كَانَتْ لَنَا عَجُوزٌ تَأْخُذُ أُصُولَ السِّلْقِ، فَتَجْعَلُهُ فِي قِدْرٍ لَهَا، فَتَجْعَلُ فِيهِ حَبَّاتٍ مِنْ شَعِيرٍ، إِذَا صَلَّيْنَا زُرْنَاهَا فَقَرَّبَتْهُ إِلَيْنَا، وَكُنَّا نَفْرَحُ بِيَوْمِ الْجُمُعَةِ مِنْ أَجْلِ ذَلِكَ، وَمَا كُنَّا نَتَغَدَّى وَلاَ نَقِيلُ إِلاَّ بَعْدَ الْجُمُعَةِ، وَاللَّهِ مَا فِيهِ شَحْمٌ وَلاَ وَدَكٌ‏.‏ (صَحِيحُ البُخَارِيِّ)",
          plant_silq_family: "القطيفية أو الرمرامية",
          plant_silq_order: "القرنفليات ",
          plant_silq_propagation:"يتكاثر حصريًا تقريبًا بالبذور، حيث تُزرع الأصناف التجارية مباشرة في الحقول. وهو نبات ثنائي الحول، إذ يُنتج البذور في السنة الثانية بعد التعرض للبرودة، ولا يُستخدم فيه الإكثار الخضري بشكل عام، لذا تبقى البذور الوسيلة الأساسية للإكثار.",
          plant_silq_synonyms:"Beta altissimaSteud.; Beta atriplicifolia Rouy",
          games: {
            title: "الألعاب",
            memory: "لعبة الذاكرة",
            sorting: "لعبة الترتيب",
            quiz: "لعبة الأسئلة",
            play: "العب",
          },

          memory: {
            moves: "الحركات",
            time: "الوقت",
            best: "أفضل نتيجة",
            win: "🎉 فزت!",
            playAgain: "العب مرة أخرى",
          },
          sorting: {
            seed: "بذرة",
            flower: "زهرة",
            fruit: "فاكهة",

            winTitle: "🎉 لقد فزت!",
            loseTitle: "💔 انتهت اللعبة",

            score: "النتيجة",
            finalScore: "النتيجة النهائية",

            playAgain: "إعادة اللعب",
            tryAgain: "إعادة المحاولة",
            back: "الرجوع للألعاب",
          },
          plantCards: {
            rose: "وردة",
            apple: "تفاحة",
            seed: "بذرة",
          },
        },
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
