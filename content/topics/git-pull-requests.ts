import type { Topic } from "../types";

const topic: Topic = {
  slug: "git-pull-requests",
  title: "Git and Pull Requests",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "Git tracks a project's history so you can work on branches, combine work with others and undo mistakes; a pull request (PR) proposes merging a branch and is where teammates review the change. You will use both from your first week on almost any engineering team.",
  whyItMatters:
    "Almost every engineering team uses Git and a pull-request workflow from your first week, and in this curriculum's R4 sample of 28 entry-level backend and full-stack postings, Git was named in 10 and code review in 15. Interviews rarely test Git deeply, but practical rounds, take-homes and project discussions assume you can use it, and mistakes with destructive commands can lose work. This is mainly a professional competency.",
  prerequisites: ["Command Line and Development Environment (basic navigation)"],
  objectives: [
    "The working directory, the staging area (index) and commits; status, add, diff (including --staged), commit and log.",
    "A branch is a movable pointer to a commit; create, switch and delete branches.",
    "Clone, fetch, pull and push; fetch updates remote-tracking branches (origin/main) only, pull also integrates into your branch.",
    "Merge branches and resolve conflicts by editing the conflicted files, then re-running the tests.",
    "Rebase replays commits as new commits; never rebase commits others already have.",
    "Undo safely: git restore, git restore --staged, git commit --amend (local commits only), git revert for pushed commits; reset --hard and force-push can discard work.",
    ".gitignore for build output, dependencies, virtual environments and secrets; it only affects untracked files.",
    "Small, focused commits with clear messages; a reviewable PR with what, why and how it was tested; responding to review comments.",
    "Skip for now: Git internals, interactive rebase beyond squashing your own commits, submodules, bisect and branching models such as Git Flow.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Pro Git — 2.2 Recording Changes, 3.2 Basic Branching and Merging, 3.6 Rebasing, 2.4 Undoing Things",
      url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository",
      provider: "Scott Chacon and Ben Straub (free book)",
      type: "Book",
      instructions:
        "Start here. Read, in this order (all linked from the book's contents): 2.2 Recording Changes to the Repository, 2.4 Undoing Things, 2.5 Working with Remotes, 3.1 Branches in a Nutshell, 3.2 Basic Branching and Merging (including Basic Merge Conflicts) and 3.6 Rebasing (including The Perils of Rebasing). Type the commands as you read. Skip chapter 4 onward, except the Commit Guidelines part of 5.2. Free online; no account.",
    },
    {
      title: "The Missing Semester — Version Control and Git (2026)",
      url: "https://missing.csail.mit.edu/2026/version-control/",
      provider: "MIT",
      type: "Video",
      instructions:
        "Video-and-notes alternative to Pro Git, useful if you prefer a lecture: Git's data model (snapshots, commits, references) explained simply, then the everyday commands. Watch the lecture or read the notes; its merge-conflict exercise is listed under exercises.",
    },
    {
      title: "About pull requests",
      url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
      provider: "GitHub Docs",
      type: "Documentation",
      instructions: "Reference for how pull requests, reviews and draft pull requests work on GitHub. Read \"Working with pull requests\" and \"Draft pull requests\"; look the rest up when needed.",
    },
  ],
  exercises: [
    {
      title: "Learn Git Branching",
      url: "https://learngitbranching.js.org/",
      note: "Free visual exercises in the browser, no account. Do the first three sequences on the Main tab (introduction, ramping up, moving work around) and the first sequence on the Remote tab (push, fetch, pull); skip the advanced topics.",
    },
    {
      title: "GitHub Skills — Introduction to GitHub",
      url: "https://github.com/skills/introduction-to-github",
      note: "Guided exercise in your own copy of the repository: create a branch, commit, open a pull request and merge it. Under an hour. Requires a free GitHub account.",
    },
    {
      title: "GitHub Skills — Resolve merge conflicts",
      url: "https://github.com/skills/resolve-merge-conflicts",
      note: "Free guided exercise in your own GitHub repository (requires a free GitHub account). Under 30 minutes; conflicts are resolved in GitHub's web editor.",
    },
    {
      title: "The Missing Semester — Version Control exercises: resolve merge conflicts (recipe.txt)",
      url: "https://missing.csail.mit.edu/2026/version-control/#exercises",
      note: "The last exercise on the page: create two branches that change the same lines of a file locally, merge them and resolve the conflict from the command line. Also try the history exercises (git log, git blame). No account.",
    },
    {
      title: "GitHub Skills — Review pull requests",
      url: "https://github.com/skills/review-pull-requests",
      note: "Free guided exercise on requesting, leaving and applying review suggestions before merging (requires a free GitHub account).",
    },
    {
      title: "In your own project repository: make one change from the command line on a feature branch, push it, open a pull request with a description (what, why, how tested), address one review comment with a new commit and merge.",
      note: "Applies the workflow to real code. Ask a friend to review, or review it yourself the next day.",
    },
  ],
  interviewQuestions: [
    {
      question: "What are the working directory, the staging area and a commit?",
      answer:
        "The working directory is your files as they are on disk. The staging area (index) holds the changes you have selected for the next commit. A commit is a saved snapshot of the staged project with a message, an author and a pointer to its parent commit. Staging lets you commit related changes together even if you edited several things (git add -p stages part of a file).",
      code: `$ git status                 # what changed, what is staged
$ git add app.py             # stage one file
$ git diff --staged          # review exactly what will be committed
$ git commit -m "Validate empty usernames"`,
      followUps: ["How would you commit only part of the changes in one file?"],
      source: { title: "Pro Git — 2.2 Recording Changes to the Repository", url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository" },
    },
    {
      question: "What is the difference between git fetch and git pull?",
      answer:
        "git fetch downloads new commits from the remote and updates your remote-tracking branches (such as origin/main) without changing your own branches or files. git pull is a fetch followed by integrating the remote changes into your current branch, by merging or, if configured, rebasing. Fetching first lets you inspect what changed before integrating.",
      followUps: ["What does git push do if the remote has commits you don't have?"],
      source: { title: "Pro Git — 2.5 Working with Remotes: Fetching and Pulling", url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_fetching_and_pulling" },
    },
    {
      question: "What is a merge conflict, and how do you resolve one?",
      answer:
        "A conflict happens when two branches change the same part of a file differently and Git cannot decide which version to keep, so it marks the region in the file. Edit the file to the correct final content (often combining both changes), remove the markers, run the tests, then stage and commit. Talk to the author of the other change when the right result is unclear.",
      code: `$ git merge feature/shout
CONFLICT (content): Merge conflict in app.py
$ cat app.py
<<<<<<< HEAD
greeting = 'hi'
=======
greeting = 'HELLO'
>>>>>>> feature/shout
$ # edit app.py to the intended result, run the tests, then:
$ git add app.py
$ git commit`,
      followUps: ["How can you reduce the number of conflicts on a team?"],
      source: { title: "Pro Git — 3.2 Basic Merge Conflicts", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts" },
    },
    {
      question: "What is the difference between merge and rebase?",
      answer:
        "Merge combines two branches with a merge commit that has both histories as parents; existing commits are unchanged. Rebase replays your branch's commits on top of another branch as new commits, giving a linear history; it is useful for updating a local feature branch before opening a PR. Do not rebase commits others have already pulled: rewriting shared history forces them to reconcile diverging copies.",
      followUps: ["What does your team's policy (merge commits, squash merges or rebasing) change about history?"],
      source: { title: "Pro Git — 3.6 Rebasing (The Perils of Rebasing)", url: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing#_rebase_peril" },
    },
    {
      question: "What is the difference between git revert and git reset?",
      answer:
        "git revert creates a new commit that undoes an earlier commit, preserving history; it is the safe way to undo something already pushed (reverting a merge commit needs -m to choose the parent to keep). git reset moves the current branch pointer: --soft keeps the changes staged, the default --mixed keeps them unstaged and --hard discards them. Resetting pushed commits rewrites shared history and needs a force-push, which can destroy teammates' work.",
      code: `$ git revert a1b2c3d            # new commit that undoes a1b2c3d (safe after pushing)
$ git reset --soft HEAD~1       # undo the last local commit, keep changes staged
$ git restore --staged app.py   # unstage a file, keep the edit
$ git restore app.py            # discard local edits to a file (cannot be undone)`,
      followUps: ["How could you recover a commit after a mistaken reset? (git reflog)"],
      source: { title: "Pro Git — 7.7 Reset Demystified", url: "https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified" },
    },
    {
      question: "What makes a good commit and a good pull request?",
      answer:
        "A good commit is small, does one logical thing, keeps the project working and has a message saying what changed and why (a short summary line, then detail if needed). A good pull request is focused, explains the problem and approach, says how it was tested and points reviewers to anything risky. Smaller PRs get faster, better reviews and are easier to revert.",
      followUps: ["How do you respond to a review comment you disagree with?"],
      source: { title: "Pro Git — 5.2 Contributing to a Project: Commit Guidelines", url: "https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines" },
    },
    {
      question: "What is .gitignore for, and what should never be committed?",
      answer:
        ".gitignore lists file patterns Git should not track: virtual environments, dependency folders, build output, editor files and local configuration. Secrets (API keys, passwords, .env files) must never be committed; once pushed they stay in history, so treat them as leaked and revoke or rotate them first. .gitignore only affects untracked files: a file already committed must be removed from tracking with git rm --cached.",
      followUps: ["You accidentally pushed an API key. What do you do?"],
      source: { title: "GitHub Docs — Removing sensitive data from a repository", url: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository" },
    },
  ],
  mistakes: [
    "Committing everything with one huge commit and a vague message such as \"fixes\".",
    "Using git reset --hard or git push --force without understanding that they can permanently discard work.",
    "Rebasing or amending commits that teammates have already pulled.",
    "Committing secrets, virtual environments or build output.",
    "Resolving a conflict by blindly keeping one side, then not running the tests.",
    "Working directly on main instead of a feature branch.",
    "Opening very large pull requests that are hard to review.",
  ],
  mastery: [
    "You can complete the normal workflow without help: branch, commit, push, open a PR, address review comments and merge.",
    "You can resolve a merge conflict and verify the result with tests.",
    "You can explain fetch versus pull, merge versus rebase, and revert versus reset, and choose the safe option for a pushed commit.",
    "You keep secrets and generated files out of the repository.",
    "Skip this topic if you already work this way on a team or open-source project and can explain the commands above.",
  ],
  deprioritize: [
    "Git internals (object storage, packfiles, plumbing commands).",
    "Advanced history rewriting (interactive rebase beyond squashing your own commits), submodules, cherry-pick workflows and bisect beyond awareness.",
    "Branching models such as Git Flow; follow your team's convention.",
  ],
  keywords: [
    "git",
    "version control",
    "commit",
    "staging area",
    "branch",
    "merge",
    "rebase",
    "merge conflict",
    "pull request",
    "code review",
    "fetch",
    "pull",
    "push",
    "revert",
    "reset",
    "gitignore",
  ],
};

export default topic;
