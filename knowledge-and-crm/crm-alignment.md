# CRM alignment

ASI OS has no customer-relationship database yet. It does have person and organisation records, and documents can link to them now in a way that will survive a later CRM design.

## What exists

- **Person records** carry an organisation and a relationship: Team, Customer contact, Partner contact, Vendor contact, Personal or Other.
- **Organisation records** already carry a thin CRM layer: relationship (Customer, Vendor, Partner or Other), stage, primary contact, our lead and agreement.
- **Meetings and emails** link to people only by name or address, not by a typed key.
- **Not built:** company, contact and CRM-project types were planned but never built, and there is no deal or pipeline database.

## Link fields to use now

All are optional and can appear on any kind. They are proposed for scope, recommendation, content, outline and plan.

```yaml title="CRM link fields"
person: []         # links to person records
organization: []   # links or names, same form as on the activity
deal:              # reserved; empty today
crm_role:          # Customer, Vendor, Partner or Other
```

| Planned type | Live equivalent today | Document field |
| --- | --- | --- |
| Contact | Person | `person` |
| Company | Organisation | `organization` |
| CRM project (a deal or engagement) | None | `deal` (reserved) |
| Role in the relationship | Relationship on person and organisation | `crm_role` |

## How CRM work runs in the guided flow

Intake asks who and which organisation is involved for every route. The system looks the answers up, proposes the match and writes the links. If a person or organisation does not exist, it offers to create the record. A proposal, contract draft or meeting follow-up is then an ordinary document of the Documents or Planning route, linked to the people, the organisation and later the deal. See the run-crm-engagement process on [The process catalog](../processes/the-process-catalog.md).

No new CRM document kinds are proposed. A kind is added only once real use shows the need.

## Forward-compatible rules

1. Use links by name, as everywhere else; moving a file never breaks them.
2. The `deal` field name is reserved now. A deal type or database is later work and adopts this field.
3. When a CRM database arrives, a one-off script can fill `deal` from the existing person and organisation links. No document needs rewriting.
