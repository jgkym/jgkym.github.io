---
created: 2025-05-28 10:35:57
modified: 2025-05-28 10:46:44
tags: [text-editing, latex]
---
**Warning Message:**
```bash
LaTeX-incompatible input and strict mode is set to 'warn': Unrecognized Unicode character "​" (8203) [unknownSymbol]
No character metrics for '​' in style 'Main-Regular' and mode 'text'
```

The unicode `&#8203)` is the **[zero-width space](https://en.wikipedia.org/wiki/Zero-width_space)**. This invisible character takes up no space, making it nearly impossible to spot, even inside your LaTeX equations. You'll need to carefully examine your LaTeX code, potentially using a text editor that can display invisible characters, to locate and remove any instances of Unicode 8203.
