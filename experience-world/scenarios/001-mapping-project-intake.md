# 🐼 Day 1 — Your First Day as a Java Developer

<text color="secondary" size="sm" weight="medium">5-YEAR JAVA EXPERIENCE WORLD · SCENARIO 001</text>

**Today's interview question: Can you explain the business problem your recent project was solving?**

**Characters:** 🐯 Mentor — 5 years of Java development experience. 🐼 Student — just completed Java in college, with zero industry experience.

---

### 🐯 Step 1 — Welcome to the company

**Mentor:** Welcome! Today is your first day on our development team.

Before I show you any Java code, do you know what our company does?

**Student:** Not really. I know Java, OOP, JDBC, and a little SQL. But I have never worked on an actual company project.

**Mentor:** That's okay. Imagine our company works on aerial mapping projects.

For example, a customer needs a detailed map of a city.

The mapping teams process geographic data and prepare the required deliverables.

**Student:** So are we developing software that creates maps?

**Mentor:** Not necessarily. Different systems can handle the actual mapping and geospatial processing.

Our Java application's responsibility in this example is to **track the work happening around those projects**.

Think of it like this:

```text id="tcjr57"
Customer requests a mapping project
                  ↓
          GIS Team processes data
                  ↓
          QA Team checks quality
                  ↓
      Operations Team tracks progress
                  ↓
          Project gets delivered
```

**Student:** Okay, so where exactly does Java come into this picture?

**Mentor:** Excellent question!

### 🦊 Step 2 — Discover the business problem

**Mentor:** Imagine the company is handling 20 mapping projects.

The operations team wants to know:

- Which projects are currently being processed?
- Which projects have quality issues?
- Which projects are completed?
- Which projects are ready for delivery?

But suppose the teams are tracking everything in separate Excel sheets.

**Student:** What's wrong with that?

**Mentor:** Imagine this situation.

```text id="puzml3"
GIS Team's Excel:
Project 101 → COMPLETED ✅

QA Team's Excel:
Project 101 → PENDING ⏳

Operations Team's Excel:
Project 101 → IN PROGRESS ⏳
```

**Student:** Oh! Three teams are showing different information about the same project.

**Mentor:** Exactly.

Now the manager asks:

*"What is the actual status of Project 101?"*

Nobody has one central place to see the entire workflow.

**Student:** So we need to build an application where everyone can access project information?

**Mentor:** Correct! That's the business problem.

We want an internal application that helps authorized employees monitor projects, update statuses, review quality issues, and check delivery readiness.

<box border radius="lg" padding={3} gap={2}>
  <grid columns={2} gap={2}>
    <grid-item>
      <box background="surface-secondary" radius="md" padding={3} gap={2} height="100%">
        <row align="center" gap={2}>
          <icon name="files" color="secondary" size="lg"/>
          **Before**
        </row>
        <text color="secondary" size="sm">Separate records and manual coordination</text>
        <divider color="subtle"/>
        <text size="sm">GIS → Excel A</text>
        <text size="sm">QA → Excel B</text>
        <text size="sm">Operations → Excel C</text>
        <text color="danger" size="sm" weight="medium">Conflicting information</text>
      </box>
    </grid-item>
    <grid-item>
      <box background="surface-secondary" radius="md" padding={3} gap={2} height="100%">
        <row align="center" gap={2}>
          <icon name="monitor" color="#38bdf8" size="lg"/>
          **After**
        </row>
        <text color="secondary" size="sm">Central workflow application</text>
        <divider color="subtle"/>
        <text size="sm">GIS ↘</text>
        <text size="sm">QA → Shared system</text>
        <text size="sm">Operations ↗</text>
        <text color="#38bdf8" size="sm" weight="medium">Centralized visibility</text>
      </box>
    </grid-item>
  </grid>
</box>

**Student:** Now I understand why the application exists. But how will we build it using Java?

### 🐨 Step 3 — Your first business requirement

**Mentor:** Let's start with something small.

An operations employee wants to register a new mapping project.

Our application needs to store the following information:

```text id="z13lhs"
Project ID   : 101
Project Name : Hyderabad Mapping
Status       : CREATED
```

**Student:** That's easy. I can create a Java class!

```java id="avrwur"
public class Project {

    private int id;
    private String name;
    private String status;
}
```

**Mentor:** Exactly! You're already connecting college Java with real development.

The `Project` class represents one project in our application.

**Student:** So if I create an object, the project information is stored?

**Mentor:** Yes, but there's an important problem.

```java id="6syscm"
Project project = new Project();
```

This creates an object in the running application.

What happens when we shut down the application?

**Student:** The object will no longer be available in memory.

**Mentor:** Correct.

But our operations employee expects to open the application tomorrow and still see Project 101.

**Student:** Then we need a database!

**Mentor:** Exactly. 🐯

That's why we introduce a database into our application.

### 🐯 Step 4 — How the pieces connect

**Student:** So does the employee directly access the database?

**Mentor:** No. Usually, they interact with a screen in the application.

Let's imagine a simple workflow.

<box border radius="lg" padding={3} gap={1} align="center">
  <box background="surface-secondary" radius="md" padding={3} width="100%" align="center" gap={1}>
    <icon name="user-round" color="#38bdf8" size="lg"/>
    **Operations Employee**
    <text color="secondary" size="sm">Enters project name and clicks Save</text>
  </box>
  <icon name="arrow-down" color="secondary" size="lg"/>
  <box background="surface-secondary" radius="md" padding={3} width="100%" align="center" gap={1}>
    <icon name="monitor" color="#38bdf8" size="lg"/>
    **Frontend**
    <text color="secondary" size="sm">Collects and submits project information</text>
  </box>
  <icon name="arrow-down" color="secondary" size="lg"/>
  <box background="surface-secondary" radius="md" padding={3} width="100%" align="center" gap={1}>
    <icon name="code-2" color="#38bdf8" size="lg"/>
    **Java Backend**
    <text color="secondary" size="sm">Receives the request and checks business rules</text>
  </box>
  <icon name="arrow-down" color="secondary" size="lg"/>
  <box background="surface-secondary" radius="md" padding={3} width="100%" align="center" gap={1}>
    <icon name="database" color="#38bdf8" size="lg"/>
    **Database**
    <text color="secondary" size="sm">Stores the project information permanently</text>
  </box>
  <icon name="arrow-down" color="secondary" size="lg"/>
  <box border radius="md" padding={2} width="100%" align="center">
    <text color="success" weight="medium">Project saved successfully ✓</text>
  </box>
</box>

**Student:** Wait! What do you mean when you say the Java backend checks business rules?

**Mentor:** Good question. Imagine an employee tries to create a project without entering a project name.

```text id="uzvzss"
Project ID   : 102
Project Name : [EMPTY]
Status       : CREATED
```

Should our system accept that?

**Student:** No. Every project should have a name.

**Mentor:** Exactly.

So the backend might check:

```java id="v0agmi"
if (projectName == null || projectName.isBlank()) {
    throw new IllegalArgumentException(
        "Project name is required"
    );
}
```

**Student:** Oh! So validation is simply checking whether the submitted information follows our rules.

**Mentor:** Correct.

And notice something important.

We didn't introduce validation because somebody asked you to memorize its definition.

We introduced it because **our application has a real problem to solve**.

---

### 🦊 Step 5 — How this relates to your five-year experience

**Student:** How does this small example connect with the bigger applications described in my resume?

**Mentor:** Your reported experience includes internal Java applications for project tracking, workflow monitoring, data validation, QA reporting, and operational dashboards.

This example introduces the business concepts behind those responsibilities.

As we continue, we'll explore how a simple project-registration requirement can grow into more complex requirements.

For example:

```text id="nez6vo"
Create a project
       ↓
Validate project information
       ↓
Save project
       ↓
Track processing status
       ↓
Display status to QA and operations
       ↓
Investigate failed processing
       ↓
Generate operational reports
```

That gives us natural opportunities to learn JDBC, Servlets, Spring Boot, REST APIs, SQL, Hibernate, React, exception handling, and more.

These are educational examples based on your reported domain. We will distinguish them from the actual implementations you can confirm from your work or source code.

---

## 🎯 Today's interview-ready answer

**Student:** If the interviewer asks what business problem my application solved, how should I respond?

**Mentor:** You can use this answer, adjusting any details to match your actual project.

<WritingBlock id="81427" variant="standard">In my recent role at Aerial Topographic Services, I worked on internal applications supporting geospatial workflow management and operational reporting.

The business requirement was to provide better visibility into mapping projects, processing activities, quality issues, and delivery status.

Different teams, including GIS, QA, operations, and management, needed access to relevant project information.

Our applications supported project tracking, workflow monitoring, data validation, exception handling, and reporting.

My responsibilities included developing Java and Spring Boot backend functionality, REST APIs, database operations, and React-based dashboard features.

I also worked on workflow automation, SQL optimization, and production issue resolution.

Overall, the applications helped teams monitor their operations, reduce manual effort, and improve the visibility of project progress.</WritingBlock>

### 🧠 One-line memory trick

**Mapping Project → Different Teams → Workflow Tracking → Java Application → Database → Centralized Visibility**

---

## 📘 Day 1 knowledge checkpoint

{@body const [answers,setAnswers]=DIL.useState(["","",""])}
{@body const prompts=["Why would an operations team need a project-tracking application?","Why can't we store all project information only in Java objects?","What should the backend do if a project name is missing?"]}
<box border radius="lg" padding={3} gap={3}>
  <text color="secondary" size="sm">Try explaining these in your own words, as if the mentor were asking you during your first day.</text>
  {#each prompts as p,i}
    <box gap={1} key={i}>
      <text weight="medium" size="sm">{i+1}. {p}</text>
      <textarea rows={2} value={answers[i]} placeholder="My understanding..." onChange={v=>setAnswers(a=>a.map((x,j)=>j===i?v:x))}/>
    </box>
  {/each}
  <button block color="primary" disabled={!answers.every(a=>a.trim())} onClick={()=>GenUI.issueNewTurn("Here are my answers to Day 1 Scenario 001:\n"+answers.map((a,i)=>`\${i+1}. \${prompts[i]}\n\${a}`).join("\n\n")+"\nReview my understanding in our mentor-student style. Do not mark the scenario complete unless I explicitly confirm it.")}>Check my understanding <icon name="arrow-right" size="sm"/></button>
</box>

<box border radius="lg" padding={3} gap={1}>
  <row align="center" justify="between">
    **Interview question coverage**
    <text color="#38bdf8" weight="medium" size="md" tabularNums>1 / 1,000</text>
  </row>
  <box background="surface-tertiary" height="6px" radius="full" clip>
    <box background="#38bdf8" height="100%" width="0.1%" minWidth="3px"/>
  </box>
  <row align="center" justify="between">
    <text color="secondary" size="xs">Question 001 introduced</text>
    <badge color="secondary">Awaiting understanding</badge>
  </row>
  <text color="secondary" size="xs">GitHub: Scenario 001 marked in progress. Completed: 0 / 1,000. Existing interview checklist unchanged.</text>
</box>

**🐯 Mentor:** That's Day 1. Before we move into writing a real Java backend, I want you to understand the business problem. When everything is clear, say **"Understood."** I'll save your Day 1 knowledge in GitHub, and we'll move to Day 2.