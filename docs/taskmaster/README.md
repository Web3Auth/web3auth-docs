# TASKMASTER SYSTEM - OpenAI Fine-Tuning Project

This directory contains the complete task management and memory refresh system for the OpenAI
Fine-Tuning project.

## SYSTEM OVERVIEW

The Taskmaster system provides strict execution control, memory refresh capabilities, and
comprehensive progress tracking for the Web3Auth documentation fine-tuning project.

## DIRECTORY STRUCTURE

```
docs/taskmaster/
├── README.md                           # This file
├── instructions/
│   ├── EXECUTION_MODE.md               # Main execution mode instructions
│   └── MEMORY_REFRESH.md               # Memory refresh protocol
├── memory/
│   ├── project_context.md              # Complete project context
│   └── completed_tasks.yaml            # Task completion tracking
├── progress/
│   └── current_status.yaml             # Current project status
├── logs/
│   └── execution_log.md                # Detailed execution history
└── templates/
    └── supervisor_report.yaml          # Report template for supervisor
```

## KEY TRIGGERS

### EXECUTION MODE

**Trigger:** `"EXECUTION MODE"`

- Activates strict execution protocol
- Enforces scope compliance
- Enables progress tracking
- Requires supervisor reporting

### MEMORY REFRESH

**Trigger:** `"REFRESH EXECUTOR MEMORY"`

- Reads all context files
- Reconstructs working memory
- Validates scope compliance
- Reports memory status

## CORE PRINCIPLES

### 1. SCOPE IS SACRED

- **NEVER** deviate from approved scope
- **ALWAYS** validate actions against scope boundaries
- **IMMEDIATELY** stop if scope violation detected
- **ESCALATE** any scope questions to supervisor

### 2. DOCUMENT EVERYTHING

- **LOG** every action taken
- **TRACK** progress continuously
- **VALIDATE** all outputs
- **REPORT** to supervisor regularly

### 3. QUALITY FIRST

- **VALIDATE** all code syntax
- **VERIFY** technical accuracy
- **ENSURE** completeness
- **TEST** before proceeding

### 4. COMMUNICATION IS KEY

- **REPORT** using standardized formats
- **ESCALATE** blockers immediately
- **CONFIRM** understanding before proceeding
- **REQUEST** approval for ambiguous decisions

## EXECUTION PROTOCOL

### Phase-Based Execution

1. **Phase 1: Data Collection** (2-3 days)
2. **Phase 2: Data Processing** (3-4 days)
3. **Phase 3: Fine-tuning** (1-2 days)
4. **Phase 4: Testing & Optimization** (2-3 days)

### Before Each Task

1. Read current progress from `progress/current_status.yaml`
2. Log the task in `logs/execution_log.md`
3. Validate scope compliance
4. Execute task with quality checks
5. Update progress and report to supervisor

## MEMORY REFRESH SYSTEM

### When to Refresh Memory

- **At conversation start:** Always refresh before beginning work
- **After breaks:** If there's been a gap in conversation
- **When confused:** Any uncertainty about current state
- **Before major tasks:** Ensure full context before starting
- **Emergency refresh:** When feeling "lost" or uncertain

### Memory Refresh Process

1. Read all 4 context files in order
2. Reconstruct understanding of project state
3. Validate scope compliance
4. Report refresh status
5. Update execution log

### Context Files (Read in Order)

1. `memory/project_context.md` - Complete project overview
2. `memory/completed_tasks.yaml` - What's been done
3. `progress/current_status.yaml` - Where we are now
4. `logs/execution_log.md` - Detailed history

## QUALITY ASSURANCE

### Validation Checklist

- [ ] Scope compliance verified
- [ ] Technical accuracy confirmed
- [ ] Code syntax validated
- [ ] Documentation complete
- [ ] Progress properly logged
- [ ] Outputs meet quality standards

### Error Handling

- **Scope violations:** Immediate stop and escalation
- **Technical errors:** Standard troubleshooting then escalation
- **Quality issues:** Remediation before proceeding
- **Blockers:** Immediate supervisor notification

## SUPERVISOR COMMUNICATION

### Report Format

Use the template in `templates/supervisor_report.yaml` for all major communications.

### Reporting Schedule

- **Major task completion:** Always report
- **Phase transitions:** Required supervisor approval
- **Blockers encountered:** Immediate escalation
- **Quality concerns:** Immediate notification
- **Scope questions:** Immediate escalation

### Escalation Triggers

- Any uncertainty about scope boundaries
- Technical blockers beyond standard troubleshooting
- Quality validation failures
- Resource or timeline issues
- Any requests outside approved scope

## APPROVED SCOPE (CRITICAL)

### ALLOWED ACTIONS

- Data extraction from Web3Auth documentation
- Processing documentation for fine-tuning
- Creating training datasets in JSONL format
- Fine-tuning OpenAI models
- Testing and validation of the model
- Creating progress reports and evaluations

### FORBIDDEN ACTIONS

- Modifying existing Web3Auth documentation
- Creating new documentation content
- Changing codebase functionality
- Installing packages not specified in the plan
- Making git commits without explicit approval
- Publishing or deploying anything
- Working on unrelated tasks

## SUCCESS METRICS

### Code Quality

- 95%+ syntactically correct code
- Complete imports and dependencies
- Immediately executable examples

### Content Quality

- 90%+ relevant responses
- Technically accurate information
- Consistent terminology
- Complete examples with context

### Process Quality

- 100% scope compliance
- Complete progress documentation
- Regular supervisor communication
- Proactive issue escalation

## EMERGENCY PROCEDURES

### Scope Violation Detected

1. **STOP** all execution immediately
2. **REPORT** the violation with details
3. **REFERENCE** the specific scope boundary
4. **AWAIT** explicit supervisor approval
5. **NEVER** assume exceptions to scope

### Memory System Failure

1. **STOP** all task execution
2. **REPORT** which files cannot be read
3. **REQUEST** supervisor assistance
4. **DO NOT** proceed without full memory refresh
5. **DO NOT** make assumptions about project state

### Technical Blockers

1. **ATTEMPT** standard troubleshooting
2. **LOG** all attempts and results
3. **ESCALATE** to supervisor if unresolved
4. **PROVIDE** detailed error information
5. **AWAIT** guidance before proceeding

## FILE MAINTENANCE

### Automatic Updates

- `progress/current_status.yaml` - Updated after each task
- `logs/execution_log.md` - Updated with each action
- `memory/completed_tasks.yaml` - Updated on task completion

### Manual Updates

- `memory/project_context.md` - Only if scope changes (supervisor approval required)
- `instructions/` files - Only with explicit supervisor approval

## SYSTEM STATUS

**Current Status:** OPERATIONAL **Last Updated:** 2024-07-03T22:45:00Z **Version:** 1.0 **Ready
for:** EXECUTION MODE activation

## QUICK REFERENCE

### Key Commands

- `"EXECUTION MODE"` - Start execution protocol
- `"REFRESH EXECUTOR MEMORY"` - Refresh memory system

### Key Files

- Current status: `progress/current_status.yaml`
- Project context: `memory/project_context.md`
- Execution log: `logs/execution_log.md`

### Emergency Contacts

- **Scope questions:** IMMEDIATE supervisor escalation
- **Technical blockers:** Standard troubleshooting then escalation
- **Quality issues:** IMMEDIATE supervisor notification

**REMEMBER: When in doubt, STOP and ask. Scope compliance is non-negotiable.**
