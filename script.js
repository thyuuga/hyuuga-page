const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const translations = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.links": "Links",
    "hero.signal": "quiet systems / persistent memory / japan",
    "hero.subtitle": "Software Engineer / AI Companion Builder",
    "hero.intro":
      "A software engineer based in Japan, building emotionally persistent AI systems and long-term companion experiences.",
    "about.kicker": "01 / About",
    "about.title": "Soft interfaces for long conversations.",
    "about.body":
      "I care about AI that can stay with people over time: memory, continuity, emotional texture, and the small design choices that make a companion feel present without becoming loud.",
    "projects.kicker": "02 / Projects",
    "projects.title": "Current directions.",
    "projects.mio":
      "Long-term companion design with a calm emotional core.",
    "projects.pi":
      "A small local server for private, always-near AI systems.",
    "projects.memory":
      "Persistent memory layers for continuity, trust, and growth.",
    "links.kicker": "03 / Links",
    "links.title": "Find me in the quiet corners.",
    "links.email": "Email",
    "footer.note": "built for the late internet",
  },
  zh: {
    "nav.about": "关于",
    "nav.projects": "项目",
    "nav.links": "链接",
    "hero.signal": "安静系统 / 长期记忆 / 日本",
    "hero.subtitle": "软件工程师 / AI 陪伴系统构建者",
    "hero.intro":
      "一名居住在日本的软件工程师，正在构建具有情感连续性、长期记忆与陪伴体验的 AI 系统。",
    "about.kicker": "01 / 关于",
    "about.title": "为长久对话设计柔软的界面。",
    "about.body":
      "我关注那些能够陪伴人很久的 AI：记忆、连续性、情感质感，以及让陪伴显得真实却不过分喧哗的细小设计选择。",
    "projects.kicker": "02 / 项目",
    "projects.title": "正在探索的方向。",
    "projects.mio": "拥有安静情感核心的长期 AI 陪伴体验。",
    "projects.pi": "用于私密、近身 AI 系统的小型本地服务器。",
    "projects.memory": "面向连续性、信任与关系成长的持久记忆层。",
    "links.kicker": "03 / 链接",
    "links.title": "在安静的角落找到我。",
    "links.email": "邮件",
    "footer.note": "为深夜互联网而建",
  },
  ja: {
    "nav.about": "紹介",
    "nav.projects": "制作",
    "nav.links": "リンク",
    "hero.signal": "静かなシステム / 長期記憶 / 日本",
    "hero.subtitle": "ソフトウェアエンジニア / AI コンパニオンビルダー",
    "hero.intro":
      "日本を拠点に、感情の継続性と長期的な記憶を持つ AI システム、そして伴走するような体験を作っています。",
    "about.kicker": "01 / 紹介",
    "about.title": "長い対話のための、静かなインターフェース。",
    "about.body":
      "時間をかけて人のそばにいられる AI に関心があります。記憶、連続性、感情の質感、そして存在感はあるけれど騒がしくない体験の設計です。",
    "projects.kicker": "02 / 制作",
    "projects.title": "いま向き合っていること。",
    "projects.mio": "穏やかな感情の芯を持つ、長期的な AI コンパニオン体験。",
    "projects.pi": "プライベートで身近な AI システムのための小さなローカルサーバー。",
    "projects.memory": "連続性、信頼、関係性の成長を支える永続的な記憶レイヤー。",
    "links.kicker": "03 / リンク",
    "links.title": "静かな場所でつながる。",
    "links.email": "Email",
    "footer.note": "深夜のインターネットのために",
  },
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatableElements = document.querySelectorAll("[data-i18n]");

const getInitialLanguage = () => {
  if (!languageButtons.length || !translatableElements.length) {
    return "en";
  }

  const savedLanguage = localStorage.getItem("language");
  return translations[savedLanguage] ? savedLanguage : "en";
};

const setLanguage = (language) => {
  if (!languageButtons.length || !translatableElements.length) {
    return;
  }

  const dictionary = translations[language] || translations.en;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
    button.setAttribute("aria-pressed", button.dataset.lang === language);
  });

  document.documentElement.lang = language;
  document.body.dataset.language = language;
  localStorage.setItem("language", language);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(getInitialLanguage());
