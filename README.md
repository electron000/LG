# LEGALMATE — Statutory Intelligence & Legal Precision Suite

**LEGALMATE** is an editorial Swiss-designed, AI-powered legal technology suite built for enterprise counsel, general partners, and corporate litigation teams. It provides autonomous research, document generation with real-time parchment preview, risk analysis with redline diff generation, and PACER-synchronized case docket tracking.

---

## ⚖️ Logo & Brand Identity
- **Emblem Logo**: Uses the Tech Justice Scales Emblem (`assets/logo.png` / `Tech Justice Scales Emblem.png`), featuring the integrated scales of justice and circuit geometric matrix.
- **Aesthetic**: Swiss International Style — high-contrast monochrome (`#171717` on `#FFFFFF` / `#fbf9f9`), 1px precision hairlines (`#E5E5E5`), functional red accents (`#ef4444`) for high-risk statutory exposure, `Inter` for clinical reading, and `JetBrains Mono` for statutory citations and hashes.

---

## 📂 Project Architecture

```
LEGALMATE/
│
├── index.html                   # Master unified SPA application (with instant hash routing: #dashboard, #assistant, #docgen, #docanalyzer, #cms)
│
├── dashboard.html               # Standalone Executive Legal Dashboard
├── ai-assistant.html            # Standalone AI Counsel Assistant & Precedent Engine
├── document-generator.html      # Standalone Document Generator with Live Parchment Preview
├── document-analyzer.html       # Standalone Document Risk Analyzer & Redline Comparator
├── case-management.html         # Standalone Case Management System & PACER Docket Registry
│
├── css/
│   └── legalmate.css            # Swiss Editorial Design System styles, parchment styling, diff tags, print CSS
│
├── js/
│   └── legalmate.js             # Client-side router, Omni-search (Ctrl+K), modals, toast alerts, PACER sync
│
├── assets/
│   ├── logo.png                 # Tech Justice Scales Emblem logo
│   └── avatar.png               # Senior Partner corporate headshot portrait
│
├── Tech Justice Scales Emblem.png
└── stitch_legalmate_ai_suite/   # Original Stitch prototype source files & DESIGN.md
```

---

## 🖥️ Screen & Module Overview

### 1. Executive Dashboard (`dashboard.html` / `#dashboard`)
- **Statutory Intelligence Banner**: "Intelligent Legal Precision" with autonomous research & drafting highlights.
- **Live Docket Pulse**: Real-time ticker showing active filings (e.g. *SEC vs. SolarTech Filing Added • Delaware Court of Chancery*).
- **Precision Workflows (4 Core Modules)**:
  - **AI Counsel**: Statutory queries & Supreme Court precedent synthesis.
  - **Doc Builder**: Standard commercial rental agreements with live parchment preview.
  - **Risk Review**: Automated OCR risk analysis, liability caps & redlines.
  - **Case Docket**: PACER-synchronized hearing calendars & active litigation.
- **Autonomous Audit Spotlight**: v4.8 legal LLM benchmark card with 98.4% clause detection speed.
- **Recent Drafting Stream**: Status badges (*Finalized*, *Under Review*, *Draft*), SHA-256 integrity signatures, and quick inspection.
- **Direct Directives**: Instant query launchers dispatching prompts directly into the AI Assistant.

### 2. AI Counsel Assistant (`ai-assistant.html` / `#assistant`)
- **Matter Context Pill**: *In re TechVentures Dispute • Supreme Court / High Court Bench*.
- **Collapsible Reasoning Strategy**: Step-by-step judicial logic (*"✦ Analyzed 14 precedents • Verified constitutional validity • 1.2s"*).
- **Statutory Analysis Breakdown**: Section 27 Indian Contract Act 1872 (*Categorical Restraint Proscription*, in-term vs post-termination doctrine, Article 19(1)(g)).
- **Verified Precedents Carousel & Dossier**:
  - *Niranjan Shankar Golikari v. Century Spg. & Mfg. Co.* (1967 SCR (1) 378 • 98% Match)
  - *Percept D'Mark (India) v. Zaheer Khan* (AIR 2006 SC 3426 • 94% Match)
  - *Superintendence Co. v. Krishan Murgai* (ILR 1980 Del 1120 • 89% Match)
- **Micro-Action Bar**: One-click **Copy Citation** with clipboard feedback, **Export PDF Brief**, and prompt suggestions.
- **Sticky Query Bar**: Attachment picker and reactive query submission.

### 3. Document Generator & Parchment Engine (`document-generator.html` / `#docgen`)
- **2-Step Progress Stepper**: *1. Fill & Generate* $\rightarrow$ *2. Review & Sign*.
- **Template Context**: Standard Commercial Rental Agreement CRA-v4.2.
- **3-Tab Configuration**:
  - **Parties**: Lessor, Lessee, Authorized Signatory, Notice Dispatch.
  - **Premises**: Demised Premises Address, Usable Area (Sq. Ft), Permitted Use.
  - **Rental Terms**: Monthly Base Rent, Security Deposit, Leasehold Tenure.
- **Real-Time Instrument Parchment Preview**:
  - Side-by-side desktop dual-pane.
  - Authentic parchment styling with subtle texture and border rules.
  - Watermark stamp (*LEGALMATE VERIFIED DRAFT - CRA-2025-0891*).
  - **Live Dynamic Synchronization**: Any keystroke in the form immediately updates the legal indenture text without page reload.
  - Digital signature execution lines and print / PDF export readiness.

### 4. Document Risk Analyzer (`document-analyzer.html` / `#docanalyzer`)
- **Drag-and-Drop Upload Zone**: Supports PDF and DOCX contracts with instant OCR processing.
- **Active Document Status**: *Commercial_Supply_Agreement_v4.pdf* (48 Pages, High Fidelity OCR).
- **Health Meters**: Obligations Audited (24/24, 100% parsed) and Exposure Index (Moderate, 2 Red Flags).
- **Executive Summary & Obligations**: Net 30 payment terms (§4.1), IP Shield liability cap (§11.3), Delaware Chancery jurisdiction (§21.0).
- **Identified Risk Factors & Redline Comparator**:
  - High Risk: Clause §14.2 uncapped consequential damages $\rightarrow$ Interactive **Redline Diff Modal** showing strike-through original vs LegalMate proposed limitation of liability amendment.
  - Medium Risk: Clause §9.4 vague 5-day termination window $\rightarrow$ 30-day notice period redline.
- **Interactive Document Q&A**: Real-time conversational query thread grounded in the contract text with clause bookmarks (*Found in Clause 18.3, Page 22*).

### 5. Case Management System & Docket Registry (`case-management.html` / `#cms`)
- **Active Portfolio Metrics**: 34 Total Active Cases (+2/wk), 4 Upcoming Hearings (Tomorrow 10:30 AM), 18 Enterprise Clients (98% Health Index).
- **Live Search & Filtering**: Instant full-text search across Case No, Client, Court Bench, or Counsel, with category filter tabs (*All Cases*, *Civil*, *Criminal*, *Corporate/IP*).
- **Rich Docket Cards**: Case number, bench tags, upcoming hearing countdown pills, stage indicators.
- **Interactive Docket Onboarding Wizard Modal**: Register new cases into the active portfolio dynamically.
- **Case Detail Modal**: View comprehensive case history, presiding judges, and recent PACER filings.
- **Real-Time PACER CourtSync**: Live sync button with simulated federal & state calendar synchronization.

---

## 📱 Responsiveness Matrix

| Device / Viewport | Width | Layout & Experience |
| :--- | :--- | :--- |
| **Desktop** | $\ge 1024\text{px}$ | Persistent Swiss left sidebar with emblem logo & counsel profile, desktop topbar with omni-search (`Ctrl+K`), PACER sync & notifications, 12-column dual-pane grids (side-by-side form & live parchment preview; side-by-side risk factors & interactive Q&A). |
| **Tablet** | $768\text{px} - 1023\text{px}$ | Adaptive fluid layout, responsive cards, touch-optimized button targets, mobile header + bottom navigation bar. |
| **Mobile** | $< 768\text{px}$ | Clinical mobile header with logo & profile, vertical workflow stacks, touch-optimized dialogs, and fixed bottom navigation bar with safe-area insets. |

---

## 🚀 How to Run & View

You can open any file directly in any modern browser without needing a build step or server:

1. **Master Unified Suite**: Double click or open `index.html` in your browser.
2. **Dedicated Standalone Pages**:
   - `dashboard.html`
   - `ai-assistant.html`
   - `document-generator.html`
   - `document-analyzer.html`
   - `case-management.html`

To run with a local HTTP development server:
```powershell
# Using Python
python -m http.server 3000

# Open in browser:
http://localhost:3000
```
