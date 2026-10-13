---
layout: page
title: Gentrification from the Sky
description: Measuring urban change in London from open satellite imagery with deep-learning change detection.
img: assets/img/proj7/score-map.jpg
importance: 0.5
category: work
related_publications: true
---

<div class="mb-3">
    <a class="btn btn-success" href="https://github.com/jaroxciv/Gentrification-from-the-Sky" target="_blank">
        <i class="fab fa-github"></i> View Project on GitHub
    </a>
</div>

**🛰️ Gentrification from the Sky** detects the _physical_ signatures of gentrification (building density, rooftop materials, green space) directly from open **Sentinel-2** imagery, and shows they improve gentrification prediction across **4,085 London neighbourhoods** by up to **8 percentage points**, reaching a balanced accuracy of **~77%** {% cite alfaro2025gent4sky %}.

Prize-winning LSE MSc dissertation (CDRC Master Dissertation Scheme 2024), published as a Springer book chapter and presented at CUPUM 2025.

---

## ❓ Problem

Gentrification is usually measured with census data, which is costly, slow, and spatially coarse: neighbourhood change shows up years after it happens. Satellites see the city every few days, and many of the physical changes that come with gentrification are visible from above.

---

## 🧩 How It Works

<div class="only-light">{% include figure.liquid path="assets/img/proj7/architecture-light.svg" zoomable=true title="Pipeline" class="img-fluid" %}</div>
<div class="only-dark">{% include figure.liquid path="assets/img/proj7/architecture-dark.svg" zoomable=true title="Pipeline" class="img-fluid" %}</div>

- **X, satellite imagery:** Sentinel-2 composites for 2016 and 2021 (11 bands at 10 m), passed through deep-learning **change detection**, then aggregated per neighbourhood.
- **Y, census:** a gentrification score from the 2011 and 2021 censuses and the Index of Multiple Deprivation, binarized over disadvantaged neighbourhoods.
- **Prediction:** classifiers with and without the satellite features, so the gain from imagery is measured against a census-only baseline.

<div class="row justify-content-center">
  <div class="col-md-8">
    {% include figure.liquid path="assets/img/proj7/change-detection.jpg" zoomable=true title="Change detection" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Deep feature extraction for change detection: a Siamese encoder compares the two dates at low and high feature levels, and a decoder maps where the city changed. Six architectures were compared, from simple differencing to TinyCD.
</div>

---

## 📊 Results

<figure class="booktabs">
  <figcaption><b>Table 1.</b> Predicting gentrification with satellite features: XGBoost is best on every metric.</figcaption>
  <div class="scroll">
    <table>
      <thead>
        <tr><th>Model</th><th class="num">Balanced accuracy</th><th class="num">F1</th><th class="num">ROC-AUC</th></tr>
      </thead>
      <tbody>
        <tr><td>Logistic Regression</td><td class="num">0.743 ± 0.051</td><td class="num">0.742 ± 0.050</td><td class="num">0.806 ± 0.047</td></tr>
        <tr><td>Linear SVC</td><td class="num">0.743 ± 0.050</td><td class="num">0.740 ± 0.048</td><td class="num">0.810 ± 0.046</td></tr>
        <tr class="ours"><td><b>XGBoost</b></td><td class="num"><b>0.767 ± 0.049</b></td><td class="num"><b>0.766 ± 0.049</b></td><td class="num"><b>0.841 ± 0.043</b></td></tr>
      </tbody>
    </table>
  </div>
  <p class="booktabs-note">Mean ± variation over 3 × 10-fold repeated stratified cross-validation, 4,085 London LSOAs.</p>
</figure>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj7/score-map.png" zoomable=true title="London gentrification score" class="img-fluid rounded on-paper" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj7/accuracy.jpg" zoomable=true title="Baseline vs. satellite features" class="img-fluid rounded on-paper" %}
  </div>
</div>

<div class="caption">
  <b>Left:</b> census gentrification score, 2011–2021. <b>Right:</b> adding satellite features lifts balanced accuracy for every model, from 0.68–0.69 to 0.74–0.77.
</div>

---

## 🗺️ Spatial Patterns

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj7/predictions.jpg" zoomable=true title="Predictions" class="img-fluid rounded on-paper" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj7/conservation.png" zoomable=true title="Conservation areas" class="img-fluid rounded on-paper" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj7/policy.png" zoomable=true title="Policy layers" class="img-fluid rounded on-paper" %}
  </div>
</div>

<div class="caption">
  <b>Left:</b> where predictions succeeded or fell short across London. <b>Middle:</b> validation in Tower Hamlets — detected change against conservation areas, which are protected and should change little. <b>Right:</b> detected change within planning-policy layers, potential drivers of gentrification.
</div>
