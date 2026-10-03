# 🐼 Day 5 — Your First Dangerous Delete Request

<text color="secondary" size="sm" weight="medium">5-YEAR JAVA EXPERIENCE WORLD · YEAR 1 · SCENARIO 005</text>

**Today's interview question: How would you safely delete or archive a project from MySQL when other records depend on it?**

**Characters:** 🐯 Mentor — Java developer with five years of practical experience. 🐼 Student — recently graduated from college with no industry experience.

<badge color="secondary">Educational scenario · Internship-era Java application</badge>

---

### 🐯 Step 1 — The operations manager wants to remove a project

**Mentor:** Good morning! We have a new request from the operations team.

**Student:** What's today's task?

**Mentor:** Imagine Project 102, *Chennai Survey*, has been completed and delivered to the customer.

The operations manager says:

*"I don't want this completed project appearing in my active-project list anymore. Can you add a Delete button?"*

**Student:** That sounds easy! We just delete Project 102 from MySQL.

**Mentor:** Maybe. But before writing any SQL, I want you to answer one question.

**Why does the manager want to delete it?**

**Student:** Because the project is completed and they don't want to see it?

**Mentor:** Exactly. Does that necessarily mean the company wants to permanently destroy its information?

**Student:** Hmm. Not necessarily. They might only want to hide it from the active list.

**Mentor:** Excellent! 🐯

That's our first important discovery.

**Removing something from a screen is not the same as deleting it from the database.**

### 🦊 Step 2 — Something unexpected happens

**Mentor:** Let's look at the information associated with Project 102.

<box border radius="lg" padding={3} gap={2}>
  <box background="surface-secondary" radius="md" padding={3} gap={1} align="center">
    <icon name="folder" color="#38bdf8" size="lg"/>
    **Project 102 — Chennai Survey**
    <text color="secondary" size="sm">Status: COMPLETED</text>
  </box>
  <icon name="arrow-down" color="secondary" size="lg"/>
  <grid columns={2} gap={2}>
    <grid-item>
      <box background="surface-secondary" radius="md" padding={3} gap={1} align="center" height="100%">
        <icon name="clipboard-check" color="#38bdf8" size="lg"/>
        **QA Review 501**
        <text size="xs" color="secondary" textAlign="center">Quality checks passed</text>
      </box>
    </grid-item>
    <grid-item>
      <box background="surface-secondary" radius="md" padding={3} gap={1} align="center" height="100%">
        <icon name="clipboard-list" color="#38bdf8" size="lg"/>
        **QA Review 502**
        <text size="xs" color="secondary" textAlign="center">Delivery review completed</text>
      </box>
    </grid-item>
  </grid>
  <caption>Illustrative relationship between a project and its associated QA records.</caption>
</box>

**Student:** So one project can have multiple QA reviews?

**Mentor:** Yes. Imagine our application has two MySQL tables.

```text id="a6at8q"
projects
--------------------------------
id    name             status
--------------------------------
102   Chennai Survey   COMPLETED
```

```text id="mfr7ga"
quality_reviews
--------------------------------
id    project_id    result
--------------------------------
501   102           PASSED
502   102           PASSED
```

**Student:** Both QA reviews belong to Project 102.

**Mentor:** Correct.

Now suppose you permanently delete Project 102.

What should happen to those QA reviews?

**Student:** I don't know. They might still be important.

**Mentor:** Exactly!

Maybe the QA team needs them next month. Maybe the company needs historical delivery information. We can't decide to destroy them just because somebody asked for a Delete button.

Now we have a reason to understand two different operations.

---

### 🐨 Step 3 — Hard delete versus soft delete

**Mentor:** There are two common approaches.

<box border radius="lg" padding={3} gap={2}>
  <grid columns={2} gap={2}>
    <grid-item>
      <box background="surface-secondary" radius="md" padding={3} gap={2} height="100%">
        <icon name="trash-2" color="#f0a1a1" size="xl"/>
        **Hard delete**
        <text color="secondary" size="sm">The database row is physically removed.</text>
        <divider color="subtle"/>
        <text size="sm">Project 102 no longer exists in the projects table.</text>
      </box>
    </grid-item>
    <grid-item>
      <box background="surface-secondary" radius="md" padding={3} gap={2} height="100%">
        <icon name="archive" color="#38bdf8" size="xl"/>
        **Soft delete / archive**
        <text color="secondary" size="sm">The row remains, but is marked inactive or archived.</text>
        <divider color="subtle"/>
        <text size="sm">Project 102 remains available for authorized historical access.</text>
      </box>
    </grid-item>
  </grid>
</box>

**Student:** So with hard delete, the information is actually removed?

**Mentor:** Correct. An SQL `DELETE` removes the row.

**Student:** And soft delete?

**Mentor:** Instead of removing the row, we change a column to mark it as archived.

For our example, imagine we introduce an `archived` column.

```text id="crxg34"
projects
----------------------------------------------
id    name             status       archived
----------------------------------------------
102   Chennai Survey   COMPLETED    false
```

After the employee archives it:

```text id="6uk1gi"
projects
----------------------------------------------
id    name             status       archived
----------------------------------------------
102   Chennai Survey   COMPLETED    true
```

**Student:** Oh! The record still exists, but our application knows it shouldn't appear in the active list.

**Mentor:** Exactly.

And because we haven't removed Project 102, its related QA reviews can still reference it.

### 🐯 Step 4 — Try both approaches

**Mentor:** Let's see what would happen with each operation.

{@body const [method,setMethod]=DIL.useState("hard")}
{@body const [projectState,setProjectState]=DIL.useState("active")}
{@body const [outcome,setOutcome]=DIL.useState(null)}
<box border radius="lg" padding={3} gap={3}>
  <row justify="between" align="center">
    <text weight="medium" size="sm">Project 102 — Chennai Survey</text>
    <badge color={projectState==="active"?"secondary":"info"}>{projectState==="active"?"Active":"Archived"}</badge>
  </row>
  <box background="surface-secondary" padding={3} radius="md" gap={2}>
    <row justify="between" align="center">
      <text size="sm" color="secondary">Related QA reviews</text>
      **2 records**
    </row>
    <row justify="between" align="center">
      <text size="sm" color="secondary">Project in database</text>
      **Yes**
    </row>
  </box>
  <box gap={1}>
    <label>Choose an operation</label>
    <radio-group direction="col" value={method} onChange={v=>{setMethod(v);setOutcome(null)}}>
      <radio value="hard">Permanently delete the project</radio>
      <radio value="archive">Archive the project</radio>
    </radio-group>
  </box>
  <button block onClick={()=>{
    if(method==="hard"){setOutcome({kind:"error",text:"DELETE blocked: the two QA reviews still reference Project 102. No records removed."});}
    else if(projectState==="archived"){setOutcome({kind:"info",text:"Project 102 is already archived. No change needed."});}
    else{setProjectState("archived");setOutcome({kind:"success",text:"Project 102 is archived. Its database row and both QA reviews are preserved."});}
  }}>{method==="hard"?"Attempt permanent DELETE":"Archive Project 102"}</button>
  {#if outcome!==null}
    <box background="surface-secondary" radius="md" padding={3} gap={2}>
      <row align="start" gap={2}>
        <icon name={outcome.kind==="success"?"check-circle":outcome.kind==="info"?"info":"alert-triangle"} color={outcome.kind==="success"?"success":outcome.kind==="info"?"secondary":"danger"} size="lg"/>
        <text size="sm">{outcome.text}</text>
      </row>
      {#if projectState==="archived"}
        <text size="sm" color="secondary">Active-project list: Project 102 is hidden. Historical-project list: Project 102 remains accessible.</text>
      {/if}
    </box>
  {/if}
  <button size="sm" color="secondary" variant="outline" onClick={()=>{setMethod("hard");setProjectState("active");setOutcome(null)}}>Reset example</button>
  <caption>Simulation assumes the QA relationship uses a restrictive foreign key. Nothing is deleted or changed in a real database.</caption>
</box>

**Student:** When I tried permanent deletion, the database refused.

**Mentor:** Correct. Let's understand why.

---

### 🦊 Step 5 — Why does MySQL refuse to delete the project?

**Student:** Why does MySQL care that QA Review 501 belongs to Project 102?

**Mentor:** Because relational databases can enforce relationships between tables.

Suppose the `quality_reviews.project_id` column has a **foreign key** referencing `projects.id`.

```text id="dy6ory"
quality_reviews.project_id
             |
             | references
             ↓
        projects.id
```

**Student:** So the foreign key tells the database that a QA review belongs to an existing project?

**Mentor:** Correct!

For this example, imagine we configured the relationship with `ON DELETE RESTRICT`.

That means MySQL must not delete a project while dependent QA review records still reference it.

**Student:** So the database protects the relationship?

**Mentor:** Exactly.

Imagine running:

```sql id="pta96x"
DELETE FROM projects
WHERE id = 102;
```

If QA reviews still reference Project 102 through that restrictive foreign key, the database rejects the deletion.

**Student:** But couldn't we configure it so MySQL deletes the QA reviews too?

**Mentor:** Yes. Some relationships use `ON DELETE CASCADE`.

But think about what that means.

```text id="7baq56"
Delete Project 102
        ↓
Delete QA Review 501
        ↓
Delete QA Review 502
```

**Student:** Oh! We might accidentally lose the QA history.

**Mentor:** Exactly.

Cascading deletion is useful when deleting the parent really should delete its dependents. But we shouldn't choose it without understanding the business requirement.

**The foreign-key behavior must reflect what the business wants to preserve.**

---

### 🐨 Step 6 — The manager clarifies the requirement

**Mentor:** I went back to the operations manager and asked:

*"Do you want Project 102 permanently removed, or do you simply want it to disappear from your active-project list?"*

The manager replied:

*"We still need the project and its QA records for historical reporting. I only want it removed from the active list."*

**Student:** Then archiving makes more sense for this scenario!

**Mentor:** Correct. 🐨

Now we've discovered why we need a soft-delete or archive feature.

It's not because somebody asked us to memorize the term.

It's because permanently deleting the record would solve the wrong problem.

### 🐯 Step 7 — Design an archive column

**Mentor:** Let's represent the archive decision in our database.

We can add a column like this:

```sql id="lh6rva"
ALTER TABLE projects
ADD COLUMN archived BOOLEAN NOT NULL DEFAULT FALSE;
```

**Student:** What does `DEFAULT FALSE` mean?

**Mentor:** Newly inserted projects will not be archived unless we specify otherwise.

In MySQL, `BOOLEAN` is represented using a `TINYINT(1)`-compatible type.

For our simple example:

```text id="gjwamj"
archived = false → Active
archived = true  → Archived
```

**Student:** But we already have a `status` column. Why not just set it to `ARCHIVED`?

**Mentor:** We could design it that way, depending on the business requirements.

But think about this situation.

A project can be **completed** and also **archived**.

Those describe different things.

```text id="38tduo"
status   = COMPLETED
archived = true
```

**Student:** Oh! One tells us where the project is in its workflow. The other tells us whether it belongs in the active list.

**Mentor:** Exactly.

Separating those ideas can be useful when the business needs both.

---

### 🦊 Step 8 — Archive the project using SQL

**Student:** How do we mark Project 102 as archived?

**Mentor:** With an `UPDATE` statement.

You already know the basic operation from Day 4, so we won't repeat that lesson.

Here's the new business operation:

```sql id="4w0kn9"
UPDATE projects
SET archived = TRUE
WHERE id = 102
  AND archived = FALSE;
```

**Student:** Why do we include `AND archived = FALSE`?

**Mentor:** Because we only want to change a project that is currently active.

If somebody tries to archive the same project again, it won't match that condition.

Let's imagine the result.

```text id="thw1a9"
Before:
Project 102 → archived = false

First archive request:
Project 102 → archived = true
Affected rows = 1

Second archive request:
Project 102 → already archived
Affected rows = 0
```

**Student:** So zero affected rows doesn't always mean the project never existed?

**Mentor:** Excellent observation!

In this particular query, zero rows can mean either:

- The requested project ID doesn't exist.
- The project exists but is already archived.

If our application needs to distinguish those situations, we can perform an additional lookup or design an appropriate response.

We shouldn't automatically claim that the project never existed.

### 🐼 Step 9 — How does archiving affect the project list?

**Student:** Okay, the project is archived. But how does it disappear from the active screen?

**Mentor:** Imagine our operations dashboard normally retrieves projects using:

```sql id="ipniu5"
SELECT id, name, status
FROM projects;
```

That query includes both active and archived projects.

For the active-project screen, we can apply a condition:

```sql id="xvrlai"
SELECT id, name, status
FROM projects
WHERE archived = FALSE;
```

**Student:** So archived projects are excluded from the active list?

**Mentor:** Correct.

And a separate historical-project screen could retrieve them using:

```sql id="pg342g"
SELECT id, name, status
FROM projects
WHERE archived = TRUE;
```

**Student:** Oh! So we didn't delete any information. We changed which information the user sees.

**Mentor:** Exactly. 🐯

Notice how our original problem has now been solved.

```text id="mpz6qo"
Operations employee archives Project 102
                  ↓
         MySQL retains project
                  ↓
         QA records remain linked
                  ↓
     Active-project query excludes it
                  ↓
 Historical reporting can still access it
```

---

### 🦁 Step 10 — The authorization problem

**Mentor:** There's another important question.

Should every employee be allowed to archive projects?

**Student:** Probably not. What if an employee accidentally archives an important project?

**Mentor:** Exactly.

The application must check whether the current user is authorized to perform the operation.

For example, imagine only employees with an `OPERATIONS_ADMIN` role can archive projects.

In a properly configured Servlet application, the request could check the user's role:

```java id="ydwzv0"
if (!request.isUserInRole("OPERATIONS_ADMIN")) {
    response.sendError(403, "Not authorized");
    return;
}
```

**Student:** What does HTTP 403 mean?

**Mentor:** It means the server understood the request but refuses to authorize it.

Remember the difference:

| Response | Meaning |
|---|---|
| 400 Bad Request | Submitted input is invalid |
| 403 Forbidden | User is not authorized |
| 404 Not Found | Requested active resource is unavailable or not found |
| 409 Conflict | An operation conflicts with the current data state or business rules |
| 500 Internal Server Error | Unexpected server-side failure |

**Student:** So the application should check permission before making the database change?

**Mentor:** Correct.

And for a browser-based state-changing form, a real application should also have appropriate CSRF protection. Checking a role alone doesn't provide that protection.

---

### 🐯 Step 11 — Put the archive logic together

**Student:** Can we see the complete Java code now?

**Mentor:** Yes. Here's a simplified Servlet showing the new archive operation.

We assume the database connection is configured, the `projects` table has an `archived` column, and authentication and role mapping have already been set up.

```java id="8gkcbo"
@WebServlet("/projects/archive")
public class ProjectArchiveServlet extends HttpServlet {

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException, ServletException {

        if (!request.isUserInRole("OPERATIONS_ADMIN")) {
            response.sendError(403, "Not authorized");
            return;
        }

        int projectId;

        try {
            projectId = Integer.parseInt(
                request.getParameter("projectId")
            );

            if (projectId <= 0) {
                response.sendError(400, "Invalid project ID");
                return;
            }

        } catch (NumberFormatException ex) {
            response.sendError(400, "Invalid project ID");
            return;
        }

        String sql =
            "UPDATE projects "
            + "SET archived = TRUE "
            + "WHERE id = ? AND archived = FALSE";

        try (
            Connection connection = DriverManager.getConnection(
                System.getenv("DB_URL"),
                System.getenv("DB_USER"),
                System.getenv("DB_PASSWORD")
            );

            PreparedStatement statement =
                connection.prepareStatement(sql)
        ) {

            statement.setInt(1, projectId);

            int rowsUpdated = statement.executeUpdate();

            if (rowsUpdated == 0) {
                response.sendError(
                    404,
                    "No active project found for this ID"
                );
                return;
            }

            response.sendRedirect(
                request.getContextPath()
                + "/project-archived.jsp"
            );

        } catch (SQLException ex) {

            throw new ServletException(
                "Unable to archive project", ex
            );
        }
    }
}
```

<caption>Educational implementation, not code verified from your employer. This example omits application configuration, logging, CSRF protection, and additional workflow checks. The success JSP is assumed to exist.</caption>

**Student:** So this code doesn't permanently delete anything?

**Mentor:** Correct!

It changes the archive flag for a matching active project.

**Student:** And if no active project matches, it returns an error?

**Mentor:** Yes. Our example returns `404` with a message saying that no *active* project was found. It doesn't claim the record never existed.

In another design, we might return a successful no-op for a repeated archive request. That depends on the behavior expected by the application.

---

### 🐨 Step 12 — But what if permanent deletion really is required?

**Student:** So should we always use soft delete instead of DELETE?

**Mentor:** No. That's another important distinction.

Sometimes the requirement really is permanent removal.

For example, a company may have approved retention rules that require certain information to be deleted.

In that case, we might execute:

```sql id="krldp1"
DELETE FROM projects
WHERE id = ?;
```

But before doing that, we must understand whether related records exist and what our database constraints require.

**Student:** So if QA reviews still reference the project, what happens?

**Mentor:** With the restrictive foreign key from our example, MySQL refuses to delete the parent project.

The Java application should handle that database constraint failure appropriately instead of pretending the delete succeeded.

**Student:** Could we return HTTP 409?

**Mentor:** Yes, when we've identified that the request conflicts with the current business or data state—for example, the project cannot be deleted while its QA reviews still exist.

But we must not convert *every* database exception into `409`. A connection outage is a different failure.

**Student:** And if permanent deletion is approved?

**Mentor:** Then the deletion strategy must explicitly address dependent records, permissions, retention requirements, and transaction boundaries.

That's a deeper operation than simply running `DELETE`.

---

### 🦊 Step 13 — How this connects with your internship

**Student:** How does this scenario connect with the CRUD screens mentioned in my resume?

**Mentor:** Your reported internship involved Java, Servlets/JSP, JDBC, MySQL, CRUD screens, and database record management.

This lesson helps you understand the difference between deleting a record and archiving one.

It also introduces how a relational database protects relationships between records.

Our Project 102, QA Review 501, archive column, and role names are educational examples. They should not be presented as exact details of your former employer unless you confirm them.

**Student:** So the important skill is understanding what the business actually means before choosing a database operation?

**Mentor:** Exactly. That's a big part of real software development.

---

## 🎯 Day 5 — Interview-ready answer

**Student:** How should I answer if an interviewer asks, "What is the difference between hard delete and soft delete, and how would you implement them using JDBC?"

**Mentor:** You can explain the general design like this:

<WritingBlock id="85413" variant="standard">In a Java application, hard delete and soft delete solve different business requirements.

A hard delete permanently removes a database row using an SQL DELETE statement.

A soft delete keeps the row in the database but marks it as inactive or archived using a column such as archived.

For example, if a completed project must disappear from an active-project dashboard but remain available for historical reporting, soft delete may be appropriate.

Using JDBC, we can execute a parameterized UPDATE statement to mark that specific project as archived. Active-project queries then filter out archived records.

Before allowing an archive or deletion, the application should validate the project ID and check whether the user is authorized.

For permanent deletion, we also need to consider foreign-key relationships. If QA or workflow records still reference the project, a restrictive foreign key can prevent accidental removal.

We check the affected-row count and handle missing records, constraint conflicts, and database failures separately.

The choice between hard delete and soft delete depends on the application's retention rules, data relationships, and business requirements.</WritingBlock>

### 🧠 One-line memory trick

**Delete Request → Understand Business Need → Check Related Records → Authorization → Hard DELETE or Soft Archive → Preserve Data Correctly**

---

## 📘 Day 5 — Test your understanding

**🐯 Mentor:** Before we move to our next scenario, imagine we're reviewing your work together. I want to hear your reasoning, not memorized definitions.

{@body const qs=["A manager says, “Remove completed projects from my active dashboard, but retain their QA history.” Would you choose hard delete or soft archive, and why?","Project 102 has two QA reviews connected through a restrictive foreign key. What can happen if we execute DELETE FROM projects WHERE id = 102?","Our archive UPDATE returns 0 affected rows. Can we immediately conclude that Project 102 never existed? Explain what else could have happened."]}
{@body const [answers,setAnswers]=DIL.useState(["","",""])}
<box border radius="lg" padding={3} gap={3}>
  {#each qs as q,i}
    <box key={i} gap={2}>
      <row align="start" gap={2}>
        <box background="surface-secondary" radius="md" size="28px" align="center" justify="center">
          <text size="sm" weight="medium">{i+1}</text>
        </box>
        <box flex={1}>
          <text size="sm" weight="medium">{q}</text>
        </box>
      </row>
      <textarea rows={3} value={answers[i]} placeholder="Explain in your own words..." onChange={v=>setAnswers(a=>a.map((x,j)=>i===j?v:x))}/>
    </box>
  {/each}
  <button block disabled={!answers.every(a=>a.trim())} onClick={()=>GenUI.issueNewTurn("Please review my Day 5 Scenario 005 understanding test:\n\n"+qs.map((q,i)=>`${i+1}. ${q}\nMy answer: ${answers[i]}`).join("\n\n")+"\nReview in our simple mentor–student conversation style. Do not mark Day 5 complete until I explicitly say Understood.")}>Check my understanding <icon name="arrow-right" size="sm"/></button>
</box>

## 📊 Your Experience World progress

<box border radius="lg" padding={3} gap={2}>
  <row align="center" justify="between">
    **Current career year**
    <text color="#38bdf8" weight="medium">Year 1 · 2018–2019</text>
  </row>
  <divider color="subtle"/>
  <row align="center" justify="between">
    <text color="secondary" size="sm">Days 1–4</text>
    <badge color="success">Understood</badge>
  </row>
  <row align="center" justify="between">
    <text color="secondary" size="sm">Day 5 — Delete or Archive Project</text>
    <badge>Awaiting understanding</badge>
  </row>
  <divider color="subtle"/>
  <row align="center" justify="between">
    <text color="secondary" size="sm">Questions introduced</text>
    **5 / 1,000**
  </row>
  <row align="center" justify="between">
    <text color="secondary" size="sm">Questions confirmed understood</text>
    **4 / 1,000**
  </row>
</box>

**🐯 Mentor:** That's Day 5. You've discovered that building a Delete button is not simply about writing an SQL statement. It's about knowing which information the business wants to remove, which information must remain, and how the database protects related records.

Our next new problem will involve **duplicate project IDs and repeated requests**—what happens when the same project is submitted twice, and how to prevent duplicate information.

For now, Day 5 is in progress. When you're satisfied, say **"Understood."** I'll preserve this complete conversation, update both GitHub checklists, and advance to Question 006.