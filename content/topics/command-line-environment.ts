import type { Topic } from "../types";

const topic: Topic = {
  slug: "command-line-environment",
  title: "Command Line and Development Environment",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "The command line is how engineers navigate projects, run programs and tests, search code and diagnose problems; the development environment is everything a project needs to run (language version, dependencies, environment variables, tools). Getting an unfamiliar repository running is one of the first things a new job, take-home or practical round asks of you.",
  whyItMatters:
    "Setting up and running an unfamiliar codebase is one of the first things you do in a new job, in take-home assignments and in practical interview rounds that hand you an existing repository. Being able to read an error, check which Python or package is being used and fix the environment saves hours. Interviews rarely test shell commands directly; this is a professional competency that makes every other task faster.",
  prerequisites: ["Programming Fluency (Unit 1)"],
  objectives: [
    "Navigate with pwd, ls, cd; absolute versus relative paths (relative paths resolve from the current working directory, not the script's location).",
    "Create, copy, move and delete files safely (mkdir, cp, mv, rm); rm has no recycle bin.",
    "Search and view: grep (or ripgrep), find, cat, less, head, tail.",
    "Pipes and redirection: |, >, >>, 2> (stdout versus stderr), and exit codes.",
    "Environment variables and PATH: the first matching executable on PATH runs; which shows which one.",
    "Basic file permissions (ls -l, chmod +x).",
    "Python virtual environments: create, activate, pip install -r requirements.txt, record dependencies; never commit the environment itself.",
    "Processes: Ctrl+C, ps, kill (and why kill -9 is a last resort), and finding what is using a port.",
    "Set up an unfamiliar repository from its README and troubleshoot wrong version, missing dependency, missing variable and port in use.",
    "Skip for now: shell scripting beyond short one-liners, terminal multiplexers, dotfile customization and system administration.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "The Missing Semester — Course Overview + Introduction to the Shell (2026)",
      url: "https://missing.csail.mit.edu/2026/course-shell/",
      provider: "MIT",
      type: "Video",
      instructions:
        "Start here. Watch the lecture or read the notes: navigation, paths, permissions, pipes and redirection. Requires a Unix shell (macOS, Linux, or WSL on Windows). Free; no account.",
    },
    {
      title: "The Missing Semester — Command-line Environment (2026)",
      url: "https://missing.csail.mit.edu/2026/command-line-environment/",
      provider: "MIT",
      type: "Video",
      instructions:
        "Continue with Arguments, Streams, Environment variables, Return codes and Signals. Skip Remote Machines, Terminal Multiplexers, Customizing the Shell, AI in the Shell and Terminal Emulators unless you need them.",
    },
    {
      title: "The Python Tutorial — 12. Virtual Environments and Packages",
      url: "https://docs.python.org/3/tutorial/venv.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Read the whole short chapter: creating and activating a virtual environment, managing packages with pip and requirements files.",
    },
    {
      title: "Install packages in a virtual environment using pip and venv (Python Packaging User Guide)",
      url: "https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/",
      provider: "Python Packaging Authority",
      type: "Documentation",
      instructions: "Reference with the exact commands for macOS/Linux and Windows side by side, including requirements files. Use it to look commands up.",
    },
  ],
  exercises: [
    {
      title: "The Missing Semester — Introduction to the Shell exercises",
      url: "https://missing.csail.mit.edu/2026/course-shell/#exercises",
      note: "Do the exercises on ls -l permissions, globs, standard streams and redirection, exit status with && and ||, chmod +x, the pipe exercise (five most common file extensions) and the curl-and-grep exercise; skip the rest. Practises navigation, pipes, redirection and permissions. No solutions are provided.",
    },
    {
      title: "OverTheWire Bandit — levels 0 to 10",
      url: "https://overthewire.org/wargames/bandit/",
      note: "Free beginner wargame played over SSH on a remote Linux server; no account. Each level is a small puzzle using ls, cd, cat, file, find, grep, sort, uniq and pipes. Stop around level 10; later levels move into encoding, networking and security tools beyond this topic.",
    },
    {
      title: "The Missing Semester — Command-line Environment exercises: Signals and Job Control",
      url: "https://missing.csail.mit.edu/2026/command-line-environment/#exercises",
      note: "Do the first Signals and Job Control exercise (background a sleep job, find it with pgrep and stop it with pkill) and the Environment Variables exercise. Practises processes and environment variables.",
    },
    {
      title: "Clone an unfamiliar open-source Python repository, create a virtual environment, install its dependencies from its README and run its test suite.",
      note: "Applies the whole topic to a real project. Write down every error you hit and how you fixed it (wrong version, missing dependency or variable, port in use); that list is useful in interviews.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between an absolute and a relative path?",
      answer:
        "An absolute path starts from the root of the file system (/home/ana/project/app.py on Linux or macOS) and means the same thing from anywhere. A relative path is interpreted from the current working directory (src/app.py, ../data). Scripts that use relative paths break when run from a different directory; build paths from the script's own location instead (in Python, pathlib.Path(__file__).parent).",
      followUps: ["How would a Python script find a data file next to itself regardless of where it is run from?"],
      source: { title: "The Missing Semester — Introduction to the Shell", url: "https://missing.csail.mit.edu/2026/course-shell/" },
    },
    {
      question: "What are pipes and redirection?",
      answer:
        "A pipe (|) sends one command's standard output into the next command's standard input, so small tools combine. Redirection sends output to a file: > overwrites, >> appends and 2> redirects standard error, which is a separate stream so errors still reach the terminal when output is piped or saved.",
      code: `$ grep -rn "TODO" src | wc -l                    # count TODO lines in src
$ python app.py > output.txt 2> errors.txt       # output and errors to separate files`,
      followUps: ["What is the difference between standard output and standard error?"],
      source: { title: "The Missing Semester — Command-line Environment: Streams", url: "https://missing.csail.mit.edu/2026/command-line-environment/" },
    },
    {
      question: "What are environment variables and PATH?",
      answer:
        "Environment variables are named values a process passes to the programs it starts, used for configuration such as API endpoints or secrets kept out of the code. PATH is the ordered list of directories the shell searches for the command you type; the first match wins, which is a common cause of \"wrong Python\" problems. which (where on Windows) shows the executable being used.",
      code: `$ echo $PATH
$ which python3
$ export API_URL="https://example.test"   # set for this shell and the programs it starts`,
      followUps: ["Why should secrets be read from environment variables rather than written in code?"],
      source: { title: "The Missing Semester — Command-line Environment: Environment variables", url: "https://missing.csail.mit.edu/2026/command-line-environment/" },
    },
    {
      question: "Why use a virtual environment?",
      answer:
        "A virtual environment gives a project its own Python interpreter and installed packages, isolated from other projects and the system Python, so projects can use different package versions without conflicts. The dependency list is recorded (requirements.txt or a lock file) so others can reproduce the setup; the environment folder itself is not committed. Activating it puts its python and pip first on PATH.",
      code: `$ python3 -m venv .venv
$ source .venv/bin/activate      # Windows: .venv\\Scripts\\activate
(.venv) $ pip install -r requirements.txt`,
      followUps: ["What should and should not be committed to Git from a Python project?"],
      source: { title: "The Python Tutorial — 12. Virtual Environments and Packages", url: "https://docs.python.org/3/tutorial/venv.html" },
    },
    {
      question: "How would you get an unfamiliar repository running?",
      answer:
        "Read the README and any contributing or setup docs. Check the required language version, create a virtual environment, install dependencies, copy any example configuration (such as .env.example to .env) and set required variables, then run the tests before changing anything to establish a baseline. When something fails, read the full error: it usually names the missing module, wrong version, missing variable or port conflict.",
      followUps: ["The tests fail before you change anything. What do you do?"],
    },
    {
      question: "A port is already in use, or a program is stuck. How do you find and stop the process?",
      answer:
        "Find the process ID with lsof -i :PORT (what is listening on a port) or ps, then stop it. Ctrl+C interrupts the foreground program (SIGINT). kill PID asks a process to terminate (SIGTERM) so it can clean up; kill -9 (SIGKILL) forces it and should be a last resort.",
      code: `$ lsof -i :8000                 # which process is listening on port 8000
$ kill 12345                     # ask process 12345 to stop
$ kill -9 12345                  # force, only if it will not stop`,
      followUps: ["What is the difference between a process and a program?"],
      source: { title: "The Missing Semester — Command-line Environment: Signals", url: "https://missing.csail.mit.edu/2026/command-line-environment/" },
    },
  ],
  mistakes: [
    "Running rm -rf with a wildcard or variable you have not checked.",
    "Installing packages into the system Python instead of a virtual environment.",
    "Committing the virtual environment folder instead of the requirements file.",
    "Not reading the full error message; the last lines usually name the problem.",
    "Having several Pythons installed and not checking which one is running.",
    "Using sudo to work around a permissions error without understanding it.",
  ],
  mastery: [
    "You can navigate, search and manage files from the terminal without a graphical file manager.",
    "You can set up and run an unfamiliar Python repository from its README, including a virtual environment and its tests.",
    "You can diagnose wrong-version, missing-dependency, missing-variable and port-in-use problems.",
    "You can explain PATH, environment variables and virtual environments.",
    "Skip this topic if you already set up and run unfamiliar repositories from the terminal routinely.",
  ],
  deprioritize: [
    "Shell scripting beyond short command combinations.",
    "Linux system administration, package managers for the operating system, and server configuration.",
    "Editor and shell customization (dotfiles, themes) beyond what you find useful.",
    "Containers (Docker); covered when deployment is introduced.",
  ],
  keywords: [
    "command line",
    "terminal",
    "shell",
    "bash",
    "zsh",
    "path",
    "PATH",
    "environment variables",
    "pipes",
    "redirection",
    "grep",
    "virtual environment",
    "venv",
    "pip",
    "requirements.txt",
    "process",
    "port in use",
  ],
};

export default topic;
