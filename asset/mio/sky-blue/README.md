# Mio 天空蓝素材

原始 PNG 保留在上一级 `asset/mio/`；本目录是网页使用的 WebP，不覆盖原图。

| WebP | 原始 PNG（上一级目录） | 尺寸 | PNG 大小 | WebP 大小 | 使用位置 |
| --- | --- | --- | --- | --- | --- |
| [hero-sky-composite.webp](hero-sky-composite.webp) | `mio_background_sky_orbit.png` | 1672×941 | 1574.9 KiB | 62.5 KiB | 桌面 Hero 完整背景；≤900px 不加载此图 |
| [character-sky.webp](character-sky.webp) | `mio_background_spring_sky.png` | 1672×941 | 1488.3 KiB | 48.6 KiB | 立绘区背景；≤900px 的 Hero 底层 |
| [access-skyline.webp](access-skyline.webp) | `mio_background_spring_waterfront.png` | 1672×941 | 1655.4 KiB | 78.9 KiB | Access 背景，城市与栏杆位于底部 |
| [sky-orb.webp](sky-orb.webp) | `mio_decoration_sky_orbit.png` | 1254×1254 | 1317.6 KiB | 283.7 KiB | ≤900px 的 Hero 独立圆环；桌面不显示 |
| [sakura-branch.webp](sakura-branch.webp) | `mio_decoration_cherry_branch.png` | 1448×1086 | 934.9 KiB | 329.7 KiB | 本版未使用：三个主背景已含花枝，避免重复堆叠 |
| [petals-sparkles.webp](petals-sparkles.webp) | `mio_decoration_petals_glow.png` | 1448×1086 | 1279.3 KiB | 306.2 KiB | 本版未使用：约 92% 像素为半透明，合成时带有较大面积雾层 |

## 转换与透明度验证

- 使用临时安装的 Pillow 13.0.0 转换：`image.save(output, format="WEBP", quality=86, method=6, exact=True)`。未加入项目依赖。
- 保留原始尺寸。前三张是 RGB；后三张是 RGBA，alpha 范围均为 0–255。
- 将 WebP 重新解码后，与 PNG 的 alpha 通道逐像素比较，三张均完全一致。没有抠除白色像素或改变高光。
- 已将三张装饰合成到 `#DCEEF7` 上检查：圆环可用；花枝保留备用；柔光有较大面积雾状覆盖，不放到人物或正文上。
- 六张总计从 8.06 MiB 减至 1.08 MiB。页面只引用四张，其中 Hero 通过媒体查询选择组合。

## 布局约定

- 桌面 Hero 背景按高度等比缩放、右对齐，保留完整圆环。≤900px 使用无圆环背景和独立圆环；不叠加旧 `sky-window.svg`。
- 背景容器 `.section-art` 独立裁切、渐变和分层，`aria-hidden`、空 `alt`、`pointer-events: none`，不影响正文、按钮或立绘透明度。
- Access 下方留出城市与栏杆的位置，内容高度可以自然增加。
- 装饰保持静态；六种表情和眨眼、呼吸仍使用原来的正式立绘。

## 验证范围

已完成图片解码、透明通道一致性、资源路径、结构、原有链接与三语言键检查，并运行现有自动化测试。

**静态检查／自动化测试已完成，实际视觉验收未完成。** 当前浏览器连接报告 `Sky Computer Use native pipe startup failed`，没有可用的浏览器或原生应用会话。尚未确认 1440px、768px、390px 和窄屏的实际渲染，也没有页面截图。

源代码中未发现旧主题滤镜、常态人物低透明度或包住标题的裁切容器。原有 reveal 可在视口边缘停留于半透明状态，本轮将进入范围从 20% 视口高度缩短为 10%，内容进入视口顶部 88% 以内即可完全显示；离开渐隐也收窄到顶部边缘。此为已验证的代码行为，不能替代对用户截图中发白或裁切原因的实际浏览器确认。
