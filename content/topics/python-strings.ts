import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-strings",
  title: "Strings",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A string is an immutable sequence of characters. You can index and slice it, search it, compare it, and build new strings with methods, joining and formatting.",
  whyItMatters:
    "String manipulation is one of the most common categories of coding interview problems (palindromes, anagrams, parsing, reversing words), and nearly all real programs clean, parse and format text from users, files or APIs. You are expected to use slicing and common methods fluently and to know the cost of building strings.",
  prerequisites: ["Variables and Data Types", "Operators and Expressions", "Loops (for iterating over characters)"],
  objectives: [
    "Index and slice strings, including negative indexes and steps, and predict results.",
    "Explain immutability and its consequences: methods return new strings.",
    "Use common methods: lower, upper, casefold, strip, split, join, replace, find, startswith, endswith, isdigit, isalpha, isalnum and count.",
    "Split text into parts and join parts back together, including edge cases with repeated separators.",
    "Compare strings, including case-insensitive comparison and lexicographic ordering.",
    "Format output with f-strings, including numeric precision and alignment.",
    "State the cost of indexing, slicing, searching and concatenation, and build strings efficiently with join.",
    "Recognize the difference between str (text) and bytes (raw data).",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Working with strings",
      url: "https://programming-26.mooc.fi/part-3/2-working-with-strings",
      provider: "University of Helsinki",
      type: "Course",
      instructions: "Written lesson on string operations, indexing, slices, searching for substrings and methods.",
    },
    {
      title: "Think Python — Chapter 8: Strings and Regular Expressions",
      url: "https://allendowney.github.io/ThinkPython/chap08.html",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written alternative. Read sections 8.1–8.5 on sequences, slices, immutability, comparison and methods. Skip regular expressions.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 0: Functions",
      url: "https://cs50.harvard.edu/python/weeks/0/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative. Focus on strings, string methods and f-string formatting.",
    },
    {
      title: "Python Standard Library — Text Sequence Type (str)",
      url: "https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Supplemental reference. Use for exact str method behavior and for str versus bytes; bytes are described under Binary Sequence Types on the same page.",
    },
    {
      title: "Python Design FAQ — Why are Python strings immutable?",
      url: "https://docs.python.org/3/faq/design.html#why-are-python-strings-immutable",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Short official answer. Read it to explain immutability in your own words.",
    },
    {
      title: "Time complexity of operations on built-in types — str",
      url: "https://docs.python.org/3/builtins/time-complexity.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference. Read the str, bytes, bytearray table and its notes on concatenation and substring search. The costs are for CPython.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Working with strings: End to beginning; Substrings, part 1; Does it contain vowels; Find all the substrings",
      url: "https://programming-26.mooc.fi/part-3/2-working-with-strings",
      note: "Instructions are readable without an account; submitting requires logging in.",
    },
    { title: "Reverse a string without calling reversed() or slicing, then explain the cost of your approach." },
    { title: "Count vowels in a string without a regular expression.", note: "Use a set of vowels for membership." },
    { title: "Normalize inconsistent whitespace and capitalization in a list of names." },
    { title: "Extract the username and domain from an email address, and decide what to do with invalid input." },
    { title: "Build a formatted report line from a name, a quantity and a price with two decimal places." },
    {
      title: "Valid Palindrome (LeetCode)",
      url: "https://leetcode.com/problems/valid-palindrome/",
      note: "Easy. Try a cleaned copy first, then a two-pointer version that uses O(1) extra space.",
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
    },
    {
      question: "How are strings compared? How do you compare them ignoring case?",
      answer:
        "== compares content character by character. <, > and sorting use lexicographic order by Unicode code point, so all uppercase letters come before lowercase ones and \"10\" sorts before \"9\". For case-insensitive comparison, normalize both sides with lower() or, more robustly for international text, casefold().",
      code: `print("Apple" < "apple")   # -> True
print("10" < "9")          # -> True
print("Straße".casefold() == "STRASSE".casefold())   # -> True`,
      followUps: ["How would you sort numeric strings by their numeric value?"],
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
    "Manipulate unfamiliar string inputs using slicing and methods without looking them up.",
    "Predict slicing results, including negative indexes and steps.",
    "Handle empty strings, whitespace and case differences deliberately.",
    "Explain immutability and why join is preferred for building strings.",
    "State the time and space cost of slicing, searching and building strings.",
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
