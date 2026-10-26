# Integrating documents into the knowledge base

ASI OS holds three layers of knowledge: work knowledge (an activity's results and decisions), reference knowledge (knowledge bases, claims and terms) and published knowledge (an audience cut of reference knowledge). Promotion moves a result from the first layer into the second.

## How it works today

- A final deliverable, or a decision marked as still in force, is promoted as a generated article that records where it came from.
- A knowledge base is chosen for the activity by its identity, with an optional override.
- Building a knowledge base follows a fixed order: a scope and a table of contents are planned, a tracker is kept, stubs are written from the table of contents, and the topic views are regenerated.

## The proposed connection

**Intake asks the knowledge-base question**
If the product is a document for readers, intake records the knowledge base, topic, audience and mode in the scope. If no knowledge base fits, the route says so and asks whether to create one.
**The first result is a table of contents**
For the Knowledge route, the table of contents for the chosen topic is the first result. Approving it at stage 3 is the approval to build. After approval it is placed in the knowledge base's planning folder and stubs are written.
**Each article is an iteration**
Each planned article is a row in the table of contents. Each iteration moves some rows from planned to Draft, In review and Approved. The generated tracker shows built versus planned.
**Other phases promote their results**
A recommendation, design or runbook that carries the promotion fields is promoted when approved. Documents without them are not promoted; the system asks at approval whether to add them.
**Audience decides the cut**
The audience on the document (User, Creator or Market) selects which published cut it goes to, so promotion never has to guess.

One identity and one knowledge base per activity is the default. A document may override it with its own `kb` field.

## What the front matter supplies

On the activity side: `kb`, `topic`, `audience`, `mode`, `summary`, `promote` and `promoted_to`. On the article side, `promoted_from` records the source. The list of planned articles in a table of contents carries the same fields. See [Frontmatter by kind](../work-families/frontmatter-by-kind.md).

Open gaps: tables of contents and trackers still need a template and schema, and the audience and mode values are not yet a validated list. The new fields are checked for new files only.
