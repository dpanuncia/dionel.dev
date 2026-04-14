# My Cybersecurity Portfolio

## Files in this repo
```
index.html     ← The website. Don't touch this unless you want to change layout.
content.js     ← THE ONLY FILE YOU EDIT. Update this weekly.
README.md      ← This file.
```

---

## How to deploy (one-time setup, ~10 minutes)

1. Create a free account at github.com if you don't have one
2. Create a new repository called `yourusername.github.io`
3. Upload both `index.html` and `content.js` to that repo
4. Go to repo Settings → Pages → set Source to "main branch"
5. Your site is live at `https://yourusername.github.io`

That's it. Free hosting, forever.

---

## How to update your site weekly

**Open `content.js` only.** Never touch `index.html` for content updates.

### Add a blog post
Find the `blog:` array in content.js.
Copy this block and paste it at the TOP (above the first post):

```js
{
  date: "April 2025",
  category: "WALKTHROUGH",   // STORY | WALKTHROUGH | OPINION | TECHNICAL | RESEARCH
  readTime: "5 min read",
  title: "Your Post Title Here",
  preview: "One or two sentences shown on the feed page.",
  content: `Your full post goes here.

You can write multiple paragraphs.
Line breaks are preserved exactly as you type them.`,
},
```

### Add a project card
Find the right array (nocProjects, linuxProjects, etc.) and add:
```js
{ tag: "SCRIPTING", name: "Your Project Name", desc: "Short description.", badge: "Python" },
```

### Update home lab progress
Find `homelab:` and change task status:
```
"planned"      →  task not started
"in-progress"  →  currently working on it
"done"         →  completed
```

### Update CTF stats
Find `ctfStats:` and update your rank/room counts.

### Update currently learning
Find `currentlyLearning:` on the info block:
```js
currentlyLearning: ["Sec+ exam prep", "CCNA labs", "Python automation"],
```

---

## After editing content.js

1. Save the file
2. Go to your GitHub repo
3. Click on `content.js` → Edit (pencil icon)
4. Paste your updated file content
5. Click "Commit changes"
6. Site updates in ~60 seconds. Done.

---

## Tips for weekly updates

- Even a one-paragraph blog post beats silence. Recruiters who check back want to see momentum.
- Update your lab task list every time you complete something — even small wins.
- Update CTF stats monthly.
- The `currentlyLearning` line on the home page should always reflect what you're actively working on.
