# elessar-site

Presentation website for [Elessar](https://github.com/Thibautdqb/elessar), the Python library for exploratory data analysis and statistical profiling.

The opening sequence keeps the assembled jewel on the right while the introduction scrolls. It then moves to the centre and opens into five perspectives. The pieces reunite in the footer.

The site includes the complete English guide, real report figures, a five-piece GLB and an image fallback. Fonts and visual dependencies are served locally.

## Local preview

Run `bash launch.sh`, or `python3 -m http.server 8000 --bind 127.0.0.1` from this directory, then open the printed address. Use an HTTP server to load the 3D model.

## GitHub Pages

This repository is a ready-to-publish static site. Configure GitHub Pages to deploy from the `main` branch and the repository root. Keep `index.html`, `guide.html`, `.nojekyll` and `assets/` together. No Node build is required.

## Content and notices

The complete English text is available in `guide.html` and `content-english.md`. Chart provenance is recorded in `assets/outputs/provenance.json`. Third-party engine, decoder and font notices are included in `assets/licenses/`.
