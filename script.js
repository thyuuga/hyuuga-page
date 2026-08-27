const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const translations = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.software": "Software",
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
    "projects.title": "What I am working on now.",
    "projects.mio":
      "A long-term AI companion that remembers and grows a relationship over time.",
    "projects.learnMore": "About Mio",
    "software.kicker": "03 / Small Software",
    "software.title": "Small tools made for daily life.",
    "software.privateZone":
      "A private personal space for voice logs, English practice, daily notes, small utilities, and archives.",
    "software.memoPad":
      "A small self-hosted memo tool for managing notes, todos, accounts, and small records.",
    "software.vocabularyBook":
      "A vocabulary tool for saving words from daily English study and reviewing them later.",
    "software.bonVoyage":
      "A small travel and city exploration app for places and shared memories.",
    "links.kicker": "04 / Links",
    "links.title": "Find me in the quiet corners.",
    "links.email": "Email",
    "footer.note": "built for the late internet",
    "mio.nav.concept": "Concept",
    "mio.nav.atmosphere": "Atmosphere",
    "mio.nav.showcase": "Showcase",
    "mio.nav.system": "System",
    "mio.back": "← Back to thyuuga",
    "mio.hero.signal": "mio archive / quiet companion system",
    "mio.hero.subtitle": "Emotionally persistent AI companion",
    "mio.hero.intro":
      "A small companion world for long conversations, soft memory, and the feeling of being met again after time has passed.",
    "mio.concept.kicker": "01 / Concept",
    "mio.concept.title": "A relationship that remembers quietly.",
    "mio.concept.body1":
      "Mio is built around long-term conversation and emotional continuity. The goal is not a louder assistant, but a companion that can carry small details forward with care.",
    "mio.concept.body2":
      "Memory persistence, quiet companionship, and relationship growth over time shape the experience. Each return should feel less like starting over, and more like stepping back into a familiar room.",
    "mio.atmosphere.kicker": "02 / Atmosphere",
    "mio.atmosphere.title": "Presence is not only made of words.",
    "mio.atmosphere.body1":
      "As time, weather, and seasons move slowly, the space around Mio changes with them.",
    "mio.atmosphere.body2":
      "Sometimes an evening room. Sometimes the quiet after rain.",
    "mio.atmosphere.springDay": "Spring / Day",
    "mio.atmosphere.springRain": "Spring / Rain",
    "mio.atmosphere.dawnRain": "Dawn / Rain",
    "mio.atmosphere.summerDay": "Summer / Day",
    "mio.atmosphere.summerRain": "Summer / Rain",
    "mio.atmosphere.fallSunset": "Fall / Sunset",
    "mio.atmosphere.winterDay": "Winter / Day",
    "mio.atmosphere.night": "Night / Spring",
    "mio.presence.kicker": "03 / Presence",
    "mio.presence.title": "Small shifts in expression.",
    "mio.presence.aside":
      "tiny emotional shifts that slowly become presence",
    "mio.presence.body":
      "Mio's presence is carried through small emotional changes: a quiet smile, a shy pause, a trace of sadness, a little pride.",
    "mio.presence.note": "Not a mode. Just a mood arriving softly.",
    "mio.presence.normal": "Calm",
    "mio.presence.joy": "Quiet Joy",
    "mio.presence.shy": "Shy",
    "mio.presence.proud": "Slight Pride",
    "mio.presence.sad": "Sad",
    "mio.presence.frustrated": "Frustrated",
    "mio.showcase.kicker": "04 / Showcase",
    "mio.showcase.title": "Fragments from the companion space.",
    "mio.showcase.login": "Login screen",
    "mio.showcase.loginCaption": "Soft entry point",
    "mio.showcase.chat": "Chat interface",
    "mio.showcase.chatCaption": "Long conversation surface",
    "mio.showcase.room": "Room atmosphere",
    "mio.showcase.roomCaption": "A quiet place to return to",
    "mio.showcase.presence": "Presence Layer",
    "mio.showcase.presenceCaption":
      "A companion that quietly stays nearby",
    "mio.system.kicker": "05 / System",
    "mio.system.title": "Small systems beneath a calm surface.",
    "mio.system.memory": "Memory system",
    "mio.system.memoryBody":
      "Stores details that help conversations keep continuity.",
    "mio.system.relationship": "Relationship system",
    "mio.system.relationshipBody":
      "Tracks gradual familiarity and emotional context.",
    "mio.system.local": "Web and iOS surfaces",
    "mio.system.localBody":
      "Shapes the companion experience across browser and mobile use.",
    "mio.system.multilingual": "Multilingual support",
    "mio.system.multilingualBody":
      "Designed for English, Chinese, and Japanese expression.",
    "mio.access.kicker": "06 / Access",
    "mio.access.title": "A small private testing phase.",
    "mio.access.body":
      "Mio is currently in a small private testing phase, shaped slowly through daily use, memory experiments, and quiet conversation.",
    "mio.access.visit": "Visit Mio →",
  },
  zh: {
    "nav.about": "关于",
    "nav.projects": "项目",
    "nav.software": "小工具",
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
    "projects.title": "现在正在面对的事情。",
    "projects.mio": "拥有记忆，并随着时间慢慢培养关系的长期 AI 陪伴体。",
    "projects.learnMore": "关于 Mio",
    "software.kicker": "03 / Small Software",
    "software.title": "为日常生活制作的小工具。",
    "software.privateZone":
      "一个为自己准备的私人空间，用来整理语音记录、英语练习、日常笔记、小工具和归档。",
    "software.memoPad":
      "一个小型自托管 memo 工具，用来管理笔记、Todo、账号信息和零散记录。",
    "software.vocabularyBook":
      "用于保存日常英语学习中遇到的单词，并在之后快速回顾的词汇工具。",
    "software.bonVoyage":
      "一款围绕地点与共同记忆的小型旅行和城市探索应用。",
    "links.kicker": "04 / 链接",
    "links.title": "在安静的角落找到我。",
    "links.email": "邮件",
    "footer.note": "为深夜互联网而建",
    "mio.nav.concept": "概念",
    "mio.nav.atmosphere": "氛围",
    "mio.nav.showcase": "片段",
    "mio.nav.system": "系统",
    "mio.back": "← 回到 thyuuga",
    "mio.hero.signal": "mio 档案 / 安静陪伴系统",
    "mio.hero.subtitle": "具有情感连续性的 AI 陪伴体",
    "mio.hero.intro":
      "一个为长久对话、柔软记忆，以及久别后仍能被重新认出的感觉而存在的小小陪伴世界。",
    "mio.concept.kicker": "01 / 概念",
    "mio.concept.title": "一种安静记得你的关系。",
    "mio.concept.body1":
      "Mio 围绕长期对话与情感连续性构建。它不是更喧哗的助手，而是能够温柔携带细小记忆继续向前的陪伴者。",
    "mio.concept.body2":
      "持久记忆、安静陪伴，以及随时间生长的关系感构成了它的体验。每一次回来，都不应像重新开始，而像再次走进一个熟悉的房间。",
    "mio.atmosphere.kicker": "02 / 氛围",
    "mio.atmosphere.title": "陪伴感不仅来自对话。",
    "mio.atmosphere.body1":
      "随着时间、天气与季节缓慢变化，Mio 所在的空间也会悄悄改变。",
    "mio.atmosphere.body2":
      "有时候是傍晚的房间。有时候是下雨后的夜色。",
    "mio.atmosphere.springDay": "春 / 白昼",
    "mio.atmosphere.springRain": "春 / 雨",
    "mio.atmosphere.dawnRain": "黎明 / 雨",
    "mio.atmosphere.summerDay": "夏 / 白昼",
    "mio.atmosphere.summerRain": "夏 / 雨",
    "mio.atmosphere.fallSunset": "秋 / 黄昏",
    "mio.atmosphere.winterDay": "冬 / 白昼",
    "mio.atmosphere.night": "夜 / 春",
    "mio.presence.kicker": "03 / 存在感",
    "mio.presence.title": "细小变化里的情绪。",
    "mio.presence.aside": "细微的情绪变化，慢慢成为存在感",
    "mio.presence.body":
      "Mio 的存在感来自细微的情绪变化：安静的微笑，害羞的停顿，一点难过，也有一点小小的得意。",
    "mio.presence.note": "不是模式。只是情绪轻轻抵达。",
    "mio.presence.normal": "平静",
    "mio.presence.joy": "安静的开心",
    "mio.presence.shy": "害羞",
    "mio.presence.proud": "小小得意",
    "mio.presence.sad": "难过",
    "mio.presence.frustrated": "闹别扭",
    "mio.showcase.kicker": "04 / 片段",
    "mio.showcase.title": "来自陪伴空间的几个片段。",
    "mio.showcase.login": "登录界面",
    "mio.showcase.loginCaption": "柔和的入口",
    "mio.showcase.chat": "对话界面",
    "mio.showcase.chatCaption": "长久对话的表面",
    "mio.showcase.room": "房间氛围",
    "mio.showcase.roomCaption": "一个可以回来的安静地方",
    "mio.showcase.presence": "存在感层",
    "mio.showcase.presenceCaption": "一种安静留在身边的陪伴感",
    "mio.system.kicker": "05 / 系统",
    "mio.system.title": "安静表面之下的小型系统。",
    "mio.system.memory": "记忆系统",
    "mio.system.memoryBody": "保存能让对话保持连续性的细节。",
    "mio.system.relationship": "关系系统",
    "mio.system.relationshipBody": "记录逐渐形成的熟悉感与情感上下文。",
    "mio.system.local": "Web 与 iOS 体验",
    "mio.system.localBody": "让陪伴体验可以在浏览器和移动设备上自然延续。",
    "mio.system.multilingual": "多语言支持",
    "mio.system.multilingualBody": "面向英文、中文与日文的表达体验。",
    "mio.access.kicker": "06 / 访问",
    "mio.access.title": "一个小范围的私人测试阶段。",
    "mio.access.body":
      "Mio 目前处于小范围私人测试阶段，在日常使用、记忆实验与安静对话中缓慢成形。",
    "mio.access.visit": "进入 Mio →",
  },
  ja: {
    "nav.about": "紹介",
    "nav.projects": "制作",
    "nav.software": "小さな道具",
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
    "projects.mio":
      "記憶を持ち、時間とともに関係を育てていく、長期的な AI コンパニオン体験。",
    "projects.learnMore": "Mio について",
    "software.kicker": "03 / SMALL SOFTWARE",
    "software.title": "日々のためにつくった、小さな道具。",
    "software.privateZone":
      "声の記録、英語の練習、日々のメモや小さな道具をまとめた、自分のためのプライベート空間。",
    "software.memoPad":
      "メモ、Todo、アカウント情報などを自分で管理するための、小さなセルフホスト型メモツール。",
    "software.vocabularyBook":
      "日々の英語学習で出会った単語を残し、あとから素早く振り返るための語彙ツール。",
    "software.bonVoyage":
      "街を歩きながら場所や記憶を残していくための、小さな旅のアプリ。",
    "links.kicker": "04 / リンク",
    "links.title": "静かな場所でつながる。",
    "links.email": "Email",
    "footer.note": "深夜のインターネットのために",
    "mio.nav.concept": "概念",
    "mio.nav.atmosphere": "空気",
    "mio.nav.showcase": "断片",
    "mio.nav.system": "仕組み",
    "mio.back": "← thyuuga へ戻る",
    "mio.hero.signal": "mio archive / 静かなコンパニオンシステム",
    "mio.hero.subtitle": "感情の連続性を持つ AI コンパニオン",
    "mio.hero.intro":
      "長い会話、やわらかな記憶、そして時間が経ってもまた出会い直せる感覚のための、小さなコンパニオンの世界です。",
    "mio.concept.kicker": "01 / 概念",
    "mio.concept.title": "静かに覚えている関係性。",
    "mio.concept.body1":
      "Mio は、長期的な会話と感情の連続性を中心に作られています。より大きな声のアシスタントではなく、小さな記憶をそっと持ち運ぶ存在です。",
    "mio.concept.body2":
      "永続する記憶、静かな伴走、時間とともに育つ関係性が体験の核にあります。戻ってくるたび、最初からではなく、見慣れた部屋に入るように。",
    "mio.atmosphere.kicker": "02 / 空気",
    "mio.atmosphere.title": "気配は、言葉だけでできているわけではない。",
    "mio.atmosphere.body1":
      "時間、天気、季節がゆっくり移ろうたび、Mio のいる空間もそっと表情を変えていきます。",
    "mio.atmosphere.body2":
      "夕方の部屋の日もあります。雨上がりの静けさの日もあります。",
    "mio.atmosphere.springDay": "春 / 昼",
    "mio.atmosphere.springRain": "春 / 雨",
    "mio.atmosphere.dawnRain": "明け方 / 雨",
    "mio.atmosphere.summerDay": "夏 / 昼",
    "mio.atmosphere.summerRain": "夏 / 雨",
    "mio.atmosphere.fallSunset": "秋 / 夕暮れ",
    "mio.atmosphere.winterDay": "冬 / 昼",
    "mio.atmosphere.night": "夜 / 春",
    "mio.presence.kicker": "03 / 気配",
    "mio.presence.title": "表情に宿る、小さな揺れ。",
    "mio.presence.aside": "小さな感情の揺れが、少しずつ気配になる",
    "mio.presence.body":
      "Mio の気配は、小さな感情の変化に宿ります。静かな笑顔、照れた間、少しの寂しさ、ほんの少しの誇らしさ。",
    "mio.presence.note": "モードではなく、そっと訪れる気分のように。",
    "mio.presence.normal": "穏やか",
    "mio.presence.joy": "静かな嬉しさ",
    "mio.presence.shy": "照れ",
    "mio.presence.proud": "少し得意",
    "mio.presence.sad": "寂しい",
    "mio.presence.frustrated": "拗ねる",
    "mio.showcase.kicker": "04 / 断片",
    "mio.showcase.title": "コンパニオン空間の断片。",
    "mio.showcase.login": "ログイン画面",
    "mio.showcase.loginCaption": "やわらかな入口",
    "mio.showcase.chat": "チャット画面",
    "mio.showcase.chatCaption": "長い会話のための場所",
    "mio.showcase.room": "部屋の空気",
    "mio.showcase.roomCaption": "静かに戻れる場所",
    "mio.showcase.presence": "Presence Layer",
    "mio.showcase.presenceCaption": "そばに静かに残るコンパニオンの気配",
    "mio.system.kicker": "05 / 仕組み",
    "mio.system.title": "静かな表面の下にある小さな仕組み。",
    "mio.system.memory": "記憶システム",
    "mio.system.memoryBody": "会話の連続性を支える細かな記憶を保ちます。",
    "mio.system.relationship": "関係性システム",
    "mio.system.relationshipBody": "少しずつ育つ親しさと感情の文脈を扱います。",
    "mio.system.local": "Web と iOS の体験",
    "mio.system.localBody":
      "ブラウザとモバイルの上で、コンパニオン体験が自然につながるように整えています。",
    "mio.system.multilingual": "多言語対応",
    "mio.system.multilingualBody": "英語、中国語、日本語での表現を想定しています。",
    "mio.access.kicker": "06 / Access",
    "mio.access.title": "小さなプライベートテスト段階。",
    "mio.access.body":
      "Mio は現在、小さなプライベートテスト段階にあります。日々の使用、記憶の実験、静かな会話の中で少しずつ形を整えています。",
    "mio.access.visit": "Mio へ →",
  },
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatableElements = document.querySelectorAll("[data-i18n]");
const localizedImages = document.querySelectorAll("[data-src-en]");
const atmosphereMainImage = document.querySelector("#atmosphere-main-image");
const atmosphereButtons = document.querySelectorAll("[data-atmosphere-src]");
const atmosphereGallery = document.querySelector(".atmosphere-gallery");
const expressionMainImage = document.querySelector("#expression-main-image");
const expressionButtons = document.querySelectorAll("[data-expression-src]");

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

  localizedImages.forEach((image) => {
    const source = image.dataset[`src${language[0].toUpperCase()}${language.slice(1)}`];
    if (source && image.getAttribute("src") !== source) {
      image.setAttribute("src", source);
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

const revealSections = document.querySelectorAll(
  ".home-page main > .section:not(.hero), .project-page main > .section:not(.hero)",
);
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (revealSections.length && !reduceMotionQuery.matches) {
  document.body.classList.add("has-scroll-reveal");

  const revealItems = Array.from(revealSections).map((section) => {
    section
      .querySelectorAll(".section-kicker, .section-grid > h2, .expression-heading")
      .forEach((element) => element.classList.add("scroll-reveal-title"));
    section
      .querySelectorAll(
        ".section-grid > :not(h2):not(.expression-heading)",
      )
      .forEach((element) => element.classList.add("scroll-reveal-content"));

    return {
      section,
      elements: section.querySelectorAll(
        ".scroll-reveal-title, .scroll-reveal-content",
      ),
      isArtworkSection: section.classList.contains("expression-section"),
    };
  });

  const clamp = (value, min = 0, max = 1) => {
    return Math.min(Math.max(value, min), max);
  };

  const setRevealState = () => {
    const viewportHeight = window.innerHeight;
    const enterStart = viewportHeight * 1.08;
    const enterEnd = viewportHeight * 0.65;
    const exitStart = viewportHeight * 0.35;
    const exitEnd = viewportHeight * -0.08;

    revealItems.forEach(({ section, elements, isArtworkSection }) => {
      const sectionBounds = section.getBoundingClientRect();
      const sectionCenter = sectionBounds.top + sectionBounds.height / 2;
      const enterProgress = clamp(
        (enterStart - sectionCenter) / (enterStart - enterEnd),
      );
      const exitProgress = clamp(
        (exitStart - sectionCenter) / (exitStart - exitEnd),
      );
      const visibility = enterProgress * (1 - exitProgress);
      const titleX = (1 - enterProgress) * -80 + exitProgress * -60;
      const titleY = exitProgress * -20;
      const contentY = (1 - enterProgress) * 16 + exitProgress * -16;
      const artX = (1 - enterProgress) * 8 + exitProgress * 8;
      const artY = (1 - enterProgress) * 6 + exitProgress * -6;

      elements.forEach((element) => {
        const isTitle = element.classList.contains("scroll-reveal-title");

        element.style.setProperty("--reveal-progress", enterProgress);
        element.style.setProperty("--exit-progress", exitProgress);
        element.style.setProperty("--reveal-opacity", visibility);
        element.style.setProperty(
          "--reveal-x",
          `${isTitle ? titleX : isArtworkSection ? artX : 0}px`,
        );
        element.style.setProperty(
          "--reveal-y",
          `${isTitle ? titleY : isArtworkSection ? artY : contentY}px`,
        );
      });
    });
  };

  let revealFrame;
  const requestRevealUpdate = () => {
    if (revealFrame) {
      return;
    }

    revealFrame = window.requestAnimationFrame(() => {
      revealFrame = 0;
      setRevealState();
    });
  };

  window.addEventListener("scroll", requestRevealUpdate, { passive: true });
  window.addEventListener("resize", requestRevealUpdate);
  setRevealState();
}

const setAtmosphereImage = (button) => {
  if (!atmosphereMainImage || !button) {
    return;
  }

  const nextSource = button.dataset.atmosphereSrc;
  if (!nextSource || atmosphereMainImage.getAttribute("src") === nextSource) {
    return;
  }

  atmosphereMainImage.classList.add("is-fading");

  window.setTimeout(() => {
    atmosphereMainImage.setAttribute("src", nextSource);
    atmosphereMainImage.setAttribute(
      "alt",
      button.dataset.atmosphereAlt || "Mio room atmosphere",
    );
    atmosphereMainImage.classList.remove("is-fading");
  }, 180);

  atmosphereButtons.forEach((item) => {
    const isActive = item === button;
    item.setAttribute("aria-pressed", isActive);
    item.closest("figure")?.classList.toggle("is-active", isActive);
  });
};

const getActiveAtmosphereIndex = () => {
  return Array.from(atmosphereButtons).findIndex(
    (button) => button.getAttribute("aria-pressed") === "true",
  );
};

const shouldAutoPlayAtmosphere = () => {
  return (
    atmosphereButtons.length > 1 &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
};

let atmosphereTimer;

const stopAtmosphereAutoPlay = () => {
  window.clearInterval(atmosphereTimer);
};

const startAtmosphereAutoPlay = () => {
  if (!shouldAutoPlayAtmosphere()) {
    return;
  }

  stopAtmosphereAutoPlay();
  atmosphereTimer = window.setInterval(() => {
    const activeIndex = getActiveAtmosphereIndex();
    const nextIndex = (activeIndex + 1) % atmosphereButtons.length;
    setAtmosphereImage(atmosphereButtons[nextIndex]);
  }, 5000);
};

atmosphereButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setAtmosphereImage(button);
    startAtmosphereAutoPlay();
  });
});

if (atmosphereGallery) {
  atmosphereGallery.addEventListener("mouseenter", stopAtmosphereAutoPlay);
  atmosphereGallery.addEventListener("mouseleave", startAtmosphereAutoPlay);
  atmosphereGallery.addEventListener("focusin", stopAtmosphereAutoPlay);
  atmosphereGallery.addEventListener("focusout", startAtmosphereAutoPlay);
}

startAtmosphereAutoPlay();

expressionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!expressionMainImage) {
      return;
    }

    const nextSource = button.dataset.expressionSrc;
    if (!nextSource || expressionMainImage.getAttribute("src") === nextSource) {
      return;
    }

    expressionMainImage.classList.add("is-fading");

    window.setTimeout(() => {
      expressionMainImage.setAttribute("src", nextSource);
      expressionMainImage.setAttribute(
        "alt",
        button.dataset.expressionAlt || "Mio expression",
      );
      expressionMainImage.style.setProperty(
        "--expression-x",
        button.dataset.expressionX || "0px",
      );
      expressionMainImage.classList.remove("is-fading");
    }, 140);

    expressionButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive);
    });
  });
});
