# Rendry — public site

Landing page, privacy policy, and issue tracker for [Rendry](https://rendry.app) — the full-page screenshot Chrome extension.

- **Website:** [rendry.app](https://rendry.app)
- **Report a bug:** [Issues](https://github.com/mamaownedus/rendry-site/issues)
- **Ask a question:** [Discussions](https://github.com/mamaownedus/rendry-site/discussions)
- **Chrome Web Store:** _(coming soon)_

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

No build step. Static files served directly by Cloudflare Pages.

## License

Site content © MamaOwned LLC. Code under MIT (see [LICENSE](LICENSE)).
