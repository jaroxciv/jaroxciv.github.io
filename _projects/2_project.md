---
layout: page
title: Geospatial Building Growth Analysis
description: Urban growth mapping using Google Open Buildings and H3 hex grids.
img: assets/img/proj2/buildings.png
importance: 1
category: work
related_publications: false
---

<div class="mb-3">
    <a class="btn btn-primary" href="https://github.com/jaroxciv/building-growth" target="_blank">
        <i class="fab fa-github"></i> View Project on GitHub
    </a>
</div>

🛰️ **Geospatial Building Growth Analysis**

A modular pipeline for extracting, analyzing, and visualizing urban growth patterns from satellite data.  
Focus: **Metropolitan Area of San Salvador (AMSS), El Salvador**.

## 🚀 What does it do?
- Maps year-on-year **building growth** (counts, area, and height) using the Google Open Buildings Temporal Dataset.
- Uses **H3 hexagonal grids** for high-res spatial analysis (~100m).
- Fully automated workflow: feature extraction, growth computation, and mapping.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/proj2/building-counts.png" title="Building Counts by H3 Hex (2023)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/proj2/building-heights.png" title="Mean Building Heights (2023)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/proj2/animated-growth.gif" title="Animated Growth (2016–2023)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
    <b>Left:</b> Building counts per H3 hex (2023).<br>
    <b>Middle:</b> Mean building heights across the city (2023).<br>
    <b>Right:</b> Animated top 1% growth cells from 2016 to 2023.
</div>

## 🔍 Key Features

- **Automated H3 grid generation** over any AOI.
- **Batch feature extraction** from Earth Engine (building count, area, height).
- **Year-on-year growth metrics** per municipality and hex cell.
- **Customizable workflow**: skip/re-run any step, override config via CLI.
- **High-res maps and animations** for easy visualization.

## 💡 How does it work?

The workflow consists of modular Python scripts:
- AOI and grid setup
- Feature extraction via Google Earth Engine
- Growth computation
- Visualization (static and animated)

All driven by a **master script** for reproducibility.

## 📊 Outputs

- Geopackages of extracted features and growth metrics
- Publication-ready plots and GIFs
- Easily extendable to any region covered by Open Buildings

## 🛠️ Technologies

- Python (geopandas, h3, matplotlib, etc.)
- Google Earth Engine API
- H3 hexagonal indexing
- Streamlined CLI & config for full control

## 🔗 [GitHub Repo](https://github.com/jaroxciv/building-growth)

Project lead: Javier Alfaro

*Made with ❤️ for open urban analytics.*

