import type { Topic } from "../types";

const topic: Topic = {
  slug: "command-line-environment",
  title: "Command Line and Development Environment",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "The command line is how engineers navigate projects, run programs and tests, search code and diagnose problems. A development environment is everything a project needs to run: the right language version, installed dependencies, environment variables and tools. This topic covers enough shell and environment skills to clone an unfamiliar repository, get it running and troubleshoot when it does not.",
  whyItMatters:
    "Setting up and running an unfamiliar codebase is one of the first things you do in a new job, in take-home assignments and in practical interview rounds that hand you an existing repository. Being able to read an error, check which Python or package is being used and fix the environment saves hours. Interviews rarely test shell commands directly; this is a professional competency that makes every other task faster.",
  prerequisites: ["Programming Fluency (Unit 1)"],
  objectives: [
    "Navigate the file system with pwd, ls, cd and absolute versus relative paths.",
    "Create, copy, move and delete files and directories safely (mkdir, cp, mv, rm), knowing rm does not use a recycle bin.",
    "Search files and code with grep (or ripgrep) and find, and view files with cat, less, head and tail.",
    "Combine commands with pipes and redirect output to files (|, >, >>).",
    "Explain environment variables and PATH, and why the wrong executable can run.",
    "Read and change basic file permissions, including making a script executable.",
    "Create and activate a Python virtual environment, install dependencies with pip from requirements, and record them.",
    "Inspect and stop processes (ps, top, kill, Ctrl+C), and find what is using a port.",
    "Follow a README to set up an unfamiliar repository, and troubleshoot common failures (wrong version, missing dependency, missing variable, port in use).",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "The Missing Semester — Course Overview + Introduction to the Shell (2026)",
      url: "https://missing.csail.mit.edu/2026/course-shell/",
      provider: "MIT",
      type: "Video",
      instructions: "Video and notes, primary: navigation, paths, permissions, pipes and redirection. Watch the lecture and do the short exercises.",
    },
    {
      title: "The Missing Semester — Command-line Environment (2026)",
      url: "https://missing.csail.mit.edu/2026/command-line-environment/",
      provider: "MIT",
      type: "Video",
      instructions: "Continue with processes, signals, environment variables and dotfiles. Skip terminal multiplexers and remote machines unless you need them.",
    },
    {
      title: "The Python Tutorial — 12. Virtual Environments and Packages",
      url: "https://docs.python.org/3/tutorial/venv.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Written. Read the whole short chapter: creating and activating a virtual environment and managing packages with pip.",
    },
    {
      title: "Installing Packages (Python Packaging User Guide)",
      url: "https://packaging.python.org/en/latest/tutorials/installing-packages/",
      provider: "Python Packaging Authority",
      type: "Documentation",
      instructions: "Reference for pip, requirements files and common installation problems. Read the sections on virtual environments and requirements files.",
    },
  ],
  exercises: [
    {
      title: "From the terminal only: create a project folder, a virtual environment, install requests, freeze dependencies to requirements.txt, delete the environment, and recreate it from the file.",
      note: "Foundation.",
    },
    {
      title: "Clone an unfamiliar open-source Python repository you have never seen, follow its README to install dependencies and run its test suite.",
      note: "Practical. Write down every error you hit and how you fixed it; that list is useful in interviews.",
    },
    {
      title: "Use grep and pipes to answer: which files define a given function, how many TODO comments exist, and which ten words appear most often in a text file.",
      note: "Reinforcement.",
    },
    {
      title: "Start a local web server (python -m http.server 8000), find its process, try to start a second one on the same port, read the error, then stop the first.",
      note: "Troubleshooting practice.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between an absolute and a relative path?",
      answer:
        "An absolute path starts from the root of the file system (/home/ana/project/app.py on Linux or macOS) and means the same thing from anywhere. A relative path is interpreted from the current working directory (src/app.py, ../data). Scripts that use relative paths can break when run from a different directory; build paths relative to the script's own location instead.",
      code: `$ pwd
/home/ana/project
$ ls src/app.py               # relative to the current directory
$ ls /home/ana/project/src/app.py   # absolute
$ cd ..                       # parent directory`,
      followUps: ["How would a Python script find a data file next to itself regardless of where it is run from?"],
    },
    {
      question: "What are pipes and redirection?",
      answer:
        "A pipe (|) sends one command's output into the next command's input, so small tools can be combined. Redirection sends output to a file: > overwrites, >> appends, and 2> redirects error output. Combining them lets you search, filter, count and save results quickly without writing a program.",
      code: `$ grep -rn "TODO" src | wc -l          # count TODO lines in src
$ python app.py > output.txt 2> errors.txt
$ cat access.log | cut -d' ' -f1 | sort | uniq -c | sort -rn | head -5   # top 5 client IPs`,
      followUps: ["What is the difference between standard output and standard error?"],
    },
    {
      question: "What are environment variables and PATH?",
      answer:
        "Environment variables are named values passed to every program a shell starts, used for configuration such as API endpoints or secrets, kept out of the code. PATH is a list of directories the shell searches, in order, to find the command you type. If two versions of a tool exist, the first one on PATH wins, which is a common cause of \"wrong Python\" problems; which (or where on Windows) shows the one being used.",
      code: `$ echo $PATH
$ which python3
$ export API_URL="https://example.test"   # set for this shell session
$ python3 -c "import os; print(os.environ.get('API_URL', 'not set'))"
https://example.test`,
      followUps: ["Why should secrets be read from environment variables rather than written in code?"],
    },
    {
      question: "Why use a virtual environment?",
      answer:
        "A virtual environment gives a project its own Python interpreter and installed packages, isolated from other projects and from the system Python. Different projects can then use different package versions without conflicts, and the dependency list can be recorded (requirements.txt or a lock file) so others can reproduce the setup. Activating it puts its python and pip first on PATH.",
      code: `$ python3 -m venv .venv
$ source .venv/bin/activate      # Windows: .venv\\Scripts\\activate
(.venv) $ pip install -r requirements.txt
(.venv) $ python -m pytest
(.venv) $ deactivate`,
      followUps: ["What should and should not be committed to Git from a Python project?"],
    },
    {
      question: "How would you get an unfamiliar repository running?",
      answer:
        "Read the README and any contributing or setup docs first. Check the required language version, create a virtual environment, install dependencies, copy any example configuration (such as .env.example to .env) and set required variables, then run the tests before changing anything, to establish a working baseline. When something fails, read the full error: it usually names the missing module, wrong version, missing variable or port conflict.",
      code: `$ git clone https://github.com/example/project.git && cd project
$ python3 --version              # compare with the README's requirement
$ python3 -m venv .venv && source .venv/bin/activate
$ pip install -r requirements.txt
$ cp .env.example .env           # then fill in local values
$ python -m pytest               # baseline before making changes`,
      followUps: ["The tests fail before you change anything. What do you do?"],
    },
    {
      question: "A port is already in use, or a program is stuck. How do you find and stop the process?",
      answer:
        "Find the process ID with ps (or lsof -i :PORT to see what is listening on a port), then stop it. Ctrl+C sends an interrupt to a program running in the foreground. kill PID asks a process to terminate gracefully; kill -9 forces it and should be a last resort because the process cannot clean up.",
      code: `$ lsof -i :8000                 # which process is listening on port 8000
$ ps aux | grep http.server
$ kill 12345                     # ask process 12345 to stop
$ kill -9 12345                  # force, only if it will not stop`,
      followUps: ["What is the difference between a process and a program?"],
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
