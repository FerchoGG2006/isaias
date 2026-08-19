---
name: gstack
description: >-
  Provides runbooks and prompt structures for gstack specialized roles, design spec reviews, and office hours.
---

# gstack Custom Runbooks

This skill implements the runbooks and workflows defined in `gstack` to ensure high-fidelity execution of design specs, audits, and product decisions.

---

## Runbook 1: /spec (5-Phase Specification Workflow)

When the user runs `/spec`, perform the following phases sequentially:

### Phase 1: Understand (CEO & EM Lens)
1. Ask the user about the core problem, user benefit, and target state.
2. Outline what success looks like in non-technical terms.

### Phase 2: Design System & Tokens (Designer Lens)
1. Define the palette, typography, visual weight, and spacing system.
2. Ensure no standard browser defaults or basic colors are used.

### Phase 3: Components (Designer & Staff Engineer Lens)
1. Detail each UI component that needs to be modified or created.
2. List component properties, states (hover, loading, error), and edge cases.

### Phase 4: Assembly (Staff Engineer Lens)
2. Outline how pages or layouts are assembled.
3. List file paths to create/modify and exact lines/hooks/libraries to use.

### Phase 5: Verification (QA Lens)
1. Provide a step-by-step verification plan including:
   - Specific user actions to test.
   - Expected outputs and logs.

---

## Runbook 2: /office-hours (Startup Diagnostic)

When the user triggers `/office-hours`, analyze the project using Garry Tan's startup principles:

1. **The 10-Star Product Experience:**
   - How can we make this feature so good that the user tells 10 friends?
2. **Boil the Ocean Prevention:**
   - Are we trying to build too much at once? How can we reduce this to a 1-day ship?
3. **Distribution & Growth Hooks:**
   - Are we building sharing, referrals, or virality directly into the UI?
