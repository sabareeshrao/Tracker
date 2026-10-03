# 🐼 Day 4 — Your First Database Update

<text color="secondary" size="sm" weight="medium">5-YEAR JAVA EXPERIENCE WORLD · YEAR 1 · SCENARIO 004</text>

**Today's interview question: How would you update an existing database record using Java, JDBC, and SQL UPDATE?**

**Characters:** 🐯 Mentor — Java developer with five years of practical experience. 🐼 Student — recently graduated from college with no industry experience.

<badge color="secondary">Educational scenario · Internship-era Java application</badge>

---

### 🐯 Step 1 — Your mentor gives you a new task

**Mentor:** Good morning! The operations manager has reported an issue with our project-tracking application.

**Student:** What happened?

**Mentor:** Remember Project 102?

Our database currently contains:

| Project ID | Project Name | Status |
|---|---|---|
| 101 | Hyderabad Mapping | CREATED |
| 102 | Chennai Survey | PROCESSING |
| 103 | Bengaluru Mapping | COMPLETED |

The manager says:

*"The QA team has confirmed that Chennai Survey is completed, but our application still shows PROCESSING."*

**Student:** So the information is outdated?

**Mentor:** Exactly!

The employee needs to correct the status of Project 102.

```text id="tzwkhk"
Project 102
    |
    | Current status
    ↓
 PROCESSING
    |
    | Employee corrects status
    ↓
 COMPLETED
```

**Student:** That's easy. Can't we just change the text on the screen?

**Mentor:** Interesting idea!

But imagine the employee changes the displayed status to `COMPLETED` without saving the change in MySQL.

What happens when another employee opens the project?

**Student:** They would still see `PROCESSING`.

**Mentor:** Correct!

The change needs to be saved in our database.

Today we'll learn how to modify an existing record without creating another one.

### 🦊 Step 2 — Try the employee's screen

**Mentor:** Let's first understand what the employee expects.

Imagine the following update screen.

{@body const [status,setStatus]=DIL.useState("PROCESSING")}
{@body const [project,setProject]=DIL.useState("102")}
{@body const [stored,setStored]=DIL.useState({101:"CREATED",102:"PROCESSING",103:"COMPLETED"})}
{@body const [result,setResult]=DIL.useState(null)}
{@body const choices=[{value:"CREATED",label:"CREATED"},{value:"PROCESSING",label:"PROCESSING"},{value:"COMPLETED",label:"COMPLETED"}]}
<box border radius="lg" padding={3} gap={3}>
  <row align="center" justify="between">
    <text color="secondary" weight="medium" size="xs">PROJECT STATUS CORRECTION · DEMO</text>
    <icon name="pencil" color="#38bdf8" size="lg"/>
  </row>
  <box gap={1}>
    <label>Project ID</label>
    <input value={project} onChange={v=>{setProject(v);setResult(null)}} placeholder="102"/>
  </box>
  <box gap={1}>
    <label>New Status</label>
    <select block pill={false} value={status} options={choices} onChange={v=>{setStatus(v);setResult(null)}}/>
  </box>
  <button block onClick={()=>{
    if(!/^[1-9][0-9]*$/.test(project.trim())){setResult({type:"error",message:"HTTP 400 — Invalid project ID. No data changed."});return;}
    const id=String(Number(project.trim()));
    if(!Object.prototype.hasOwnProperty.call(stored,id)){setResult({type:"missing",message:"HTTP 404 — Project does not exist. 0 rows updated."});return;}
    setStored(prev=>({...prev,[id]:status}));setResult({type:"success",message:`Project ${id} updated. 1 row matched the update.`});
  }}>Update Project</button>
  {#if result!==null}
    <box background="surface-secondary" radius="md" padding={3} gap={2}>
      <row gap={2} align="center">
        <icon name={result.type==="success"?"check-circle":"alert-circle"} color={result.type==="success"?"success":"danger"}/>
        <text size="sm" color={result.type==="success"?"success":"danger"} weight="medium">{result.message}</text>
      </row>
      {#if result.type==="success"}
        <table>
          <table-row><table-cell>Project ID</table-cell><table-cell>{project}</table-cell></table-row>
          <table-row><table-cell>Stored status</table-cell><table-cell>**{stored[String(Number(project.trim()))]}**</table-cell></table-row>
        </table>
      {/if}
    </box>
  {/if}
  <button size="sm" color="secondary" variant="outline" onClick={()=>{setProject("102");setStatus("PROCESSING");setStored({101:"CREATED",102:"PROCESSING",103:"COMPLETED"});setResult(null)}}>Reset demo</button>
  <caption>This screen simulates an update in memory. It does not connect to the real GitHub project or MySQL database.</caption>
</box>

**Student:** I selected Project 102, changed the status to `COMPLETED`, and clicked Update.

**Mentor:** Excellent. Now let's understand how the Java application performs that change.

### 🐨 Step 3 — Why can't we use INSERT again?

**Student:** Yesterday, we used SQL INSERT to save a project. Can't I use INSERT again with the new status?

**Mentor:** Think carefully.

INSERT creates a **new row**.

We already have Project 102.

If we insert another row, we might create a duplicate or receive a primary-key constraint error.

**Student:** Oh! We don't want another project. We want to modify the existing one.

**Mentor:** Exactly!

That's why SQL provides `UPDATE`.

```sql id="qb1mqe"
UPDATE projects
SET status = 'COMPLETED'
WHERE id = 102;
```

**Student:** What exactly is happening here?

**Mentor:** Let's break it down.

```text id="n9e2cf"
UPDATE projects
       ↓
Choose the projects table

SET status = 'COMPLETED'
       ↓
Change the status column

WHERE id = 102
       ↓
Only target Project 102
```

**Student:** So the project name and ID remain unchanged?

**Mentor:** Correct. Our SQL changes only the specified `status` column.

Other columns remain unchanged by this statement, unless the database has additional behavior such as triggers.

### 🐯 Step 4 — Your first dangerous database mistake

**Mentor:** Suppose you accidentally write:

```sql id="rzo88o"
UPDATE projects
SET status = 'COMPLETED';
```

Notice anything missing?

**Student:** The `WHERE` condition!

**Mentor:** Exactly. 🐯

Now imagine the result.

<grid columns={2} gap={2}>
  <grid-item>
    <box border radius="lg" padding={3} gap={2}>
      <text size="sm" weight="medium">Before update</text>
      <table>
        <table-row><table-cell>101</table-cell><table-cell>CREATED</table-cell></table-row>
        <table-row><table-cell>102</table-cell><table-cell>PROCESSING</table-cell></table-row>
        <table-row><table-cell>103</table-cell><table-cell>COMPLETED</table-cell></table-row>
      </table>
    </box>
  </grid-item>
  <grid-item>
    <box border={{size:1,color:"#d97777"}} radius="lg" padding={3} gap={2}>
      <text size="sm" weight="medium">After UPDATE without WHERE</text>
      <table>
        <table-row><table-cell>101</table-cell><table-cell><text color="danger">COMPLETED</text></table-cell></table-row>
        <table-row><table-cell>102</table-cell><table-cell><text color="danger">COMPLETED</text></table-cell></table-row>
        <table-row><table-cell>103</table-cell><table-cell><text color="danger">COMPLETED</text></table-cell></table-row>
      </table>
    </box>
  </grid-item>
</grid>

**Student:** Oh! It updates every row in the table!

**Mentor:** Correct. A `WHERE` clause specifies which rows should be updated.

In our application, `id` is assumed to be the table's primary key, so identifying Project 102 targets at most one row.

**Student:** So I must be careful when writing UPDATE statements.

**Mentor:** Absolutely.

This is especially important when you're working with business data.

A database operation may execute successfully while making a change you never intended.

### 🦊 Step 5 — How does the request reach Java?

**Student:** Okay. But how does the employee's screen call our Java code?

**Mentor:** Let's create a small HTML form.

```html id="e3wxnq"
<form action="/projects/status" method="post">

    <input name="projectId" value="102">

    <select name="newStatus">
        <option value="PROCESSING">PROCESSING</option>
        <option value="COMPLETED">COMPLETED</option>
    </select>

    <button type="submit">Update Project</button>

</form>
```

**Student:** Wait. We're using POST again?

**Mentor:** Yes.

The employee is submitting a request that changes information on the server.

We shouldn't use a GET request to perform this update.

**Student:** And why is the URL `/projects/status`?

**Mentor:** That's our chosen endpoint for the educational example.

It tells the application that we're submitting a project-status change.

Our Servlet receives:

```text id="we9478"
POST /projects/status

projectId = 102
newStatus = COMPLETED
```

**Student:** So we need another Servlet?

**Mentor:** We can create a `ProjectStatusServlet` to handle this operation.

```java id="jhem7l"
@WebServlet("/projects/status")
public class ProjectStatusServlet extends HttpServlet {

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException, ServletException {

        String projectId =
                request.getParameter("projectId");

        String newStatus =
                request.getParameter("newStatus");
    }
}
```

**Student:** So now Java receives both values.

**Mentor:** Exactly.

But we shouldn't update the database immediately.

There's another problem we need to solve.

---

### 🐼 Step 6 — What if the employee submits an invalid status?

**Mentor:** Imagine somebody sends this request:

```text id="e904b9"
projectId = 102
newStatus = BANANA
```

**Student:** That's not a valid project status!

**Mentor:** Correct.

Our example application permits only these statuses:

```text id="ic8glf"
CREATED
PROCESSING
COMPLETED
```

We can check whether the submitted status belongs to this allowed set.

```java id="fltayg"
Set<String> allowedStatuses = Set.of(
    "CREATED",
    "PROCESSING",
    "COMPLETED"
);

if (!allowedStatuses.contains(newStatus)) {

    response.sendError(
        400,
        "Invalid project status"
    );

    return;
}
```

**Student:** Why don't we accept any String?

**Mentor:** Because our application's business rules define which values are meaningful.

Imagine management opens the dashboard and sees:

```text id="blk9jv"
Project 102 → BANANA
```

That isn't useful workflow information.

**Student:** So validation protects the correctness of our data.

**Mentor:** Exactly.

And in a more developed workflow, we'd also check whether the particular status transition is allowed.

For example, changing from `COMPLETED` back to `CREATED` might require approval. We will explore those more advanced business rules later.

For now, let's update Project 102.

### 🐯 Step 7 — Execute the update using JDBC

**Student:** We have a valid project ID and a valid status.

What happens next?

**Mentor:** Java prepares the SQL statement.

```java id="z0rh6v"
String sql = """
    UPDATE projects
    SET status = ?
    WHERE id = ?
    """;
```

**Student:** Two question marks?

**Mentor:** Correct!

The first is the new status. The second is the project ID.

```java id="294nqf"
PreparedStatement statement =
    connection.prepareStatement(sql);

statement.setString(1, newStatus);
statement.setInt(2, projectId);
```

**Student:** And how do we execute UPDATE?

**Mentor:** Just like INSERT, we use `executeUpdate()`.

```java id="mf2509"
int rowsUpdated = statement.executeUpdate();
```

**Student:** Wait. Why are we saving the return value?

**Mentor:** Because this is something very useful that you haven't needed to examine closely before.

`executeUpdate()` returns an integer indicating the number of affected rows for this JDBC update.

In our simple primary-key update, it helps us distinguish whether a matching row was updated.

### 🐨 Step 8 — What does the affected-row count mean?

**Mentor:** Let's run the update for Project 102.

```sql id="bt0sz5"
UPDATE projects
SET status = 'COMPLETED'
WHERE id = 102;
```

Assuming the row exists, the update count is normally:

```text id="jdpo2d"
rowsUpdated = 1
```

**Student:** Because one project matched the update?

**Mentor:** Exactly.

Now imagine you try Project 999.

```sql id="86btth"
UPDATE projects
SET status = 'COMPLETED'
WHERE id = 999;
```

Our database has no Project 999.

```text id="l3ngy4"
rowsUpdated = 0
```

**Student:** So the SQL statement can execute without throwing an exception, even if no record is found?

**Mentor:** Precisely! 🦊

That's today's most important discovery.

**A successful SQL execution does not necessarily mean the requested record existed.**

| Situation | JDBC result | Application action |
|---|---|---|
| Project 102 exists | 1 row affected | Confirm the update |
| Project 999 doesn't exist | 0 rows affected | Return 404 |
| Database connection fails | SQLException | Handle server error |

For this example, `id` is a primary key, so more than one matching row is not expected. Also, updating an already-equal value can have database-specific nuances; MySQL connection settings may affect how update counts are reported.

**Student:** So we shouldn't immediately display success just because the SQL statement didn't throw an exception?

**Mentor:** Correct.

We should check the outcome.

```java id="r7shli"
int rowsUpdated = statement.executeUpdate();

if (rowsUpdated == 0) {
    response.sendError(404, "Project not found");
    return;
}
```

**Student:** Got it. Now the application knows when the project doesn't exist.

---

### 🦁 Step 9 — Your first update failure

**Mentor:** Let's imagine the employee requests an update, but MySQL is temporarily unavailable.

```text id="1ak6rp"
Employee clicks Update Project
               ↓
Servlet receives the request     ✅
               ↓
Input validation succeeds        ✅
               ↓
JDBC executes UPDATE             ❌
               ↓
Database connection failure
```

**Student:** Then we must not display "Project updated successfully."

**Mentor:** Correct.

A failed database operation must be handled as a failure.

And we should avoid exposing internal database error details to the employee.

A production application would also record useful diagnostic information for the development or support team.

**Student:** What happens if two employees change the same project at the same time?

**Mentor:** Excellent question!

Imagine Employee A changes Project 102 to `PROCESSING`, while Employee B changes it to `COMPLETED`.

Without additional safeguards, one update can overwrite the other.

That's a concurrency problem called a **lost update**.

We'll study concurrency control separately. Today's goal is to understand one update request from start to finish.

---

### 🐯 Step 10 — The complete Java implementation

**Student:** Can you show me how everything connects inside our Servlet?

**Mentor:** Absolutely.

This example uses the same conceptual JDBC setup as earlier lessons, with a `projects` table containing an integer primary key and a status column.

```java id="9nbsbe"
@WebServlet("/projects/status")
public class ProjectStatusServlet extends HttpServlet {

    private static final Set<String> ALLOWED_STATUSES =
            Set.of("CREATED", "PROCESSING", "COMPLETED");

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException, ServletException {

        String rawId = request.getParameter("projectId");
        String newStatus = request.getParameter("newStatus");

        int projectId;

        try {
            projectId = Integer.parseInt(rawId);

            if (projectId <= 0) {
                response.sendError(400, "Invalid project ID");
                return;
            }

        } catch (NumberFormatException ex) {
            response.sendError(400, "Invalid project ID");
            return;
        }

        if (!ALLOWED_STATUSES.contains(newStatus)) {
            response.sendError(400, "Invalid project status");
            return;
        }

        String sql = """
            UPDATE projects
            SET status = ?
            WHERE id = ?
            """;

        try (
            Connection connection = DriverManager.getConnection(
                System.getenv("DB_URL"),
                System.getenv("DB_USER"),
                System.getenv("DB_PASSWORD")
            );

            PreparedStatement statement =
                    connection.prepareStatement(sql)
        ) {

            statement.setString(1, newStatus);
            statement.setInt(2, projectId);

            int rowsUpdated = statement.executeUpdate();

            if (rowsUpdated == 0) {
                response.sendError(404, "Project not found");
                return;
            }

            response.sendRedirect(
                request.getContextPath()
                + "/projects?id="
                + projectId
            );

        } catch (SQLException ex) {

            throw new ServletException(
                "Unable to update project", ex
            );
        }
    }
}
```

<caption>This is illustrative code, not code verified from your employer's repository. It uses Java text blocks, which require Java 15 or later. A real application also needs authorization, appropriate database constraints, and protection against cross-site request forgery.</caption>

**Student:** Why do we redirect to `/projects?id=102` after updating?

**Mentor:** Because we already have a project-details screen from Day 3.

After a successful update, we can redirect the employee there to see the current information.

**Student:** Oh! So we're connecting the feature we built today with the feature we already learned.

**Mentor:** Exactly. That's how software development works. 🐯

We build new features on top of existing functionality.

---

### 🐨 Step 11 — Understand the complete flow

<box border radius="lg" padding={3} gap={1} align="center">
  {#each [{title:"1. Employee",detail:"Changes Project 102 status to COMPLETED",iconName:"user-round"},{title:"2. Browser",detail:"POST /projects/status",iconName:"monitor"},{title:"3. Servlet",detail:"Receives projectId and newStatus",iconName:"code-2"},{title:"4. Validation",detail:"Checks project ID and allowed status",iconName:"shield-check"},{title:"5. JDBC",detail:"Executes UPDATE with PreparedStatement",iconName:"database"},{title:"6. MySQL",detail:"Updates the matching project row",iconName:"hard-drive"},{title:"7. Row count",detail:"Checks whether the requested row was found",iconName:"list-checks"},{title:"8. Browser",detail:"Redirects to the project-details screen",iconName:"check-circle"}] as item,i}
    <box background="surface-secondary" radius="md" padding={3} width="100%">
      <row align="center" gap={3}>
        <icon name={item.iconName} color="#38bdf8" size="lg"/>
        <box flex={1} gap="2px">
          **{item.title}**
          <text color="secondary" size="sm">{item.detail}</text>
        </box>
      </row>
    </box>
    {#if i<7}
      <icon name="arrow-down" color="secondary"/>
    {/if}
  {/each}
</box>

**Student:** So today we learned how to change an existing database record without creating another record.

**Mentor:** Correct.

**Student:** And the important new concepts were SQL UPDATE, the WHERE condition, allowed status values, and the affected-row count.

**Mentor:** Exactly.

You've now seen three different database operations connected to actual user requirements:

| Day | Employee's requirement | SQL operation |
|---|---|---|
| Day 2 | Register a new project | `INSERT` |
| Day 3 | View an existing project | `SELECT` |
| Day 4 | Correct an existing project | `UPDATE` |

Each operation solves a different business problem.

---

## 🎯 Day 4 — Interview-ready answer

**Student:** What should I say if an interviewer asks how I update an existing record using Java and JDBC?

**Mentor:** You can explain the technical process like this:

<WritingBlock id="84731" variant="standard">In a traditional Java web application, we can update existing database records using a Java Servlet, JDBC, and an SQL UPDATE statement.

For example, when an employee wants to correct a project's status, the browser submits an HTTP POST request containing the project ID and the new status.

The Servlet receives the request and validates both values before performing the database operation.

We use a parameterized UPDATE statement with a WHERE condition so that only the intended project is targeted.

JDBC executes the statement using PreparedStatement and executeUpdate().

The returned update count helps us determine whether the requested operation affected the expected record.

If no matching project exists, the application can return HTTP 404. If the input is invalid, it returns HTTP 400.

If a database operation fails, the application handles the exception and avoids reporting a successful update.

After a successful update, the user can be redirected to the project-details screen to view the current information.

This approach allows an existing record to be modified while protecting unrelated records from unintended changes.</WritingBlock>

### 🧠 One-line memory trick

**Employee → HTTP POST → Servlet → Validate ID and Status → SQL UPDATE + WHERE → Check Affected Rows → Show Updated Project**

---

## 📘 Day 4 — Test your understanding

**🐯 Mentor:** Before we move to deleting and archiving records, I want you to explain three things.

Imagine I'm reviewing your code and asking you questions about the feature you just implemented.

{@body const qs=["Why do we use UPDATE instead of INSERT when correcting the status of Project 102?","What could happen if we execute an UPDATE statement without a WHERE condition?","The employee requests an update for Project 999. The SQL executes without an exception, but executeUpdate() returns 0. What should our application do, and why?"]}
{@body const [ans,setAns]=DIL.useState(["","",""])}
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
      <textarea rows={3} value={ans[i]} placeholder="Explain in your own words..." onChange={v=>setAns(prev=>prev.map((a,j)=>j===i?v:a))}/>
    </box>
  {/each}
  <button block disabled={!ans.every(a=>a.trim())} onClick={()=>GenUI.issueNewTurn("Please review my Day 4 Scenario 004 understanding test:\n\n"+qs.map((q,i)=>`${i+1}. ${q}\nMy answer: ${ans[i]}`).join("\n\n")+"\nReview in the same mentor–student style and explain any gaps. Do not mark Day 4 complete until I explicitly say Understood.")}>Check my understanding <icon name="arrow-right" size="sm"/></button>
</box>

## 📊 Your Experience World progress

<box border radius="lg" padding={3} gap={2}>
  <row align="center" justify="between">
    **Current career year**
    <text color="#38bdf8" weight="medium">Year 1 · 2018–2019</text>
  </row>
  <divider color="subtle"/>
  <row align="center" justify="between">
    <text color="secondary" size="sm">Day 1 — Business understanding</text>
    <badge color="success">Understood</badge>
  </row>
  <row align="center" justify="between">
    <text color="secondary" size="sm">Day 2 — Save Project</text>
    <badge color="success">Understood</badge>
  </row>
  <row align="center" justify="between">
    <text color="secondary" size="sm">Day 3 — View Project</text>
    <badge color="success">Understood</badge>
  </row>
  <row align="center" justify="between">
    <text color="secondary" size="sm">Day 4 — Update Project</text>
    <badge>Awaiting understanding</badge>
  </row>
  <divider color="subtle"/>
  <row align="center" justify="between">
    <text color="secondary" size="sm">Questions introduced</text>
    **4 / 1,000**
  </row>
  <row align="center" justify="between">
    <text color="secondary" size="sm">Questions confirmed understood</text>
    **3 / 1,000**
  </row>
</box>

**🐯 Mentor:** That's your fourth day. We've learned how to create, retrieve, and update project records. Our next business requirement will involve removing or archiving a project safely.

For now, Day 4 remains in progress. When you say **"Understood,"** I'll preserve this complete conversation in GitHub, update the mentor and experience checklists, and advance to Question 005.