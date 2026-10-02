# Rendry — public site

Landing page, privacy policy, and issue tracker for [Rendry](https://rendry.app) — the full-page screenshot Chrome extension.

- **Website:** [rendry.app](https://rendry.app)
- **Report a bug:** [Issues](https://github.com/mamaownedus/rendry-site/issues)
- **Ask a question:** [Discussions](https://github.com/mamaownedus/rendry-site/discussions)
- **Chrome Web Store:** [Install Rendry](https://chromewebstore.google.com/detail/rendry/naobjfpheeabjhmmjhoabikmejgnfejn)

The extension source is currently private.

## Structure

```
.
├── index.html          # Landing page
├── privacy.html        # Privacy policy
├── refunds.html        # Refund policy (Rendry Pro)
├── changelog.html      # Release history
├── press-kit.html      # For press & bloggers
├── 404.html
├── styles.css          # Hand-written CSS, no build step
├── assets/
│   ├── icons/          # Extension icons (16, 24, 32, 48, 128)
│   └── screenshots/    # Web Store screenshots
└── .github/
    ├── ISSUE_TEMPLATE/
    └── workflows/
```

No build step. Static files are served by the Cloudflare Worker `rendry-site`,
configured in `wrangler.jsonc`. Its custom domains are `rendry.app` and
`www.rendry.app`.

## Verify and release

Run `node --test tests/*.test.mjs` and `git diff --check` before release. Check the
homepage, changelog, edited guides, and press-kit downloads on desktop and mobile.

Workers Builds watches `main` in this repository and runs `npx wrangler deploy`
after a merge. Other branches run `npx wrangler versions upload`, which prepares
a version without changing production traffic. These settings were checked in
Cloudflare on 2026-09-30. A successful PR build is not a production deployment.

Merge only after the corresponding extension version is live in the Chrome Web
Store and production publication has been authorized. After the build succeeds,
verify the live homepage version, changelog, guides, install links, and downloads.

`.assetsignore` excludes development files and video source material from the
public upload. The rendered hero media and public Markdown copies remain assets.

## License

Site content © MamaOwned LLC. Code under MIT (see [LICENSE](LICENSE)).
