import { Lang, defaultLang } from "./config";

type ExperienceItem = {
  title: string;
  role: string;
  period: string;
  bullets: string[];
};

type EducationItem = {
  title: string;
  field: string;
  location: string;
  period: string;
};

export type Dictionary = {
  intro: string;
  sections: {
    interests: { title: string; items: string[] };
    experience: { freelance: ExperienceItem; meetzed: ExperienceItem };
    designTools: string;
    education: {
      highSchool: EducationItem;
      diploma: EducationItem;
      graduation: EducationItem;
    };
    editingTools: string;
    languages: string;
    portfolio: { title: string; items: { label: string; href: string }[] };
    details: { title: string; items: { text: string; href?: string }[] };
  };
  switcher: { label: string; es: string; en: string };
};

const dictionaries: Record<Lang, Dictionary> = {
  es: {
    intro:
      "Mi nombre es Sunil Kumar, diseñador de logotipos/marca autodidacta con más de 4 años de experiencia creando marcas modernas, limpias y minimalistas que dejan una impresión duradera.",
    sections: {
      interests: {
        title: "Intereses",
        items: ["🎮 Videojuegos", "📽️ Cine", "✈️ Viajar"],
      },
      experience: {
        freelance: {
          title: "Freelance",
          role: "Diseñador de logotipos/marca",
          period: "2021 - ahora",
          bullets: [
            "Trabajé en proyectos diversos de logotipos e identidad de marca.",
            "Colaboré con clientes de varios países.",
            "Desarrollé un conjunto de habilidades de diseño versátil.",
            "Me adapté a desafíos y requisitos únicos.",
          ],
        },
        meetzed: {
          title: "Meetzed",
          role: "Diseñador gráfico",
          period: "2020 - 2021",
          bullets: [
            "Colaboración: Apoyé al Diseñador Principal en proyectos.",
            "Branding: Creé identidades de marca únicas.",
            "Herramientas: Usé Illustrator, Photoshop e InDesign.",
          ],
        },
      },
      designTools: "Herramientas de diseño",
      education: {
        highSchool: {
          title: "Secundaria",
          field: "Humanidades",
          location: "Delhi Cantonment, India",
          period: "2017",
        },
        diploma: {
          title: "Diploma",
          field: "Animación y Diseño Gráfico",
          location: "Delhi, India",
          period: "2017 - 18",
        },
        graduation: {
          title: "Graduación",
          field: "Licenciatura en Bellas Artes",
          location: "IGNOU Delhi, India",
          period: "2017 - 21",
        },
      },
      editingTools: "Herramientas de edición",
      languages: "Idiomas",
      portfolio: {
        title: "Portfolio",
        items: [
          { label: "Bento", href: "#" },
          { label: "Behance", href: "#" },
          { label: "Instagram", href: "#" },
          { label: "YouTube", href: "#" },
          { label: "Dribbble", href: "#" }
        ]
      },
      details: {
        title: "Detalles",
        items: [
          { text: "👨🏻‍💻 26 años" },
          { text: "🔗 iamsunilfreelancer.com", href: "https://iamsunilfreelancer.com" },
          { text: "📞 +91 9899052055", href: "tel:+919899052055" },
          { text: "🇮🇳 India" }
        ]
      }
    },
    switcher: { label: "Idioma", es: "Español", en: "Inglés" },
  },
  en: {
    intro:
      "My name is Sunil Kumar, a self-taught logo/brand designer with 4+ years of experience creating modern, clean, and minimal brands that make a lasting impression.",
    sections: {
      interests: {
        title: "Interests",
        items: ["🎮 Gaming", "📽️ Film Making", "✈️ Traveling"],
      },
      experience: {
        freelance: {
          title: "Freelancer",
          role: "Logo/Brand Designer",
          period: "2021 - now",
          bullets: [
            "Worked on diverse logo and brand identity projects.",
            "Collaborated with clients from multiple countries.",
            "Developed a versatile design skill set.",
            "Adapted to unique challenges and requirements.",
          ],
        },
        meetzed: {
          title: "Meetzed",
          role: "Graphic Designer",
          period: "2020 - 2021",
          bullets: [
            "Collaboration: Supported Lead Designer on projects.",
            "Branding: Crafted unique brand identities.",
            "Tools: Used Illustrator, Photoshop & InDesign.",
          ],
        },
      },
      designTools: "Design Tools",
      education: {
        highSchool: {
          title: "High School",
          field: "Humanities",
          location: "Delhi Cantonment, India",
          period: "2017",
        },
        diploma: {
          title: "Diploma",
          field: "Animation and Graphic Design",
          location: "Delhi, India",
          period: "2017 - 18",
        },
        graduation: {
          title: "Graduation",
          field: "Bachelor of fine Arts",
          location: "IGNOU Delhi, India",
          period: "2017 - 21",
        },
      },
      editingTools: "Editing Tools",
      languages: "Languages",
      portfolio: {
        title: "Portfolio",
        items: [
          { label: "Bento", href: "#" },
          { label: "Behance", href: "#" },
          { label: "Instagram", href: "#" },
          { label: "YouTube", href: "#" },
          { label: "Dribbble", href: "#" }
        ]
      },
      details: {
        title: "Details",
        items: [
          { text: "👨🏻‍💻 26 years" },
          { text: "🔗 iamsunilfreelancer.com", href: "https://iamsunilfreelancer.com" },
          { text: "📞 +91 9899052055", href: "tel:+919899052055" },
          { text: "🇮🇳 India" }
        ]
      }
    },
    switcher: { label: "Language", es: "Spanish", en: "English" },
  },
};

export async function getDictionary(lang: Lang): Promise<Dictionary> {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}