# Phases and their routes

A **phase** is a group of work types that share a route. The phase is derived from the work type; it is not chosen separately. The route is what the system selects at stage 2. It fixes three things: the extra intake questions, the **first-result kind** (what stage 3 produces) and the **build recipe** (what stages 4 and 5 produce).

## Questions asked on every route

What do you want to achieve, why now, how will we know it is done, what is in and out, who is it for, what already exists, who and which organisation is involved, what constraints and deadline apply, and how much involvement do you want.

## The routes

| Phase (work types) | Extra questions | First result | Build recipe |
| --- | --- | --- | --- |
| **Research and understanding** (research and analysis) | What question must be answered? What counts as an answer? Which sources? | A findings outline; a recommendation skeleton if a decision follows | Scan, write findings, then research or recommendation; iterate on confidence and coverage |
| **Design and creation** (design and architecture; documents and content) | Design: constraints, quality goals, what we give up. Documents: who reads it, what they do after | Design: a recommendation with options, then a design. Documents: an outline | Design: design or spec, then a build plan. Documents: draft, review, publish, iterate by version |
| **Build and delivery** (build; migration and restructuring) | Build: what changes, which files, what test. Migration: what exists, where each item goes, how it is undone | Build: a first working slice. Migration: an inventory, then a mapping | Plan, execution, working log, verification after each slice. Migration adds a rollback row and before and after counts |
| **Operations and upkeep** | Is it healthy now? What recurring procedure? What triggers action? | An assessment of current health, then a runbook draft | Per period: act, record in a journal or log, audit against a standard |
| **Planning and coordination** | What outcome, by when, owned by whom, what is at risk? | A scope as charter plus a roadmap or plan | A generated overview; a retrospective at each milestone |
| **Knowledge and learning** | What must the reader learn, do, look up or understand? Which knowledge base, topic and audience? | A table of contents for the topic | Stubs are written from it, articles written and reviewed, topic view generated; iterate topic by topic |
| **Unclassified** | None beyond the common ones | A scope only | The system asks which phase fits and re-routes. Staying unclassified past stage 2 counts as an intake failure |

## One process, not seven

The stages and the document templates are the same for every phase. Only the question set and the first-result choice differ. A route table is a configuration of one process, not a second process you must learn.

The activity tier still decides how many documents exist. A small request may produce only the scope and one first result; the route still tells the system what that result should be.

See [Document kinds](document-kinds.md) for the documents named above and [The process catalog](../processes/the-process-catalog.md) for the finer-grained processes inside each phase.
