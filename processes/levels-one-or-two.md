# Levels: one or two

Work is already organised in two levels: phase (six) contains work type (nine). The question is whether processes need a further grouping level inside each phase.

## The three shapes considered

| Shape | What it means | Cost |
| --- | --- | --- |
| **Flat catalog (chosen)** | One list of processes; each names a home work type; the phase is derived | Lowest: one list, one field |
| Subfamily level | A new group between phase and process | A new term, field and lookup to keep in step |
| Third tier under work type | You navigate phase, then work type, then process | A three-question funnel; processes that cross phases get duplicated |

## Why flat

**Every phase has real choice**
The smallest phase holds two processes, so the system always has something to choose between.
**No phase has many**
The largest holds three. A grouping level pays off at around seven children. None is near it.
**Subgroups would be hollow**
A group inside Design and creation would hold one process each. The work type already carries exactly that split.
**Handoffs cross phases**
About a third of the catalog hands off to or draws from another phase. A nested tree forces each process under one parent and needs a second structure for the cross-links. A flat list with a successor link needs one mechanism.

The catalog is a proposal and not yet proven. If it grows large the answer changes. Move to a grouping level only if one work type holds more than six processes, or the catalog passes about twenty-five in total. Then group by work type, because it already exists and is stored.

## The rule for adding a process

A process is added only if all four hold.

1. It has appeared at least once as a request the system had to improvise.
2. It differs from an existing process in the extra intake questions, the first-result kind or the gate placement. A difference only in subject matter means it is a use of an existing process.
3. It has one home work type. If it seems to need two, it is two processes with a handoff.
4. It is written in the same table shape as the [catalog](the-process-catalog.md), with documents from the [kind catalog](../work-families/document-kinds.md).

A process is retired when nothing has used it for a long period and no open activity carries it. Its name stays in closed records.

## Fields that record the process

The shell carries `work_type` and `process`. Each document carries `work_type`, a derived `phase`, `process`, optionally `process_step` and `gate`, plus the stage and iteration from the common core. A `process` value must come from the catalog (checked for new files only). A gate marks where a document was submitted; approval itself is the document's `state`.
