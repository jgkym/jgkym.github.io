---
created: 2025-08-05 13:51:12
modified: 2025-09-11 06:53:14
tags:
  - cs
---
The **[[Unicode|Unicode Standard]]** is a character encoding system that provides a unique number, called a **code point**, for every character across all writing systems. A Unicode code point is typically written in hexadecimal notation, preceded by `U+`. For example, the code point for the emoji '😂' is `U+1F602`.

**UTF** (Unicode Transformation Format) standards are encoding schemes that define how Unicode code points are represented in bytes. The three most common standards are:
* **UTF-8:** A variable-length encoding that uses 1 to 4 bytes per character. It's widely used for its efficiency and backward compatibility with ASCII.
* **UTF-16:** A variable-length encoding that uses either 2 or 4 bytes.
* **UTF-32:** A fixed-length encoding that always uses 4 bytes per character.

This note focuses on the **UTF-8** encoding process, which is the most prevalent standard on the web.

### **UTF-8 Encoding Process: Code Point to Bytes**

The process of converting a Unicode code point to its UTF-8 byte sequence involves these steps:
1.  **Identify the Code Point:** Find the code point of the character you want to encode. For example, using Python's `ord()` function, the code point for '😂' is `128514`.
2.  **Convert to Hexadecimal:** Convert the decimal code point to its hexadecimal representation.
    ```python
    hex(128514)
    # >>> '0x1f602'
    ```
3.  **Convert to Binary:** Convert the hexadecimal value to a binary representation.
    * `1F602` in binary is `0001 1111 0110 0000 0010`.

4.  **Select the UTF-8 Template:** The number of bytes required for the encoding depends on the code point's value. The binary representation of the code point is fitted into a specific UTF-8 byte template.

| Code Point Range (Hex) | Byte Length | UTF-8 Binary Template |
| ---------------------- | ----------- | --------------------- |
| `U+0000` to `U+007F` | 1 byte | `0xxxxxxx` |
| `U+0080` to `U+07FF` | 2 bytes | `110xxxxx 10xxxxxx` |
| `U+0800` to `U+FFFF` | 3 bytes | `1110xxxx 10xxxxxx 10xxxxxx` |
| `U+10000` to `U+10FFFF` | 4 bytes | `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` |

5.  **Fill the Template:** Place the binary digits from the code point into the 'x' positions of the chosen template, starting from the last byte and moving forward. The code point `U+1F602` is in the `U+10000` to `U+10FFFF` range, so it requires a 4-byte template.

    * **Binary code point:** `0001 1111 0110 0000 0010` (17 bits)
    * **Template:** `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx`
    * **Fill the 'x's (right to left):**
        * **Last byte:** `10` + `000010` -> `10000010`
        * **Third byte:** `10` + `000000` -> `10000000`
        * **Second byte:** `10` + `111101` -> `10111101`
        * **First byte:** `11110` + `000` -> `11110000`

The final UTF-8 byte sequence for '😂' is `11110000 10111101 10000000 10000010`, which in hexadecimal is **`F0 B D 80 82`**.


### Reference
https://en.wikipedia.org/wiki/UTF-8