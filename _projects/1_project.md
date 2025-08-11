---
layout: page
title: SQL Agent – LLM-Powered Natural Language SQL for PostgreSQL
description: Chat with your database using advanced AI. Modular, production-ready LangGraph & Streamlit app for natural language querying of the Chinook database.
img: assets/img/proj1/robot.png
importance: 1
category: work
related_publications: false
---

<div class="mb-3">
    <a class="btn btn-primary" href="https://github.com/jaroxciv/sql-agent" target="_blank">
        <i class="fab fa-github"></i> View Project on GitHub
    </a>
</div>

## Overview

This project demonstrates a **production-grade, fully modular LLM-based SQL Agent** for natural language question answering over a real relational database.

**Key features:**

- Ask business questions in natural language — get real SQL queries and concise, interpretable summaries.
- Powered by OpenAI or Mistral LLMs, running via [LangGraph](https://github.com/langchain-ai/langgraph) and [Streamlit](https://streamlit.io/).
- **Database:** Uses the [Chinook](https://github.com/lerocha/chinook-database) demo database in PostgreSQL, with full schema introspection and human-readable notes on table relationships.
- Provides business insights, analysis summaries, and automatically interprets the SQL output for non-technical users.

## Demo

<div class="row mb-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1/sql-agent-question.jpeg" title="Ask in plain English" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1/sql-agent-generated-code.jpeg" title="Get SQL + summary" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1/sql-agent-summary.jpeg" title="Business-friendly answers" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <b>Left:</b> Ask questions in natural language.<br>
    <b>Middle:</b> View the generated SQL and summary.<br>
    <b>Right:</b> Business users get direct insights.
</div>

## Example Use Cases

- **Who was the top sales agent by total invoice sales in 2023?**
- **Which playlist contains the highest number of tracks, and how many does it have?**
- **List all customers from Brazil, including their full names and total amount spent.**

<div class="mt-4 mb-3">
    <a class="btn btn-success" href="https://github.com/jaroxciv/sql-agent" target="_blank">
        <i class="fab fa-github"></i> Try it or read the code on GitHub!
    </a>
</div>

---

## Technical Stack

- **LangGraph**: stateful multi-node workflow orchestration
- **PostgreSQL**: for both demo data (Chinook) and LLM memory/persistence
- **Streamlit**: live, interactive frontend
- **SQLAlchemy**: schema and data introspection
- **Pydantic**: strict models for schema/inputs
- **Modern LLMs**: Mistral, OpenAI, or plug your own
- **Docker**: local development, with easy launch of database and pgAdmin

---

## 🔗 [GitHub Repo](https://github.com/jaroxciv/sql-agent)

- Full install and Docker setup instructions in the README.

---

## Why it matters

This project bridges the gap between technical and business users by making relational data accessible with _no code required_. The modular codebase is ideal for extension, deployment, and research.

---

Feel free to [contact me](mailto:javi.alfaro94@gmail.com) for questions or collaboration!
