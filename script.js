const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const translations = {
  en: {
    "project.openApp": "Open App",
    "project.privateLogin": "Private Access · Login Required",
    "memoPad.pageTitle": "Memo Pad — Notes & everyday tasks | thyuuga",
    "memoPad.title": "Memo Pad.",
    "memoPad.label": "Personal software / Web workspace",
    "memoPad.subtitle": "A place for thoughts, plans, and everything in between.",
    "memoPad.intro": "Memo Pad is a personal web workspace for organizing notes, managing everyday tasks, and keeping information in one place.",
    "memoPad.nav.workspace": "Workspace",
    "memoPad.nav.inside": "Features",
    "memoPad.nav.philosophy": "Philosophy",
    "memoPad.nav.status": "Status",
    "memoPad.workspace.kicker": "01 / Workspace preview",
    "memoPad.workspace.title": "Everything in its place.",
    "memoPad.workspace.caption": "Notebook — a place to collect and shape your thoughts.",
    "memoPad.workspace.alt": "Memo Pad Notebook showing a note list with categories, a title field and a rich text editing area.",
    "memoPad.workspace.open": "View full size ↗",
    "memoPad.notebook.label": "Notebook / 01",
    "memoPad.todo.label": "Todo / 02",
    "memoPad.todo.caption": "From a thought to a plan.",
    "memoPad.todo.note": "Tasks, priorities, and the details that help you follow through.",
    "memoPad.todo.alt": "Memo Pad Todo showing the task list, status, priority, due date, labels and task details.",
    "memoPad.inside.kicker": "02 / Features",
    "memoPad.inside.title": "A little more clarity, every day.",
    "memoPad.notebook.title": "Notebook",
    "memoPad.notebook.body": "Organize written notes with titles, categories, and editing tools.",
    "memoPad.todo.title": "Todo",
    "memoPad.todo.body": "Manage everyday tasks with statuses, priorities, due dates, and details.",
    "memoPad.organization.title": "Organization",
    "memoPad.organization.body": "Keep notes and tasks easy to browse, search, and revisit.",
    "memoPad.quiet.title": "Thoughtful Interface",
    "memoPad.quiet.body": "A warm, distraction-conscious workspace designed for everyday use.",
    "memoPad.philosophy.kicker": "03 / Design philosophy",
    "memoPad.philosophy.title": "Made for the everyday mind.",
    "memoPad.philosophy.body": "Memo Pad began as a personal experiment in bringing notes, tasks, and everyday information into a single, calmer workspace. The focus is on simple organization, readable interfaces, and the freedom to shape a tool around personal needs.",
    "memoPad.status.kicker": "04 / Project status",
    "memoPad.status.title": "Personal Project",
    "memoPad.status.body": "Memo Pad is currently a personal project and is not available for public registration.",
    "memoPad.status.back": "Back to selected software",
    "privateZone.pageTitle": "Private Zone — A personal workspace | thyuuga",
    "privateZone.title": "Private Zone.",
    "privateZone.label": "A personal project",
    "privateZone.subtitle": "A quieter place for everyday life.",
    "privateZone.intro": "A personal digital workspace for collecting thoughts, tracking daily activities, and keeping meaningful moments in one place.",
    "privateZone.nav.workspace": "Workspace",
    "privateZone.nav.inside": "Inside",
    "privateZone.nav.philosophy": "Philosophy",
    "privateZone.nav.status": "Status",
    "privateZone.workspace.kicker": "01 / The workspace",
    "privateZone.workspace.title": "A space for the little things that matter.",
    "privateZone.workspace.caption": "Calendar, daily marks, and traces — a view of everyday life.",
    "privateZone.workspace.alt": "Private Zone workspace with a calendar and Daily Marks on the left, Traces on the right, and the top of the Circle area below.",
    "privateZone.workspace.open": "View full size ↗",
    "privateZone.inside.kicker": "02 / What's inside",
    "privateZone.inside.title": "Thoughtful tools for everyday moments.",
    "privateZone.calendar.title": "Calendar & Daily Marks",
    "privateZone.calendar.body": "A visual calendar for browsing records by date and marking daily activities and routines with simple symbols.",
    "privateZone.traces.title": "Traces",
    "privateZone.traces.body": "A personal space for collecting thoughts, written notes, and things worth revisiting.",
    "privateZone.circle.title": "Circle",
    "privateZone.circle.body": "A small circle of selected people, with brief status updates that bring a little everyday presence into the workspace.",
    "privateZone.quiet.title": "Quiet Interface",
    "privateZone.quiet.body": "A warm, low-distraction interface designed to make everyday recording feel natural.",
    "privateZone.philosophy.kicker": "03 / Design philosophy",
    "privateZone.philosophy.title": "Less noise.\nMore room to think.",
    "privateZone.philosophy.body": "Private Zone was created as a personal experiment in building a calmer digital space — somewhere everyday records, small routines, and meaningful thoughts can quietly coexist.",
    "privateZone.status.kicker": "04 / Project status",
    "privateZone.status.title": "Personal Project",
    "privateZone.status.body": "Private Zone is a personal project currently developed and used privately. Public registration is not available.",
    "privateZone.status.back": "Back to selected software",
    "recorder.gallery.note": "Actual application screenshots · Japanese interface",
    "recorder.gallery.main": "The main window",
    "recorder.gallery.recording": "Recording in progress",
    "recorder.gallery.settings": "The recording details",
    "recorder.gallery.open": "View full size ↗",
    "recorder.gallery.mainAlt": "Thy Recorder main window with recording preview, window selection and settings in a two-column layout",
    "recorder.gallery.recordingAlt": "Thy Recorder recording in progress, showing a 00:15 timer and the stop recording control",
    "recorder.gallery.settingsAlt": "Audio, recording quality, output format, frame rate, compression, watermark and save location settings",
    "mio.footer.project": "A project by thyuuga.",
    "mio.footer.back": "Back to thyuuga.com ↗",
    "v2.pageTitle": "thyuuga — Thoughtful software, quietly made",
    "v2.description": "Independent software and AI companions by thyuuga, a software engineer based in Japan. Explore Thy Recorder, Mio, and small tools for daily life.",
    "v2.nav.work": "Work",
    "v2.nav.about": "About",
    "v2.nav.contact": "Contact",
    "v2.skip": "Skip to content",
    "v2.eyebrow": "Independent Development · Life & Creativity",
    "v2.location": "Based in Japan",
    "v2.hero.first": "Take it slow.",
    "v2.hero.second": "Make things with care.",
    "v2.hero.intro": "It all starts with an idea. I like taking my time to build things I enjoy, hoping they might make someone’s day a little easier or brighter.",
    "v2.hero.view": "Explore my work",
    "v2.featured": "01 / Featured software",
    "v2.recorder.tagline": "A little less friction. A little more focus.",
    "v2.recorder.body": "A lightweight macOS screen recorder for windows, system audio, and microphone input. Simple recording. Clean output.",
    "v2.recorder.caption": "Thy Recorder / macOS",
    "v2.recorder.preview": "A closer look, coming soon.",
    "v2.recorder.previewNote": "The latest two-column interface. Official app screenshot in preparation.",
    "v2.recorder.note": "Beta · Public release in preparation",
    "v2.mio.kicker": "02 / An ongoing exploration",
    "v2.mio.tagline": "A familiar presence.\nA conversation that continues.",
    "v2.mio.body": "A long-term AI companion built around memory, emotional continuity, and a relationship that grows over time.",
    "v2.mio.link": "Step into Mio’s world",
    "v2.mio.caption": "Mio / A quiet moment",
    "v2.mio.alt": "Mio character illustration in warm evening light",
    "v2.work.kicker": "03 / Selected software",
    "v2.work.recording": "macOS Screen Recorder",
    "v2.work.title": "Small ideas.\nEveryday possibilities.",
    "v2.work.note": "A collection of tools made from curiosity and everyday needs.",
    "v2.work.bonstock": "A stock market analysis web app for S&P 500, NASDAQ, and selected US stocks, with market change alerts.",
    "v2.work.market": "Market analysis",
    "v2.work.personal": "Personal space",
    "v2.work.notes": "Notes & organization",
    "v2.work.language": "Language learning",
    "v2.work.travel": "Travel & places",
    "v2.work.private": "Not publicly available",
    "v2.about.kicker": "04 / About & contact",
    "v2.about.title": "Made by a person.\nWith people in mind.",
    "v2.about.body": "I’m thyuuga, a software engineer and independent developer based in Japan. I build software for everyday life, and explore what it means for an AI companion to remember and stay present over time.",
    "v2.about.note": "I care about the details that make a tool feel natural: a clear interface, a thoughtful interaction, a little less friction.",
    "v2.contact.title": "A thought, a question,\nor just hello?",
    "v2.contact.email": "Write to me",
    "v2.footer.note": "Independent work. Considered details.",
    "v2.footer.top": "Back to top",
    "recorder.featured": "Featured",
    "recorder.summary": "A lightweight macOS screen recorder for capturing windows, system audio, and microphone input. Designed for simple recording and clean output.",
    "recorder.meta": "macOS · Screen Recording · Free + PRO",
    "recorder.explore": "Explore Thy Recorder ↗",
    "recorder.pageTitle": "Thy Recorder — macOS Screen Recorder | thyuuga",
    "recorder.subtitle": "Screen recording, made simple.",
    "recorder.intro": "Thy Recorder is a lightweight macOS screen recording application designed for capturing windows, system audio, and microphone input with a clean, straightforward interface.",
    "recorder.status": "Beta / Preparing for release",
    "recorder.nav.preview": "Preview",
    "recorder.nav.features": "Features",
    "recorder.nav.editions": "Free / PRO",
    "recorder.nav.access": "Release",
    "recorder.preview.kicker": "01 / Preview",
    "recorder.preview.title": "A clear view of your recording.",
    "recorder.preview.pending": "App screenshot coming soon",
    "recorder.preview.note": "A screenshot of the current two-column macOS interface will be added here.",
    "recorder.features.kicker": "02 / Features",
    "recorder.features.title": "The essentials, thoughtfully arranged.",
    "recorder.features.window": "Window & Display Recording",
    "recorder.features.windowBody": "Capture individual windows or your entire screen.",
    "recorder.features.audio": "System & Microphone Audio",
    "recorder.features.audioBody": "Record application audio and microphone input.",
    "recorder.features.options": "Flexible Recording Options",
    "recorder.features.optionsBody": "Choose recording quality, frame rate, compression, and output format.",
    "recorder.features.simple": "Simple macOS Experience",
    "recorder.features.simpleBody": "A clean interface focused on recording without unnecessary complexity.",
    "recorder.editions.kicker": "03 / Free + PRO",
    "recorder.editions.title": "Start simple. Make room for more.",
    "recorder.free.quality": "Standard recording quality",
    "recorder.free.format": "MP4 output",
    "recorder.free.fps": "30 fps",
    "recorder.free.watermark": "Thy Recorder watermark",
    "recorder.free.duration": "Up to 1 hour per recording",
    "recorder.pro.quality": "Original recording quality",
    "recorder.pro.format": "MOV output",
    "recorder.pro.fps": "Up to 60 fps (subject to recording mode)",
    "recorder.pro.watermark": "Watermark removal and customization",
    "recorder.pro.duration": "No Free recording duration limit",
    "recorder.editions.note": "PRO licensing and purchasing are being prepared for the standalone release.",
    "recorder.access.kicker": "04 / Release",
    "recorder.access.title": "Getting ready for your Mac.",
    "recorder.access.note": "Thy Recorder is in Beta. Public downloads and PRO purchasing are not yet available.",
    "recorder.access.download": "Download for macOS",
    "recorder.access.upgrade": "Upgrade to PRO",
    "recorder.access.soon": "Coming Soon",
    "recorder.back": "← Back to homepage",
    "recorder.contact": "Contact the developer",
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
    "project.openApp": "打开应用",
    "project.privateLogin": "私人访问 · 需要登录",
    "memoPad.pageTitle": "Memo Pad — 笔记与日常待办 | thyuuga",
    "memoPad.title": "Memo Pad",
    "memoPad.label": "个人软件作品 / Web 工作空间",
    "memoPad.subtitle": "给想法、计划与日常琐事一个安静的归处。",
    "memoPad.intro": "一款个人开发的 Web 工作空间，用于整理笔记、管理待办事项和日常信息。",
    "memoPad.nav.workspace": "界面",
    "memoPad.nav.inside": "功能",
    "memoPad.nav.philosophy": "理念",
    "memoPad.nav.status": "状态",
    "memoPad.workspace.kicker": "01 / 工作空间预览",
    "memoPad.workspace.title": "让每一件事，各得其所。",
    "memoPad.workspace.caption": "Notebook · 收集想法，慢慢整理成文。",
    "memoPad.workspace.alt": "Memo Pad 的 Notebook 界面，展示带分类的笔记列表、标题输入与富文本编辑区。",
    "memoPad.workspace.open": "查看原图 ↗",
    "memoPad.notebook.label": "笔记 / 01",
    "memoPad.todo.label": "待办 / 02",
    "memoPad.todo.caption": "从一个想法，到一个计划。",
    "memoPad.todo.note": "整理任务、优先级与细节，让计划更容易付诸行动。",
    "memoPad.todo.alt": "Memo Pad 的 Todo 界面，展示任务列表、状态、优先级、截止日期、标签与任务详情。",
    "memoPad.inside.kicker": "02 / 核心功能",
    "memoPad.inside.title": "让每一天，都清晰一点。",
    "memoPad.notebook.title": "Notebook · 笔记",
    "memoPad.notebook.body": "通过标题、分类与编辑工具，整理和书写笔记。",
    "memoPad.todo.title": "Todo · 待办",
    "memoPad.todo.body": "使用状态、优先级、截止日期与详情，管理日常待办事项。",
    "memoPad.organization.title": "有序整理",
    "memoPad.organization.body": "方便地浏览、搜索和回顾笔记与任务。",
    "memoPad.quiet.title": "用心的界面",
    "memoPad.quiet.body": "温暖、注重减少干扰的工作空间，为日常使用而设计。",
    "memoPad.philosophy.kicker": "03 / 设计理念",
    "memoPad.philosophy.title": "为日常思绪而作。",
    "memoPad.philosophy.body": "Memo Pad 最初是一次个人开发实验，希望把笔记、待办事项与日常信息整理到同一个空间中。相比复杂的工作流，我更关注清晰的组织方式、舒适的阅读体验，以及能够按照个人习惯使用的界面。",
    "memoPad.status.kicker": "04 / 项目状态",
    "memoPad.status.title": "个人开发作品",
    "memoPad.status.body": "Memo Pad 目前主要用于个人使用，暂未开放公开注册。",
    "memoPad.status.back": "返回软件作品列表",
    "privateZone.pageTitle": "Private Zone — 个人数字空间 | thyuuga",
    "privateZone.title": "Private Zone",
    "privateZone.label": "个人开发作品",
    "privateZone.subtitle": "为日常生活留一处安静的空间。",
    "privateZone.intro": "一个用于记录想法、管理日常活动和整理个人内容的数字空间。",
    "privateZone.nav.workspace": "界面",
    "privateZone.nav.inside": "功能",
    "privateZone.nav.philosophy": "理念",
    "privateZone.nav.status": "状态",
    "privateZone.workspace.kicker": "01 / 日常空间",
    "privateZone.workspace.title": "为生活中在意的小事，留一处空间。",
    "privateZone.workspace.caption": "日历、日常标记与文字记录，组成生活的一角。",
    "privateZone.workspace.alt": "Private Zone 真实工作界面，左侧为日历与 Daily Marks，右侧为 Traces，下方可见 Circle 区域顶部。",
    "privateZone.workspace.open": "查看原图 ↗",
    "privateZone.inside.kicker": "02 / 功能一览",
    "privateZone.inside.title": "用心的小工具，陪伴日常片刻。",
    "privateZone.calendar.title": "日历与日常标记",
    "privateZone.calendar.body": "通过日历按日期浏览记录，用简洁的符号标记每天的活动与习惯。",
    "privateZone.traces.title": "Traces · 记录",
    "privateZone.traces.body": "保存想法、文字记录，以及值得日后重新阅读的内容。",
    "privateZone.circle.title": "Circle · 小圈子",
    "privateZone.circle.body": "管理自己关心的小范围成员，通过简短状态，为日常空间增添一点彼此的近况。",
    "privateZone.quiet.title": "安静的界面",
    "privateZone.quiet.body": "温暖、低干扰的界面设计，让日常记录更加自然。",
    "privateZone.philosophy.kicker": "03 / 设计理念",
    "privateZone.philosophy.title": "少一些喧嚣。\n多一些思考的空间。",
    "privateZone.philosophy.body": "Private Zone 是一次关于个人数字空间的探索。我希望让日常记录、生活习惯和零散的想法，有一个安静而自然的归处。",
    "privateZone.status.kicker": "04 / 项目状态",
    "privateZone.status.title": "个人开发作品",
    "privateZone.status.body": "Private Zone 目前是个人开发和使用的项目，暂未开放公开注册。",
    "privateZone.status.back": "返回软件作品列表",
    "recorder.gallery.note": "真实应用截图 · 日文界面",
    "recorder.gallery.main": "完整录制界面",
    "recorder.gallery.recording": "录制进行中",
    "recorder.gallery.settings": "录制设置细节",
    "recorder.gallery.open": "查看原图 ↗",
    "recorder.gallery.mainAlt": "Thy Recorder 双栏主界面，展示录制预览、窗口选择与设置",
    "recorder.gallery.recordingAlt": "Thy Recorder 录制中界面，显示 00:15 计时和停止录制按钮",
    "recorder.gallery.settingsAlt": "音频、录制画质、输出格式、帧率、压缩、水印与保存位置设置",
    "mio.footer.project": "由 thyuuga 创作。",
    "mio.footer.back": "返回 thyuuga.com ↗",
    "v2.pageTitle": "thyuuga — 安静创造，用心打磨",
    "v2.description": "居住在日本的软件工程师与独立开发者 thyuuga 的作品。探索 Thy Recorder、Mio，以及为日常生活制作的小工具。",
    "v2.nav.work": "作品",
    "v2.nav.about": "关于",
    "v2.nav.contact": "联系",
    "v2.skip": "跳至正文",
    "v2.eyebrow": "独立开发 · 生活与创造",
    "v2.location": "生活在日本",
    "v2.hero.first": "慢一点，",
    "v2.hero.second": "把喜欢的事做好。",
    "v2.hero.intro": "从一个想法开始，慢慢创造，认真打磨。做些自己喜欢的东西，也希望它们能给别人的生活带来一点便利与快乐。",
    "v2.hero.view": "探索作品",
    "v2.featured": "01 / 精选软件",
    "v2.recorder.tagline": "少一点繁琐，多一点专注。",
    "v2.recorder.body": "一款轻量的 macOS 录屏工具，支持窗口、系统音频与麦克风输入。让录制简单，让输出清晰。",
    "v2.recorder.caption": "Thy Recorder / macOS",
    "v2.recorder.preview": "即将呈现，更多细节。",
    "v2.recorder.previewNote": "最新双栏界面，正式应用截图准备中。",
    "v2.recorder.note": "Beta · 正在准备公开发布",
    "v2.mio.kicker": "02 / 持续探索",
    "v2.mio.tagline": "熟悉的陪伴，\n延续的对话。",
    "v2.mio.body": "围绕长期记忆与情感连续性构建的 AI 陪伴体，让关系随着时间慢慢生长。",
    "v2.mio.link": "走进 Mio 的世界",
    "v2.mio.caption": "Mio / 安静的一刻",
    "v2.mio.alt": "暖色暮光中的 Mio 角色插画",
    "v2.work.kicker": "03 / 精选软件",
    "v2.work.recording": "macOS 录屏工具",
    "v2.work.title": "小小想法，\n日常的可能。",
    "v2.work.note": "一些源于好奇心与日常需要的工具。",
    "v2.work.bonstock": "股票市场分析 Web App，用于查看 S&P 500、NASDAQ 和部分美股个股行情，并提供市场变化提醒。",
    "v2.work.market": "市场分析",
    "v2.work.personal": "个人空间",
    "v2.work.notes": "笔记与整理",
    "v2.work.language": "语言学习",
    "v2.work.travel": "旅行与地点",
    "v2.work.private": "暂未开放公开访问",
    "v2.about.kicker": "04 / 关于与联系",
    "v2.about.title": "由一个人创造，\n为每一个人用心。",
    "v2.about.body": "我是 thyuuga，一名居住在日本的软件工程师与独立开发者。我制作贴近日常的软件，也探索 AI 陪伴体如何保留记忆，如何长久地陪伴一个人。",
    "v2.about.note": "我在意那些让工具用起来更自然的细节：清晰的界面、贴心的交互，以及少一点繁琐的体验。",
    "v2.contact.title": "一个想法、一个问题，\n或只是一声你好。",
    "v2.contact.email": "给我写信",
    "v2.footer.note": "独立创作，用心于细节。",
    "v2.footer.top": "回到顶部",
    "recorder.featured": "精选",
    "recorder.summary": "一款轻量的 macOS 录屏工具，支持录制窗口、系统音频和麦克风输入。让录制操作简单，输出清晰。",
    "recorder.meta": "macOS · 屏幕录制 · Free + PRO",
    "recorder.explore": "了解 Thy Recorder ↗",
    "recorder.pageTitle": "Thy Recorder — macOS 录屏工具 | thyuuga",
    "recorder.subtitle": "轻量、简洁的 macOS 录屏工具。",
    "recorder.intro": "Thy Recorder 是一款轻量的 macOS 录屏应用，以简洁直观的界面，帮助你录制窗口、系统音频和麦克风输入。",
    "recorder.status": "Beta / 正在准备发布",
    "recorder.nav.preview": "预览",
    "recorder.nav.features": "功能",
    "recorder.nav.editions": "Free / PRO",
    "recorder.nav.access": "发布",
    "recorder.preview.kicker": "01 / 产品预览",
    "recorder.preview.title": "清晰直观的录制界面。",
    "recorder.preview.pending": "应用截图待补充",
    "recorder.preview.note": "此处将展示当前 macOS 应用双栏界面的真实截图。",
    "recorder.features.kicker": "02 / 主要功能",
    "recorder.features.title": "专注于录制所需。",
    "recorder.features.window": "窗口与屏幕录制",
    "recorder.features.windowBody": "录制单个窗口或整个屏幕。",
    "recorder.features.audio": "系统与麦克风音频",
    "recorder.features.audioBody": "录制应用音频和麦克风输入。",
    "recorder.features.options": "灵活的录制选项",
    "recorder.features.optionsBody": "选择录制画质、帧率、压缩方式和输出格式。",
    "recorder.features.simple": "简洁的 macOS 体验",
    "recorder.features.simpleBody": "专注于录制的清爽界面，省去不必要的复杂操作。",
    "recorder.editions.kicker": "03 / Free + PRO",
    "recorder.editions.title": "轻松开始，按需进阶。",
    "recorder.free.quality": "标准录制画质",
    "recorder.free.format": "MP4 输出",
    "recorder.free.fps": "30 fps",
    "recorder.free.watermark": "Thy Recorder 水印",
    "recorder.free.duration": "每次录制最长 1 小时",
    "recorder.pro.quality": "原始录制画质",
    "recorder.pro.format": "MOV 输出",
    "recorder.pro.fps": "最高 60 fps（取决于录制模式）",
    "recorder.pro.watermark": "移除和自定义水印",
    "recorder.pro.duration": "不受 Free 版录制时长限制",
    "recorder.editions.note": "PRO 授权与购买功能正在为独立发行做准备。",
    "recorder.access.kicker": "04 / 发布",
    "recorder.access.title": "即将与你的 Mac 见面。",
    "recorder.access.note": "Thy Recorder 目前处于 Beta 阶段，公开下载与 PRO 购买暂未开放。",
    "recorder.access.download": "下载 macOS 版",
    "recorder.access.upgrade": "升级至 PRO",
    "recorder.access.soon": "即将开放",
    "recorder.back": "← 返回主页",
    "recorder.contact": "联系开发者",
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
    "project.openApp": "アプリを開く",
    "project.privateLogin": "限定アクセス · ログインが必要です",
    "memoPad.pageTitle": "Memo Pad — ノートと日々のタスク | thyuuga",
    "memoPad.title": "Memo Pad",
    "memoPad.label": "個人ソフトウェア / Web ワークスペース",
    "memoPad.subtitle": "考えごとや予定、日々の記録をひとつの場所に。",
    "memoPad.intro": "ノートやタスク、日常の情報を整理するために開発したパーソナル Web ワークスペースです。",
    "memoPad.nav.workspace": "画面",
    "memoPad.nav.inside": "機能",
    "memoPad.nav.philosophy": "理念",
    "memoPad.nav.status": "現状",
    "memoPad.workspace.kicker": "01 / ワークスペース",
    "memoPad.workspace.title": "それぞれに、ちょうどよい居場所を。",
    "memoPad.workspace.caption": "Notebook · 考えを集め、少しずつ言葉に。",
    "memoPad.workspace.alt": "Memo Pad の Notebook 画面。カテゴリ付きのノート一覧、タイトル欄、リッチテキスト編集エリアを表示。",
    "memoPad.workspace.open": "原寸で見る ↗",
    "memoPad.notebook.label": "ノート / 01",
    "memoPad.todo.label": "タスク / 02",
    "memoPad.todo.caption": "ひとつの考えから、ひとつの計画へ。",
    "memoPad.todo.note": "タスク、優先度、細かなメモを整理して、日々の行動につなげる。",
    "memoPad.todo.alt": "Memo Pad の Todo 画面。タスク一覧、状態、優先度、期限、ラベルと詳細を表示。",
    "memoPad.inside.kicker": "02 / 主な機能",
    "memoPad.inside.title": "毎日に、少しの見通しを。",
    "memoPad.notebook.title": "Notebook · ノート",
    "memoPad.notebook.body": "タイトル、カテゴリ、編集ツールを使って文章を整理できます。",
    "memoPad.todo.title": "Todo · タスク",
    "memoPad.todo.body": "状態、優先度、期限、詳細を添えて、日々のタスクを管理できます。",
    "memoPad.organization.title": "わかりやすい整理",
    "memoPad.organization.body": "ノートやタスクを一覧で眺め、検索し、あとから振り返れます。",
    "memoPad.quiet.title": "心を配った画面",
    "memoPad.quiet.body": "日常使いのために整えた、温かく、気を散らしにくいワークスペース。",
    "memoPad.philosophy.kicker": "03 / デザインの考え方",
    "memoPad.philosophy.title": "日々の思考のために。",
    "memoPad.philosophy.body": "Memo Pad は、ノートやタスク、日常の情報をひとつの落ち着いた場所にまとめるために始めた個人開発プロジェクトです。シンプルな整理方法と読みやすい画面、そして自分の使い方に合わせられることを大切にしています。",
    "memoPad.status.kicker": "04 / プロジェクトの現状",
    "memoPad.status.title": "個人プロジェクト",
    "memoPad.status.body": "Memo Pad は現在、個人利用を中心としたプロジェクトで、一般公開は行っていません。",
    "memoPad.status.back": "ソフトウェア一覧へ戻る",
    "privateZone.pageTitle": "Private Zone — 自分だけのワークスペース | thyuuga",
    "privateZone.title": "Private Zone",
    "privateZone.label": "個人プロジェクト",
    "privateZone.subtitle": "日々の暮らしに、静かな居場所を。",
    "privateZone.intro": "日々の出来事や考えを記録し、自分だけの情報を整理するためのパーソナルワークスペース。",
    "privateZone.nav.workspace": "画面",
    "privateZone.nav.inside": "機能",
    "privateZone.nav.philosophy": "理念",
    "privateZone.nav.status": "現状",
    "privateZone.workspace.kicker": "01 / ワークスペース",
    "privateZone.workspace.title": "日々の大切な小さなことに、居場所を。",
    "privateZone.workspace.caption": "カレンダー、日々のマーク、記録。暮らしの一場面。",
    "privateZone.workspace.alt": "Private Zone の実際の画面。左にカレンダーと Daily Marks、右に Traces、下に Circle エリアの上部が見えます。",
    "privateZone.workspace.open": "原寸で見る ↗",
    "privateZone.inside.kicker": "02 / 日常のための機能",
    "privateZone.inside.title": "日々のひとときに、心を配った道具を。",
    "privateZone.calendar.title": "カレンダーと日々のマーク",
    "privateZone.calendar.body": "日付ごとに記録を振り返り、毎日の活動や習慣をシンプルな記号で残せるカレンダー。",
    "privateZone.traces.title": "Traces · 記録",
    "privateZone.traces.body": "考えや文章、あとで読み返したいことを集めておく、自分だけの場所。",
    "privateZone.circle.title": "Circle · 小さなつながり",
    "privateZone.circle.body": "身近な人を小さな輪にまとめ、短いステータスを通して日々の様子を感じられる場所。",
    "privateZone.quiet.title": "静かなインターフェース",
    "privateZone.quiet.body": "日々の記録が自然に続くように整えた、温かく、気を散らしにくいインターフェース。",
    "privateZone.philosophy.kicker": "03 / デザインの考え方",
    "privateZone.philosophy.title": "雑音を減らし、\n考える余白を。",
    "privateZone.philosophy.body": "Private Zone は、日々の記録や小さな習慣、ふと浮かんだ考えを、静かに残せるデジタル空間を目指した個人プロジェクトです。",
    "privateZone.status.kicker": "04 / プロジェクトの現状",
    "privateZone.status.title": "個人プロジェクト",
    "privateZone.status.body": "Private Zone は現在、個人で開発・利用しているプロジェクトです。一般公開はまだ行っていません。",
    "privateZone.status.back": "ソフトウェア一覧へ戻る",
    "recorder.gallery.note": "実際のアプリ画面 · 日本語 UI",
    "recorder.gallery.main": "録画のメイン画面",
    "recorder.gallery.recording": "録画中の様子",
    "recorder.gallery.settings": "録画設定の詳細",
    "recorder.gallery.open": "原寸で見る ↗",
    "recorder.gallery.mainAlt": "録画プレビュー、ウインドウ選択、設定を備えた Thy Recorder の 2 カラム画面",
    "recorder.gallery.recordingAlt": "00:15 のタイマーと録画停止ボタンが表示された Thy Recorder の録画中の画面",
    "recorder.gallery.settingsAlt": "音声、画質、出力形式、フレームレート、圧縮、ウォーターマーク、保存先の設定",
    "mio.footer.project": "thyuuga が手がけるプロジェクト。",
    "mio.footer.back": "thyuuga.com へ戻る ↗",
    "v2.pageTitle": "thyuuga — 静かにつくる、細部まで考える",
    "v2.description": "日本を拠点とするソフトウェアエンジニア・個人開発者 thyuuga の作品。Thy Recorder、Mio、日々のための小さな道具をご紹介します。",
    "v2.nav.work": "作品",
    "v2.nav.about": "紹介",
    "v2.nav.contact": "連絡",
    "v2.skip": "本文へ移動",
    "v2.eyebrow": "個人開発 · 暮らしとものづくり",
    "v2.location": "日本で暮らしています",
    "v2.hero.first": "焦らず、",
    "v2.hero.second": "好きなものを丁寧に。",
    "v2.hero.intro": "ひとつのアイデアから、少しずつ形にしていく。自分が好きなものを作りながら、誰かの毎日もちょっと便利に、楽しくできたら嬉しいです。",
    "v2.hero.view": "作品を見る",
    "v2.featured": "01 / 注目のソフトウェア",
    "v2.recorder.tagline": "手間を少なく、集中をもっと。",
    "v2.recorder.body": "ウインドウ、システム音声、マイク入力を収録する、軽量な macOS 用画面録画アプリ。シンプルな操作で、すっきりとした録画を。",
    "v2.recorder.caption": "Thy Recorder / macOS",
    "v2.recorder.preview": "詳しいプレビューは、もう少し先に。",
    "v2.recorder.previewNote": "最新の 2 カラム UI。正式なアプリのスクリーンショットを準備中です。",
    "v2.recorder.note": "Beta · 一般公開に向けて準備中",
    "v2.mio.kicker": "02 / 続いていく探究",
    "v2.mio.tagline": "なじみのある気配。\n続いていく会話。",
    "v2.mio.body": "長期的な記憶と感情の連続性を大切にする AI コンパニオン。時間をかけて、少しずつ関係を育てていきます。",
    "v2.mio.link": "Mio の世界へ",
    "v2.mio.caption": "Mio / 静かなひととき",
    "v2.mio.alt": "暖かな夕暮れの光に包まれた Mio のキャラクターイラスト",
    "v2.work.kicker": "03 / ソフトウェア作品集",
    "v2.work.recording": "macOS 画面録画",
    "v2.work.title": "小さな発想。\n日々に広がる可能性。",
    "v2.work.note": "好奇心と日々の必要から生まれた、小さな道具たち。",
    "v2.work.bonstock": "S&P 500、NASDAQ、一部の米国個別株の相場を確認できる株式市場分析 Web アプリ。市場の変化を知らせる機能も備えています。",
    "v2.work.market": "市場分析",
    "v2.work.personal": "パーソナルスペース",
    "v2.work.notes": "メモと整理",
    "v2.work.language": "語学学習",
    "v2.work.travel": "旅と場所",
    "v2.work.private": "一般公開はしていません",
    "v2.about.kicker": "04 / 紹介と連絡",
    "v2.about.title": "一人の手から、\n使う人のことを考えて。",
    "v2.about.body": "日本を拠点に活動するソフトウェアエンジニア・個人開発者の thyuuga です。日々に寄り添うソフトウェアをつくりながら、記憶を持ち、長くそばにいられる AI コンパニオンのあり方を探っています。",
    "v2.about.note": "わかりやすい画面、気の利いた操作、少しだけ手間の減る体験。自然に使える道具を支える、細かなところを大切にしています。",
    "v2.contact.title": "アイデアでも、質問でも。\n気軽に、こんにちは。",
    "v2.contact.email": "メールを書く",
    "v2.footer.note": "一人でつくる。細部を大切に。",
    "v2.footer.top": "ページの先頭へ",
    "recorder.featured": "注目のソフトウェア",
    "recorder.summary": "ウインドウ、システム音声、マイク入力を収録できる軽量な macOS 用画面録画アプリ。シンプルな操作で、すっきりとした録画を。",
    "recorder.meta": "macOS · 画面録画 · Free + PRO",
    "recorder.explore": "Thy Recorder を見る ↗",
    "recorder.pageTitle": "Thy Recorder — macOS 用画面録画アプリ | thyuuga",
    "recorder.subtitle": "シンプルで使いやすい macOS 用画面録画アプリ。",
    "recorder.intro": "Thy Recorder は、ウインドウ、システム音声、マイク入力を収録できる軽量な macOS 用画面録画アプリです。すっきりとした、わかりやすいインターフェースを備えています。",
    "recorder.status": "Beta / リリース準備中",
    "recorder.nav.preview": "プレビュー",
    "recorder.nav.features": "機能",
    "recorder.nav.editions": "Free / PRO",
    "recorder.nav.access": "リリース",
    "recorder.preview.kicker": "01 / プレビュー",
    "recorder.preview.title": "録画を、わかりやすく。",
    "recorder.preview.pending": "アプリのスクリーンショットは準備中です",
    "recorder.preview.note": "現在の macOS アプリの 2 カラム UI を、実際のスクリーンショットでご紹介する予定です。",
    "recorder.features.kicker": "02 / 主な機能",
    "recorder.features.title": "録画に必要なものを、シンプルに。",
    "recorder.features.window": "ウインドウと画面の録画",
    "recorder.features.windowBody": "個別のウインドウや画面全体を録画できます。",
    "recorder.features.audio": "システム音声とマイク音声",
    "recorder.features.audioBody": "アプリの音声とマイク入力を収録できます。",
    "recorder.features.options": "柔軟な録画設定",
    "recorder.features.optionsBody": "画質、フレームレート、圧縮方法、出力形式を選べます。",
    "recorder.features.simple": "シンプルな macOS 体験",
    "recorder.features.simpleBody": "余計な複雑さを省き、録画に集中できるすっきりとしたインターフェース。",
    "recorder.editions.kicker": "03 / Free + PRO",
    "recorder.editions.title": "手軽に始めて、必要に応じて広げる。",
    "recorder.free.quality": "標準画質で録画",
    "recorder.free.format": "MP4 出力",
    "recorder.free.fps": "30 fps",
    "recorder.free.watermark": "Thy Recorder のウォーターマーク",
    "recorder.free.duration": "1 回あたり最長 1 時間の録画",
    "recorder.pro.quality": "オリジナル画質で録画",
    "recorder.pro.format": "MOV 出力",
    "recorder.pro.fps": "最大 60 fps（録画モードによる）",
    "recorder.pro.watermark": "ウォーターマークの削除とカスタマイズ",
    "recorder.pro.duration": "Free 版の録画時間制限なし",
    "recorder.editions.note": "スタンドアロン版のリリースに向けて、PRO ライセンスと購入機能を準備しています。",
    "recorder.access.kicker": "04 / リリース",
    "recorder.access.title": "あなたの Mac に届くまで、もう少し。",
    "recorder.access.note": "Thy Recorder は現在 Beta 段階です。一般向けダウンロードと PRO の購入はまだご利用いただけません。",
    "recorder.access.download": "macOS 版をダウンロード",
    "recorder.access.upgrade": "PRO にアップグレード",
    "recorder.access.soon": "近日公開",
    "recorder.back": "← ホームに戻る",
    "recorder.contact": "開発者に連絡",
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

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const value = dictionary[element.dataset.i18nContent];
    if (value) element.setAttribute("content", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAlt];
    if (value) element.setAttribute("alt", value);
  });

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    ogLocale.content = { en: "en_US", zh: "zh_CN", ja: "ja_JP" }[language] || "en_US";
  }

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

// Track the real navigation height, including language changes and mobile wrapping.
// This only sizes the opening section; scrolling remains entirely browser-native.
const editorialMasthead = document.querySelector(".editorial-page .masthead");
if (editorialMasthead) {
  const updateMastheadHeight = () => {
    document.documentElement.style.setProperty(
      "--masthead-height", `${editorialMasthead.getBoundingClientRect().height}px`,
    );
  };
  updateMastheadHeight();
  new ResizeObserver(updateMastheadHeight).observe(editorialMasthead);
}

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
