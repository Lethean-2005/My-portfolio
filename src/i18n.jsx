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
      title1: 'Full-Stack',
      titleSuffix: 'Developer of',
      titleLine2: 'product development',
      creators: '227+ Happy Creators',
      desc: 'Develop software features with\nworkflows powered by AI agents and\nsupervised by humans',
      bookDemo: 'Book a Demo',
      contactUs: 'Contact us'
    },
    services: {
      title: 'Services I Provide',
      sub: 'I design and build clean, scalable, and responsive websites — pairing modern frontend stacks with reliable backend systems and automation tools to ship products that perform at every scale.',
      items: [
        {
          title: 'Web Development',
          subtitle: 'Code & Build',
          desc: 'Modern, responsive websites built with React, Next.js, and Tailwind. Fast, accessible, and built to scale.',
          chips: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
          backTitle: 'WEB STACK',
          backStats: [
            { big: '04', label: 'Projects' },
            { big: '12K', label: 'Lines' },
            { big: '99%', label: 'Uptime' }
          ]
        },
        {
          title: 'UI/UX Design',
          subtitle: 'Design & Test',
          desc: 'Pixel-perfect interfaces designed with users in mind. From wireframes to interactive prototypes in Figma.',
          chips: ['Figma', 'Prototyping', 'Design Systems'],
          backTitle: 'DESIGN KIT',
          backStats: [
            { big: '50+', label: 'Screens' },
            { big: '100%', label: 'Mobile' },
            { big: '4.8', label: 'Score' }
          ]
        },
        {
          title: 'Mobile Apps',
          subtitle: 'iOS & Android',
          desc: 'Cross-platform mobile experiences that feel native on iOS and Android, built with React Native and Flutter.',
          chips: ['React Native', 'Flutter', 'iOS', 'Android'],
          backTitle: 'MOBILE BUILD',
          backStats: [
            { big: '09', label: 'Apps' },
            { big: '2.4K', label: 'Users' },
            { big: '87%', label: 'Native' }
          ]
        },
        {
          title: 'Brand Identity',
          subtitle: 'Logo & Style',
          desc: 'Logos, color systems, and brand guidelines that capture your story and stand out in any market.',
          chips: ['Logo Design', 'Brand Guidelines', 'Identity'],
          backTitle: 'BRAND SUITE',
          backStats: [
            { big: '20+', label: 'Logos' },
            { big: '95%', label: 'Custom' },
            { big: '6', label: 'Years' }
          ]
        }
      ]
    },
    blockchain: {
      titleStart: 'Why',
      titleAccent: 'Blockchain',
      titleEnd: 'Matters',
      desc: 'Blockchain is revolutionizing how we handle data, transactions and trust. By eliminating intermediaries and creating secure, transparent systems, blockchain is laying the foundation for a more efficient and fair digital future.',
      readMore: 'Read More'
    },
    servicesBack: {
      tools: 'Tools',
      viewMore: 'View More',
      portfolio: 'Portfolio'
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
      headline: 'Skills that ship\nclean, scalable\nweb products',
      desc: 'I build full-stack experiences with thoughtful UI design, responsive frontend code, and pixel-tight detail across every screen.',
      downloadCv: 'Download CV',
      contactMe: 'Contact Me',
      avgLevel: 'average skill level',
      projectsShipped: 'projects shipped',
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
      explore: 'Explore',
      items: [
        {
          title: 'POS System (VC1)',
          role: 'Product Owner & Developer',
          date: 'Feb – May 2025',
          desc: 'Led E-commerce System development. Coordinated front-end and back-end implementation using MVC architecture.',
          chips: ['PHP (MVC)', 'MySQL', 'Bootstrap', 'Jira']
        },
        {
          title: 'Victual Company',
          role: 'Backend Developer',
          date: 'Feb 2025',
          desc: 'Developed robust backend API architecture and database schema for company operations.',
          chips: ['PHP', 'Laravel', 'MySQL']
        },
        {
          title: 'Air Quality Dashboard',
          role: 'Developer',
          date: 'Jan 2025',
          desc: 'Built real-time dashboard monitoring air quality indices with data visualization.',
          chips: ['Vue.js', 'API Integration', 'Chart.js']
        },
        {
          title: 'Task Management App',
          role: 'Git Manager',
          date: 'Jan 2025',
          desc: 'Managed team roles and version control. Led front-end development with a focus on responsive and user-friendly design.',
          chips: ['HTML', 'CSS', 'JavaScript', 'GitHub']
        },
        {
          title: 'Telegram Chatbot',
          role: 'Team Leader',
          date: 'Nov 2024',
          desc: 'Built a bot to automate interactions using Telegram API. Designed custom commands and real-time response handling.',
          chips: ['Python', 'Telegram API', 'Automation']
        },
        {
          title: 'Music Band Website',
          role: 'Team Leader',
          date: 'Sep – Nov 2024',
          desc: 'Led static web design project. Managed tasks via GitHub and deployed final build to Netlify.',
          chips: ['HTML', 'SASS', 'Netlify', 'Figma']
        }
      ]
    },
    footer: {
      brand: 'Thean',
      tagline:
        'Thean helps teams transform complex data into clear, engaging stories — everything you need in one place',
      sections: [
        {
          title: 'Product',
          links: ['Features', 'Pricing', 'Integrations', 'Updates']
        },
        {
          title: 'Resources',
          links: ['Documentation', 'Guides', 'Blog', 'Support']
        },
        {
          title: 'Company',
          links: ['About', 'Careers', 'Contact', 'Partners']
        }
      ],
      copy: 'All rights reserved',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy'
    }
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
      title1: 'Full-Stack',
      titleSuffix: 'អនាគតនៃ',
      titleLine2: 'ការអភិវឌ្ឍផលិតផល',
      creators: 'អ្នកបង្កើតពេញចិត្ត 227+',
      desc: 'អភិវឌ្ឍលក្ខណៈពិសេសផ្នែកទន់\nជាមួយដំណើរការការងារដែលដំណើរការដោយ AI\nនិងត្រួតពិនិត្យដោយមនុស្ស',
      bookDemo: 'កក់ការបង្ហាញ',
      contactUs: 'ទាក់ទងពួកយើង'
    },
    services: {
      title: 'សេវាកម្មរបស់ខ្ញុំ',
      sub: 'ខ្ញុំរចនា និងបង្កើតគេហទំព័រដែលស្អាត ងាយពង្រីក និងឆ្លើយតបបានល្អ — ផ្សំជាមួយ frontend ទំនើប ប្រព័ន្ធ backend ដែលមានស្ថេរភាព និងឧបករណ៍ស្វ័យប្រវត្តិកម្ម ដើម្បីផ្តល់ផលិតផលដែលដំណើរការល្អនៅគ្រប់ទំហំ។',
      items: [
        {
          title: 'អភិវឌ្ឍគេហទំព័រ',
          subtitle: 'អភិវឌ្ឍ & បង្កើត',
          desc: 'គេហទំព័រឆ្លើយតបទំនើបបង្កើតដោយ React, Next.js និង Tailwind។ លឿន ងាយប្រើ និងអាចពង្រីកបាន។',
          chips: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
          backTitle: 'WEB STACK',
          backStats: [
            { big: '04', label: 'គម្រោង' },
            { big: '12K', label: 'បន្ទាត់' },
            { big: '99%', label: 'Uptime' }
          ]
        },
        {
          title: 'រចនា UI/UX',
          subtitle: 'រចនា & សាកល្បង',
          desc: 'ចំណុចប្រទាក់ដ៏ល្អិតល្អន់ ផ្តោតលើអ្នកប្រើ ចាប់ពី wireframe ទៅគំរូដែលអាចអន្តរកម្មបាននៅក្នុង Figma។',
          chips: ['Figma', 'Prototyping', 'Design Systems'],
          backTitle: 'DESIGN KIT',
          backStats: [
            { big: '50+', label: 'អេក្រង់' },
            { big: '100%', label: 'ទូរស័ព្ទ' },
            { big: '4.8', label: 'ពិន្ទុ' }
          ]
        },
        {
          title: 'កម្មវិធីទូរស័ព្ទ',
          subtitle: 'iOS & Android',
          desc: 'បទពិសោធន៍ទូរស័ព្ទ Cross-platform ដែលដូចនឹងធម្មតានៅលើ iOS និង Android បង្កើតដោយ React Native និង Flutter។',
          chips: ['React Native', 'Flutter', 'iOS', 'Android'],
          backTitle: 'MOBILE BUILD',
          backStats: [
            { big: '09', label: 'កម្មវិធី' },
            { big: '2.4K', label: 'អ្នកប្រើ' },
            { big: '87%', label: 'Native' }
          ]
        },
        {
          title: 'អត្តសញ្ញាណម៉ាក',
          subtitle: 'ឡូហ្គោ & ស្ទាយ',
          desc: 'ឡូហ្គោ ប្រព័ន្ធពណ៌ និងគោលការណ៍ម៉ាក ដែលបង្ហាញរឿងរ៉ាវរបស់អ្នក និងលេចធ្លោក្នុងទីផ្សារ។',
          chips: ['Logo Design', 'Brand Guidelines', 'Identity'],
          backTitle: 'BRAND SUITE',
          backStats: [
            { big: '20+', label: 'ឡូហ្គោ' },
            { big: '95%', label: 'ប្ដូរបាន' },
            { big: '6', label: 'ឆ្នាំ' }
          ]
        }
      ]
    },
    blockchain: {
      titleStart: 'ហេតុអ្វី',
      titleAccent: 'Blockchain',
      titleEnd: 'សំខាន់',
      desc: 'Blockchain កំពុងផ្លាស់ប្តូរវិធីដែលយើងគ្រប់គ្រងទិន្នន័យ ប្រតិបត្តិការ និងការទុកចិត្ត។ តាមរយៈការកាត់បន្ថយអន្តរការី និងបង្កើតប្រព័ន្ធដែលមានសុវត្ថិភាព និងតម្លាភាព blockchain កំពុងដាក់មូលដ្ឋានគ្រឹះសម្រាប់អនាគតឌីជីថលដ៏មានប្រសិទ្ធភាព និងយុត្តិធម៌។',
      readMore: 'អានបន្ថែម'
    },
    servicesBack: {
      tools: 'ឧបករណ៍',
      viewMore: 'មើលបន្ថែម',
      portfolio: 'Portfolio'
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
      headline: 'ជំនាញដែលផ្តល់នូវ\nផលិតផលគេហទំព័រ\nស្អាត និងអាចពង្រីកបាន',
      desc: 'ខ្ញុំបង្កើតបទពិសោធន៍ full-stack ជាមួយការរចនា UI ដ៏ល្អិតល្អន់ កូដ frontend ឆ្លើយតប និងព័ត៌មានលម្អិតយ៉ាងល្អិតល្អន់លើគ្រប់អេក្រង់។',
      downloadCv: 'ទាញយក CV',
      contactMe: 'ទាក់ទងខ្ញុំ',
      avgLevel: 'កម្រិតជំនាញជាមធ្យម',
      projectsShipped: 'គម្រោងបានបញ្ចប់',
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
      explore: 'ស្វែងរក',
      items: [
        {
          title: 'POS System (VC1)',
          role: 'ម្ចាស់ផលិតផល & អ្នកអភិវឌ្ឍ',
          date: 'កុម្ភៈ – ឧសភា 2025',
          desc: 'ដឹកនាំការអភិវឌ្ឍប្រព័ន្ធពាណិជ្ជកម្មអនឡាញ និងសម្របសម្រួលការអភិវឌ្ឍផ្នែក front-end និង back-end ដោយប្រើប្រាស់ស្ថាបត្យកម្ម MVC។',
          chips: ['PHP (MVC)', 'MySQL', 'Bootstrap', 'Jira']
        },
        {
          title: 'Victual Company',
          role: 'អ្នកអភិវឌ្ឍ Backend',
          date: 'កុម្ភៈ 2025',
          desc: 'អភិវឌ្ឍស្ថាបត្យកម្ម API និងស្គីមាមូលដ្ឋានទិន្នន័យដ៏រឹងមាំសម្រាប់ប្រតិបត្តិការក្រុមហ៊ុន។',
          chips: ['PHP', 'Laravel', 'MySQL']
        },
        {
          title: 'Air Quality Dashboard',
          role: 'អ្នកអភិវឌ្ឍ',
          date: 'មករា 2025',
          desc: 'បង្កើតផ្ទាំងគ្រប់គ្រងពេលវេលាជាក់ស្តែងតាមដានសន្ទស្សន៍គុណភាពខ្យល់ ជាមួយការមើលឃើញទិន្នន័យ។',
          chips: ['Vue.js', 'API Integration', 'Chart.js']
        },
        {
          title: 'Task Management App',
          role: 'អ្នកគ្រប់គ្រង Git',
          date: 'មករា 2025',
          desc: 'គ្រប់គ្រងតួនាទីក្រុម និងការគ្រប់គ្រងជំនាន់។ ដឹកនាំការអភិវឌ្ឍ front-end ដោយផ្ដោតលើការឆ្លើយតប និងការរចនាងាយស្រួលប្រើ។',
          chips: ['HTML', 'CSS', 'JavaScript', 'GitHub']
        },
        {
          title: 'Telegram Chatbot',
          role: 'មេក្រុម',
          date: 'វិច្ឆិកា 2024',
          desc: 'បង្កើត bot សម្រាប់ស្វ័យប្រវត្តិកម្មអន្តរកម្មដោយប្រើប្រាស់ Telegram API។ រចនាពាក្យបញ្ជាផ្ទាល់ខ្លួន និងដំណើរការឆ្លើយតបពេលវេលាជាក់ស្តែង។',
          chips: ['Python', 'Telegram API', 'Automation']
        },
        {
          title: 'Music Band Website',
          role: 'មេក្រុម',
          date: 'កញ្ញា – វិច្ឆិកា 2024',
          desc: 'ដឹកនាំគម្រោងរចនាគេហទំព័រឋិតិវន្ត។ គ្រប់គ្រងការងារតាម GitHub និងដាក់ឱ្យដំណើរការនៅលើ Netlify។',
          chips: ['HTML', 'SASS', 'Netlify', 'Figma']
        }
      ]
    },
    footer: {
      brand: 'Thean',
      tagline:
        'Thean ជួយក្រុមការងារបំប្លែងទិន្នន័យស្មុគស្មាញទៅជារឿងរ៉ាវច្បាស់លាស់ និងគួរឱ្យចាប់អារម្មណ៍ — អ្វីៗដែលអ្នកត្រូវការនៅកន្លែងតែមួយ',
      sections: [
        {
          title: 'ផលិតផល',
          links: ['លក្ខណៈពិសេស', 'តម្លៃ', 'ការរួមបញ្ចូល', 'ការអាប់ដេត']
        },
        {
          title: 'ធនធាន',
          links: ['ឯកសារ', 'មគ្គុទ្ទេសក៍', 'ប្លុក', 'ការគាំទ្រ']
        },
        {
          title: 'ក្រុមហ៊ុន',
          links: ['អំពី', 'ការងារ', 'ទំនាក់ទំនង', 'ដៃគូ']
        }
      ],
      copy: 'រក្សាសិទ្ធិទាំងអស់',
      terms: 'លក្ខខណ្ឌសេវា',
      privacy: 'គោលការណ៍ឯកជនភាព'
    }
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
