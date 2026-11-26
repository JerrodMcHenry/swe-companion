import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-strings",
  title: "Strings",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A string is an immutable sequence of characters that you index, slice, search and transform with methods. Text processing is a common interview problem category and part of almost every real program.",
  whyItMatters:
    "String manipulation is one of the most common categories of coding interview problems (palindromes, anagrams, parsing, reversing words), and nearly all real programs clean, parse and format text from users, files or APIs. You are expected to use slicing and common methods fluently and to know the cost of building strings.",
  prerequisites: ["Variables and Data Types", "Operators and Expressions", "Loops (for iterating over characters)"],
  objectives: [
    "Indexing and slicing s[start:stop:step]: negative indexes, the excluded stop index, s[::-1], and that slices clamp out-of-range bounds while single indexes raise IndexError.",
    "Immutability: s[0] = \"x\" raises TypeError, and methods return new strings that you must assign.",
    "Common methods: lower, upper, casefold, strip, split, join, replace, find, startswith, endswith, count, isdigit, isalpha, isalnum.",
    "split() with no argument splits on runs of whitespace; split(\",\") keeps empty strings between repeated separators; join is called on the separator and needs strings.",
    "Comparison: == compares content; < and sorting compare Unicode code points, so \"Z\" < \"a\" and \"10\" < \"9\". Normalize with lower() or casefold() for case-insensitive comparison.",
    "f-strings with format specifications such as :.2f, :>8 and :,.",
    "Costs: indexing and len are O(1); slicing is O(k); searching is O(n); building a string with repeated + is quadratic in the total length, while ''.join(parts) is linear.",
    "str holds text and bytes holds raw bytes; encode and decode convert between them (usually UTF-8).",
    "Skip for now: regular expressions, Unicode normalization and string algorithms such as KMP.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Part 3: Working with strings",
      url: "https://programming-26.mooc.fi/part-3/2-working-with-strings",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Start here. Read the whole section (string operations, length and indexing, slices, searching for substrings, methods) and do its exercises. Later, in Part 4, the section \"More strings and lists\" covers slices with a step, immutability and more methods; read its string parts when you reach lists. Free; reading needs no account, submitting exercises needs a free MOOC.fi account.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 0: Functions, Variables",
      url: "https://cs50.harvard.edu/python/weeks/0/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative for string methods and f-strings. Watch the parts the notes title \"Strings and Parameters\", \"Formatting Strings\" and \"More on Strings\". It does not cover slicing in depth. Free, no account needed.",
    },
    {
      title: "Python Standard Library — String Methods",
      url: "https://docs.python.org/3/library/stdtypes.html#string-methods",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference: look up exact method behavior (for example split with and without a separator). Do not read it end to end.",
    },
    {
      title: "Time complexity of operations on built-in types — str, bytes, bytearray",
      url: "https://docs.python.org/3/builtins/time-complexity.html#str-bytes-bytearray",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference for the costs you will be asked to state: read the str table and its note on concatenation in a loop. The costs are for CPython.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Working with strings: End to beginning; Substrings, part 1; Does it contain vowels; Find all the substrings",
      url: "https://programming-26.mooc.fi/part-3/2-working-with-strings",
      note: "Indexing, slicing and substring search. Instructions are readable without an account; submitting requires a free MOOC.fi account.",
    },
    {
      title: "Little Sister's Vocabulary (Exercism, Python track)",
      url: "https://exercism.org/tracks/python/exercises/little-sisters-vocab",
      note: "Concatenation, join and slicing off a suffix, with automated tests. Solving in the online editor or CLI needs a free Exercism account.",
    },
    {
      title: "Little Sister's Essay (Exercism, Python track)",
      url: "https://exercism.org/tracks/python/exercises/little-sisters-essay",
      note: "String methods: title-casing, endswith, strip and replace. Free Exercism account.",
    },
    {
      title: "Valid Palindrome (LeetCode)",
      url: "https://leetcode.com/problems/valid-palindrome/",
      note: "Easy. Try a cleaned copy first, then a two-pointer version that uses O(1) extra space. Free account required to submit.",
    },
    {
      title: "Merge Strings Alternately (LeetCode)",
      url: "https://leetcode.com/problems/merge-strings-alternately/",
      note: "Easy. Build the result in a list and join it.",
    },
    {
      title: "Longest Common Prefix (LeetCode)",
      url: "https://leetcode.com/problems/longest-common-prefix/",
      note: "Easy. Test an empty string and a single-word input.",
    },
  ],
  interviewQuestions: [
    {
      question: "Why are strings immutable, and what does that mean in practice?",
      answer:
        "Once created, a string cannot be changed: assigning to s[0] raises a TypeError, and methods such as upper() or replace() return new strings. Immutability means strings can be shared safely, used as dictionary keys and set members because their hash never changes, and stored efficiently. The practical consequence is that you must capture the result of a string method, and that building a string piece by piece creates new objects.",
      code: `s = "java"
try:
    s[0] = "J"
except TypeError as error:
    print(type(error).__name__)   # -> TypeError
s.upper()          # result discarded; s is unchanged
print(s)           # -> java
s = s.capitalize()
print(s)           # -> Java`,
      followUps: ["How would you change one character in a string?"],
      source: { title: "Python Design FAQ — Why are Python strings immutable?", url: "https://docs.python.org/3/faq/design.html#why-are-python-strings-immutable" },
    },
    {
      question: "How does slicing work? What does s[::-1] do?",
      answer:
        "s[start:stop:step] returns a new string from start up to but not including stop, moving by step. Omitted values default to the beginning, the end and 1; negative indexes count from the end. A negative step walks backwards, so s[::-1] is a reversed copy. Slices clamp out-of-range bounds instead of raising, whereas indexing a single position out of range raises IndexError. A slice copies its characters, so it costs O(k) for k characters.",
      code: `s = "interview"
print(s[0:5])     # -> inter
print(s[-4:])     # -> view
print(s[::-1])    # -> weivretni
print(s[2:100])   # -> terview
try:
    s[100]
except IndexError as error:
    print(type(error).__name__)   # -> IndexError`,
      followUps: ["What is the time and space cost of checking a palindrome with s == s[::-1]?"],
      source: { title: "The Python Tutorial — 3.1.2 Text (indexing and slicing)", url: "https://docs.python.org/3/tutorial/introduction.html#text" },
    },
    {
      question: "What is the difference between split() and join()?",
      answer:
        "split breaks one string into a list of strings; join combines an iterable of strings into one string, called on the separator. With no argument, split() splits on runs of whitespace and drops empty strings; with an explicit separator it keeps empty strings between repeated separators. join raises a TypeError if any item is not a string.",
      code: `print("  a   b c ".split())    # -> ['a', 'b', 'c']
print("a,,b".split(","))       # -> ['a', '', 'b']
print("-".join(["2026", "11", "25"]))   # -> 2026-11-25
print(" ".join(str(n) for n in [1, 2, 3]))   # -> 1 2 3`,
      followUps: ["How would you reverse the order of words in a sentence?"],
      source: { title: "Python Docs — str.split", url: "https://docs.python.org/3/library/stdtypes.html#str.split" },
    },
    {
      question: "Why can building a string with += in a loop be slow? What should you do instead?",
      answer:
        "Each concatenation creates a new string and copies the existing characters, so building a string of total length n piece by piece can take O(n²) time. CPython sometimes optimizes s += t in place, but that is an implementation detail you should not rely on. Collect the pieces in a list and call ''.join(pieces) once, which is O(n) in the total length.",
      code: `words = ["fast", "string", "building"]
pieces = []
for word in words:
    pieces.append(word.upper())
print(" ".join(pieces))   # -> FAST STRING BUILDING`,
      followUps: ["What is the time complexity of ''.join(pieces)?"],
      source: { title: "Python Docs — Common sequence operations (notes on concatenating immutable sequences)", url: "https://docs.python.org/3/library/stdtypes.html#common-sequence-operations" },
    },
    {
      question: "How are strings compared? How do you compare them ignoring case?",
      answer:
        "== compares content character by character. <, > and sorting use lexicographic order by Unicode code point, so all uppercase letters come before lowercase ones and \"10\" sorts before \"9\". For case-insensitive comparison, normalize both sides with lower() or, more robustly for international text, casefold().",
      code: `print("Apple" < "apple")   # -> True
print("10" < "9")          # -> True
print("Straße".casefold() == "STRASSE".casefold())   # -> True`,
      followUps: ["How would you sort numeric strings by their numeric value?"],
      source: { title: "Python Language Reference — Value comparisons", url: "https://docs.python.org/3/reference/expressions.html#value-comparisons" },
    },
    {
      question: "How do you format strings in modern Python?",
      answer:
        "Use f-strings: put expressions in braces inside a string prefixed with f. A format specification after a colon controls presentation, such as :.2f for two decimal places, :>8 for right alignment or :, for thousands separators. f-strings are easier to read than concatenating with str() calls.",
      code: `name, price, qty = "Widget", 4.5, 3
print(f"{name}: {qty} x {price:.2f} = {qty * price:.2f}")   # -> Widget: 3 x 4.50 = 13.50
print(f"[{name:>8}]")      # -> [  Widget]
print(f"{1234567:,}")      # -> 1,234,567`,
      followUps: ["Why should you not build SQL queries with f-strings?"],
      source: { title: "The Python Tutorial — Formatted string literals", url: "https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals" },
    },
    {
      question: "What is the difference between str and bytes?",
      answer:
        "str holds text as Unicode characters; bytes holds raw 8-bit values. You encode text into bytes (usually UTF-8) to write it to a file or network, and decode bytes back into text when reading. Mixing them raises a TypeError. At entry level, recognize the difference and the encode/decode step; detailed Unicode handling can wait.",
      code: `text = "café"
data = text.encode("utf-8")
print(len(text), len(data))   # -> 4 5
print(data.decode("utf-8") == text)   # -> True`,
      followUps: ["Why can the length of a string and its encoded bytes differ?"],
      source: { title: "Python Docs — Unicode HOWTO", url: "https://docs.python.org/3/howto/unicode.html" },
    },
  ],
  mistakes: [
    "Calling a method such as strip() or replace() and forgetting to assign the returned string.",
    "Off-by-one slice bounds: the stop index is excluded.",
    "Using split(\" \") on text with repeated spaces and getting empty strings; use split() instead.",
    "Building long strings with += inside a loop instead of join.",
    "Comparing user input without normalizing case and surrounding whitespace.",
    "Forgetting empty strings and single characters when testing string functions.",
  ],
  mastery: [
    "You complete the MOOC and Exercism string exercises and Valid Palindrome without help, including empty and single-character inputs.",
    "Without running them, you predict the slicing, split and comparison snippets in the interview questions.",
    "You can explain immutability and why ''.join beats += in a loop, and state the cost of slicing, searching and building strings.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: [
    "Advanced regular expressions, detailed Unicode normalization and specialized text-processing libraries.",
    "String algorithms such as KMP or rolling hashes; pattern-based string problems are covered in Data Structures & Algorithms.",
  ],
  keywords: [
    "strings",
    "string manipulation",
    "slicing",
    "indexing",
    "immutable",
    "split",
    "join",
    "strip",
    "f-string",
    "formatting",
    "palindrome",
    "Unicode",
    "casefold",
  ],
};

export default topic;
