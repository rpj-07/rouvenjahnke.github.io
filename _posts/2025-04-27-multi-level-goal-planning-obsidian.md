---
title: 'A Multi-Level Goal Planning System Using Obsidian with Advanced Features'
date: 2025-04-27
permalink: /posts/2025/04/multi-level-goal-planning-obsidian/
tags:
  - obsidian
  - productivity
  - goal planning
  - markdown
  - knowledge management
excerpt: "Goal planning is a very good habit to track the progress of your work and reflect on past productivity, as well as plan time for the future. In this article, I'll present one of the most customizable tools for this purpose."
---

*This article was originally published on [Medium](https://medium.com/@jahnke.rouven/a-multi-level-goal-planning-system-using-obsidian-29b94acd22f8). Follow me there for more content!*

Goal planning is a very good habit to track the progress of your work and reflect on past productivity, as well as plan time for the future.

I am 17 years old, and in my class, there are no other people who plan and track their goals. But why is it like this?

I think most people who do not plan goals and analyze their work don't know about the big benefits of this time investment. But especially in my class, people haven't even thought about it yet.

This article is not going to be about the benefits of goal planning, but I wanted to mention these things to highlight the importance and to address the people who haven't done it yet.

Summa summarum, it is very important to reflect on this and optimize planning according to individual requirements. I'll present to you one of the most customizable tools for this purpose, which I use to plan my goals and much more!

---

**_This article requiere some advanced knowledge about Obsidian features. If you not hear about Obsidian yet, here is a very short introduction, such that you can think about, if you want to learn Obsidian (I recommend that!):_**[Obsidian](https://obsidian.md/download) is a powerful and highly customizable note-taking and knowledge management app designed for people who want to structure and connect their ideas. It allows you to create, link, and organize plain-text Markdown files on your device as Markdwon-Files, offline-first system for building your personal knowledge base.

One of Obsidian's key features is the extensive **plugin ecosystem**, Obsidian can be tailored to meet a wide range of needs, from task and project management to goal planning and even habit tracking.

Unlike other tools, Obsidian is built around the concept of **linking notes**, which helps you create a "second brain" where your ideas and goals grow organically. Whether you're a student, researcher, or simply someone who loves staying organized, Obsidian provides the tools to take your productivity to the next level.

---

You can download my full example-vault with all the templates and scripts, as well as the plugins [here](https://github.com/rpj-07/goal-planning-vault).

For this workflow I use these plugins:

_mandatory:_

- [Dataview](https://github.com/blacksmithgu/obsidian-dataview)
- [Kanban](https://github.com/mgmeyers/obsidian-kanban)
- [QuickAdd](https://github.com/chhoumann/quickadd)
- [Templater](https://github.com/SilentVoid13/Templater)
- [Buttons](https://github.com/shabegom/buttons)

_optional:_

- [Markwhen](https://github.com/mark-when/markwhen)
- my own created script: [Markwhen-File-Sync](https://github.com/rpj-07/Markwhen-File-Sync)

---

_The workflow I introduced for myself is inspired and particulary adapted from_ [_Christian B. B. Houmann_](https://bagerbach.com/blog/projects-and-goals-obsidian)_, especially some srcipts from him. He also writes about other things related Obsidian, so it could be interesting to visit his website, I recommend that!_

**But let's deep dive into my workflow:**

My system is based on four levels:

1. Yearly Goals
2. Milestones
3. Projects
4. Tasks in the Projects

## Yearly goals

The yearly goals are goals for a year; this time horizon is, for me, the best, but you could also modify this to a longer time.

This is my template for the yearly goals:

{% highlight yaml %}
Created: <% tp.date.now("YYYY-MM-DD") %>  
tags:  
  - focus  
  - yeargoal  
title: "{{VALUE:goal}}"  
date: "{{VALUE:date}}"  
endDate: "{{VALUE:endDate}}"  
status:   
Timespan: "{{VALUE:10 Years, 5 Years, 3 Years, 1 Year, 6 Months, 1 Month, 1 Week}}"  
---  
```button  
name Done  
type command  
action QuickAdd: set-done-with-date  
```  
  
# {{VALUE:goal}}  
  
Bar:: `$= dv.view('goal-average-progress-bar', {file: '{{VALUE:goal}}'})`  
TimeProgress:: `$= dv.view('time-progress-bar', {file: '<%tp.file.title%>'})`
{% endhighlight %}

So I have in the Frontmatter different properties. The properties `date` and `endDate` are the start and end dates of my yearly goal. Because I defined some yearly goals in the middle of one year, I also added the option to set this time not only within one year (e.g. instead of 01.01.2025–31.12.2025 this dates: 01.06.2025–01.06.2026).  
The `status` has these options:  
- not started  
-> the meaning is clear I assume  
- in progress  
-> I am currently working on, respectively I am working on projects from this goal, which are active currently  
- off progress  
-> I am not on schedule or it is taking longer than planned.  
- done.

The `timespan` I adapted from another workflow, but I think that is not so important.

Now, `Bar` and `TimeProgress` are interesting. The first is the Inline Field for the progress bar of the tasks, or more specifically, the proportion of tasks that are completed.  
The `TimeProgress` is the progress of the time, so the proportion of how much time I have until the `endDate`.

The script after this inline field uses the JavaScript files, which are saved in the folder "goal planning/views".  
The [button](https://github.com/shabegom/buttons) query is interesting because it is rendered as this:

![](https://miro.medium.com/v2/resize:fit:571/1*NW7LvEfBeHLUYIEeLX2APg.png)
Screenshot of a example note as a yearly goal

and with which I can set the status to "done" and add a new frontmatter: `completedDate`:

![](https://miro.medium.com/v2/resize:fit:550/1*CdfD0LebbYbirWfBYvvyEA.png)
Screenshot of the completed yearly goal

so that I see this on my yearly or quartely note, so I can track it.

## Milestones

The milestones are particular goals, so the sub-goals of the yearly goals. This is my template:

{% highlight yaml %}
---  
Created: <% tp.date.now("YYYY-MM-DD") %>  
tags:  
  - focus  
  - milestone  
aliases:  
  - "{{VALUE:milestone}}"  
date: "{{VALUE:date}}"  
endDate: "{{VALUE:endDate}}"  
Type: "{{VALUE:Life,Uni,School}}"  
status:   
Timespan: "{{VALUE:10 Years, 5 Years, 3 Years, 1 Year, 6 Months, 1 Month, 1 Week}}"  
---  
```button  
name Done  
type command  
action QuickAdd: set-done-with-date  
```  
  
# <%tp.file.title%>  
  
%%  
Progress:: `$= dv.view('progress', {file: 'M} {{VALUE:milestone}}'})`  
Target:: `$= dv.view('target', {file: 'M} {{VALUE:milestone}}'})`  
Bar:: `$= dv.view('total-progress-bar', {file: 'M} {{VALUE:milestone}}'})`  
Projects:: `$= const projects = dv.page('M} {{VALUE:milestone}}').file.inlinks.where(p => { const mp = dv.page(p.path); return mp.tags?.includes('project') && mp.status === 'in Progress'}); if (projects.length > 0) { dv.header(4, projects.length > 1 ? "Projects" : "Project"); dv.list(projects) }`  
TimeProgress:: `$= dv.view('time-progress-bar', {file: 'M} {{VALUE:milestone}}'})`  
```js quickadd  
// Quartal Multiple-Choice  
const quarters = ["Q1", "Q2", "Q3", "Q4"];  
const getSelectedQuarters = async () => {  
    const selected = [];  
      
    const suggestQuarters = async () => {  
        const remaining = quarters.filter(q => !selected.includes(q));  
        if (remaining.length === 0) return false;  
          
        // Füge Statusanzeige zur Auswahlliste hinzu  
        const currentStatus = selected.length > 0 ?   
            `Bereits gewählt: ${selected.join(", ")}` :   
            "Keine Auswahl getroffen";  
              
        const choice = await this.quickAddApi.suggester(  
            [...remaining, "---" + currentStatus + "---", "✓ Fertig"],  
            [...remaining, null, false]  
        );  
          
        if (choice === false || choice === null) return false;  
        selected.push(choice);  
        return true;  
    };  
      
    while (await suggestQuarters()) {}  
    return selected;  
};  
  
const selectedQuarters = await getSelectedQuarters();  
  
// Wenn keine Auswahl getroffen wurde  
if (selectedQuarters.length === 0) {  
    return "Keine Quartale ausgewählt";  
}  
  
// Formatiere die Ausgabe mit Templater-Syntax  
const formattedQuarters = selectedQuarters.map(q =>   
    `[[<%tp.date.now("YYYY")%> ${q}]]`  
).join(", ");  
  
return `Quartal:: ${formattedQuarters}`;  
```  
```js quickadd  
const yearlyGoalNotes = DataviewAPI.pages("#yeargoal").where(  
    (p) => !p.file.path.includes("Template")  
).values;  
  
const selectedYearlyGoal = await this.quickAddApi.suggester(  
    yearlyGoalNotes.map((p) => p.file.name),  
    yearlyGoalNotes  
);  
  
// Überprüfen ob Alias existiert, sonst Dateiname verwenden  
let alias = (selectedYearlyGoal.aliases && selectedYearlyGoal.aliases.length > 0) ?   
    selectedYearlyGoal.aliases[0] : selectedYearlyGoal.file.name;  
  
console.log("Ausgewähltes Jahresziel:", selectedYearlyGoal);  
console.log("Alias:", alias);  
  
const yearlyGoalFile = app.vault.getAbstractFileByPath(selectedYearlyGoal.file.path);  
let markdownLink = this.app.fileManager.generateMarkdownLink(  
    yearlyGoalFile,  
    ""  
);  
markdownLink = `${markdownLink.slice(0, markdownLink.length - 2)}|${alias}${markdownLink.slice(markdownLink.length - 2)}`;  
return `YearlyGoal:: ${markdownLink}`;  
```  
%%  
  
## What does success look like? What are the key results?  
  
-   
  
## Related core values  
  
-   
  
## Projects to make this happen  
  
### Ideas  
  
-  
  
### Created projects  
  
```dataviewjs  
const pages = dv.current().file.inlinks.where(p => dv.page(p.path).tags?.includes('project'));  
  
dv.table(["Project", "Status", "Completed", "Tasks"], pages.map(p => {  
 const page = dv.page(p.path);  
 const tasks = page.file.tasks;  
 return [  
  page.file.link,  
  page.status,  
  tasks.where(t => t.fullyCompleted === true).length,  
  tasks.length  
 ]  
}));  
```
{% endhighlight %}
```

So here are partly the same properties, but also new scripts:

- **Progress** is the number of all tasks that are completed in the project notes, which are linked to this milestone (see the next section).
- **Target** is the number of all tasks in the project notes that are linked to this milestone.
- **Bar** is then the visualized progress of the tasks from all projects.

Then there are also the `Quartal` and `YearlyGoal` inline fields. The first one is a link to the quarter(s) in which I am going to work on this milestone.  
The `YearlyGoal` is a link to the yearly goal from this milestone.

Then there are different sections in which I write down some information about this milestone, and in the end, there is a Dataview query that shows all the projects that are linked to this milestone.

This is an example:

![](https://miro.medium.com/v2/resize:fit:770/1*eeYX7F8Aa5QJPTV04HpW9Q.png)

## Projects

So the lowest level of notes in my goal planning is the project notes. In these notes, I break down the milestones into projects (on which I work on for a few weeks):

{% highlight yaml %}
---  
Created: <% tp.date.now("YYYY-MM-DD") %>  
tags:  
  - focus  
  - project  
title: "{{VALUE:⚒ Add Project}}"  
date: "{{VALUE:date}}"  
endDate: "{{VALUE:endDate}}"  
status: not started  
subtitle: "{{VALUE:Project Subtitle}}"  
next-step:  
---  
```button  
name Done  
type command>action QuickAdd: set-done-with-date  
```  
  
  
%%  
```js quickadd  
const goalNotes = DataviewAPI.pages("#milestone").where(  
    (p) => !p.file.path.includes("Template")  
).values;  
  
const targetGoal = await this.quickAddApi.suggester(  
    goalNotes.map((p) => p.file.name),  
    goalNotes  
);  
  
// Überprüfen, ob eine `aliases`-Liste existiert und wähle den ersten Eintrag; falls nicht, verwende den Dateinamen  
let alias = (targetGoal.aliases && targetGoal.aliases.length > 0) ? targetGoal.aliases[0] : targetGoal.file.name;  
console.log("Gewähltes Ziel:", targetGoal); // Debugging: Zeigt `targetGoal` an  
console.log("Alias:", alias); // Debugging: Zeigt den Alias oder den Fallback an  
  
const targetGoalFile = app.vault.getAbstractFileByPath(targetGoal.file.path);  
let markdownLink = this.app.fileManager.generateMarkdownLink(  
    targetGoalFile,  
    ""  
);  
markdownLink = `${markdownLink.slice(0, markdownLink.length - 2)}|${alias}${markdownLink.slice(markdownLink.length - 2)}`;  
return `Milestone:: ${markdownLink}`;  
```  
```js quickadd  
const shouldProjectTrackProgress = await this.quickAddApi.yesNoPrompt(`Should this project track progress via markdown tasks?`, 'Enabling this will give the project note a Bar property, similarly to auto-tracked goals. The tasks are auto-tracked, so each time you check one off, you make progress.');  
if (shouldProjectTrackProgress) return "Bar:: `$= dv.view('total-progress-bar', {file: 'P} {{VALUE:⚒ Add Project}}'})`";  
```  
Quartal:: [[<%tp.date.now("YYYY")%> {{VALUE:Q1,Q2,Q3,Q4}}]]  
%%  
  
# {{VALUE:⚒ Add Project}}  
## Project Info  
  
  
  
  
### Tasks  
#todo/focus  
- [ ]   
  
  
  
---  
## Thoughts  
  
  
## Review  
  
### Reflection
{% endhighlight %}

Here are basically the same inline fields. The link to the Milestone and the Quartal follow the same logic as on one higher level, but the Bar is a little bit different.  
So the bar is the progress of the tasks only in this Project Note. Lower in this note is the section for the Tasks.

There you can create tasks for this project, which you can mark as complete, and based on these, you see the progress of the project. When you have created the yearly goals, milestones, and projects, then you can start working on the projects and keep track the progress and, if you have to, change the dates or add tasks.

To organize them, you can use the Project Board in the example vault. When you create the projects, QuickAdd automatically adds a new card to this Kanban:

![](https://miro.medium.com/v2/resize:fit:770/1*tc6uE9xajN_jqKkkxuti3A.png)

When you move this card to one of the other fields, the property `status` will automatically change too (for that, I use the [MetaEdit plugin](https://github.com/chhoumann/MetaEdit)).

I have a dashboard too for that (this is an example from my vault, which is why it is in german):

![](https://miro.medium.com/v2/resize:fit:770/1*z_R28YUZxAFQ7BDuPLqpkA.png)

## Timeline for this goals

A very good option to visualize the projects and milestones is a timeline. Unfortunately, there is no plugin to do that directly.

So I have a workaround with the [Markwhen plugin](https://github.com/mark-when/obsidian-plugin).

Here is an example of the visualization:

![](https://miro.medium.com/v2/resize:fit:770/1*GsGdi-9O7EAfG0FmmdXpmA.png)
Screenshot: Visualisation of the goals


So there you can also move the events and modify the start or end date.

This timeline is based on this Markwhen note:

{% highlight text %}
group 1. Sehr gutes Zeugnis Q1  
2025-01-07/2025-07-14: [[M} 1.2 Sehr gute Unterrichtsbeiträge]] #in-progress  
2025-01-08/2025-07-15: [[M} 1.3 Sehr gute Nacharbeit, sowie Organisation und Obsidian-Workflow (Lernplan, präv. Lernkarten)]] #in-progress  
2025-03-01/2025-07-01: [[M} 1.1 Sehr gute Klausurvorbereitung]] #not-started  
end group  
  
  
group 2. Sehr gute Leistung im Juniorstudium  
2024-10-20/2025-03-03: [[M} 2.1 Sehr gut in Algebra]] #in-progress  
2025-02-03/2025-08-18: [[M} 2.3 Veröffentlichung der ersten Paper]]  
2025-05-07/2025-11-01: [[M} 2.2 Vernetzung mit Professoren und Mitstudenten]]  
end group  
  
  
group 3. Annahme in Oxbridge  
2025-01-01/2025-11-16: [[M} 3.3 Sonderleistung und Verbesserungen der Aufnahmewahrscheinlichkeit (extracurriculare Aktivitäten)]] #in-progress  
2025-05-01/2026-01-26: [[M} 3.1 Sehr gutes Englisch]]  
2025-06-01/2025-12-13: [[M} 3.2 Vorbereitung Interviews und MAT, sowie Bewerbungsstrategie]]  
2025-06-01/2026-01-30: [[M} 3.4 Entry Admission (Applying-Process)]]  
end group  
  
  
group 4. Wissensschatzerweiterung  
2024-11-25/2025-11-01: [[M} X Persönlichkeitsentwicklung und Erweiterung Kompetenz und Wissen]] #in-progress  
end group
{% endhighlight %}


Therefore, I've created a [plugin](https://github.com/rpj-07/Markwhen-File-Sync) which synchronizes the information in the milestone notes to this note (and in the right format), but also synchronizes the modifications from this note to the individual milestone notes.

Additionally, not only are the dates synced, but the milestones are also grouped based on the yearly goals, and the status is added as a tag, allowing you to see the in-progress milestones in a different color than the not-started milestones. You can also see the groups in the visualized timeline (see above the picture). Probably, I'll publish another article about these functionalities when I release my Markwhen-Sync-Plugin.  
_The synchronization is not automatic yet; you have to click a button._

The same visualization exists also for the projects.

Like I said: You can [download all my scripts](https://github.com/rpj-07/goal-planning-vault) and also this plugin from GitHub, but I am going to create a more customizable plugin for any synchronization between Markwhen notes and other notes based on the properties soon ([here is a link](https://github.com/rpj-07/Markwhen-File-Sync)).

I have integrated this goal planning also into my periodic notes / recurring reflections. If you are interested, I am going to write an article about that!

Thank you for reading, I hope you can learn some new things! If you have questions, please write a comment or contact me via email in my profile!