# The master rule

Work often starts as one activity and grows into something larger. The master rule says what happens then.

> When you approve a tier of project or above for an activity, that activity becomes the master of the work it was already doing. It keeps its identity and message thread, lists its members, and creates every new piece of work as a new member activity that points back to it.

You decide when this happens. The system proposes a tier, you choose, and nothing escalates automatically.

## Why promote in place

Two other approaches were considered.

| Approach | What happens | Trade-off |
| --- | --- | --- |
| Keep the old mechanism | A new master activity is spun off and the original stays a member | Simple, but the original's name and history point to a different master, and an extra record exists only to be a container |
| **Promote in place (chosen)** | The activity that grew becomes the master | One activity keeps its id, name, history and thread |
| Hybrid | Promote in place when the name and goal already describe the whole project, otherwise spin off | Case by case, more to decide each time |

Promoting in place matches how people describe it, and the existing member mechanism and checks already accept any activity as a master, so no new field is needed.

## The fields involved

All of these exist already. None is new.

| Field | Where | Value |
| --- | --- | --- |
| `role` | master | `master` |
| `tier` | master | project, program or portfolio |
| `master_id` | each member | a link to the master |
| Members section | master body | a hand-written roster |

The word is **master**. The older word "steward" is retired and is not used for this.

## What follows

A master does not remain a member of another activity unless it is itself a member of a program master. Because a project now appears only when an activity is promoted with an approved tier, new empty project shells stop appearing.

See also [Narrowing projects and programs](narrowing-projects-and-programs.md).
