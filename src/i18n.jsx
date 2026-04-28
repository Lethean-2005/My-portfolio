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
      titleSuffix: 'the future of',
      titleLine2: 'product development',
      creators: '227+ Happy Creators',
      desc: 'Develop software features with\nworkflows powered by AI agents and\nsupervised by humans',
      bookDemo: 'Book a Demo',
      contactUs: 'Contact us'
    },
    services: {
      title: 'Services',
      sub: 'Designing clean scalable responsive websites',
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
        },
        {
          title: 'E-commerce Platform',
          desc: 'Full-stack shop with Stripe checkout and a responsive product catalog.',
          chips: ['Next.js', 'Stripe']
        },
        {
          title: 'Analytics Dashboard',
          desc: 'Interactive dashboard with charts, filters, and live data updates.',
          chips: ['React', 'Charts']
        }
      ]
    },
    footer: {
      brand: 'Nexiron',
      tagline:
        'Nexiron helps teams transform complex data into clear, engaging stories — everything you need in one place',
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
      title: 'សេវាកម្ម',
      sub: 'រចនាគេហទំព័រស្អាត និងឆ្លើយតបបានល្អ',
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
        },
        {
          title: 'វេទិកាពាណិជ្ជកម្មអនឡាញ',
          desc: 'ហាងទំនិញពេញលេញ ជាមួយ Stripe checkout និងកាតាឡុកផលិតផលឆ្លើយតប។',
          chips: ['Next.js', 'Stripe']
        },
        {
          title: 'ផ្ទាំងគ្រប់គ្រងវិភាគ',
          desc: 'ផ្ទាំងគ្រប់គ្រងអន្តរកម្ម ជាមួយតារាងក្រាហ្វិក តម្រង និងទិន្នន័យបច្ចុប្បន្ន។',
          chips: ['React', 'Charts']
        }
      ]
    },
    footer: {
      brand: 'Nexiron',
      tagline:
        'Nexiron ជួយក្រុមការងារបំប្លែងទិន្នន័យស្មុគស្មាញទៅជារឿងរ៉ាវច្បាស់លាស់ និងគួរឱ្យចាប់អារម្មណ៍ — អ្វីៗដែលអ្នកត្រូវការនៅកន្លែងតែមួយ',
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
