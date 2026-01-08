---
description: OpenSpec Spec-Driven Development Workflow
---

# OpenSpec Workflow

When the user invokes `/openspec`, you should strictly follow the OpenSpec protocol.

## 1. Context Loading
First, read the core instructions to ensure you are aligned:
- Read `openspec/AGENTS.md`
- Read `openspec/project.md`
- Run `openspec list` to see active changes

## 2. Intent Analysis
Identify what the user wants to do:

### A. Create a New Change (Feature/Refactor)
If the user describes a new feature or change:
1.  Choose a unique `change-id` (kebab-case, e.g., `add-user-login`).
2.  Create the directory: `mkdir -p openspec/changes/<change-id>/specs`.
3.  Scaffold `proposal.md`:
    ```markdown
    # Change: [Title]
    ## Why
    [Reason]
    ## What Changes
    - [List of changes]
    ## Impact
    - [Affected areas]
    ```
4.  Scaffold `tasks.md`:
    ```markdown
    ## 1. Implementation
    - [ ] 1.1 [Step 1]
    ```
5.  Notify the user and ask for approval of the proposal **BEFORE** writing any code.

### B. List Status
If the user asks for status or just types `/openspec list`:
1.  Run `openspec list`.
2.  Run `openspec spec list --long`.
3.  Summarize the active changes and current specs.

### C. Validate
If the user asks to validate:
1.  Run `openspec validate --strict`.
2.  Report any errors and offer to fix them.

## 3. Execution (After Approval)
Only after the user approves the proposal in `openspec/changes/<id>/proposal.md`:
1.  Follow the steps in `openspec/changes/<id>/tasks.md`.
2.  Mark tasks as completed `[x]` as you go.
3.  Once finished, run `openspec archive <id>` (if authorized) or ask user to archive.

---
**CRITICAL:** Do not modify source code (`src/`) until a proposal is created and approved, unless it's a trivial bug fix.
