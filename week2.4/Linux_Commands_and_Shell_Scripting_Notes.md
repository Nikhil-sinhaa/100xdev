# 🐧 Linux / Terminal Commands & Shell Scripting — Complete Notes

> **Week 2.4 — 100xDevs**
>
> Everything you need to know about navigating the terminal, managing files, permissions, text processing, shell scripting, and setting up Node.js.

---

## Table of Contents

1. [Terminal Basics — What & Why](#1--terminal-basics--what--why)
2. [Navigation Commands](#2--navigation-commands)
3. [Listing Files & Directories (`ls`)](#3--listing-files--directories-ls)
4. [File Operations — Create, Copy, Move, Delete](#4--file-operations--create-copy-move-delete)
5. [Directory Operations — `mkdir`, `rmdir`](#5--directory-operations--mkdir-rmdir)
6. [Viewing File Content — `cat`, `head`, `tail`, `less`, `more`](#6--viewing-file-content--cat-head-tail-less-more)
7. [Text Search — `grep`](#7--text-search--grep)
8. [File Statistics — `wc`](#8--file-statistics--wc)
9. [Finding Files — `find` & `which`](#9--finding-files--find--which)
10. [Pipes & Redirection](#10--pipes--redirection)
11. [File Permissions — `chmod`, `chown`](#11--file-permissions--chmod-chown)
12. [Other Useful Commands](#12--other-useful-commands)
13. [Combining Commands](#13--combining-commands)
14. [Shell Scripting Basics](#14--shell-scripting-basics)
15. [Node.js Installation (nvm)](#15--nodejs-installation-nvm)
16. [Quick Reference Cheat Sheet](#16--quick-reference-cheat-sheet)

---

## 1 — Terminal Basics — What & Why

| Term | Meaning |
|------|---------|
| **Terminal / Console** | The text-based interface where you type commands. |
| **Shell** | The program that reads your commands and talks to the OS (e.g., `bash`, `zsh`, `sh`). |
| **CLI** | Command Line Interface — the opposite of a GUI (Graphical User Interface). |
| **Root (`/`)** | The topmost directory in Linux — everything lives under it. |
| **Home (`~`)** | Your personal directory, usually `/home/username`. |
| **`.` (dot)** | Refers to the **current** directory. |
| **`..` (double dot)** | Refers to the **parent** directory (one level up). |

> 💡 **Why learn the terminal?**
> Servers don't have GUIs. As a developer you'll deploy code, manage servers, use Git, run scripts — all through the terminal.

---

## 2 — Navigation Commands

### `pwd` — Print Working Directory

Shows the full path of the directory you are currently in.

```bash
pwd
# Output: /home/nikhil/projects
```

### `cd` — Change Directory

```bash
cd foldername        # Go into 'foldername'
cd /absolute/path    # Go to an absolute path
cd ..                # Go one level up (parent directory)
cd ../..             # Go two levels up
cd ../../..          # Go three levels up
cd ~                 # Go to your home directory
cd -                 # Go back to the previous directory you were in
cd /                 # Go to root directory
```

> 💡 **Tip:** Use `Tab` key for auto-completion of folder/file names — saves time and avoids typos!

---

## 3 — Listing Files & Directories (`ls`)

### Basic Usage

```bash
ls                   # List files & folders in the current directory
ls foldername        # List contents of a specific folder
ls /path/to/folder   # List contents using an absolute path
```

### Useful Flags

| Command | What it does |
|---------|-------------|
| `ls -l` | **Long format** — shows permissions, owner, group, size, date, name |
| `ls -a` | Shows **all files** including hidden files (files starting with `.`) |
| `ls -la` | Long format + hidden files (most commonly used combo!) |
| `ls -lh` | Long format with **human-readable** sizes (KB, MB, GB instead of bytes) |
| `ls -R` | **Recursive** — shows contents of all subdirectories too |
| `ls -S` | Sort by **file size** (largest first) |
| `ls -t` | Sort by **modification time** (newest first) |
| `ls -r` | **Reverse** the order of listing |
| `ls -lr` | Long format in **reverse** order |
| `ls -lt` | Long format sorted by **time** (newest first) |
| `ls -ltr` | Long format sorted by time in **reverse** (oldest first) |
| `ls -lS` | Long format sorted by **size** (largest first) |

### Wildcards with `ls`

Wildcards let you match patterns in filenames:

```bash
ls *.txt             # All files ending with .txt
ls *.json            # All .json files
ls Zoo*              # All files/folders whose name starts with "Zoo"
ls file?.txt         # ? matches exactly one character (file1.txt, fileA.txt)
ls [abc]*            # Files starting with a, b, or c
```

### Listing Other Locations

```bash
ls ..                # List contents of the parent directory
ls ~/Desktop         # List your Desktop contents
```

### Advanced Example — Recursive Grep with `ls`

```bash
# Find all .json files recursively inside a folder
ls -lR folder/ | grep ".json"

# List specific subfolder contents
ls -lR frontend/scripts
```

### Understanding `ls -l` Output

```
-rw-r--r--  1  nikhil  staff  2048  Jul 17 12:00  notes.txt
│            │  │       │      │     │              │
│            │  │       │      │     │              └── filename
│            │  │       │      │     └── last modified date
│            │  │       │      └── file size (bytes)
│            │  │       └── group
│            │  └── owner
│            └── number of hard links
└── permissions (type + user + group + others)
```

---

## 4 — File Operations — Create, Copy, Move, Delete

### `touch` — Create a File

```bash
touch filename.txt              # Create an empty file
touch file1.txt file2.txt       # Create multiple files at once
touch index.html style.css      # Create multiple files of different types
```

> 💡 If the file already exists, `touch` updates its **timestamp** without changing the content.

### `cp` — Copy Files & Directories

```bash
cp source.txt destination.txt         # Copy a file
cp file.txt /path/to/destination/     # Copy file to another directory
cp -r sourceDir/ destinationDir/      # Copy an entire directory (recursive)
cp file1.txt file2.txt folder/        # Copy multiple files to a folder
```

| Flag | Meaning |
|------|---------|
| `-r` | Recursive — needed for copying directories |
| `-i` | Interactive — asks before overwriting |
| `-v` | Verbose — shows what's being copied |

### `mv` — Move or Rename Files

```bash
# Rename a file
mv oldname.txt newname.txt

# Move a file to another directory
mv file.txt /path/to/destination/

# Move and rename at the same time
mv old.txt /path/to/new.txt

# Move a directory
mv oldfolder/ newfolder/

# Move multiple files into a folder
mv file1.txt file2.txt folder/
```

> 💡 `mv` is used for both **moving** and **renaming** — Linux doesn't have a separate rename command.

### `rm` — Remove / Delete

```bash
rm filename.txt                 # Delete a file
rm file1.txt file2.txt          # Delete multiple files
rm -r foldername/               # Delete a folder and everything inside it (recursive)
rm -rf foldername/              # Force delete without confirmation (⚠️ DANGEROUS!)
rm -i file.txt                  # Ask for confirmation before deleting
```

> ⚠️ **Warning:** `rm` is **permanent** — there is no Recycle Bin / Trash. Double-check before using `rm -rf`!

| Flag | Meaning |
|------|---------|
| `-r` | Recursive — deletes directories and their contents |
| `-f` | Force — no confirmation prompts |
| `-i` | Interactive — asks before each deletion |

---

## 5 — Directory Operations — `mkdir`, `rmdir`

### `mkdir` — Make Directory

```bash
mkdir foldername                       # Create a folder
mkdir folder1 folder2 folder3          # Create multiple folders
mkdir -p frontend/scripts              # Create nested directories (parent + child)
mkdir -p frontend/css frontend/img     # Create multiple nested paths
mkdir -p src/{components,utils,pages}  # Create multiple subdirectories using brace expansion
```

> 💡 The `-p` flag creates the **parent directories** too if they don't exist. Without `-p`, `mkdir frontend/scripts` would fail if `frontend/` doesn't exist.

### `rmdir` — Remove Empty Directories

```bash
rmdir foldername        # Only works if the directory is EMPTY
```

> For non-empty directories, use `rm -r foldername`.

---

## 6 — Viewing File Content — `cat`, `head`, `tail`, `less`, `more`

### `cat` — Concatenate & Display

```bash
# View file content
cat filename.txt

# View multiple files
cat file1.txt file2.txt

# View with line numbers
cat -n filename.txt
```

### Writing & Appending with `cat`

```bash
# Write new content to a file (⚠️ OVERWRITES existing content)
cat > filename.txt
Type your content here...
Press Ctrl+D to save and exit

# Append content to an existing file (adds to the end)
cat >> filename.txt
New content added at the end...
Press Ctrl+D to save and exit

# Combine two files into one
cat file1.txt file2.txt > combined.txt
```

### `head` — View the Beginning of a File

```bash
head filename.txt          # Shows first 10 lines (default)
head -n 5 filename.txt     # Shows first 5 lines
head -20 filename.txt      # Shows first 20 lines (shorthand)
```

### `tail` — View the End of a File

```bash
tail filename.txt          # Shows last 10 lines (default)
tail -n 5 filename.txt     # Shows last 5 lines
tail -20 filename.txt      # Shows last 20 lines (shorthand)
tail -f logfile.log        # FOLLOW mode — live updates (great for logs!)
```

> 💡 `tail -f` is extremely useful for **watching log files in real-time** while a server is running.

### `less` — Scroll Through Large Files

```bash
less filename.txt
```

| Key | Action |
|-----|--------|
| `Space` / `f` | Next page |
| `b` | Previous page |
| `↑` / `↓` | Scroll line by line |
| `/searchterm` | Search forward |
| `?searchterm` | Search backward |
| `n` | Next search result |
| `q` | Quit |

### `more` — Similar to `less` but Simpler

```bash
more filename.txt          # Scroll forward through the file
```

> 💡 **`less` vs `more`**: `less` is more powerful — it allows backward scrolling. Use `less`.

---

## 7 — Text Search — `grep`

`grep` stands for **Global Regular Expression Print**. It searches for text patterns inside files.

### Basic Usage

```bash
grep "word" filename.txt           # Find lines containing "word"
```

### Useful Flags

| Command | Flag | Meaning |
|---------|------|---------|
| `grep -i "word" file` | `-i` | **Case-insensitive** search |
| `grep -c "word" file` | `-c` | **Count** — only show the number of matching lines |
| `grep -n "word" file` | `-n` | Show **line numbers** along with matching lines |
| `grep -w "word" file` | `-w` | **Whole word** match only (won't match "sword" when searching "word") |
| `grep -o "word" file` | `-o` | Print **only** the matched part, not the whole line |
| `grep -r "word" folder/` | `-r` | **Recursive** — search through all files in a directory |
| `grep -l "word" *.txt` | `-l` | Only show **filenames** that contain the match |
| `grep -v "word" file` | `-v` | **Invert** — show lines that do NOT contain the word |
| `grep -h "word" files` | `-h` | **Hide filename** in output (useful with multiple files) |

### Combining Flags

```bash
grep -hi "word" *.txt       # Case-insensitive, hide filenames
grep -hin "word" *.txt      # Case-insensitive, hide filenames, show line numbers
grep -hinw "word" *.txt     # + whole word match
grep -hir "word" folder/    # Case-insensitive, hide filenames, recursive search
grep -rn "TODO" src/        # Find all TODOs in source code with line numbers
grep -c "error" log.txt     # Count how many lines have "error"
```

### `grep` with Pipes

```bash
cat file.txt | grep "hello"          # Search inside file output
ls -la | grep ".json"               # Find .json files in listing
ps aux | grep "node"                # Find running Node.js processes
history | grep "git"                # Find past git commands
```

---

## 8 — File Statistics — `wc`

`wc` stands for **Word Count** — but it does much more.

```bash
wc filename.txt              # Shows: lines  words  characters  filename
wc -l filename.txt           # Only line count
wc -w filename.txt           # Only word count
wc -c filename.txt           # Only byte (character) count
wc -m filename.txt           # Character count (multi-byte aware)
wc -l *.txt                  # Line count for all .txt files
```

### Example Output

```bash
$ wc notes.txt
  42  318  1912 notes.txt
#  │    │    │
#  │    │    └── characters/bytes
#  │    └── words
#  └── lines
```

---

## 9 — Finding Files — `find` & `which`

### `find` — Search for Files & Directories

```bash
# Find by name
find . -name "file.txt"               # Find file.txt in current dir and subdirs
find / -name "file.txt"               # Search from root (entire system)
find . -name "*.js"                   # Find all .js files

# Find by type
find . -type f                         # Find files only
find . -type d                         # Find directories only

# Find by type + name
find . -type f -name "*.json"          # Find all .json files
find . -type d -name "node_modules"    # Find all node_modules directories

# Case-insensitive search
find . -iname "readme*"                # Find README, readme, ReadMe, etc.

# Find by size
find . -size +10M                      # Files larger than 10 MB
find . -size -1k                       # Files smaller than 1 KB

# Find recently modified files
find . -mtime -7                       # Modified in the last 7 days
find . -mmin -30                       # Modified in the last 30 minutes

# Find and delete
find . -name "*.log" -delete           # Delete all .log files (⚠️ careful!)

# Find and execute a command
find . -name "*.tmp" -exec rm {} \;    # Delete all .tmp files
```

### `which` — Find Where a Command Lives

```bash
which node             # /usr/local/bin/node
which git              # /usr/bin/git
which python           # Shows the path of the python binary
```

### `whereis` — More Detailed Location

```bash
whereis node           # Shows binary, source, and man page locations
```

---

## 10 — Pipes & Redirection

### Pipes (`|`) — Chain Commands

The output of one command becomes the input of the next:

```bash
ls -la | grep ".js"                    # List, then filter for .js files
cat log.txt | grep "error" | wc -l    # Count error lines in a log file
history | grep "npm" | tail -5        # Last 5 npm commands you ran
ps aux | grep node                    # Find node processes
cat file.txt | sort | uniq            # Sort and remove duplicates
```

### Output Redirection

```bash
# > (overwrite) — writes command output to a file
echo "Hello World" > file.txt         # Creates/overwrites file with text
ls -la > filelist.txt                 # Save directory listing to file

# >> (append) — adds to end of file
echo "Another line" >> file.txt       # Appends text to file
date >> log.txt                       # Append current date to log

# 2> — redirect errors
command 2> error.log                  # Send error output to file

# &> — redirect both output and errors
command &> all_output.log             # Both stdout and stderr to file
```

### Input Redirection

```bash
# < — take input from a file
wc -l < file.txt                      # Count lines (filename won't show in output)
sort < unsorted.txt > sorted.txt      # Sort a file and save result
```

---

## 11 — File Permissions — `chmod`, `chown`

### Understanding Permission String

```
-rwxr-xr--
│|||│││││|
│|||││││└── others: read (r)
│|||│││└─── others: no write (-)
│|||││└──── others: no execute (-)   — Wait, let me re-format:
```

Permissions are in three groups: **User (u)**, **Group (g)**, **Others (o)**

```
 u    g    o
rwx  r-x  r--
│││  │││  │││
│││  │││  ││└── others: no execute
│││  │││  │└─── others: no write
│││  │││  └──── others: read ✓
│││  ││└──────── group: execute ✓
│││  │└───────── group: no write
│││  └────────── group: read ✓
││└───────────── user: execute ✓
│└────────────── user: write ✓
└─────────────── user: read ✓
```

| Symbol | Permission | Numeric |
|--------|-----------|---------|
| `r` | Read | 4 |
| `w` | Write | 2 |
| `x` | Execute | 1 |
| `-` | No permission | 0 |

### Numeric (Octal) Method

Add the numbers for each group:

| Permission | Calculation | Number |
|-----------|------------|--------|
| `rwx` | 4+2+1 | **7** |
| `rw-` | 4+2+0 | **6** |
| `r-x` | 4+0+1 | **5** |
| `r--` | 4+0+0 | **4** |
| `---` | 0+0+0 | **0** |

```bash
chmod 755 script.sh    # rwxr-xr-x  — owner: all, group+others: read+execute
chmod 644 file.txt     # rw-r--r--  — owner: read+write, group+others: read only
chmod 700 private.sh   # rwx------  — owner: all, others: nothing
chmod 777 file.txt     # rwxrwxrwx  — everyone: everything (⚠️ avoid on servers!)
```

### Symbolic Method

```bash
chmod u+x script.sh    # Give execute permission to user (owner)
chmod g+w file.txt     # Give write permission to group
chmod o-r file.txt     # Remove read permission from others
chmod a+r file.txt     # Give read permission to all (a = all)
chmod u+rwx file.txt   # Give all permissions to user
chmod go-wx file.txt   # Remove write+execute from group and others
```

### `chown` — Change Ownership

```bash
chown newowner file.txt              # Change file owner
chown newowner:newgroup file.txt     # Change owner and group
chown -R newowner folder/            # Recursive — change for all files in folder
```

> 💡 You usually need `sudo` for `chown`: `sudo chown root file.txt`

---

## 12 — Other Useful Commands

### `echo` — Print Text

```bash
echo "Hello, World!"                  # Print to terminal
echo $HOME                            # Print the value of HOME variable
echo "Hello" > file.txt               # Write text to file
echo "More" >> file.txt               # Append text to file
echo $PATH                            # Show your system PATH
```

### `clear` — Clear Terminal Screen

```bash
clear
# Shortcut: Ctrl + L
```

### `man` — Manual Pages

```bash
man ls           # Open the manual for 'ls' command
man grep         # Open the manual for 'grep' command
# Press 'q' to quit the manual
```

### `history` — Command History

```bash
history                  # Show all past commands
history 20               # Show last 20 commands
history | grep "git"     # Search history for git commands
!42                      # Re-run command number 42 from history
!!                       # Re-run the last command
```

### `sudo` — Super User Do

```bash
sudo command                 # Run command as administrator/root
sudo apt update              # Update package list (Debian/Ubuntu)
sudo apt install package     # Install a package
```

### `whoami` — Current User

```bash
whoami                   # Prints your username
```

### `date` — Current Date & Time

```bash
date                     # Shows current date and time
```

### `df` — Disk Space

```bash
df -h                    # Show disk space in human-readable format
```

### `du` — Directory Size

```bash
du -sh foldername/       # Show total size of a folder
du -sh *                 # Show size of each item in current directory
```

### `top` / `htop` — Running Processes

```bash
top                      # Live view of system processes (press 'q' to quit)
htop                     # Better version of top (may need to install)
```

### `ps` — Process Status

```bash
ps                       # Show your running processes
ps aux                   # Show ALL system processes
ps aux | grep node       # Find node processes
```

### `kill` — Kill a Process

```bash
kill PID                 # Gracefully stop a process (use the Process ID from ps)
kill -9 PID              # Force kill a process
```

### `curl` — Make HTTP Requests

```bash
curl https://api.example.com           # GET request
curl -o output.html https://example.com  # Save response to file
```

### `wget` — Download Files

```bash
wget https://example.com/file.zip     # Download a file
```

### `alias` — Create Shortcuts

```bash
alias ll="ls -la"        # Now 'll' works as 'ls -la'
alias gs="git status"    # Shortcut for git status
```

> 💡 Add aliases to `~/.bashrc` or `~/.zshrc` to make them permanent.

### `tar` — Archive & Compress

```bash
tar -czf archive.tar.gz folder/       # Create a compressed archive
tar -xzf archive.tar.gz               # Extract a compressed archive
tar -tf archive.tar.gz                 # List contents without extracting
```

### `ln` — Create Links

```bash
ln -s /path/to/original linkname      # Create a symbolic (soft) link
```

### `diff` — Compare Files

```bash
diff file1.txt file2.txt              # Show differences between two files
```

### `sort` — Sort File Content

```bash
sort file.txt                          # Sort lines alphabetically
sort -n file.txt                       # Sort numerically
sort -r file.txt                       # Reverse sort
```

### `uniq` — Remove Duplicate Lines

```bash
sort file.txt | uniq                   # Remove adjacent duplicate lines (sort first!)
sort file.txt | uniq -c                # Count occurrences of each line
```

### `xargs` — Build Commands from Input

```bash
find . -name "*.log" | xargs rm       # Delete all .log files found
cat urls.txt | xargs curl             # Curl each URL in file
```

### `env` and `export` — Environment Variables

```bash
env                             # Show all environment variables
export MY_VAR="hello"           # Set an environment variable
echo $MY_VAR                    # Access it
unset MY_VAR                    # Remove it
```

---

## 13 — Combining Commands

### `&&` — Run Next Command Only If Previous Succeeds

```bash
mkdir project && cd project              # Create folder, then enter it
npm install && npm run dev               # Install, then run dev server
```

### `||` — Run Next Command Only If Previous Fails

```bash
mkdir folder || echo "Folder already exists"
```

### `;` — Run Commands Sequentially (Regardless of Success/Failure)

```bash
echo "Starting" ; npm install ; echo "Done"
```

### `&` — Run a Command in the Background

```bash
node server.js &                         # Run server in background
```

---

## 14 — Shell Scripting Basics

### What is a Shell Script?

A shell script is a file containing a sequence of commands that the shell can execute. It saves you from typing the same commands repeatedly.

### Step 1 — Create the Script

```bash
touch myscript.sh
```

### Step 2 — Add the Shebang & Commands

```bash
#!/bin/bash
# This is a comment — the first line tells the system which shell to use

echo "Hello, World!"
echo "Current directory: $(pwd)"
echo "Today's date: $(date)"
```

### Step 3 — Make it Executable

```bash
chmod +x myscript.sh
```

### Step 4 — Run it

```bash
./myscript.sh
# or
bash myscript.sh
```

### Variables

```bash
#!/bin/bash

# Defining variables (NO spaces around =)
NAME="Nikhil"
AGE=22
FOLDER="projects"

# Using variables (prefix with $)
echo "Hello, $NAME!"
echo "You are $AGE years old."

# Command substitution — store command output in a variable
CURRENT_DIR=$(pwd)
FILE_COUNT=$(ls | wc -l)

echo "You are in: $CURRENT_DIR"
echo "There are $FILE_COUNT files here."
```

### Taking User Input

```bash
#!/bin/bash

echo "What is your name?"
read USERNAME
echo "Hello, $USERNAME! Welcome!"
```

### If / Else Conditions

```bash
#!/bin/bash

FILE="notes.txt"

if [ -f "$FILE" ]; then
    echo "$FILE exists!"
else
    echo "$FILE does not exist."
    touch "$FILE"
    echo "Created $FILE."
fi
```

#### Common Test Conditions

| Expression | Meaning |
|-----------|---------|
| `-f file` | File exists and is a regular file |
| `-d dir` | Directory exists |
| `-e path` | Path exists (file or directory) |
| `-z "$var"` | Variable is empty |
| `-n "$var"` | Variable is not empty |
| `"$a" = "$b"` | Strings are equal |
| `"$a" != "$b"` | Strings are not equal |
| `$a -eq $b` | Numbers are equal |
| `$a -ne $b` | Numbers are not equal |
| `$a -gt $b` | a is greater than b |
| `$a -lt $b` | a is less than b |

### Loops

#### For Loop

```bash
#!/bin/bash

# Loop through a list
for FRUIT in apple banana cherry; do
    echo "I like $FRUIT"
done

# Loop through files
for FILE in *.txt; do
    echo "Processing $FILE..."
    wc -l "$FILE"
done

# C-style for loop
for ((i=1; i<=5; i++)); do
    echo "Count: $i"
done
```

#### While Loop

```bash
#!/bin/bash

COUNT=1
while [ $COUNT -le 5 ]; do
    echo "Number: $COUNT"
    COUNT=$((COUNT + 1))
done
```

### Functions

```bash
#!/bin/bash

# Define a function
greet() {
    echo "Hello, $1! You are $2 years old."
}

# Call the function with arguments
greet "Nikhil" 22
greet "Alice" 25
```

### Real-World Script Example — Project Setup

```bash
#!/bin/bash

echo "🚀 Setting up new project..."

# Create project structure
mkdir -p src/{components,utils,pages}
mkdir -p public/{images,css}

# Create starter files
touch src/index.js
touch src/App.js
touch public/index.html
touch public/css/style.css
touch .gitignore
touch README.md

# Add basic .gitignore
cat > .gitignore << EOF
node_modules/
.env
dist/
.DS_Store
EOF

# Add basic README
cat > README.md << EOF
# My Project
Created on $(date)
EOF

echo "✅ Project setup complete!"
echo "📂 Structure:"
ls -R
```

---

## 15 — Node.js Installation (nvm)

**nvm** = **Node Version Manager** — lets you install and switch between multiple Node.js versions.

### 🐧 Linux / 🍎 macOS

```bash
# Step 1 — Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Step 2 — Restart terminal or source profile
source ~/.bashrc     # or ~/.zshrc if using zsh

# Step 3 — Verify nvm
nvm --version

# Step 4 — Install latest Node.js
nvm install node            # Install the latest version
nvm install --lts           # Install the latest LTS (Long Term Support) version
nvm install 20              # Install a specific major version

# Step 5 — Verify Node & npm
node -v
npm -v
```

### 🪟 Windows

On Windows, use **nvm-windows** (different project):

1. Download the installer from: [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
2. Run the installer (.exe)
3. Open a **new** terminal (Command Prompt or PowerShell)

```powershell
# Verify nvm
nvm version

# Install Node.js
nvm install latest          # Latest version
nvm install lts             # Latest LTS version
nvm install 20.11.0         # Specific version

# Use a version
nvm use 20.11.0

# List installed versions
nvm list

# Verify
node -v
npm -v
```

### Common nvm Commands

| Command | Description |
|---------|-------------|
| `nvm install node` | Install the latest Node.js version |
| `nvm install --lts` | Install the latest LTS version |
| `nvm install 20` | Install Node.js v20 |
| `nvm use 20` | Switch to Node.js v20 |
| `nvm ls` | List all installed versions |
| `nvm ls-remote` | List all available versions to install |
| `nvm alias default 20` | Set v20 as the default version |
| `nvm current` | Show currently active version |
| `nvm uninstall 18` | Uninstall Node.js v18 |

---

## 16 — Quick Reference Cheat Sheet

### Navigation

| Command | Description |
|---------|-------------|
| `pwd` | Print current directory |
| `cd path` | Change directory |
| `cd ..` | Go up one level |
| `cd ~` | Go to home directory |
| `cd -` | Go to previous directory |

### Files & Directories

| Command | Description |
|---------|-------------|
| `touch file` | Create empty file |
| `mkdir dir` | Create directory |
| `mkdir -p a/b/c` | Create nested directories |
| `cp src dst` | Copy file |
| `cp -r src dst` | Copy directory |
| `mv old new` | Move or rename |
| `rm file` | Delete file |
| `rm -r dir` | Delete directory |
| `rm -rf dir` | Force delete (⚠️) |

### Viewing & Editing

| Command | Description |
|---------|-------------|
| `cat file` | View file content |
| `cat > file` | Write to file (overwrite) |
| `cat >> file` | Append to file |
| `head -n N file` | First N lines |
| `tail -n N file` | Last N lines |
| `tail -f file` | Live follow |
| `less file` | Scrollable viewer |
| `nano file` | Simple text editor |
| `vim file` | Advanced text editor |

### Search & Filter

| Command | Description |
|---------|-------------|
| `grep "text" file` | Search in file |
| `grep -r "text" dir/` | Search recursively |
| `grep -i "text" file` | Case-insensitive |
| `grep -n "text" file` | With line numbers |
| `find . -name "*.js"` | Find files by name |
| `wc -l file` | Count lines |

### Permissions

| Command | Description |
|---------|-------------|
| `chmod 755 file` | Set permissions (numeric) |
| `chmod u+x file` | Add execute for user |
| `chown user file` | Change owner |

### Pipes & Redirection

| Symbol | Description |
|--------|-------------|
| `\|` | Pipe output to next command |
| `>` | Redirect output (overwrite) |
| `>>` | Redirect output (append) |
| `<` | Input from file |
| `2>` | Redirect errors |
| `&&` | Run next if success |
| `\|\|` | Run next if failure |

---

> 📝 **Pro Tips for Beginners:**
>
> 1. **Use `Tab`** for auto-completion — it prevents typos.
> 2. **Use `↑` arrow** to cycle through previous commands.
> 3. **Use `Ctrl+C`** to stop/cancel a running command.
> 4. **Use `Ctrl+L`** to clear the screen (same as `clear`).
> 5. **Use `Ctrl+R`** to reverse-search your command history.
> 6. **Use `Ctrl+D`** to exit a shell or close input.
> 7. **Use `Ctrl+Z`** to suspend a running process (resume with `fg`).
> 8. **Use `man command`** whenever you're unsure about a command — the manual is your best friend!

---

*Happy Terminal-ing! 🚀*
