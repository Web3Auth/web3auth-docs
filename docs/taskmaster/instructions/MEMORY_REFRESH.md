# MEMORY REFRESH INSTRUCTIONS

## TRIGGER: "REFRESH EXECUTOR MEMORY"

When this exact phrase is used, you MUST immediately execute this complete memory refresh sequence.

## MEMORY REFRESH PROTOCOL

### STEP 1: READ ALL CONTEXT FILES

You MUST read these files in this exact order:

1. **Project Context**

   - File: `docs/taskmaster/memory/project_context.md`
   - Purpose: Understand project scope, objectives, and constraints
   - Critical: Scope boundaries and forbidden actions

2. **Completed Tasks**

   - File: `docs/taskmaster/memory/completed_tasks.yaml`
   - Purpose: Know what has been accomplished
   - Critical: Track progress and avoid duplicate work

3. **Current Status**

   - File: `docs/taskmaster/progress/current_status.yaml`
   - Purpose: Understand current phase and next actions
   - Critical: Know where you are in the project

4. **Execution Log**
   - File: `docs/taskmaster/logs/execution_log.md`
   - Purpose: Review detailed history of all actions
   - Critical: Understand context of previous decisions

### STEP 2: RECONSTRUCT WORKING MEMORY

After reading all files, you MUST confirm understanding of:

#### PROJECT STATE

- [ ] Current phase identified
- [ ] Current task status known
- [ ] Progress percentage understood
- [ ] Next actions clearly defined

#### SCOPE COMPLIANCE

- [ ] Approved scope boundaries reviewed
- [ ] Forbidden actions understood
- [ ] Current task within scope confirmed
- [ ] No scope violations detected

#### QUALITY STATUS

- [ ] Previous validation results reviewed
- [ ] Quality metrics understood
- [ ] Any blockers or issues identified
- [ ] Required outputs clarified

### STEP 3: VALIDATE MEMORY REFRESH

Confirm you understand:

1. **What phase are we in?**
2. **What was the last completed task?**
3. **What is the next task to be performed?**
4. **Are there any current blockers?**
5. **What outputs are expected?**

### STEP 4: REPORT MEMORY REFRESH STATUS

Use this exact format:

```yaml
memory_refresh_report:
  timestamp: "[Current ISO timestamp]"
  trigger_source: "REFRESH EXECUTOR MEMORY command"

  files_read:
    - project_context.md: "[SUCCESS/FAILED]"
    - completed_tasks.yaml: "[SUCCESS/FAILED]"
    - current_status.yaml: "[SUCCESS/FAILED]"
    - execution_log.md: "[SUCCESS/FAILED]"

  memory_reconstruction:
    current_phase: "[Phase name]"
    last_completed_task: "[Task description]"
    next_task: "[Next task description]"
    progress_percentage: "[0-100]%"
    current_blockers: "[List or NONE]"

  scope_validation:
    scope_compliance_verified: "[true/false]"
    forbidden_actions_reviewed: "[true/false]"
    current_task_approved: "[true/false]"
    scope_violations_detected: "[NONE/list violations]"

  quality_status:
    previous_validations_reviewed: "[true/false]"
    quality_metrics_understood: "[true/false]"
    outstanding_issues: "[NONE/list issues]"

  readiness_status:
    memory_fully_refreshed: "[true/false]"
    ready_for_next_task: "[true/false]"
    supervisor_approval_needed: "[true/false]"

  next_actions:
    - "[Immediate next action]"
    - "[Following action]"
```

### STEP 5: UPDATE MEMORY REFRESH LOG

Add entry to execution log with this format:

```
### [Timestamp] - Memory Refresh Executed
**Task:** REFRESH EXECUTOR MEMORY
**Status:** SUCCESS
**Details:** Complete memory refresh performed, all context files read
**Files Read:** project_context.md, completed_tasks.yaml, current_status.yaml, execution_log.md
**Validation:** ✅ All memory components restored
**Scope Compliance:** ✅ PASSED
**Issues:** [Any issues encountered or NONE]
**Next Action:** [Ready for next task or specify action needed]
```

## MEMORY REFRESH VALIDATION CHECKLIST

Before proceeding after memory refresh:

- [ ] All 4 context files successfully read
- [ ] Current project phase identified
- [ ] Last completed task confirmed
- [ ] Next task clearly understood
- [ ] Progress status confirmed
- [ ] Scope boundaries verified
- [ ] No scope violations detected
- [ ] Quality status reviewed
- [ ] Blockers and issues identified
- [ ] Required outputs clarified
- [ ] Memory refresh logged

## EMERGENCY MEMORY REFRESH

If you detect any of these conditions, immediately perform memory refresh:

- Confusion about current task
- Uncertainty about project scope
- Inability to recall previous progress
- Questions about what actions are allowed
- Feeling "lost" in the conversation
- Requests that seem outside scope

## MEMORY REFRESH FAILURE PROTOCOL

If memory refresh fails:

1. **Report the failure immediately**
2. **Specify which files could not be read**
3. **Request supervisor assistance**
4. **Do NOT proceed with any tasks**
5. **Do NOT make assumptions about project state**

## REGULAR MEMORY MAINTENANCE

Perform mini-refreshes by reading current_status.yaml:

- At the start of each work session
- Before beginning any new task
- After any extended break in conversation
- When switching between different aspects of the project

**REMEMBER: When in doubt, refresh your memory. It's better to over-refresh than to work with stale
context.**
