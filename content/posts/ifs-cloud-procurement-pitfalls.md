---
title: "3 Configuration Pitfalls in IFS Cloud Procurement That Cost You Time"
date: 2026-06-19T09:00:00+07:00
draft: false
tags: ["IFS Cloud", "Procurement", "ERP", "Configuration", "Best Practices"]
---

I have lost count of how many times I've walked into a client site where the IFS Cloud Procurement module is already live — and the purchasing team is drowning in manual workarounds because of configuration decisions made six months earlier.

The module itself is solid. The problem is almost never the software. It is almost always how it was set up.

Here are three configuration traps I see repeatedly in IFS Cloud Procurement implementations, and how to avoid them.

<!--more-->

## 1. The "One Size Fits All" Approval Route

The default approval route in IFS Cloud is a flat sequence: every requisition goes through the same chain regardless of value, category, or department. Many teams leave it at that, thinking they will "refine it later."

**The result:** A $50 stationery request and a $50,000 equipment purchase queue up behind the same approver. The $50K order waits two days because the bottleneck approver is on leave. Production stops.

**What to do instead:** Set up rule-based approval routes early. IFS Cloud supports condition-driven routes using attributes like:
- Document amount (with tiered thresholds)
- Part category (MRO vs. raw material vs. capex)
- Requisitioning department
- Project code

Define at least three routes in the initial configuration: low-value auto-approve (below $500), mid-value departmental approval ($500–$5,000), high-value multi-tier ($5,000+). This alone cuts approval cycle time by 40–60% in every project I have seen.

## 2. Ignoring Part-Supplier Link Lead Times

IFS Cloud stores supplier lead times at the **Part Supplier** link level, not just at the supplier header level. I see teams populate the supplier master with generic lead times like "5 days" and call it done.

**The problem:** Different parts from the same supplier have wildly different lead times. A custom-engineered bracket takes 15 days; a standard bolt ships in 2 days. When the MRP run reads "5 days" for both, the bracket arrives late, and the bolt arrives too early (sitting in inventory costing holding money).

**The fix:** During data migration, invest the time to populate `PartSupplierLeadTime` accurately per part, not per supplier. I recommend a simple spreadsheet with three columns — Supplier ID, Part ID, Lead Time in Days — and upload via IFS Cloud's Data Import tool. It takes an afternoon. It saves weeks of expediting later.

## 3. Skipping Purchase Agreement Lines for Recurring Items

One of the most underused features in IFS Cloud Procurement is the **Purchase Agreement** with committed lines. I frequently see procurement teams using one-off purchase orders for recurring buys — office supplies, MRO consumables, packaging materials — that they order monthly from the same supplier at the same price.

**What happens:** Every month, the buyer manually copies the old PO, changes the date, adjusts quantities. Every month, the same data entry, same risk of typo, same wasted hour.

**Better approach:** Create a blanket Purchase Agreement with agreement lines for each recurring item, including price, validity period, and call-off terms. Then use **Requisition Auto-Release** to generate POs directly from the agreement when stock drops below reorder point.

The setup takes about 15 minutes per agreement. The monthly saving is roughly one hour per buyer. If you have five buyers handling recurring buys, that is five hours saved every month — from a one-time configuration change.

---

These three fixes are not complicated. They do not require custom code or expensive consultants. They just require thinking about the **operational reality** before locking in the configuration.

The next time you set up IFS Cloud Procurement, ask yourself: *Will this work on day 90, or only on day 1?*
