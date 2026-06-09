Use the attached Candidates Kanban screenshot as the primary reference for layout, interactions, visual hierarchy and ATS workflow behavior.

Use the attached Candidate Profile screenshot as the primary reference for detailed modal views.

Use the attached Requisitions screenshot as the page that needs redesign and modernization.

IMPORTANT:

Do not redesign the ATS theme.
Do not change branding.
Do not change colors.
Do not introduce a new design language.

The ATS already has a strong visual language in the Candidates module. The goal is to make the Requisitions module feel like it was built by the same team using the same design system.

==================================================
PRIMARY OBJECTIVE
=================

The Candidates module currently feels significantly more mature, intuitive and production-ready than the Requisitions module.

Transform the Requisitions module so that it mirrors the quality, structure and usability of the Candidates module while preserving requisition-specific functionality.

The final result should feel like:

"Candidates Module for Job Requisitions"

rather than a separate feature with different patterns.

==================================================
KANBAN BOARD REDESIGN
=====================

Redesign the Requisitions board using the Candidates board as the reference.

Keep requisition statuses:

* Draft
* Under Review
* Open
* Fulfilled
* Cancelled
* On Hold

Display them using the same structure used by candidate stages.

Requirements:

* Same kanban layout
* Same column sizing
* Same spacing between columns
* Same stage headers
* Same count indicators
* Same horizontal scrolling behavior
* Same drag-and-drop experience
* Same information density
* Same visual hierarchy

The board should instantly feel familiar to ATS users.

==================================================
TOP NAVIGATION
==============

Match the Candidates page top navigation.

Use:

* Search
* Filters
* View controls
* Theme toggle

Position them exactly like the Candidates module.

Status navigation should match Candidates styling:

All • X
Draft • X
Under Review • X
Open • X
Fulfilled • X
Cancelled • X
On Hold • X

Use the same visual treatment as candidate stage counters.

==================================================
REQUISITION CARDS
=================

Redesign requisition cards to match the Candidate card design language.

Each card should contain:

* Requisition ID
* Position Title
* Department
* Hiring Manager
* Headcount Required
* Employment Type
* Work Arrangement
* Priority
* Open Date
* Target Close Date

Use the same hierarchy, density and readability as Candidate cards.

Priority badges:

* Critical
* High
* Medium
* Low

Use ATS-consistent badge styling.

Cards should look richer, cleaner and more informative.

==================================================
CARD INTERACTIONS
=================

Match Candidate card behavior.

Support:

* Hover states
* Selection states
* Drag interactions
* Click-to-open details
* Status transitions

All interactions should feel identical to Candidates.

==================================================
REQUISITION DETAIL MODAL
========================

Use the attached Candidate Profile screenshot as the direct design reference.

The Requisition Detail View should be the requisition equivalent of the Candidate Profile.

A recruiter should immediately recognize both views as belonging to the same ATS workflow.

==================================================
MODAL STRUCTURE
===============

Reuse the Candidate Profile layout.

Maintain:

* Modal dimensions
* Header structure
* Tab navigation
* Scroll behavior
* Two-column layout
* Card spacing
* Border treatments
* Typography hierarchy
* Right-side utility panels

==================================================
HEADER SECTION
==============

Match Candidate Profile header layout.

Display:

* Position Title
* Requisition ID
* Department
* Hiring Manager
* Current Status

Use the same visual hierarchy used for candidate identity.

==================================================
TABS
====

Use identical tab styling to:

* Overview
* Records
* Emails

For Requisitions create:

* Overview
* Candidates
* Interviews
* Notes
* Activity Timeline

Interactions should match Candidate Profile exactly.

==================================================
OVERVIEW TAB
============

Display:

* Position Title
* Requisition ID
* Department
* Hiring Manager
* Recruiter
* Open Positions
* Filled Positions
* Compensation Range
* Employment Type
* Work Location
* Required Experience
* Required Skills
* Hiring Workflow
* Approval Status
* Job Description Summary

Use the same card layout structure as Candidate Profile.

==================================================
MAIN CONTENT CARDS
==================

Reuse Candidate Profile information architecture.

Map sections as follows:

Application Details
→ Requisition Details

Contact Information
→ Hiring Team

Professional Background
→ Position Requirements

Technical Skills
→ Required Skills

Hiring Timeline
→ Requisition Timeline

Use the same visual treatment for all cards.

==================================================
CANDIDATES TAB
==============

Display all candidates attached to the requisition.

Show:

* Candidate Name
* Stage
* Applied Date
* Recruiter
* Interview Status

Use ATS candidate styling.

Support opening candidate profiles directly.

==================================================
INTERVIEWS TAB
==============

Display:

* Upcoming Interviews
* Completed Interviews
* Feedback Status
* Assigned Interviewers
* Interview Outcomes

Use ATS interview styling.

==================================================
NOTES TAB
=========

Provide recruiter notes.

Display:

* Note History
* Author
* Timestamp
* Internal Comments

Reuse ATS records design patterns.

==================================================
ACTIVITY TIMELINE TAB
=====================

Reuse Candidate Hiring Timeline design.

Display:

* Requisition Created
* Submitted for Approval
* Approved
* Opened
* Candidate Added
* Interview Scheduled
* Offer Released
* Position Filled
* Closed

Use identical timeline styling.

==================================================
RIGHT SIDEBAR
=============

Reuse the Candidate Profile right-side structure.

==================================================
QUICK ACTIONS
=============

Include:

* Add Candidate
* Schedule Interview
* Add Note
* Edit Requisition
* Duplicate Requisition
* Close Requisition
* Archive Requisition

Use existing ATS button styles.

==================================================
CHANGE STATUS
=============

Use the same status selector component used in Candidate Profile.

==================================================
KEY DETAILS
===========

Display:

* Department
* Hiring Manager
* Recruiter
* Open Positions
* Filled Positions
* Compensation Range
* Priority
* Assigned Workflow

Use the same card structure as Candidate Profile.

==================================================
ASSIGNMENT
==========

Display:

* Recruiter Owner
* Hiring Manager
* Department Lead

Use identical styling to Candidate Profile assignment section.

==================================================
HIRING WORKFLOW VISIBILITY
==========================

Display the workflow assigned to the requisition.

Examples:

* Standard Engineering Hiring
* Business Functions Hiring
* Executive Hiring

Show associated workflow stages.

==================================================
ATS CONSISTENCY REQUIREMENTS
============================

The Requisitions module must match the Candidates module for:

* Layout
* Typography
* Borders
* Card design
* Spacing
* Animations
* Hover states
* Modal behavior
* Information hierarchy
* Navigation patterns

The final result should feel like a natural extension of the Candidates module and should be production-ready for enterprise recruiting teams.
