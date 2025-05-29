---
created: 2025-05-29 05:37:25
modified: 2025-05-29 08:49:27
tags:
  - probability
---
> [!tldr] 
> It's uncommon for two random variables to be truly independent in real-world situations. However, the concept of conditional independence allows us to describe situations where two variables become independent give the knowledge of a third variable.

### Conditional Independence
$$
X \perp Y\ |\ Z \iff \mathbb{P}(X,Y|Z) = \mathbb{P}(X|Z) \mathbb{P}(Y|Z) 
$$

### The Butterfly Effect and Interconnectedness
- In reality, true independence between two distinct random variables is quite rare.
- Think of it like the "[butterfly effect](https://simple.wikipedia.org/wiki/Butterfly_effect)": a single random variable can indirectly influence many others, even if it's not directly connected to them, by affecting intermediate variables.

### What is Conditional Independence?
- This interconnectedness leads us to the concept of **conditional independence**.
- Even if two random variables might seem independent at first glance, their relationship can drastically change when we consider them under a specific condition.
- Conversely, two variables that appear dependent might actually become independent once we account for a third variable.


[@Murphy2022Probabilistic{39}]

### Reference