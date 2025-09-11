---
created: 2025-06-30 07:20:40
modified: 2025-09-11 06:53:48
tags:
  - cs
---
**Code Point**
A **code point** is the most basic unit in Unicode. It's simply a unique number assigned to a single character or symbol. For example, the code point for the letter 'A' is `U+0041`, and for the emoji 
'😂' is `U+1F602`. Think of it as an abstract ID for a character.

**Codespace**
The **codespace** is the complete set of all possible code points. It's massive range of numbers from `U+0000` to `U+10FFFF`, containing a total of 1,114,112 potential character slots. This is the entire "universe" of characters defined by Unicode.

**Plane**
A **plane** is a large, contiguous block of 65,536 (256 * 256) code points within the codespace. The entire codespace is organized into 17 planes (Plane 0 through Plane 16). The most important is Plane 0, the Basic Multilingual Plane (BMP), which holds the most commonly used characters from around the world.

**Encoding**
An **encoding** is the specific rule that translates an abstract code point (a number) into a sequence of actual bytes that a computer can store or transmit. It's the bridge between the conceptual character ID and its physical representation in memory.

**UTF-8**
**UTF-8** is a specific, highly popular encoding scheme. Its defining feature is that it's **variable-length**, representing a code point using 1, 2, 3, or 4 bytes. It's efficient because all ASCII characters (`U+0000` to `U+007F`) use just a single byte, providing perfect backward compatibility.


### Reference
https://en.wikipedia.org/wiki/Unicode
https://www.reedbeta.com/blog/programmers-intro-to-unicode/