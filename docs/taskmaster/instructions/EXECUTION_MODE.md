# EXECUTION MODE INSTRUCTIONS

## TRIGGER: "EXECUTION MODE"

When the user types "EXECUTION MODE", you MUST follow these strict instructions:

## 1. SCOPE ADHERENCE (CRITICAL)

### MANDATORY SCOPE COMPLIANCE

- **NEVER** deviate from the approved scope defined in the evaluation YAML files
- **ONLY** work on OpenAI fine-tuning for Web3Auth documentation
- **STRICTLY** follow the implementation plan phases
- **REJECT** any requests outside the defined scope with clear explanation

### SCOPE BOUNDARIES

**ALLOWED ACTIONS:**

- Data extraction from Web3Auth documentation
- Processing documentation for fine-tuning
- Creating training datasets
- Fine-tuning OpenAI models
- Testing and validation of the model
- Creating progress reports

**FORBIDDEN ACTIONS:**

- Modifying existing Web3Auth documentation
- Creating new documentation content
- Changing codebase functionality
- Installing packages not specified in the plan
- Making git commits without explicit approval
- Publishing or deploying anything
- Working on unrelated tasks

## 2. EXECUTION PROTOCOL

### PHASE-BASED EXECUTION

You MUST execute in the exact order specified:

1. **Phase 1: Data Collection (2-3 days)**

   - Extract all code examples
   - Parse documentation content
   - Identify common patterns
   - Collect troubleshooting data

2. **Phase 2: Data Processing (3-4 days)**

   - Create prompt-completion pairs
   - Validate code accuracy
   - Categorize by topic
   - Format for OpenAI

3. **Phase 3: Fine-tuning (1-2 days)**

   - Prepare training dataset
   - Configure OpenAI parameters
   - Execute fine-tuning
   - Validate model outputs

4. **Phase 4: Testing & Optimization (2-3 days)**
   - Test common scenarios
   - Evaluate code generation
   - Optimize weak areas
   - Create evaluation metrics

### BEFORE EACH TASK

1. **Read current progress** from `docs/taskmaster/progress/current_status.yaml`
2. **Log the task** in `docs/taskmaster/logs/execution_log.md`
3. **Update progress** after completion
4. **Report to supervisor** using the template

## 3. MEMORY REFRESH SYSTEM

### TRIGGER: "REFRESH EXECUTOR MEMORY"

When this keyword is used, you MUST:

1. **Read ALL context files:**

   - `docs/taskmaster/memory/project_context.md`
   - `docs/taskmaster/memory/completed_tasks.yaml`
   - `docs/taskmaster/progress/current_status.yaml`
   - `docs/taskmaster/logs/execution_log.md`

2. **Reconstruct working memory:**

   - Current phase and step
   - Completed tasks
   - Current objectives
   - Next actions required

3. **Verify scope compliance:**
   - Confirm current task is within approved scope
   - Check against evaluation YAML files
   - Validate no scope creep has occurred

## 4. PROGRESS TRACKING

### MANDATORY LOGGING

For EVERY task, you MUST:

1. **Log start time** and task description
2. **Update progress percentage** in current_status.yaml
3. **Document any issues** or blockers
4. **Record completion** with validation notes
5. **Update next actions** list

### PROGRESS VALIDATION

Before proceeding to next task:

- [ ] Current task completed successfully
- [ ] All outputs validated
- [ ] Progress logged appropriately
- [ ] Next task identified and approved by scope
- [ ] No scope violations detected

## 5. OUTPUT FORMAT FOR SUPERVISOR

### AFTER EACH MAJOR TASK

Generate a report using this EXACT format:

```yaml
supervisor_report:
  task_completed: "[Task Name]"
  phase: "[Current Phase]"
  status: "[SUCCESS/PARTIAL/FAILED]"
  progress_percentage: "[0-100]%"

  outputs_created:
    - "[List of files/outputs created]"

  validation_results:
    - scope_compliance: "[PASSED/FAILED]"
    - quality_check: "[PASSED/FAILED]"
    - technical_accuracy: "[PASSED/FAILED]"

  next_actions:
    - "[Next immediate task]"
    - "[Following task]"

  blockers_or_issues:
    - "[Any issues encountered]"

  supervisor_review_needed:
    - "[Specific areas needing review]"

  timestamp: "[Current date/time]"
```

## 6. ERROR HANDLING

### SCOPE VIOLATION DETECTION

If ANY request violates scope:

1. **IMMEDIATELY STOP** execution
2. **CLEARLY STATE** the violation
3. **REFERENCE** the specific scope boundary
4. **PROVIDE** alternative in-scope approach
5. **AWAIT** explicit approval before proceeding

### TECHNICAL ERRORS

If technical issues occur:

1. **LOG** the error in execution_log.md
2. **ATTEMPT** standard troubleshooting
3. **ESCALATE** to supervisor if unresolved
4. **NEVER** make unauthorized changes to resolve

## 7. COMMUNICATION PROTOCOL

### REGULAR UPDATES

- Provide progress updates at least every 2 hours of work
- Report any blockers immediately
- Confirm each phase completion before proceeding

### SUPERVISOR INTERACTION

- Use the supervisor report format for all major communications
- Request approval for any ambiguous decisions
- Escalate any scope-related questions immediately

## 8. QUALITY ASSURANCE

### BEFORE TASK COMPLETION

Every task MUST pass:

- [ ] Scope compliance check
- [ ] Technical accuracy validation
- [ ] Output quality verification
- [ ] Documentation completeness
- [ ] Progress tracking updated

### VALIDATION CHECKLIST

- [ ] All code examples are syntactically correct
- [ ] All extracted data is accurately formatted
- [ ] All outputs are properly documented
- [ ] All progress is logged
- [ ] All next steps are clearly identified

## 9. CRITICAL REMINDERS

### NEVER FORGET

- **SCOPE IS SACRED** - Never deviate
- **DOCUMENT EVERYTHING** - Log all actions
- **VALIDATE CONTINUOUSLY** - Check quality at each step
- **COMMUNICATE REGULARLY** - Keep supervisor informed
- **ESCALATE PROMPTLY** - Don't struggle with blockers

### WHEN IN DOUBT

- **STOP** and ask for clarification
- **REFERENCE** the evaluation YAML files
- **CONSULT** the memory files
- **ESCALATE** to supervisor

## 10. EXECUTION READINESS CHECK

Before starting ANY task, confirm:

- [ ] Current phase identified
- [ ] Task within approved scope
- [ ] Required inputs available
- [ ] Progress tracking ready
- [ ] Supervisor report template ready
- [ ] Memory refresh completed (if requested)

**ONLY PROCEED AFTER ALL CHECKS PASS**
