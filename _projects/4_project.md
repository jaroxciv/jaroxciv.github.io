---
layout: page
title: Agora — Self-Organization in Agent Populations
description: From designed coordination to emergent organization.
img: assets/img/proj4/organization.jpg
importance: 0
category: work
related_publications: false
---

**🏛️ Agora** asks: _how does decentralized resource allocation shape organization in multi-agent systems?_
Instead of designing roles, workflows, and routing up front, Agora lets organization **emerge** from an economy: agents pay to work, earn by improvement, and wealth favors future activity.

Research project from the **MIT–NEU–UF Summer Camp 2026**.

---

## ❓ Problem

Multi-agent LLM systems coordinate well, but their organization is designed externally: fixed roles, central routing, centrally governed resources. Organization is an **input**, not an **outcome** — each fixed piece can become a bottleneck or a single point of failure, wasting effort and losing what works.

Prior work covers pieces of this: adaptive search allocates compute but stays globally controlled; self-evolving MAS evolve roles but treat compute and survival as exogenous; agent economies coordinate via markets but do not couple scarcity, verification, and knowledge. Agora couples all three.

---

## 🌱 How It Works

Many agents search at once · one official grader decides what is better · an economy decides who keeps working · what they learn is shared.

<!-- height follows the figure's body, which reflows with width and font loading; until then (or with no same-origin access) one screen, which the figure is drawn to fit -->
<iframe src="{{ '/assets/html/agora-market-loop.html' | relative_url }}" title="Agora market loop, animated" loading="lazy" style="width: 100%; height: 100vh; border: 0" onload="const d = this.contentDocument; if (!d) return; this.resizer?.disconnect(); this.resizer = new ResizeObserver(() => (this.style.height = d.body.scrollHeight + 'px')); this.resizer.observe(d.body)"></iframe>

<div class="caption">
  An illustrative run: identical agents with no roles submit to the grader, pay rent, earn credit along lineage, die or reproduce, and publish to a shared culture until they differentiate. <b>Credit</b> is the framework's settlement; <b>culture</b> is its public shared state.
</div>

<details markdown="1">
<summary><strong>🧩 Framework — the full architecture</strong></summary>

{% include figure.liquid path="assets/img/proj4/framework.jpg" zoomable=true title="Agora framework" class="img-fluid rounded z-depth-1" %}

<div class="caption">
  Four planes. <b>Discovery:</b> agents edit and test program versions on their own, for free. <b>Truth:</b> one sealed grader scores submissions; improvements replace the best version, the rest become evidence. <b>Economy:</b> live agents pay rent, richer agents get more turns, and each gain is split across its contributors; an agent dies when its wealth runs out. <b>Shared state:</b> work, artifacts, skills, and evidence persist in public with causal provenance.
</div>

</details>

<details markdown="1">
<summary><strong>💰 Economic selection — the equations</strong></summary>

A closed loop: scarce resources create costs, verified contributions create wealth, and wealth biases who receives future compute.

{% include figure.liquid path="assets/img/proj4/economic-selection.jpg" zoomable=true title="Economic selection" class="img-fluid rounded z-depth-1" %}

- **Rent** grows with resource use (model FLOPs, evaluations).
- **Wealth** = starting wealth + share of each verified gain − rent − investment in newborns. Gains are split by causal contribution.
- **Selection:** agents bid a fraction of their wealth; the next model slot goes to a wealth-weighted softmax draw.

</details>

<details markdown="1">
<summary><strong>🌱 How selection creates organization — static summary</strong></summary>

{% include figure.liquid path="assets/img/proj4/organization.jpg" zoomable=true title="How selection creates organization" class="img-fluid rounded z-depth-1" %}

<div class="caption">
  Discovery → Truth → Causal credit → Persistence → Emergence. Two feedback loops drive it: <b>economic</b> (success changes who searches next) and <b>cultural</b> (success changes what others can build on). Identical agents with no roles become differentiated behavior, artifact-reuse pathways, and persistent lineages.
</div>

</details>

---

## 📊 Results

<figure class="booktabs">
  <figcaption><b>Table 1.</b> Cross-domain frontier performance: Agora beats the target in four of five domains and ties AlphaEvolve in mathematics, for under $0.50 per task.</figcaption>
  <div class="scroll">
    <table>
      <thead>
        <tr><th>Task</th><th>Domain</th><th class="num">Baseline</th><th class="num">Target</th><th class="num">Agora</th><th class="num">Cost</th><th class="num">Grades</th></tr>
      </thead>
      <tbody>
        <tr><td>PID tuning</td><td>Robotics</td><td class="num">0.0366</td><td class="num">0.1632 <span class="ref">Gold</span></td><td class="num"><b>0.1639</b></td><td class="num">$0.43</td><td class="num">18</td></tr>
        <tr><td>MallocLab</td><td>Systems</td><td class="num">28.15</td><td class="num">84.06 <span class="ref">Gold</span></td><td class="num"><b>92.43</b></td><td class="num">$0.46</td><td class="num">9</td></tr>
        <tr><td>Circle packing</td><td>Mathematics</td><td class="num">0.9598</td><td class="num"><b>2.635977</b> <span class="ref">AlphaEvolve</span></td><td class="num"><b>2.635983</b></td><td class="num">$0.28</td><td class="num">12</td></tr>
        <tr><td>Single-cell modality</td><td>Biology</td><td class="num">0.5467</td><td class="num">0.7310 <span class="ref">Gold</span></td><td class="num"><b>0.7370</b></td><td class="num">$0.18</td><td class="num">30</td></tr>
        <tr><td>Holographic optics</td><td>Physics</td><td class="num">0.3927</td><td class="num">0.8265 <span class="ref">Gold</span></td><td class="num"><b>0.9878</b></td><td class="num">$0.45</td><td class="num">13</td></tr>
      </tbody>
    </table>
  </div>
  <p class="booktabs-note">One run per task. Target: the task's gold reference, or AlphaEvolve's published result for circle packing. Grades: official grader calls used.</p>
</figure>

<figure class="booktabs">
  <figcaption><b>Table 2.</b> Framework comparison on JobShop ABZ (5 instances): Agora reaches the highest score, fastest.</figcaption>
  <div class="scroll">
    <table>
      <thead>
        <tr><th>Framework</th><th class="num">Score ↑</th><th class="num">Grades</th><th class="num">To best</th><th class="num">Spend</th></tr>
      </thead>
      <tbody>
        <tr class="ours"><td><b>Agora</b></td><td class="num"><b>97.66</b></td><td class="num">10</td><td class="num"><b>4.8 min</b></td><td class="num">$0.48</td></tr>
        <tr><td>CORAL</td><td class="num">96.57</td><td class="num"><b>8</b></td><td class="num">6.6 min</td><td class="num">$0.57</td></tr>
        <tr><td>OpenEvolve</td><td class="num">94.83</td><td class="num">30</td><td class="num">8.2 min</td><td class="num">$0.31</td></tr>
        <tr><td>ShinkaEvolve</td><td class="num">94.31</td><td class="num">29</td><td class="num">22.8 min</td><td class="num"><b>$0.20</b></td></tr>
        <tr><td>AdaEvolve</td><td class="num">91.89</td><td class="num">30</td><td class="num">20.9 min</td><td class="num">$0.34</td></tr>
        <tr><td>EvoX</td><td class="num">90.47</td><td class="num">30</td><td class="num">58.1 min</td><td class="num">$0.28</td></tr>
      </tbody>
    </table>
  </div>
  <p class="booktabs-note">Same seed program (80.50), DeepSeek-Flash v4.1, $0.50 and 30 grades per framework, avg@3. Standard-library programs only, as the task requires. To best: start to the best grade.</p>
</figure>

<figure class="booktabs">
  <figcaption><b>Table 3.</b> Where does organization come from? Emergent is fastest, LLM-designed is budget-efficient, human-designed is balanced.</figcaption>
  <div class="scroll">
    <table>
      <thead>
        <tr><th>Organization</th><th class="num">Score ↑</th><th class="num">Grades</th><th class="num">To gold</th><th class="num">@5 min</th><th class="num">@10 min</th><th class="num">Spend</th><th class="num">Time</th></tr>
      </thead>
      <tbody>
        <tr class="ours"><td><b>Emergent (E)</b></td><td class="num"><b>0.9873</b></td><td class="num"><b>17</b></td><td class="num"><b>0.7 min</b></td><td class="num"><b>0.9818</b></td><td class="num"><b>0.9873</b></td><td class="num">$0.46</td><td class="num"><b>7.8 min</b></td></tr>
        <tr><td>Human-designed (H)</td><td class="num">0.9819</td><td class="num">30</td><td class="num">1.6 min</td><td class="num">0.9606</td><td class="num">0.9774</td><td class="num">$0.42</td><td class="num">26.6 min</td></tr>
        <tr><td>LLM-designed (L)</td><td class="num">0.9863</td><td class="num">24</td><td class="num">5.1 min</td><td class="num">0.4844</td><td class="num">0.8592</td><td class="num"><b>$0.29</b></td><td class="num">72.6 min</td></tr>
      </tbody>
    </table>
  </div>
  <p class="booktabs-note">Holographic optics (Frontier-Eng, physics): split a laser beam into six spots with set brightness and keep the rest dark; gold 0.8265. H: planner, reader, coder, analyst roles; L: roles the LLM writes for itself; E: no roles, selection decides. @5/@10 min: best score by then.</p>
</figure>

---

## 🔍 Findings

<div class="row align-items-center">
<div class="col-md-7" markdown="1">

Organization is an **outcome of search**, and its form differs across tasks:

- **Selective persistence:** useful knowledge can outlive the agent that created it.
- **Recombination:** winning lineages span multiple authors.
- **Culture:** successful lineages promote reuse.
- **Differentiation:** diverse search niches emerge from identical agents.

</div>
<div class="col-md-5">
<div class="org-forms">
<figure><svg viewBox="129 96 92 112" role="img" aria-label="Designed"><line x1="184.6" y1="143.3" x2="199.8" y2="130.6"/><line x1="184.6" y1="162.0" x2="202.3" y2="176.9"/><line x1="165.1" y1="162.0" x2="146.9" y2="176.9"/><line x1="174.9" y1="165.8" x2="174.6" y2="188.2"/><line x1="174.9" y1="139.5" x2="174.6" y2="116.0"/><line x1="165.1" y1="143.3" x2="146.9" y2="130.6"/><circle class="hub" cx="174.9" cy="152.6" r="13.8"/><circle class="node" cx="140.7" cy="124.8" r="8.9"/><circle class="node" cx="174.6" cy="107.7" r="8.9"/><circle class="node" cx="206.0" cy="124.8" r="8.9"/><circle class="node" cx="140.7" cy="182.8" r="8.9"/><circle class="node" cx="174.6" cy="196.5" r="8.9"/><circle class="node" cx="208.6" cy="182.8" r="8.9"/></svg><figcaption>Designed</figcaption></figure>
<figure><svg viewBox="304 96 92 112" role="img" aria-label="Self-organized"><line x1="360.3" y1="143.1" x2="375.5" y2="130.4"/><line x1="360.4" y1="161.7" x2="378.0" y2="176.7"/><line x1="340.8" y1="161.7" x2="322.6" y2="176.7"/><line x1="350.3" y1="163.6" x2="350.3" y2="186.1"/><line x1="350.3" y1="141.2" x2="350.3" y2="116.0"/><line x1="340.8" y1="143.1" x2="322.6" y2="130.4"/><circle class="node" cx="316.4" cy="124.5" r="8.9"/><circle class="node" cx="350.3" cy="107.7" r="8.9"/><circle class="node" cx="381.7" cy="124.5" r="8.9"/><circle class="node" cx="316.4" cy="182.5" r="8.9"/><circle class="node" cx="350.3" cy="194.4" r="8.9"/><circle class="node" cx="384.3" cy="182.5" r="8.9"/><rect class="hub" x="338.1" y="141.2" width="24.4" height="22.4"/></svg><figcaption>Self-organized</figcaption></figure>
<figure><svg viewBox="483 96 92 112" role="img" aria-label="Emergent"><line x1="507.3" y1="180.7" x2="520.4" y2="194.1"/><line x1="535.1" y1="146.3" x2="550.1" y2="134.6"/><line x1="535.1" y1="158.0" x2="550.1" y2="169.0"/><line x1="522.6" y1="158.0" x2="507.4" y2="169.0"/><line x1="528.9" y1="143.8" x2="528.6" y2="116.0"/><line x1="522.6" y1="146.3" x2="507.4" y2="134.6"/><circle class="node" cx="501.1" cy="128.7" r="8.9"/><circle class="node" cx="528.6" cy="107.7" r="8.9"/><circle class="node" cx="556.4" cy="128.7" r="8.9"/><circle class="node" cx="501.1" cy="174.8" r="8.9"/><circle class="node" cx="529.3" cy="194.1" r="8.9"/><circle class="node" cx="556.4" cy="174.8" r="8.9"/><circle class="node" cx="528.9" cy="152.1" r="8.9"/></svg><figcaption>Emergent</figcaption></figure>
</div>
</div>
</div>
