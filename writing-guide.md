# Writing Documentation with Fumadocs

This guide will walk you through **how to write documentation in Fumadocs**, including:

* Folder structure using the `meta.json` (or similar) format
* Using custom MDX components such as `<Video />` and `<MyImage />`
* Using built‑in Fumadocs UI components (Steps, Card, Accordion, File, Folder, etc.)
* How to structure MDX pages for clean, maintainable docs

---

# 📁 Folder Structure

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

### 🧩 Meaning

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

# ✍️ Writing MDX Files in Fumadocs

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
<MyImage src="/images/python.png" alt="Python Logo" />
```

---

# 🎥 Video Component

Use the `<Video />` component to embed videos.

### Example

```mdx
<Video id="PqFKRqpHrjw" />
```

This renders an embedded YouTube player.

---

# 🖼 Image Component

Your custom `<MyImage />` component supports relative paths.

### Example

```mdx
<MyImage src="/images/cpu.png" alt="CPU Diagram" />
```

Ensure the image exists in:

```
public/images/cpu.png
```

---

# 📦 Built‑in Fumadocs MDX Components

Fumadocs includes many reusable UI components.
Below is a guide for each.

---

## 🪜 Steps & Step

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

## 📁 File & Folder

Useful for showing folder structures.

```mdx
<Folder name="src">
  <File name="index.js" />
  <File name="app.js" />
</Folder>
```

---

## 📚 Card & Cards

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

## 📂 Accordion & Accordions

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

# 🧱 Code Blocks with Titles

Fumadocs allows titles on code blocks:

````mdx
```javascript title="Example: Logging"
console.log("Hello World");
````

````

---

# 📌 Recommended MDX Template

```mdx
---
title: Introduction to Python
description: A beginner‑friendly Python guide.
---

# Introduction
Welcome to Python!

<Video id="PqFKRqpHrjw" />

## CPU Diagram
<MyImage src="/images/cpu.png" alt="CPU Diagram" />

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
````

---

# 🎯 Best Practices

* Keep MDX files small and focused.
* Use components to avoid long plain text blocks.
* Use images and videos to enhance understanding.
* Use Steps for tutorials.
* Use Cards for content grouping.
* Use Accordion for FAQs.

---

# 🎉 Conclusion

You now know how to:

* Structure docs in Fumadocs
* Write MDX with components
* Use `<Video />`, `<MyImage />`, and all Fumadocs UI elements

If you'd like, I can create:

* Templates for Python / Java lessons
* A full documentation system for your project
* Sidebar + layouts setup

Just tell me!
