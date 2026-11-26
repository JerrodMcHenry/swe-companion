import type { Topic } from "../types";

const topic: Topic = {
  slug: "git-pull-requests",
  title: "Git and Pull Requests",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "Git records snapshots of a project so you can track changes, work on branches and combine work with others. A pull request (PR) proposes merging a branch into another and is where teammates review the change. This topic covers the everyday workflow — status, staging, commits, branches, syncing with a remote, merging, rebasing, resolving conflicts and undoing mistakes safely — plus writing a reviewable PR.",
  whyItMatters:
    "Almost every engineering team uses Git and a pull-request workflow from your first week, and in this curriculum's R4 sample of 28 entry-level backend and full-stack postings, Git was named in 10 and code review in 15. Interviews rarely test Git deeply, but practical rounds, take-homes and project discussions assume you can use it, and mistakes with destructive commands can lose work. This is mainly a professional competency.",
  prerequisites: ["Command Line and Development Environment (basic navigation)"],
  objectives: [
    "Explain the working directory, the staging area (index) and commits, and use status, add, commit, diff and log.",
    "Create, switch and delete branches, and explain what a branch is (a movable pointer to a commit).",
    "Clone a repository and use fetch, pull and push; explain the difference between fetch and pull.",
    "Merge branches and resolve merge conflicts by editing the conflicted files.",
    "Explain rebase, when it is useful, and why you should not rebase commits others are already using.",
    "Undo safely: restore a file, unstage a change, amend the last local commit, revert a pushed commit; explain why reset --hard and force-push are destructive.",
    "Use .gitignore to keep build output, dependencies and secrets out of the repository.",
    "Write small, focused commits with clear messages, and open a pull request with a useful description.",
    "Respond to review comments and keep a branch up to date with the main branch.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Pro Git — 2.2 Recording Changes, 3.2 Basic Branching and Merging, 3.6 Rebasing, 2.4 Undoing Things",
      url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository",
      provider: "Scott Chacon and Ben Straub (free book)",
      type: "Book",
      instructions:
        "Written, primary. Read 2.2, then 3.2 Basic Branching and Merging, 2.4 Undoing Things and 3.6 Rebasing (all linked from the book's contents). Skip chapters 4–10 (Git on the server, internals).",
    },
    {
      title: "The Missing Semester — Version Control and Git (2026)",
      url: "https://missing.csail.mit.edu/2026/version-control/",
      provider: "MIT",
      type: "Video",
      instructions: "Video and notes alternative: Git's data model explained simply, then the everyday commands. Watch the lecture; do the exercises at the end if you want extra practice.",
    },
    {
      title: "About pull requests",
      url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
      provider: "GitHub Docs",
      type: "Documentation",
      instructions: "Reference for how pull requests, reviews and draft PRs work on GitHub.",
    },
  ],
  exercises: [
    {
      title: "Learn Git Branching",
      url: "https://learngitbranching.js.org/",
      note: "Free external visual exercises. Do the first three sequences on the Main tab and the first sequence on the Remote tab; skip the advanced topics.",
    },
    {
      title: "GitHub Skills — Resolve merge conflicts",
      url: "https://github.com/skills/resolve-merge-conflicts",
      note: "Free guided exercise in your own GitHub repository (requires a free GitHub account).",
    },
    {
      title: "GitHub Skills — Review pull requests",
      url: "https://github.com/skills/review-pull-requests",
      note: "Free guided exercise on reviewing and responding to PRs (requires a free GitHub account).",
    },
    {
      title: "In your own repository: create a feature branch, make two commits, open a pull request with a description (what, why, how tested), then address one review comment with a new commit.",
      note: "Practical. Ask a friend to review, or review it yourself the next day.",
    },
    {
      title: "Create a conflict on purpose: change the same line on two branches, merge, resolve the conflict, run the tests and commit.",
      note: "Practical. Then repeat with rebase instead of merge and compare the history.",
    },
  ],
  interviewQuestions: [
    {
      question: "What are the working directory, the staging area and a commit?",
      answer:
        "The working directory is your files as they are on disk. The staging area (or index) holds the changes you have selected for the next commit. A commit is a saved snapshot of the staged project, with a message, an author and a pointer to its parent commit. Staging lets you commit related changes together even if you edited several things.",
      code: `$ git status                 # what changed, what is staged
$ git add app.py             # stage one file
$ git diff --staged          # review exactly what will be committed
$ git commit -m "Validate empty usernames"
$ git log --oneline -3       # recent history`,
      followUps: ["How would you commit only part of the changes in one file? (git add -p)"],
    },
    {
      question: "What is the difference between git fetch and git pull?",
      answer:
        "git fetch downloads new commits and branches from the remote and updates your remote-tracking branches (such as origin/main) without changing your own branches or files. git pull is a fetch followed by integrating the remote changes into your current branch, by merging or, if configured, rebasing. Fetching first lets you inspect what changed before integrating.",
      code: `$ git fetch origin
$ git log --oneline main..origin/main   # commits on the remote you don't have yet
$ git pull                              # fetch + merge (or rebase) into the current branch`,
      followUps: ["What does git push do if the remote has commits you don't have?"],
    },
    {
      question: "What is a merge conflict, and how do you resolve one?",
      answer:
        "A conflict happens when two branches change the same part of a file differently and Git cannot decide which version to keep. Git marks the conflicting region in the file. You resolve it by editing the file to the correct final content (often combining both changes), removing the markers, running the tests, then staging and committing. Communicating with the author of the other change helps when the right answer is unclear.",
      code: `$ git merge feature/shout
CONFLICT (content): Merge conflict in app.py
$ cat app.py
<<<<<<< HEAD
greeting = 'hi'
=======
greeting = 'HELLO'
>>>>>>> feature/shout
$ # edit app.py to the intended result, then:
$ git add app.py
$ git commit`,
      followUps: ["How can you reduce the number of conflicts on a team?"],
    },
    {
      question: "What is the difference between merge and rebase?",
      answer:
        "Merge combines two branches by creating a merge commit that has both histories as parents; existing commits are unchanged. Rebase replays your branch's commits on top of another branch, creating new commits and a linear history. Rebase is useful for updating a local feature branch before opening a PR. Do not rebase commits that others have already pulled, because rewriting shared history forces them to reconcile diverging copies.",
      code: `$ git switch feature/login
$ git rebase main            # replay feature commits on top of the latest main
$ # versus
$ git merge main             # bring main into the feature branch with a merge commit`,
      followUps: ["What does your team's policy (merge commits, squash merges or rebasing) change about history?"],
    },
    {
      question: "What is the difference between git revert and git reset?",
      answer:
        "git revert creates a new commit that undoes the changes of an earlier commit, so history is preserved; it is the safe way to undo something already pushed. (Reverting a merge commit needs the -m option to choose which parent to keep.) git reset moves the current branch pointer to another commit: --soft keeps the changes staged, the default --mixed keeps them unstaged, and --hard discards them from the working directory. Resetting commits that are already pushed rewrites shared history and usually needs a force-push, which can destroy teammates' work.",
      code: `$ git revert a1b2c3d         # new commit that undoes a1b2c3d (safe after pushing)
$ git reset --soft HEAD~1    # undo the last local commit, keep changes staged
$ git restore --staged app.py   # unstage a file, keep the edit
$ git restore app.py         # discard local edits to a file (cannot be undone)`,
      followUps: ["How could you recover a commit after a mistaken reset? (git reflog)"],
    },
    {
      question: "What makes a good commit and a good pull request?",
      answer:
        "A good commit is small, does one logical thing, keeps the project working and has a message that says what changed and why. A good pull request is focused and reviewable, explains the problem and the approach, says how it was tested, and points reviewers to anything risky. Smaller PRs get faster, better reviews and are easier to revert.",
      code: `$ git commit -m "Reject passwords shorter than 8 characters

Previously any length was accepted. Adds a check in validate_password
and tests for 7- and 8-character inputs."`,
      followUps: ["How do you respond to a review comment you disagree with?"],
    },
    {
      question: "What is .gitignore for, and what should never be committed?",
      answer:
        ".gitignore lists file patterns Git should not track, such as virtual environments, dependency folders, build output, editor files and local configuration. Secrets (API keys, passwords, .env files) must never be committed: once pushed, they stay in history and must be considered leaked and rotated. .gitignore only affects untracked files; a file already committed must be removed from tracking first.",
      code: `$ cat .gitignore
.venv/
__pycache__/
node_modules/
.env
dist/
$ git rm --cached .env      # stop tracking a file committed by mistake (then rotate any secrets)`,
      followUps: ["You accidentally pushed an API key. What do you do?"],
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
