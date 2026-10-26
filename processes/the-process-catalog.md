# The process catalog

A **work process** is a named, repeatable way of doing one kind of work, from your request to a finished result. It fixes the intake questions, the order of documents, the approval gates and the iteration loop. Every process passes through the same five stages; processes differ in their steps.

The relationship is simple: a phase contains work types, a work type has one or more processes, and a process is made of steps grouped under the five stages. You see stages and gates; the system follows steps.

## What every process shares

Every process starts with the common intake questions and a scope, and ends with a verification against the definition of done. From tier 2 up it ends with a retrospective. Each runs the same loop: approve the first result, then iterate.

## The catalog

| # | Process | Triggers | Documents in order | Gates | Exit |
| --- | --- | --- | --- | --- | --- |
| P01 | research-to-recommendation | "find out", "compare", "is it worth" | Findings outline, scout, findings, recommendation | G1 outline; G2 recommendation | Recommendation approved |
| P02 | assess-current-state | "where are we", "how bad is" | Assessment | G1 assessment | Gap list accepted |
| P03 | design-and-decide | "design", "which approach" | Recommendation with options, design or spec | G1 options; G2 design | Design approved |
| P04 | write-document | "write", "draft", "prepare a guide" | Outline, draft, review version | G1 outline; G2 draft | Document approved |
| P05 | build-feature | "build", "add", "implement" | First slice, plan, execution, verification per slice | G1 slice; G2 before release | All slices verified |
| P06 | fix-defect | "broken", "fails", "regression" | Log, fix, verification | G1 diagnosis if non-trivial | Reproduction passes |
| P07 | migrate | "move", "restructure", "convert all" | Inventory, mapping, plan with rollback, execution, verification | G1 mapping; G2 before apply | Counts reconcile |
| P08 | run-routine-upkeep | "keep up", "weekly check" | Health assessment, runbook, journal per period | G1 runbook | Handed to a routine |
| P09 | audit-against-standard | "check compliance", "audit" | Audit, optional fix plan | G1 audit | Findings closed or accepted |
| P10 | plan-a-program | "plan", "roadmap", "phases" | Roadmap or plan, generated overview | G1 roadmap | Plan accepted |
| P11 | run-crm-engagement | "customer", "proposal", "follow up" | Outline of the touch, the document, plan of next steps | G1 outline; G2 before anything leaves | Outcome logged |
| P12 | build-kb-topic | "document this area" | Table of contents, stubs, generated tracker | G1 toc | Planned articles built |
| P13 | build-kb-article | "write an article on" | Outline, draft, review version | G1 outline; G2 draft | Article approved |
| P14 | promote-to-kb | "add this to the knowledge base" | Knowledge fields added to a result, promotion record | G1 audience and topic | Promotion recorded |

## Handoffs

Some processes pass their result to another. P01 can end in a design decision (P03), which hands off to P05 or P07. P11 draws on P04 for content and P10 for next steps. A handoff is recorded by a successor link on the approved recommendation; it is not one process spanning two phases.

## What is not a process

Closing an activity is the existing close step. Creating the activity is intake itself.

The first catalog starts with five core processes: P01, P04, P05, P07 and P12. The others enter by the adding rule on [Levels: one or two](levels-one-or-two.md).
