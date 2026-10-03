# Day 1 — Scenario 001: Why does a geospatial workflow tracking application exist?

**Date introduced and understood (self-reported):** 2026-10-02  
**Anchor interview question (Experience World Q001/1000):** Can you explain the business problem your recent project was solving?  
**Student confirmation:** "I understood" (explicit in the follow-up chat).  
**Learning status:** UNDERSTOOD, not hands-on demonstrated or interview-verified.  
**Series position:** 1 / 1,000 priority teaching questions. This number is the separate Experience World study track, **not** the existing 2,719-question root checklist.

## Roles and context

- **Mentor:** Illustrative developer with five years' practical Java experience, speaks simply.
- **Student:** Just graduated from college; familiar with introductory Java/OOP/JDBC, no industry experience.
- **USER-REPORTED:** Resume for Aerial Topographic Services Pvt. Ltd. describes internal Java-based project tracking, geospatial workflow monitoring, data validation, exception handling, operational reports, QA coordination, and later React dashboards and Spring Boot APIs.
- **ILLUSTRATIVE ONLY:** The example of three separate Excel sheets with inconsistent statuses and the Hyderabad Mapping project are teaching scenarios. Do **not** claim they literally occurred at the employer unless user confirms.
- **UNKNOWN:** Exact employer architecture, original database schema, frontend/framework per module, data models, or real client/project naming. No production repository has been inspected for these details.

## Mentor–student conversation and learning sequence

**Mentor:** Before writing Java, imagine a mapping project: GIS processes geographic data, QA reviews it, operations monitors progress, and management needs delivery readiness. What if their status records disagree?

```text
GIS Team:       Project 101 → COMPLETED
QA Team:        Project 101 → PENDING
Operations:     Project 101 → IN PROGRESS
```

**Student:** Each team has a different answer about the same project.

**Mentor:** Exactly. An internal tracking application gives authorized teams a centralized view of work. We begin with a simple requirement: operations enters a new project and wants to see it again tomorrow.

```text
Project ID:   101
Project Name: Hyderabad Mapping   (illustrative name)
Status:       CREATED
```

**Student:** I can model that using a Java class.

```java
public class Project {
    private int id;
    private String name;
    private String status;
}
```

**Mentor:** Good. Creating a `new Project()` object puts the object's state in the running application, but does not automatically persist it across a restart.

**Student:** So we need a database if employees should retrieve the project later.

**Mentor:** Correct. Think about this simple request flow:

```text
Operations employee enters details
              ↓
Frontend sends a request
              ↓
Java backend receives it and checks business rules
              ↓
Database persists valid project information
              ↓
Frontend displays the result
```

**Student:** What business rule might fail?

**Mentor:** Project name must be present, for example:

```java
if (projectName == null || projectName.isBlank()) {
    throw new IllegalArgumentException("Project name is required");
}
```

**Student:** Now validation makes sense: protect the application from invalid business data.

**Mentor:** Yes. This lesson only establishes *why* the system exists. We will explain HTTP, JSP/Servlet, JDBC, database transactions, controllers, and production behavior later, when the scenario needs them.

## Interview-ready response — supported by user-reported resume

"In my recent role at Aerial Topographic Services, I worked on internal applications supporting geospatial workflow management and operational reporting. GIS, QA, operations, and management teams needed visibility into mapping projects, processing activities, quality issues, and delivery status. The applications supported project tracking, workflow monitoring, data validation, exception handling, and reporting. My responsibilities included Java/Spring Boot backend development, REST APIs, database operations, React dashboard features, SQL optimization, automation, and production issue resolution. The aim was to improve project visibility and reduce manual effort."

**Do not add** specific employer endpoints, microservice names, database topology, Kafka usage, or production incidents unless separately verified.

## Key distinctions

| Concept | Correct meaning in this lesson |
|---|---|
| Business problem | Teams need accessible and consistent workflow information |
| Java object | In-memory representation, not automatically permanent |
| Database | Persists information between application runs |
| Frontend | Collects/display user information |
| Backend | Handles requests and applies business rules |
| Validation | Rejects invalid submitted information, e.g. missing required name |

**Memory chain:** Mapping Project → Different Teams → Workflow Tracking → Java Application → Database → Centralized Visibility.

## Coverage and continuity

- **Experience World:** Q001 presented and explicitly understood; completed **1/1000** by self-report.
- **Root interview checklist:** Unchanged. No root question ID is automatically completed.
- **No evidence** of hands-on practice or ability to handle all interview follow-ups yet.
- **Next scenario / Q002:** When the employee clicks **Save Project**, how does the data travel from a webpage to Java and into a MySQL database? Explain the internship-era HTML/JSP → Servlet → JDBC → MySQL flow, a blank-name failure, and why prepared statements matter.
- **Next status:** QUEUED until introduced; no completion claimed.
