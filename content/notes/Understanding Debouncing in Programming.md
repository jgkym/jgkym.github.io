---
created: 2025-06-19 11:54:41
modified: 2025-06-19 12:17:30
tags:
  - backend
---
**Debouncing** is a programming technique that groups multiple rapid calls to a function into a single execution. Essentially, it ensures that a function is only called once after a specified period of inactivity, no matter how many times it was triggered within that period. This prevents the function from being called too frequently, which can improve performance and user experience.

You often see debouncing in action with features like **autocomplete** or **search suggestions**, such as those found in GitHub Copilot or Cursor's tab completion. When a user is typing, the application needs to decide when to offer suggestions without interrupting the user's flow or making too many requests. Instead of triggering a suggestion every time a key is pressed, a debouncing mechanism waits for a brief pause in typing. If the user continues to type within a defined time interval, the timer resets. Only when there's a break in typing that exceeds this interval does the application trigger the operation to generate and display suggestions. This ensures that suggestions are shown only when the user has likely finished a thought or a word, leading to a smoother and more efficient interaction.


### Reference
https://developer.mozilla.org/en-US/docs/Glossary/Debounce