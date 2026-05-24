# 📚 Git Basics - Complete Beginner's Guide

## 🎯 What is Git?

**Git** is a tool that tracks changes to your code. Think of it like:
- A **save system** for your project
- A **time machine** to go back to any previous version
- A **collaboration tool** to work with others

---

## 🏗️ Understanding the Structure

### **3 Main Locations:**

```
┌─────────────────────────────────────────┐
│  1. Working Directory (Your Computer)   │  ← You make changes here
│     /Users/amritverma/Claude/...        │
└──────────────┬──────────────────────────┘
               │ (git add)
               ↓
┌─────────────────────────────────────────┐
│  2. Staging Area (Preparing to Save)    │  ← You prepare changes here
│     (Virtual holding area)              │
└──────────────┬──────────────────────────┘
               │ (git commit)
               ↓
┌─────────────────────────────────────────┐
│  3. Repository (Saved History)          │  ← Changes saved here
│     .git folder (hidden)                │
└─────────────────────────────────────────┘
               │ (git push)
               ↓
┌─────────────────────────────────────────┐
│  4. GitHub (Cloud Backup)               │  ← Backup on internet
│     https://github.com/...              │
└─────────────────────────────────────────┘
```

---

## 🌿 What are Branches?

**A branch is like a copy of your project where you can work independently.**

### **Example:**

Imagine your project is a book:
- **master branch** = Published version (main, production-ready)
- **feature branch** = Draft where you work on new chapters
- **bugfix branch** = Where you fix errors

You can create, work on, and merge branches without affecting the main version!

### **Visual:**

```
master (main branch)
  |
  ├─── feature/portfolio (your new feature)
  |    |
  |    ├─ Add navbar
  |    └─ Add hero section
  |
  └─── bugfix/styling (bug fixes)
       |
       └─ Fix mobile layout

Then merge them back to master:
  
master
  ├─ Merged feature/portfolio ✅
  └─ Merged bugfix/styling ✅
```

---

## 🚀 Step-by-Step: Creating Pull Request with Git

### **STEP 1: Open Terminal in VS Code**

1. Open VS Code
2. Press `Ctrl + ~` (backtick, below Esc)
3. You should see a terminal at the bottom

### **STEP 2: Check Your Current Status**

```bash
git status
```

**What it does:** Shows what branch you're on and what files changed

**Expected output:**
```
On branch master
nothing to commit, working tree clean
```

### **STEP 3: Create a New Branch**

```bash
git branch feature/portfolio
```

**What it does:** Creates a new branch called `feature/portfolio`

**Branch naming convention:**
- `feature/name` - New features
- `bugfix/name` - Bug fixes
- `docs/name` - Documentation
- `test/name` - Testing

### **STEP 4: Switch to Your New Branch**

```bash
git checkout feature/portfolio
```

**What it does:** Switches you to the new branch

**OR use newer command:**
```bash
git switch feature/portfolio
```

**Verify you switched:**
```bash
git status
```

**Expected output:**
```
On branch feature/portfolio
nothing to commit, working tree clean
```

### **STEP 5: Make Your Changes**

You already made all your changes! Now we're documenting them in git.

### **STEP 6: Check What Files Changed**

```bash
git status
```

**You should see files like:**
```
On branch feature/portfolio

Changes not staged for commit:
  modified:   src/main.ts
  modified:   package.json

Untracked files:
  new file:   src/components/navbar.ts
  new file:   src/styles/main.css
```

### **STEP 7: Add Files to Staging Area**

**Add all files:**
```bash
git add .
```

**What it does:** Stages all changed files (prepares them to be saved)

**OR add specific files:**
```bash
git add src/main.ts
git add package.json
```

**Verify files are staged:**
```bash
git status
```

**Expected output:**
```
On branch feature/portfolio

Changes to be committed:
  new file:   src/main.ts
  new file:   src/components/navbar.ts
  ...
```

### **STEP 8: Create a Commit**

```bash
git commit -m "feat: Add premium portfolio website components"
```

**What it does:** Saves staged files with a message

**Message format:**
```
git commit -m "TYPE: Description"
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Styling
- `refactor` - Code refactoring
- `test` - Tests

**Example commits:**
```bash
git commit -m "feat: Add hero section"
git commit -m "fix: Fix mobile layout"
git commit -m "docs: Update README"
```

**Verify commit:**
```bash
git log --oneline
```

**Expected output:**
```
a1b2c3d feat: Add premium portfolio website components
def4gh5 Initial commit
```

### **STEP 9: Push to GitHub**

```bash
git push -u origin feature/portfolio
```

**What it does:** 
- Uploads your branch to GitHub
- `-u` = Set upstream (links local branch to GitHub)
- `origin` = GitHub remote
- `feature/portfolio` = Branch name

**After first push, use:**
```bash
git push
```

**Expected output:**
```
Enumerating objects: 25, done.
Writing objects: 100% (25/25), done.
remote: Create a pull request for 'feature/portfolio' on GitHub by visiting:
remote:   https://github.com/amritv0306/Personal_portfolio/pull/new/feature/portfolio
```

### **STEP 10: Create Pull Request on GitHub**

1. Go to: `https://github.com/amritv0306/Personal_portfolio`
2. GitHub shows banner: **"Compare & pull request"**
3. Click it!
4. Add title and description
5. Click **"Create pull request"**

### **STEP 11: Review Your PR**

GitHub shows:
- **Base branch**: `master` (where to merge)
- **Compare branch**: `feature/portfolio` (your new code)
- **Files changed**: All your new files
- **Commits**: Your commits

### **STEP 12: Merge Pull Request**

On GitHub PR page:

1. Click **"Merge pull request"** button
2. Click **"Confirm merge"**

**Or from terminal:**
```bash
# Switch to master
git checkout master

# Merge feature branch
git merge feature/portfolio

# Push to GitHub
git push
```

### **STEP 13: Delete Old Branch (Optional)**

```bash
git branch -d feature/portfolio
```

**Delete on GitHub too:**
```bash
git push origin --delete feature/portfolio
```

---

## 📖 Common Git Commands Explained

### **Check Status**
```bash
git status
```
Shows current branch and changed files

### **See Commit History**
```bash
git log
```
Shows all commits (press `q` to exit)

```bash
git log --oneline
```
Shows commits in one line (cleaner)

### **See Branches**
```bash
git branch
```
Lists all local branches (current branch has `*`)

```bash
git branch -a
```
Lists all branches (local and remote)

### **Create and Switch Branch**
```bash
# Method 1: Create then switch
git branch my-feature
git checkout my-feature

# Method 2: Create and switch in one command
git checkout -b my-feature

# Method 3: Using switch (newer)
git switch -c my-feature
```

### **Switch Branches**
```bash
git checkout master
git switch master
```

### **See What Changed**
```bash
git diff
```
Shows differences before staging

```bash
git diff --staged
```
Shows differences after staging

### **Undo Changes**
```bash
# Undo unstaged changes
git checkout -- filename.txt

# Undo staged changes
git reset HEAD filename.txt

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (remove changes)
git reset --hard HEAD~1
```

### **Pull Latest Changes**
```bash
git pull
```
Downloads latest changes from GitHub

### **Stash Changes** (Save temporarily)
```bash
git stash
```
Saves changes without committing

```bash
git stash pop
```
Restores stashed changes

---

## 🎯 Workflow Summary

**Here's the typical workflow:**

```bash
# 1. See current status
git status

# 2. Create new branch for work
git checkout -b feature/my-feature

# 3. Make changes to files (in editor)

# 4. Stage changes
git add .

# 5. Commit changes
git commit -m "feat: Add my feature"

# 6. Push to GitHub
git push -u origin feature/my-feature

# 7. Go to GitHub and create Pull Request

# 8. Merge PR on GitHub

# 9. Switch back to master
git checkout master

# 10. Pull latest changes
git pull

# 11. Delete old branch
git branch -d feature/my-feature
```

---

## 🔍 Understanding Your Current Project

### **Your Branch Structure:**

```
GitHub Repository
└── master branch (main, production code)
    ├── .git/ (hidden folder with history)
    ├── src/
    ├── package.json
    └── README.md
```

### **Your Current Setup:**

1. **Remote**: GitHub (online)
   - Repository: `https://github.com/amritv0306/Personal_portfolio`
   - Branch: `master`

2. **Local**: Your Computer
   - Folder: `/Users/amritverma/Claude/Projects/Personal Portfolio`
   - Branch: `master` (currently)

---

## 🔀 FOR YOUR PROJECT: Create PR Step-by-Step

### **WHAT YOU'LL DO:**

1. **Create a feature branch**: `feature/portfolio-setup`
2. **Make commits**: Document your changes
3. **Push to GitHub**: Upload branch
4. **Create PR**: On GitHub
5. **Merge PR**: Combine with master
6. **Delete branch**: Clean up

### **EXACT COMMANDS FOR YOUR PROJECT:**

**Step 1: Open terminal in VS Code**
```
Ctrl + ~
```

**Step 2: Navigate to your folder**
```bash
cd /Users/amritverma/Claude/Projects/Personal\ Portfolio
```

**Step 3: Check status**
```bash
git status
```

**Step 4: Create feature branch**
```bash
git checkout -b feature/portfolio-setup
```

**Step 5: Verify you're on new branch**
```bash
git status
```

Should show: `On branch feature/portfolio-setup`

**Step 6: Stage all changes**
```bash
git add .
```

**Step 7: Commit with message**
```bash
git commit -m "feat: Add complete premium portfolio website

- Build with Vite + TypeScript
- Add 8 portfolio components
- Add animations and styles
- Add GitHub integration
- Add deployment configuration"
```

**Step 8: Push to GitHub**
```bash
git push -u origin feature/portfolio-setup
```

**Step 9: Go to GitHub**
```
https://github.com/amritv0306/Personal_portfolio
```

Click **"Compare & pull request"** button that appears

**Step 10: Add PR title and description**

**Title:**
```
feat: Premium personal portfolio website

- Vite + TypeScript
- Apple-inspired design
- 8 components
- GitHub integration
```

**Description:**
Copy from PULL_REQUEST.md

**Step 11: Click "Create pull request"**

**Step 12: Click "Merge pull request"** (on PR page)

**Step 13: Confirm merge** (in dialog)

**Step 14: Switch back to master (optional)**
```bash
git checkout master
git pull
```

---

## 💡 Pro Tips

### **Commit Messages Matter**
Good: `feat: Add navbar component with smooth scroll`
Bad: `fixed stuff`, `update`, `asdf`

### **Commit Often**
Better to have 5 small commits than 1 huge commit

### **Use Branches for Everything**
Never work directly on master

### **Write Descriptive PR Descriptions**
Help reviewers understand your changes

### **Always Pull Before Push**
```bash
git pull
git push
```

---

## 🆘 Troubleshooting

### **"fatal: not a git repository"**
```bash
cd /Users/amritverma/Claude/Projects/Personal\ Portfolio
```
Make sure you're in the right folder

### **"fatal: The current branch master has no upstream branch"**
```bash
git push -u origin master
```
This sets the upstream

### **"Your branch is ahead of 'origin/master' by X commits"**
```bash
git push
```
Just push your commits

### **"error: pathspec 'feature/portfolio' did not match any files"**
```bash
git branch -a
```
Check exact branch name, then switch:
```bash
git switch exact-branch-name
```

### **"Please commit your changes before you can merge"**
```bash
git add .
git commit -m "message"
```
Commit your changes first

---

## 📚 Quick Reference

```bash
# Status & Info
git status              See current state
git log --oneline       See commit history
git branch              See all branches

# Create & Switch
git checkout -b name    Create and switch branch
git switch name         Switch to branch
git checkout name       Switch to branch (older)

# Make Changes
git add .               Stage all files
git add file.txt        Stage specific file
git commit -m "msg"     Commit staged files
git push                Push to GitHub
git pull                Pull from GitHub

# Branches
git merge branchname    Merge branch into current
git branch -d name      Delete branch
git push origin --delete name  Delete on GitHub

# Undo
git checkout -- file    Undo file changes
git reset HEAD~1        Undo last commit
```

---

## 🎓 Learning Resources

After this, if you want to learn more:
- `git --help` - Built-in help
- `git [command] --help` - Help for specific command
- https://git-scm.com/doc - Official Git documentation
- https://www.atlassian.com/git/tutorials - Great tutorials

---

## ✅ You're Ready!

Now you understand:
- ✅ What Git is
- ✅ What branches are
- ✅ How to create branches
- ✅ How to commit changes
- ✅ How to create PRs
- ✅ How to merge PRs

**Ready to create your PR?** 

Follow the steps in "FOR YOUR PROJECT" section above!

Good luck! 🚀
