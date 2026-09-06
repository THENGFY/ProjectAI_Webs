---
name: singapore-ai-governance-legal
description: Comprehensive Singapore legal, regulatory compliance (PDPA 2012, IMDA/PDPC GenAI Governance Framework), Terms of Service, and Enterprise Security standards for Singapore AI agencies and technology consultancies.
---

# Singapore AI Governance, Legal & Enterprise Security Skill

This skill provides regulatory standards, contractual clauses, PDPA 2012 compliance blueprints, and enterprise security frameworks specifically tailored for Singapore-based AI agencies, workflow automation consultancies, and technology partnerships.

---

## 1. Singapore Privacy Policy Framework (PDPA 2012 Compliance)

Governed by the **Personal Data Protection Act 2012 (PDPA)** and administered by the **Personal Data Protection Commission (PDPC)** of Singapore.

### A. Mandatory PDPA Core Obligations
1. **Designated Data Protection Officer (DPO):**
   - Every Singapore organization (LLP, Pte Ltd) must appoint a DPO.
   - Contact email must be publicly accessible (e.g., `info@ProjectAI.Asia`).
2. **Consent & Purpose Limitation (Sections 13–18):**
   - Personal data (names, corporate emails, phone numbers, workflow logs) must only be collected with explicit consent for stated purposes (e.g., feasibility audits, enterprise consultations, system provisioning).
3. **Notification Obligation (Section 20):**
   - Clear disclosure on all forms (web contact forms, WhatsApp integrations) stating exact data usage before collection.
4. **Mandatory Data Breach Notification (DBN) (Part VIA):**
   - If a data breach results in, or is likely to result in, significant harm, or affects $\ge 500$ individuals, the organization must notify the PDPC and affected individuals within **72 hours** of assessment.
5. **Cross-Border Transfer Limitation (Section 26 / PDPR Regulation 10):**
   - Data transferred out of Singapore (e.g., to upstream LLM clouds) must receive protection comparable to standard Singapore PDPA.
6. **Zero-Model-Training Guarantee:**
   - Explicit contractual guarantee that client prompts, uploaded contracts, and workflow inputs are never used to train public foundational AI models.

---

## 2. AI Agency Terms of Service Framework (Singapore Law & UCTA Compliant)

Governed by the **Unfair Contract Terms Act (UCTA)**, the **Singapore Copyright Act 2021**, and the **IMDA/PDPC Model AI Governance Framework**.

### A. Critical Protective Clauses

```
┌────────────────────────────────────────────────────────────────────────┐
│                   AI AGENCY CONTRACTUAL SHIELD                         │
├──────────────────┬──────────────────┬──────────────────┬───────────────┤
│ 1. AI Output     │ 2. Upstream SLA  │ 3. Dual-Tier IP  │ 4. Hard Cap   │
│ Probabilistic /  │ Shield from      │ Segregation      │ Capped at 3   │
│ Human oversight  │ OpenAI / Anthropic│ Deliverable vs   │ months SOW    │
│ mandatory        │ cloud outages    │ Background IP    │ fees paid     │
└──────────────────┴──────────────────┴──────────────────┴───────────────┘
```

#### 1. AI Non-Determinism & Human-in-the-Loop
- Disclaim that Large Language Models (LLMs) and autonomous agents produce probabilistic outputs.
- Obligate the client to maintain **human oversight** and verification before executing critical operational, legal, or financial actions based on AI outputs.

#### 2. Upstream API & Infrastructure Outage Immunity
- Shield the agency against downstream impacts caused by outages, rate-limits, latency spikes, or API breaking changes from upstream providers (OpenAI, Anthropic, Google Cloud, AWS, n8n, Make).

#### 3. Dual-Tier Intellectual Property (IP) Segregation
- **Bespoke Client Deliverables:** Custom client workflow configurations and prompt instances transfer to the client upon **100% full invoice settlement**.
- **Agency Background IP:** The agency exclusively retains all pre-existing prompt templates, foundational agentic architectures, proprietary scripts, and reusable workflow pipelines.

#### 4. UCTA-Compliant Hard Monetary Liability Cap
- Under Singapore UCTA, liability limitations must pass the statutory **reasonableness test**.
- Cap total cumulative liability strictly to the **fees paid by the client in the 3 months preceding the claim** under the specific Statement of Work (SOW).
- Explicitly exclude indirect, consequential, lost profit, or punitive damages.

#### 5. Tiered Dispute Resolution & Governing Law
- **Governing Law:** Republic of Singapore.
- **Escalation Protocol:**
  1. Mandatory 30-day senior executive good-faith negotiation.
  2. Mediation via the **Singapore Mediation Centre (SMC)** before litigation.
  3. Final resolution via the Courts of Singapore or the **Singapore International Arbitration Centre (SIAC)**.

---

## 3. Enterprise Security & Data Sovereignty Blueprint

Aligned with the **Cyber Security Agency of Singapore (CSA)** Cyber Essentials guidelines.

### A. Infrastructure & Security Architecture
1. **Zero Data Retention (ZDR):**
   - Direct enterprise API endpoints configured with `zero-retention` flags to ensure LLM providers purge request payloads immediately after token completion.
2. **Data Residency & VPC Isolation:**
   - Dedicated private vector databases (pgvector / Qdrant) hosted within the Singapore cloud region (`ap-southeast-1` Singapore).
3. **Cryptographic Standards:**
   - **In-Transit:** TLS 1.3 encryption with strict HTTPS enforcement and HSTS.
   - **At-Rest:** AES-256 encryption across all persistent database volumes and cold backups.
4. **Access Control & Identity:**
   - Multi-Factor Authentication (MFA) on all administrative consoles.
   - Role-Based Access Control (RBAC) adhering to the principle of least privilege.
   - Immutable audit logging for pipeline trigger events.

---

## 4. Front-End UX Best Practices for Legal Documents

To maximize trust while eliminating lead drop-off on conversion pages:
1. **Slide-Out Drawer Modal Pattern:**
   - Deliver Privacy Policy, Terms of Service, and Security Overview inside an accessible in-page slide-out modal (e.g., `#privacy`, `#terms`, `#security`) rather than redirecting users to external URLs.
2. **Floating Action Button Clearance:**
   - Ensure high z-index layering (`z-[70]`) and auto-hide floating widgets (e.g., WhatsApp bubble) when legal modals are open to avoid UI overlap.
3. **Clear Acknowledgment Controls:**
   - Provide clean "Understood & Close" dismissal buttons for friction-free browsing.
