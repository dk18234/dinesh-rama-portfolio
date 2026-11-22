# Verification

Run `npm ci`, `npm run verify`, `npm run build`, `npm run build:pages`, and `npm run verify:dist`.

The checks validate six unique complete project entries, required source/demo links, the scheduler and portfolio repository mapping, base-aware project/monogram assets, a résumé-request link, and generated script/style paths for root and GitHub Pages hosting. GitHub Actions also checks that the committed Pages output matches the current source.

Browser review covers the six-card grid, both new detail dialogs and their links, category filters, the résumé-request link, mobile navigation, and keyboard dialog behavior. Record observed hosted results after publication; these checks are not a formal accessibility audit or browser certification.

The supplied layout and styling are retained. Unknown non-project personal fields remain as placeholders where no facts were supplied. All six project cards are populated.

## Observed publication

[GitHub Actions run](https://github.com/dk18234/dinesh-rama-portfolio/actions/runs/44984798663) completed successfully for implementation commit `a36978957194226b22f026ba9c5a8b852a0a12b5`. Both root and subpath builds and six-project asset checks passed.

The live public portfolio was reviewed with six project cards, the Strata and portfolio detail dialogs, source/demo destinations, Escape, Tab/Shift+Tab focus containment, focus restoration, the category empty state, and mobile-menu navigation at a 390-pixel viewport. The public page uses a monogram and a résumé-request link. The existing managed website was updated separately with its current audience and supplied portrait/résumé retained.

Screenshot: `docs/assets/portfolio.jpg`. No formal accessibility certification or production usage metric is claimed.
