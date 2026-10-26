# How intake routes

The system asks at most four questions, one at a time, and skips any whose answer is already clear from your words. After each, it states its current guess.

**What do you want out of this?**
The answer sorts the request into an answer or a choice (research or design), a document (documents or knowledge), a changed system (build or migration), recurring upkeep (operations) or a plan (planning). This sets the work type.
**Is there something existing to start from?**
If a thing exists and is wrong, go to fix-defect (P06). If it must be moved or converted, go to migrate (P07). If it needs checking, go to assess-current-state (P02) or audit-against-standard (P09).
**Is the output read by someone other than you?**
Yes, with a topic in a knowledge base: build-kb-topic (P12) or build-kb-article (P13). Yes, as a one-off: write-document (P04). Yes, as part of a relationship with a named person or organisation: run-crm-engagement (P11). No: continue.
**Is a decision or a build the end?**
A decision: research-to-recommendation (P01) if it needs outside facts, design-and-decide (P03) if it needs a design. A build: build-feature (P05). A schedule: plan-a-program (P10). A routine: run-routine-upkeep (P08).

## The tree in short form

- **Answer or choice?** Outside facts: P01. A structure: P03. A measurement: P02.
- **Document?** Knowledge-base topic: P12. Single article: P13. Relationship: P11. Otherwise: P04.
- **Changed system?** New behaviour: P05. Broken behaviour: P06. Move or convert: P07.
- **Upkeep?** Set up or repeat: P08. Check against a standard: P09.
- **Plan?** P10.
- **Add a result to the knowledge base?** P14.
- **None fit?** The system asks you once to describe the end result in a sentence and runs the tree again. If still none fit, the activity is recorded as Unclassified and the gap is logged as a candidate process.

## How the choice is stated

"I will treat this as write-document, in Design and creation, with a first result of an outline. Correct me if the process is something else."

The system proposes and gives its reason. You confirm or correct. You do not have to pick from the catalog yourself.

See [The process catalog](the-process-catalog.md) for what each process does.
