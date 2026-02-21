# Assets folder (SDE Assessment Kit)

Place assets from your **sde assessment kit** here so the app matches the provided screens.

## Fonts (Inter)

- Put Inter font files in **`fonts/Inter/`**, e.g.:
  - `Inter-Regular.woff2` / `Inter-Regular.woff`
  - `Inter-Medium.woff2` / `Inter-Medium.woff`
  - `Inter-SemiBold.woff2` / `Inter-SemiBold.woff`
  - `Inter-Bold.woff2` / `Inter-Bold.woff`
- To use these local files instead of Google Fonts, uncomment the `@font-face` block in `src/index.css` and (if needed) remove the Google Fonts `<link>` from `public/index.html`.

## Images

- Put the app logo and any other images in **`images/`**, e.g.:
  - `logo.png` – used on the login screen and dashboard header.

After adding files here, reference them in the app with paths like `/assets/images/logo.png` or `/assets/fonts/Inter/Inter-Regular.woff2`.
