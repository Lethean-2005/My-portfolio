import { createContext, useContext, useEffect, useState } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      talk: "Let's Talk"
    },
    hero: {
      eyebrow: 'I am Lethean',
      title1: 'Full-Stack',
      title2: 'Developer & Designer',
      desc: 'Blending thoughtful UI design with clean, responsive development to create websites that look great and perform flawlessly.',
      cv: 'Download CV'
    },
    services: {
      title: 'Services',
      sub: 'Designing clean scalable responsive websites',
      items: [
        {
          title: 'UI/UX Website Design',
          desc: 'Clean, user-focused layouts with clear structure, smooth navigation, and strong visual hierarchy.',
          chips: ['Modern layouts', 'Responsive design']
        },
        {
          title: 'Frontend Development',
          desc: 'Responsive interfaces using HTML, CSS, and JavaScript for clean, consistent, reliable performance.',
          chips: ['Clean HTML/CSS', 'Smooth interactions']
        },
        {
          title: 'Performance & Responsiveness',
          desc: 'Fast, mobile-first websites optimized for speed, accessibility, and dependable performance.',
          chips: ['Speed optimization', 'Asset efficiency']
        },
        {
          title: 'WordPress Implementation',
          desc: 'Lightweight WordPress setups with easy updates, fast loading, and scalable, clean, customizable layouts.',
          chips: ['Theme setup', 'Easy management']
        }
      ]
    },
    about: {
      title: 'About Me',
      intro:
        "I'm a front-end developer and designer passionate about crafting clean, intuitive, and responsive digital experiences. I focus on turning ideas into seamless interfaces by understanding user needs, designing thoughtful UI layouts, and ensuring smooth interactions across devices.",
      approachLabel: 'My Approach',
      approach: [
        'Understand users & goals',
        'Create clean UI layouts',
        'Responsive experiences'
      ],
      stats: [
        { num: '02+', label: 'Years Of Experience' },
        { num: '15+', label: 'Projects Completed' },
        { num: '05+', label: 'Clients Served' }
      ]
    },
    skills: {
      title: 'Skills',
      sub: 'Crafting seamless UI/UX and clean code',
      groups: [
        {
          title: 'Core Skills',
          chips: [
            'UI/UX Layout',
            'Frontend Dev',
            'Responsive Web Design',
            'Component Based Design'
          ]
        },
        {
          title: 'Frontend Tech',
          chips: ['HTML', 'CSS', 'JS', 'WordPress']
        },
        {
          title: 'Design Tools',
          chips: ['Figma', 'Photoshop', 'Illustrator']
        },
        {
          title: 'Tools & Interaction',
          chips: ['GitHub', 'Netlify', 'SEMrush', 'UI Interactions']
        }
      ]
    },
    projects: {
      title: 'Projects',
      sub: 'Selected work across design and development',
      items: [
        {
          title: 'Agency Landing Page',
          desc: 'Responsive marketing site with smooth scroll interactions and modular sections.',
          chips: ['React', 'Responsive']
        },
        {
          title: 'Portfolio Template',
          desc: 'Minimal dark-themed portfolio with reusable components and accessible layouts.',
          chips: ['UI Design', 'HTML/CSS']
        },
        {
          title: 'WordPress Blog Theme',
          desc: 'Lightweight, customizable WordPress theme built for speed and clean typography.',
          chips: ['WordPress', 'Theme']
        }
      ]
    },
    footer: '© {year} Lethean — Full-Stack Developer & Designer'
  },

  km: {
    nav: {
      home: 'ទំព័រដើម',
      services: 'សេវាកម្ម',
      about: 'អំពីខ្ញុំ',
      skills: 'ជំនាញ',
      projects: 'គម្រោង',
      talk: 'តោះនិយាយ'
    },
    hero: {
      eyebrow: 'ខ្ញុំឈ្មោះ Lethean',
      title1: 'Full-Stack',
      title2: 'អ្នកអភិវឌ្ឍន៍ និងអ្នករចនា',
      desc: 'រួមបញ្ចូលការរចនា UI ដ៏ល្អិតល្អន់ជាមួយនឹងការអភិវឌ្ឍន៍ស្អាត ឆ្លើយតប ដើម្បីបង្កើតគេហទំព័រដែលមើលទៅស្អាត និងដំណើរការដោយគ្មានកំហុស។',
      cv: 'ទាញយក CV'
    },
    services: {
      title: 'សេវាកម្ម',
      sub: 'រចនាគេហទំព័រស្អាត និងឆ្លើយតបបានល្អ',
      items: [
        {
          title: 'ការរចនាគេហទំព័រ UI/UX',
          desc: 'ប្លង់ស្អាត ផ្តោតលើអ្នកប្រើ ជាមួយរចនាសម្ព័ន្ធច្បាស់លាស់ ការរុករករលូន និងឋានានុក្រមដ៏រឹងមាំ។',
          chips: ['ប្លង់ទំនើប', 'ការរចនាឆ្លើយតប']
        },
        {
          title: 'ការអភិវឌ្ឍ Frontend',
          desc: 'ចំណុចប្រទាក់ឆ្លើយតបដោយប្រើ HTML, CSS និង JavaScript សម្រាប់ការអនុវត្តស្អាត និងអាចទុកចិត្តបាន។',
          chips: ['HTML/CSS ស្អាត', 'អន្តរកម្មរលូន']
        },
        {
          title: 'ដំណើរការ និងការឆ្លើយតប',
          desc: 'គេហទំព័រលឿន ផ្តោតលើទូរស័ព្ទ ត្រូវបានបង្កើនប្រសិទ្ធភាពសម្រាប់ល្បឿន ភាពងាយស្រួល និងដំណើរការដែលអាចទុកចិត្តបាន។',
          chips: ['បង្កើនល្បឿន', 'ប្រសិទ្ធភាពទ្រព្យសកម្ម']
        },
        {
          title: 'ការអនុវត្ត WordPress',
          desc: 'ការតំឡើង WordPress ស្រាល ជាមួយការធ្វើបច្ចុប្បន្នភាពងាយស្រួល ផ្ទុកលឿន និងប្លង់ដែលអាចប្ដូរតាមបំណងបាន។',
          chips: ['ដំឡើងគំរូ', 'គ្រប់គ្រងងាយស្រួល']
        }
      ]
    },
    about: {
      title: 'អំពីខ្ញុំ',
      intro:
        'ខ្ញុំជាអ្នកអភិវឌ្ឍ front-end និងជាអ្នករចនា ដែលចូលចិត្តបង្កើតបទពិសោធន៍ឌីជីថលស្អាត សាមញ្ញ និងឆ្លើយតប។ ខ្ញុំផ្តោតលើការប្រែក្លាយគំនិតឱ្យទៅជាចំណុចប្រទាក់ដ៏រលូន តាមរយៈការស្វែងយល់ពីតម្រូវការអ្នកប្រើ ការរចនាប្លង់ UI ដ៏ល្អិតល្អន់ និងការធានាអន្តរកម្មរលូនលើគ្រប់ឧបករណ៍។',
      approachLabel: 'វិធីសាស្ត្ររបស់ខ្ញុំ',
      approach: [
        'យល់ពីអ្នកប្រើ និងគោលដៅ',
        'បង្កើតប្លង់ UI ស្អាត',
        'បទពិសោធន៍ឆ្លើយតប'
      ],
      stats: [
        { num: '02+', label: 'ឆ្នាំបទពិសោធន៍' },
        { num: '15+', label: 'គម្រោងបានបញ្ចប់' },
        { num: '05+', label: 'អតិថិជនបានបម្រើ' }
      ]
    },
    skills: {
      title: 'ជំនាញ',
      sub: 'បង្កើត UI/UX រលូន និងកូដស្អាត',
      groups: [
        {
          title: 'ជំនាញស្នូល',
          chips: [
            'ប្លង់ UI/UX',
            'អភិវឌ្ឍ Frontend',
            'ការរចនាគេហទំព័រឆ្លើយតប',
            'ការរចនាផ្អែកលើធាតុ'
          ]
        },
        {
          title: 'បច្ចេកវិទ្យា Frontend',
          chips: ['HTML', 'CSS', 'JS', 'WordPress']
        },
        {
          title: 'ឧបករណ៍រចនា',
          chips: ['Figma', 'Photoshop', 'Illustrator']
        },
        {
          title: 'ឧបករណ៍ និងអន្តរកម្ម',
          chips: ['GitHub', 'Netlify', 'SEMrush', 'អន្តរកម្ម UI']
        }
      ]
    },
    projects: {
      title: 'គម្រោង',
      sub: 'ការងារជ្រើសរើសទាំងផ្នែករចនា និងអភិវឌ្ឍន៍',
      items: [
        {
          title: 'ទំព័រទីផ្សារក្រុមហ៊ុន',
          desc: 'គេហទំព័រទីផ្សារឆ្លើយតប ជាមួយអន្តរកម្មរមូររលូន និងផ្នែកម៉ូឌុល។',
          chips: ['React', 'ឆ្លើយតប']
        },
        {
          title: 'គំរូ Portfolio',
          desc: 'Portfolio ស្តាយងងឹតសាមញ្ញ ជាមួយធាតុផ្សំអាចប្រើឡើងវិញ និងប្លង់ងាយមើល។',
          chips: ['រចនា UI', 'HTML/CSS']
        },
        {
          title: 'គំរូប្លុក WordPress',
          desc: 'គំរូ WordPress ស្រាល អាចប្ដូរតាមបំណង បង្កើតឡើងសម្រាប់ល្បឿន និងការវាយអក្សរស្អាត។',
          chips: ['WordPress', 'គំរូ']
        }
      ]
    },
    footer: '© {year} Lethean — អ្នកអភិវឌ្ឍន៍ Full-Stack និងអ្នករចនា'
  }
};

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: translations.en
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('lang') || 'en';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: translations[lang] || translations.en
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
