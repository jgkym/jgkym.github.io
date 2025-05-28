---
created: 2025-05-14 11:58:33
modified: 2025-05-28 01:51:34
tags: [alignment, reinforcement-learning]
---
> ***Definition 1.** We say that two reward functions $r(x,y)$ and $r'(x,y)$ are equivalent iff $r(x,y)−r'(x,y) = f(x)$ for some function $f$.* — @RafailovEtAl2024Direct, p. 5

According to the definition, two reward function $r_{1}$ and $r_{2}$, are considered **equivalent** if their difference depends *only* on the prompt $x$ and not on the response $y$. This difference is expressed as a function $f(x)$.

For example, if a given prompt $x$, there are five possible responses $y_{1},y_{2},\dots,y_{5}$, the difference between two equivalent reward functions $r_{1}$ and $r_{2}$, will be the same for all possible responses, as shown below:
$$
\begin{align}
r_{1}(x,y_{1})-r_{2}(x,y_{1})&=f(x) \\
r_{1}(x,y_{2})-r_{2}(x,y_{2})&=f(x) \\
\vdots \\
r_{1}(x,y_{5})-r_{2}(x,y_{5})&=f(x) \\
\end{align}
$$
This means that for the same prompt $x$, the difference between the values of the two reward functions will always remain a constant value, $f(x)$, regardless of which response is generated.

### See also
[[Understanding Lemma 1 in DPO]]  
[[Understanding Lemma 2 in DPO]]

### Reference