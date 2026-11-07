# thyuuga.com

thyuuga 的个人网站，展示独立开发的产品、Mio 与个人介绍。支持中文、英语、日语。

使用原生 HTML、CSS、JavaScript，无需安装项目依赖或执行构建。

## 本地预览

在仓库根目录运行（需要 Python 3）：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

打开 <http://127.0.0.1:8000/>，按 `Ctrl+C` 停止服务。请通过 HTTP 预览，不要直接双击 HTML：页面使用了以 `/` 开头的资源路径。

## 文件位置

| 文件 / 目录 | 用途 |
| --- | --- |
| [index.html](index.html) | 首页结构与默认英文文案 |
| [home-v2.css](home-v2.css) | 首页样式、响应式布局、纸片样式与滚动动画；部分产品页也复用它 |
| [script.js](script.js) | 三语言字典、语言切换及页面交互；各页面共用 |
| [cursors.css](cursors.css) | 自定义鼠标指针 |
| [mio/about/](mio/about/) | Mio 介绍页，独立使用本目录 `sky-blue.css`（暖白／天空蓝） |
| [software/](software/) | Thy Recorder、Private Zone、Memo Pad 介绍页及各自样式 |
| [asset/](asset/) | 图片、Logo、Favicon、指针、纸张纹理与字体资源 |

## 修改文案与字体

`script.js` 中的 `translations` 按 `en`、`zh`、`ja` 管理文案，HTML 通过 `data-i18n` 对应字典键。修改时同步维护三种语言；英文还需同步更新 HTML 默认内容，保证 JavaScript 不可用时仍能阅读。元信息和图片替代文字分别使用 `data-i18n-content`、`data-i18n-alt`。

语言偏好保存在 `localStorage` 的 `language` 中；没有偏好时默认英语。

关于区域的自我介绍纸片使用 Noto Serif SC / JP，英文复用 Newsreader；当前字重为 500，保留 400 的样式和资源供对比。中日文字体是**仅覆盖四段介绍的本地子集**，并非完整字库。修改这部分文案时：

1. 对照 [subsets.json](asset/fonts/about-note/subsets.json) 的 `characters` 检查新增字符。
2. 如有新增字符，按其中记录的字体来源重新生成对应语言的 400 / 500 子集，并更新字符清单与来源 URL。
3. 保持文件格式、实际字重与 `home-v2.css` 中的 `@font-face` 一致，保留字体许可证；在浏览器中检查是否出现字体回退。

Inter 和 Newsreader 由页面中的 Google Fonts 样式表加载；网络不可用时使用 CSS 中配置的后备字体。

## 动画维护

- **首页滚动渐显**：位于 `home-v2.css`，通过 `animation-timeline: view()` 与滚动位置绑定，可反向恢复。使用 `@supports` 渐进增强，不支持时内容直接显示。保留原生滚动。
- **首页语言转场**：`script.js` 的 `switchLanguage` 控制切换；`home-v2.css` 的 `.localized-copy` 控制文字透明度。先淡出 120ms，在 140ms 时换文案，再淡入 180ms；连续点击以最后一次为准。内层文字与原有滚动动画相互独立。
- 两种效果均响应 `prefers-reduced-motion`。初次加载语言不播放转场。

Mio 介绍页的六种表情由 `mio/about/expressions.mjs` 管理，使用 `asset/mio_illustration_live_{表情}_{open|closed}.png` 成对素材。`blink.mjs` 参考 PJMIO 的眨眼时序（间隔 3–6.5 秒、闭眼 85–125ms、偶尔连眨），睁闭眼瞬时互斥显示；`sky-blue.css` 为两帧提供共用的轻微呼吸动画。离开视口、页面隐藏、切换表情或开启减少动态效果时暂停；图片加载失败或尺寸不匹配时保留可用的睁眼图。更换素材时应保持每对图片尺寸、人物位置及透明边缘一致。

Mio 介绍页的背景资源位于 [`asset/mio/sky-blue/`](asset/mio/sky-blue/README.md)，保留上一级原始 PNG 并使用 WebP。桌面 Hero 使用完整天空圆环背景，≤900px 改为无圆环底图和独立圆环，旧 `sky-window.svg` 不再引用。背景保持静态，仅背景容器拥有渐变和裁切，不影响人物与正文。页面不加载共享的深色 `style.css`。`script.js` 继续按滚动位置计算内容边界，在视口边缘的 10% 高度内淡入淡出，主要阅读区域保持完整显示。房间缩略图支持悬停、聚焦、点击，手机端可在组件内横向滚动。

立绘构图由 `mio/about/framing.mjs` 根据实测人物边界计算，让六种表情共享人物高度、水平中心和脚底基准；窗口变化时重新适配，睁闭眼共用同一定位。更换图片后需同步复核该文件的边界数据，不能仅按整张图片尺寸缩放。 当前互动模式的表情演示通过 `.expression-viewport` 与 `.expression-composition` 在这套定位之外统一放大并裁切下方：桌面 1.65 倍，≤800px 为 1.5 倍。不要对单个表情加偏移，也不要改动 `.expression-motion` 的呼吸 transform；原图和底层全身构图仍保留。

Mio 展示区宽度使用 `clamp(1280px, 90vw, 1680px)`，左右至少留 24px（最窄屏 18px），正文独立限制行宽。按 CSS 计算，1440px 视口下展示区为 1296px，1920px 下为 1680px；这是布局规则推算，非浏览器实测。02 房间主视觉通栏，默认使用 `asset/mio/mio-room-daylight.png` 与左侧渐变阅读区；文字与模式按钮沿用统一内容边距。两种模式直接定位于同一个 `.room-scene-stage` 全宽块，不再通过模式 Grid 或内层 gallery 推导场景宽度；文字与缩略图使用各自的居中内容宽度。两种模式共用通栏场景尺寸：桌面以原图比例展开、超宽屏限制高度，≤900px 说明移到图片上方，≤700px 共用 3:2 场景与 60% 水平焦点。切换至「时间的流转」后，`#atmosphere-main-image` 使用 `cover` 铺满同一场景，八个缩略图叠放在底部局部半透明条中，窄屏可横向滚动。默认与动态场景使用同一套上下边缘渐变：桌面各 24–48px，手机各 12–18px，主体画面不叠加遮罩；缩略图不参与柔化。新图解码成功后只淡出上层旧图（240ms），下层主图始终不透明；加载失败保留当前场景，减少动态效果时直接切换。产品预览在 ≥1200px 时四列、平板两列、手机单列，点击截图可在新标签页查看当前语言的原图。

03 人物区的天空花朵层直接属于 section，背景通栏，文字和人物仍在居中内容容器内。小屏背景使用底部完整花朵图与天空渐变，避免将横图拉成竖幅。人物区默认使用 `asset/mio/mio-character-transparent.png`，保留完整手部并仅柔化底部裙摆边缘；切换至「看看表情」后，同一背景中的 `.expression-demo` 显示原来的 `.expression-stage`、六组睁闭眼素材和控制按钮。宣传图使用 `.room-feature-image` / `.presence-promo-image`，不要添加旧演示的 ID、`data-atmosphere-src` 或 `data-expression-src`，也不要把新人物放进 `.expression-sprite` / `.expression-motion`。原有场景、表情、眨眼时序和定位逻辑不变。`mio/about/modes.mjs` 只管理模式状态：使用 ARIA tabs、方向键 / Home / End、`hidden` 与 `inert`；隐藏互动模式时暂停房间轮播和立绘眨眼、呼吸，再次显示保留所选场景与表情。房间两种模式在各断点共用相同高度，只有图片层参与 Crossfade；人物模式淡入遵循减少动态效果设置。

首页「探索作品」的 `#work` 锚点位于 Mio 区块顶边。`home-v2.css` 使用同一个 `--anchor-clearance` 变量，让 Mio 锚点的负 `scroll-margin-top` 抵消全局 `scroll-padding-top`，使深绿色背景与视口顶部对齐；其他锚点保留原有间距。导航栏处于正常文档流中，无需额外扣除导航高度。

## 修改后的检查

```sh
node --check script.js
node --test tests/*.test.mjs
git diff --check
```

前两条需要 Node.js，分别检查共享脚本语法和 Mio 的眨眼时序、表情切换、暂停清理、加载失败回退、滚动可逆性、房间快速切换、模式键盘操作、隐藏模式暂停恢复及三语言资源。Mio 页面 CSS 链接的 `v` 参数为 `sky-blue.css` 的 SHA-256 前 12 位；修改样式后同步更新，避免新 HTML 混用浏览器缓存的旧 CSS（测试会检查版本一致性）。视觉修改仍需通过本地浏览器验证：

- 中英日切换、刷新后语言保留、连续切换，以及减少动态效果模式。
- Mio 房间和人物区默认只显示一套主视觉；检查两种模式、方向键切换、全部场景与六种表情，以及来回切换后状态保留。
- 1920×1080、1440×900、1366×768、390×844 下的换行、溢出和可读性。
- 原生滚动、动画反向恢复、导航和联系链接；修改共享文件时检查相关子页面。
- 调整滚动相关 CSS 后，同时验证点击「探索作品」和直接访问 `/#work`，确认滚动结束后 Mio 顶边贴齐视口顶部，没有米白缝隙或超滚动。

## 提交与发布

这是静态站点，部署时应将仓库中的网页及资源目录作为站点根目录提供服务，并支持目录下的 `index.html`。无需构建产物。

Git 远端为 `https://github.com/thyuuga/hyuuga-page.git`。`git commit` 只记录本地版本，`git push` 才上传远端。仓库目前未包含部署脚本或 CI 配置，也未记录实际托管平台；推送是否自动发布，应以托管平台的配置与部署记录为准。

发布后检查线上首页、`/mio/about/` 和修改涉及的产品页。若样式或 Favicon 仍是旧版本，先排查浏览器及托管平台的缓存。
