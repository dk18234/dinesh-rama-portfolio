# Verification

Run `npm ci`, `npm run verify`, `npm run build`, `npm run build:pages`, and `npm run verify:dist`.

The checks validate six unique complete project entries, required source/demo links, the scheduler and portfolio repository mapping, base-aware project/monogram assets, a résumé-request link, and generated script/style paths for root and GitHub Pages hosting. GitHub Actions also checks that the committed Pages output matches the current source.

Browser review covers the six-card grid, both new detail dialogs and their links, category filters, the résumé-request link, mobile navigation, and keyboard dialog behavior. Record observed hosted results after publication; these checks are not a formal accessibility audit or browser certification.

The supplied layout and styling are retained. Unknown non-project personal fields remain as placeholders where no facts were supplied. All six project cards are populated.
