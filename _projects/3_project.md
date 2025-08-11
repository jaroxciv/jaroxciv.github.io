---
layout: page
title: Isolysis — Isochrone Analysis & Spatial Access
description: Modular Python package for multi-center, multi-distance isochrone analysis with POI coverage, intersection metrics, and interactive web interface.
img: assets/img/proj3/iso_cover.png
importance: 1
category: work
related_publications: false
---

<div class="mb-3">
    <a class="btn btn-success" href="https://github.com/jaroxciv/isolysis" target="_blank">
        <i class="fab fa-github"></i> View Project on GitHub
    </a>
</div>

**🗺️ Isolysis** is a modular, production-grade Python package for calculating and analysing **isochrones** — the reachable area from a point within a given travel time.  
It combines **multi-center, multi-distance analysis** with **interactive mapping** and **comprehensive spatial statistics**.

---

## ✨ Key Features

### 🧮 Core Analysis
- **Multi-center isochrones:** Multiple origins, each with custom travel times.
- **Time banding:** Automatic bands (e.g., equally spaced (1-5)).
- **POI coverage analysis:** Count points of interest within each band.
- **Intersection analysis:** Identify overlaps between service areas.
- **Out-of-band detection:** Find POIs not covered by any isochrone.

### 🧭 Multiple Routing Providers
- **OSMnx** – free, global coverage (drive/walk/bike)
- **Mapbox** – high-performance routing with real traffic data
- **Iso4App** – detailed European coverage, multiple modes

### 🖥️ Interfaces
- **Interactive Web App:** Streamlit-based, click-to-add centers, real-time visualisation, spatial analysis dashboard.
- **⚡ REST API:** FastAPI backend for programmatic access, GeoJSON/statistics outputs.

### ⚙️ Technical Highlights
- Python 3.12+, Pydantic, async processing
- Scientific colormaps via Matplotlib
- Caching and efficient spatial operations
- Comprehensive pytest test suite

---

## 🖼️ Gallery

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj3/esa.png" title="El Salvador - 30-min" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj3/lon.png" title="London - 15-min" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj3/sgp.png" title="Singapore - 15-min" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  🌐 Example isochrones for different cities and modes, computed and visualised with isolysis.<br>
    <b>Left:</b> Example Streamlit App with POIs in ESA.<br>
    <b>Middle:</b> City of London.<br>
    <b>Right:</b> Singapore.
</div>

---

## 🔗 [GitHub Repo](https://github.com/jaroxciv/isolysis)