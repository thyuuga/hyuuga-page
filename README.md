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
| [mio/about/](mio/about/) | Mio 介绍页，使用根目录 `style.css` 与本目录 `warm-night.css` |
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

## 修改后的检查

```sh
node --check script.js
git diff --check
```

第一条需要 Node.js，仅检查语法。仓库目前没有自动化测试套件；视觉修改需通过本地浏览器验证：

- 中英日切换、刷新后语言保留、连续切换，以及减少动态效果模式。
- 1920×1080、1440×900、1366×768、390×844 下的换行、溢出和可读性。
- 原生滚动、动画反向恢复、导航和联系链接；修改共享文件时检查相关子页面。

## 提交与发布

这是静态站点，部署时应将仓库中的网页及资源目录作为站点根目录提供服务，并支持目录下的 `index.html`。无需构建产物。

Git 远端为 `https://github.com/thyuuga/hyuuga-page.git`。`git commit` 只记录本地版本，`git push` 才上传远端。仓库目前未包含部署脚本或 CI 配置，也未记录实际托管平台；推送是否自动发布，应以托管平台的配置与部署记录为准。

发布后检查线上首页、`/mio/about/` 和修改涉及的产品页。若样式或 Favicon 仍是旧版本，先排查浏览器及托管平台的缓存。
