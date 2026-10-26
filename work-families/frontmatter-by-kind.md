# Frontmatter by kind

Every document carries a common core. Each kind then adds a few fields of its own. In the tables, **R** means required, **O** optional and **G** generated.

## Design rules

1. The common core is filled at creation by a hook or the guided flow. Nobody types it by hand.
2. `type` is the kind name.
3. Existing fields keep their meaning. On a document, `tier` means result tier: deliverable, support, input or render.
4. `state` is authored. Checks apply to new files only; closed work is not retrofitted.

## Common core

| Field | Req | Meaning |
| --- | --- | --- |
| `title` | R | Reader-facing name |
| `description` | R | One or two sentences |
| `type` | R | The kind |
| `activity` | R | Link to the owning activity |
| `work_type` | R | Copy of the activity's work type |
| `phase` | G | Derived from the work type, never authored |
| `stage` | R | intake, route, draft, build or iterate |
| `iteration` | O | Which build iteration produced this version |
| `state` | R | Draft, Review, Approved or Superseded |
| `version` | R | The latest stays in place; earlier versions go to a trash folder |
| `created`, `updated` | R | Dates |
| `source` | O | The request that asked for it |
| `related` | O | List of links |

## Fields added by kind

```yaml title="Examples of per-kind blocks"
# scope
owner: R
goal: R            # one sentence
done_when: R       # a testable sentence
route: R
audience: O        # User, Creator or Market
person: O
organization: O
deal: O            # reserved
first_result: O
involvement: O     # low, medium or high

# findings and research
question: R
method: R
confidence: R
sources_fetched: R # true or false

# mapping
from: R
to: R
rollback: R        # "none" must be written explicitly

# verification
done_when_ref: R
result: R          # pass, partial or fail
evidence: R
run_on: R
```

Other kinds follow the same pattern. A recommendation adds fields recording where it was answered and its follow-on; a runbook adds `trigger` and `owner`; a retrospective adds `period`, `expected`, `happened` and `change`.

## Fields that make a document promotable

Any kind that may become a knowledge-base article can also carry these.

| Field | Meaning |
| --- | --- |
| `kb` | Knowledge base slug |
| `topic` | Top-level folder in the knowledge base |
| `audience` | User, Creator or Market |
| `mode` | Tutorial, How-to, Reference or Explanation |
| `summary` | One line for the topic home page |
| `promote` | none, candidate or promoted |
| `promoted_to` | Link to the article after promotion |
| `in_force` | For a decision, true while it still applies |

Process fields (`process`, `process_step`, `gate`) are described on [Levels: one or two](../processes/levels-one-or-two.md).

See [Document kinds](document-kinds.md) for what each kind is for.
