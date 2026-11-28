import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "Git",
    question: "What are the working directory, the staging area and a commit?",
    answer: "The working directory is your files as they are on disk. The staging area (index) holds the changes you have selected for the next commit. A commit is a saved snapshot of the staged project with a message, an author and a pointer to its parent commit. Staging lets you commit related changes together even if you edited several things (git add -p stages part of a file).",
    code: `$ git status                 # what changed, what is staged
$ git add app.py             # stage one file
$ git diff --staged          # review exactly what will be committed
$ git commit -m "Validate empty usernames"`,
    followUps: ["How would you commit only part of the changes in one file?"],
    source: { title: "Pro Git — 2.2 Recording Changes to the Repository", url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository" },
  },
  {
    group: "Git",
    question: "What is the difference between git fetch and git pull?",
    answer: "git fetch downloads new commits from the remote and updates your remote-tracking branches (such as origin/main) without changing your own branches or files. git pull is a fetch followed by integrating the remote changes into your current branch, by merging or, if configured, rebasing. Fetching first lets you inspect what changed before integrating.",
    followUps: ["What does git push do if the remote has commits you don't have?"],
    source: { title: "Pro Git — 2.5 Working with Remotes: Fetching and Pulling", url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_fetching_and_pulling" },
  },
  {
    group: "Git",
    question: "What is a merge conflict, and how do you resolve one?",
    answer: "A conflict happens when two branches change the same part of a file differently and Git cannot decide which version to keep, so it marks the region in the file. Edit the file to the correct final content (often combining both changes), remove the markers, run the tests, then stage and commit. Talk to the author of the other change when the right result is unclear.",
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
    group: "Git",
    question: "What is the difference between merge and rebase?",
    answer: "Merge combines two branches with a merge commit that has both histories as parents; existing commits are unchanged. Rebase replays your branch's commits on top of another branch as new commits, giving a linear history; it is useful for updating a local feature branch before opening a PR. Do not rebase commits others have already pulled: rewriting shared history forces them to reconcile diverging copies.",
    followUps: ["What does your team's policy (merge commits, squash merges or rebasing) change about history?"],
    source: { title: "Pro Git — 3.6 Rebasing (The Perils of Rebasing)", url: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing#_rebase_peril" },
  },
  {
    group: "Git",
    question: "What is the difference between git revert and git reset?",
    answer: "git revert creates a new commit that undoes an earlier commit, preserving history; it is the safe way to undo something already pushed (reverting a merge commit needs -m to choose the parent to keep). git reset moves the current branch pointer: --soft keeps the changes staged, the default --mixed keeps them unstaged and --hard discards them. Resetting pushed commits rewrites shared history and needs a force-push, which can destroy teammates' work.",
    code: `$ git revert a1b2c3d            # new commit that undoes a1b2c3d (safe after pushing)
$ git reset --soft HEAD~1       # undo the last local commit, keep changes staged
$ git restore --staged app.py   # unstage a file, keep the edit
$ git restore app.py            # discard local edits to a file (cannot be undone)`,
    followUps: ["How could you recover a commit after a mistaken reset? (git reflog)"],
    source: { title: "Pro Git — 7.7 Reset Demystified", url: "https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified" },
  },
  {
    group: "Git",
    question: "What makes a good commit and a good pull request?",
    answer: "A good commit is small, does one logical thing, keeps the project working and has a message saying what changed and why (a short summary line, then detail if needed). A good pull request is focused, explains the problem and approach, says how it was tested and points reviewers to anything risky. Smaller PRs get faster, better reviews and are easier to revert.",
    followUps: ["How do you respond to a review comment you disagree with?"],
    source: { title: "Pro Git — 5.2 Contributing to a Project: Commit Guidelines", url: "https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines" },
  },
  {
    group: "Git",
    question: "What is .gitignore for, and what should never be committed?",
    answer: ".gitignore lists file patterns Git should not track: virtual environments, dependency folders, build output, editor files and local configuration. Secrets (API keys, passwords, .env files) must never be committed; once pushed they stay in history, so treat them as leaked and revoke or rotate them first. .gitignore only affects untracked files: a file already committed must be removed from tracking with git rm --cached.",
    followUps: ["You accidentally pushed an API key. What do you do?"],
    source: { title: "GitHub Docs — Removing sensitive data from a repository", url: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository" },
  },
  {
    group: "Command line",
    question: "What are pipes and redirection?",
    answer: "A pipe (|) sends one command's standard output into the next command's standard input, so small tools combine. Redirection sends output to a file: > overwrites, >> appends and 2> redirects standard error, which is a separate stream so errors still reach the terminal when output is piped or saved.",
    code: `$ grep -rn "TODO" src | wc -l                    # count TODO lines in src
$ python app.py > output.txt 2> errors.txt       # output and errors to separate files`,
    followUps: ["What is the difference between standard output and standard error?"],
    source: { title: "The Missing Semester — Command-line Environment: Streams", url: "https://missing.csail.mit.edu/2026/command-line-environment/" },
  },
  {
    group: "Command line",
    question: "What are environment variables and PATH?",
    answer: "Environment variables are named values a process passes to the programs it starts, used for configuration such as API endpoints or secrets kept out of the code. PATH is the ordered list of directories the shell searches for the command you type; the first match wins, which is a common cause of \"wrong Python\" problems. which (where on Windows) shows the executable being used.",
    code: `$ echo $PATH
$ which python3
$ export API_URL="https://example.test"   # set for this shell and the programs it starts`,
    followUps: ["Why should secrets be read from environment variables rather than written in code?"],
    source: { title: "The Missing Semester — Command-line Environment: Environment variables", url: "https://missing.csail.mit.edu/2026/command-line-environment/" },
  },
  {
    group: "Command line",
    question: "A port is already in use, or a program is stuck. How do you find and stop the process?",
    answer: "Find the process ID with lsof -i :PORT (what is listening on a port) or ps, then stop it. Ctrl+C interrupts the foreground program (SIGINT). kill PID asks a process to terminate (SIGTERM) so it can clean up; kill -9 (SIGKILL) forces it and should be a last resort.",
    code: `$ lsof -i :8000                 # which process is listening on port 8000
$ kill 12345                     # ask process 12345 to stop
$ kill -9 12345                  # force, only if it will not stop`,
    followUps: ["What is the difference between a process and a program?"],
    source: { title: "The Missing Semester — Command-line Environment: Signals", url: "https://missing.csail.mit.edu/2026/command-line-environment/" },
  },
  {
    group: "AI-assisted coding",
    question: "How do you evaluate an AI-generated implementation?",
    answer: "I treat it like a pull request from someone I don't know. I check it against the requirements, read every line, and test it with the cases the requirements imply — normal, boundaries, empty and invalid input — not only the ones the assistant chose. I look for side effects, wrong assumptions, invented behavior and security issues, and I check unfamiliar functions in the documentation. I also ask whether it is simpler than necessary or more complex. Here the suggestion looks right but is wrong for even-length lists and reorders the caller's list as a side effect.",
    code: `def median_suggested(values):          # as suggested by an assistant
    values.sort()
    return values[len(values) // 2]

def median(values):                    # after review
    if not values:
        raise ValueError("median of an empty list")
    ordered = sorted(values)           # no side effect on the caller's list
    mid = len(ordered) // 2
    return ordered[mid] if len(ordered) % 2 else (ordered[mid - 1] + ordered[mid]) / 2

data = [4, 1, 3, 2]
print(median_suggested(data), data)   # wrong median, and the input was reordered  # -> 3 [1, 2, 3, 4]
print(median([4, 1, 3, 2]), median([5, 1, 3]))   # -> 2.5 3`,
    followUps: ["Which tests would have caught both problems?"],
    source: { title: "GitHub Docs — Best practices for using GitHub Copilot (Check Copilot's work)", url: "https://docs.github.com/en/copilot/get-started/best-practices" },
  },
  {
    group: "AI-assisted coding",
    question: "What would you do if generated code passed the tests but you did not understand it?",
    answer: "I would not merge it: passing tests only shows it handles the cases someone thought of, and I am responsible for code I submit whoever wrote it. I would read and step through it until I can explain it, check unfamiliar calls in the documentation and add tests for edge cases the existing tests miss. If it is still unclear, I would replace it with a simpler version I can explain. Here the suggestion passes the given tests but is wrong for century years.",
    code: `def is_leap_suggested(year):
    return year % 4 == 0

def is_leap(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

given_tests = [(2024, True), (2023, False)]
print(all(is_leap_suggested(y) == want for y, want in given_tests))   # -> True
print(is_leap_suggested(1900), is_leap(1900), is_leap(2000))        # -> True False True`,
    followUps: ["How do you choose extra test cases for code you didn't write?"],
    source: { title: "GitHub Docs — Best practices for using GitHub Copilot (Check Copilot's work)", url: "https://docs.github.com/en/copilot/get-started/best-practices#check-copilots-work" },
  },
  {
    group: "AI-assisted coding",
    question: "How do you catch fabricated functions, parameters or packages in generated code?",
    answer: "Check every unfamiliar call against the official documentation for the version you use, and run the code — fabricated functions often fail immediately, but a fabricated parameter or a wrong assumption about behavior may not. For a new dependency, confirm the exact package name on the official package index, look at its maintainers, repository and activity, and only then install it: researchers found code models recommending non-existent package names often enough that attackers could register those names with malicious code. Prefer the standard library or an existing project dependency when it does the job.",
    followUps: ["The assistant suggests installing a package you have never heard of. What do you check first?"],
    source: { title: "Spracklen et al. — We Have a Package for You! A Comprehensive Analysis of Package Hallucinations by Code Generating LLMs (arXiv)", url: "https://arxiv.org/abs/2406.10279" },
  },
  {
    group: "AI-assisted coding",
    question: "What security checks do you apply to AI-generated code?",
    answer: "The same as for any code, with extra care because assistants reproduce common insecure patterns confidently. I look for injection (SQL or shell commands built from input), unsafe evaluation (eval, unsafe deserialization), hard-coded or logged secrets, missing authorization checks, disabled certificate verification and unvetted new dependencies. Here a generated calculator uses eval, which runs any Python expression a user sends; a parser that only accepts literals or a small expression grammar is far safer (still limit input size: ast.literal_eval can exhaust memory or the stack on huge input).",
    code: `import ast

user_input = "__import__('os').name"
print(eval(user_input) in ("posix", "nt"))   # eval ran code chosen by the user  # -> True
try:
    ast.literal_eval(user_input)              # accepts only literals such as numbers, strings and lists
except ValueError:
    print("rejected")                          # -> rejected`,
    followUps: ["Which of these security problems are most likely to appear in generated code, and how would you test for them?"],
    source: { title: "Python Docs — ast.literal_eval", url: "https://docs.python.org/3/library/ast.html#ast.literal_eval" },
  },
  {
    group: "AI-assisted coding",
    question: "Can you use AI tools during technical interviews?",
    answer: "Only when the employer explicitly allows it, and only in the way it allows. Policies differ and change (as checked on 25–26 November 2026; recheck before each interview): Google states AI tools are not permitted in its interviews; Microsoft asks candidates to demonstrate their own skills without outside assistance unless explicitly permitted; Meta says many of its interviews, for select roles, include a built-in AI assistant candidates are expected to use, and that no outside AI tools are allowed. Ask your recruiter, follow the written assessment instructions, and prepare in both modes. When AI is allowed, interviewers typically still assess your own reasoning: explain your plan, review and test what the assistant produces, and catch its mistakes out loud.",
    followUps: ["In an AI-assisted round, the assistant gives a solution that looks right. What do you say and do before moving on?"],
    source: { title: "Meta Careers — Hiring process (official)", url: "https://www.metacareers.com/hiring-process/" },
  },
];

export default questions;
