# Writing Documentation 

This guide will walk you through **how to write documentation in Fumadocs**, including:

* Folder structure using the `meta.json` (or similar) format
* Using custom MDX components such as `<Video />` and `<MyImage />`
* Using built‑in Fumadocs UI components (Steps, Card, Accordion, File, Folder, etc.)
* How to structure MDX pages for clean, maintainable docs

---


# Markdown Basics 

---

## Headings

Use `#` to `######` for headings:

```md
# H1
## H2
### H3
#### H4
```

---

## Ordered & Unordered Lists

### Unordered list

```md
- Item one
- Item two
  - Nested item
```

### Ordered list

```md
1. First
2. Second
3. Third
```

---

## Bold, Italics, Strikethrough

```md
**Bold text**
*Italic text*
~~Strikethrough~~
```

---

## Links

```md
[Open Google](https://google.com)
```

---

## Markdown Images 

```md
![Alt text](/images/picture.png)
```

---


## Horizontal Rule

```md
---
```

---

## Inline Code & Code Blocks

### Inline code

```md
Use `print()` to output text.
```


---

## Tables

```md
| Name | Language |
|------|----------|
| Python | Easy |
| Java | Powerful |
```


---


# Folder Structure

Fumadocs uses a `meta.json` file **inside each folder** to define the navigation order and grouping for that folder.

Example configuration:

```json
{
  "root": true,
  "pages": [
    "index.mdx",
    "---Python---",
    "Intoduction-To-Python",
    "OOPS in Python",
    "---Java---",
    "Introduction-To-Java"
  ]
}
```

### Meaning

* Strings starting with `---` create **section headings** in the sidebar.
* File names WITHOUT extension refer to `.mdx` files.
* Order of items defines **sidebar order**.

Example sidebar:

```
• Home
• Python
   ▸ Intoduction‑To‑Python
   ▸ OOPS in Python
• Java
   ▸ Introduction‑To‑Java
```

---

# Writing MDX Files in Fumadocs

Fumadocs supports plain Markdown plus custom React components.

Example basic MDX:

```mdx
---
title: Introduction To Python
description: Learn Python basics
---

# Introduction to Python
Python is a popular programming language.
```

You can insert components directly:

```mdx
<Video id="abcd123" />
```

---

# Video Component

Use the `<Video />` component to embed videos.

### Example

```mdx
<Video id="PqFKRqpHrjw" />
```

This renders an embedded YouTube player.

---

# Use Image like this
```mdx
![Test](/images/python/p2.png)
```


---

# Built‑in Fumadocs MDX Components

Fumadocs includes many reusable UI components.
Below is a guide for each.

---

## Steps & Step

Use `Steps` to create multi‑step walkthroughs.

```mdx
<Steps>
  <Step>
    ## Step One
    Install Python from python.org.
  </Step>
  <Step>
    ## Step Two
    Run your first program.
  </Step>
</Steps>
```

---

## File & Folder

Useful for showing folder structures.

```mdx
<Folder name="src">
  <File name="index.js" />
  <File name="app.js" />
</Folder>
```

---

## Card & Cards

Use cards to show grouped information.

```mdx
<Cards>
  <Card title="Python">
    Learn Python fundamentals.
  </Card>
  <Card title="Java">
    Learn Java basics.
  </Card>
</Cards>
```

---


# Tabs & Tab (If installed)

Tabbed content.

```mdx
<Tabs>
  <Tab title="Python">
    print("Hello Python")
  </Tab>
  <Tab title="JavaScript">
    console.log("Hello JS");
  </Tab>
</Tabs>
```

---

# Callout / Alert (If available)

Used for important notices.

```mdx
<Callout type="warning">
  Do not delete system files.
</Callout>
```


---

# Badge / Tag (If available)

For labeling versions or statuses.

```mdx
<Badge>Stable</Badge>
```

---


# Quote

Stylized blockquote.

```mdx
<Quote>
  Programming is thinking, not typing.
</Quote>
```

---

## Accordion & Accordions

Good for FAQs or collapsible content.

```mdx
<Accordions>
  <Accordion title="What is Python?">
    Python is a programming language.
  </Accordion>
  <Accordion title="What is Java?">
    Java is also a programming language.
  </Accordion>
</Accordions>
```

---

# Code Blocks with Titles

Fumadocs allows titles on code blocks:

````mdx
```javascript title="Example: Logging"
console.log("Hello World");
```
````

---

# Recommended MDX Template

```mdx
---
title: Introduction to Python
description: A beginner‑friendly Python guide.
---

# Introduction
Welcome to Python!

<Video id="PqFKRqpHrjw" />

## CPU Diagram
![Test](/images/python/p2.png)

<Steps>
  <Step>
    Install Python.
  </Step>
  <Step>
    Write your first script.
  </Step>
</Steps>

<Cards>
  <Card title="Further Reading">
    Learn more advanced topics.
  </Card>
</Cards>
```
